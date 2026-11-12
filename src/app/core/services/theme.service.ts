import { computed, DestroyRef, DOCUMENT, inject, Injectable, signal } from '@angular/core';

export type Theme = 'light' | 'dark';
export type ThemePreference = Theme | 'system';

/** Debe coincidir con la clave usada por el script de `src/index.html`. */
const THEME_STORAGE_KEY = 'portfolio-theme';

/**
 * Administra el tema visual. Respeta `prefers-color-scheme` mientras el usuario
 * no elija un tema y conserva la elección explícita en `localStorage`.
 */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);

  private readonly preferenceSignal = signal<ThemePreference>('system');
  private readonly systemThemeSignal = signal<Theme>(this.getSystemTheme());

  readonly preference = this.preferenceSignal.asReadonly();
  readonly effectiveTheme = computed<Theme>(() => {
    const preference = this.preferenceSignal();
    return preference === 'system' ? this.systemThemeSignal() : preference;
  });

  constructor() {
    this.restorePreference();
    this.watchSystemTheme();
  }

  /** Alterna entre tema claro y oscuro y guarda la preferencia. */
  toggle(): void {
    const nextTheme: Theme = this.effectiveTheme() === 'dark' ? 'light' : 'dark';
    this.preferenceSignal.set(nextTheme);
    this.applyTheme(nextTheme);
    this.persistPreference(nextTheme);
  }

  private restorePreference(): void {
    const stored = this.readStoredPreference();

    if (stored === 'light' || stored === 'dark') {
      this.preferenceSignal.set(stored);
      this.applyTheme(stored);
      return;
    }

    // Sin atributo, el CSS sigue automáticamente `prefers-color-scheme`.
    this.document.documentElement.removeAttribute('data-theme');
  }

  private watchSystemTheme(): void {
    const mediaQuery = this.getColorSchemeQuery();
    if (!mediaQuery) {
      return;
    }

    const listener = (event: MediaQueryListEvent): void => {
      this.systemThemeSignal.set(event.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', listener);
    this.destroyRef.onDestroy(() => mediaQuery.removeEventListener('change', listener));
  }

  private getSystemTheme(): Theme {
    return this.getColorSchemeQuery()?.matches ? 'dark' : 'light';
  }

  private getColorSchemeQuery(): MediaQueryList | null {
    const view = this.document.defaultView;
    if (typeof view?.matchMedia !== 'function') {
      return null;
    }
    return view.matchMedia('(prefers-color-scheme: dark)');
  }

  private applyTheme(theme: Theme): void {
    this.document.documentElement.setAttribute('data-theme', theme);
  }

  private readStoredPreference(): string | null {
    try {
      return this.document.defaultView?.localStorage.getItem(THEME_STORAGE_KEY) ?? null;
    } catch {
      return null;
    }
  }

  private persistPreference(theme: Theme): void {
    try {
      this.document.defaultView?.localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // Almacenamiento no disponible (modo privado o políticas del navegador).
    }
  }
}
