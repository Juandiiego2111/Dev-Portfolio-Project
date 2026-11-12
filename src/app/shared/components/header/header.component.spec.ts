import { TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
    }).compileComponents();
  });

  it('should render the navigation anchors', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const element = fixture.nativeElement as HTMLElement;
    const anchors = [...element.querySelectorAll<HTMLAnchorElement>('.nav a')].map((link) =>
      link.getAttribute('href'),
    );

    expect(anchors).toEqual(['#sobre-mi', '#habilidades', '#proyectos', '#contacto', '#contacto']);
  });

  it('should toggle the mobile menu state', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const element = fixture.nativeElement as HTMLElement;
    const button = element.querySelector<HTMLButtonElement>('.menu-button');
    const navigation = element.querySelector<HTMLElement>('.nav');

    expect(button?.getAttribute('aria-expanded')).toBe('false');
    expect(navigation?.classList.contains('nav--open')).toBe(false);

    button?.click();
    fixture.detectChanges();

    expect(button?.getAttribute('aria-expanded')).toBe('true');
    expect(navigation?.classList.contains('nav--open')).toBe(true);

    button?.click();
    fixture.detectChanges();

    expect(button?.getAttribute('aria-expanded')).toBe('false');
    expect(navigation?.classList.contains('nav--open')).toBe(false);
  });
});
