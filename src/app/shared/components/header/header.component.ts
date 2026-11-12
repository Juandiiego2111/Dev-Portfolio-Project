import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';

import { ProfileService } from '../../../core/services/profile.service';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:keydown.escape)': 'closeMenu()',
  },
})
export class HeaderComponent {
  private readonly profileService = inject(ProfileService);
  private readonly themeService = inject(ThemeService);

  protected readonly profile = this.profileService.profile;
  protected readonly effectiveTheme = this.themeService.effectiveTheme;
  protected readonly menuOpen = signal(false);

  protected readonly initials = computed(() => {
    return this.profile()
      .shortName.split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((word) => word.charAt(0))
      .join('')
      .toUpperCase();
  });

  protected readonly themeActionLabel = computed(() =>
    this.effectiveTheme() === 'dark' ? 'Activar tema claro' : 'Activar tema oscuro',
  );

  protected toggleMenu(): void {
    this.menuOpen.update((isOpen) => !isOpen);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  protected toggleTheme(): void {
    this.themeService.toggle();
  }
}
