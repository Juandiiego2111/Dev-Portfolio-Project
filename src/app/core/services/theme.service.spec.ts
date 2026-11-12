import { TestBed } from '@angular/core/testing';

import { ThemeService } from './theme.service';

const THEME_KEY = 'portfolio-theme';

describe('ThemeService', () => {
  let service: ThemeService;

  beforeEach(() => {
    localStorage.removeItem(THEME_KEY);
    document.documentElement.removeAttribute('data-theme');
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeService);
  });

  afterEach(() => {
    localStorage.removeItem(THEME_KEY);
    document.documentElement.removeAttribute('data-theme');
  });

  it('should toggle the effective theme and apply it to the document', () => {
    expect(service.effectiveTheme()).toBe('light');

    service.toggle();

    expect(service.effectiveTheme()).toBe('dark');
    expect(service.preference()).toBe('dark');
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
    expect(localStorage.getItem(THEME_KEY)).toBe('dark');

    service.toggle();

    expect(service.effectiveTheme()).toBe('light');
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
    expect(localStorage.getItem(THEME_KEY)).toBe('light');
  });

  it('should restore a stored theme preference', () => {
    localStorage.setItem(THEME_KEY, 'dark');
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({});

    const restoredService = TestBed.inject(ThemeService);

    expect(restoredService.preference()).toBe('dark');
    expect(restoredService.effectiveTheme()).toBe('dark');
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
  });
});
