import { TestBed } from '@angular/core/testing';

import { PROFILE } from '../../core/data/profile.data';
import { ProfileComponent } from './profile.component';

function normalizeWhitespace(value: string | null | undefined): string {
  return (value ?? '').replace(/\s+/g, ' ').trim();
}

describe('ProfileComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileComponent],
    }).compileComponents();
  });

  it('should render the profile identity from the data source', () => {
    const fixture = TestBed.createComponent(ProfileComponent);
    fixture.detectChanges();
    const element = fixture.nativeElement as HTMLElement;
    const heading = normalizeWhitespace(element.querySelector('h1')?.textContent);

    expect(heading).toContain('Hola, soy');
    expect(heading).toContain(PROFILE.name);
    expect(element.textContent).toContain(PROFILE.institution);
    expect(element.querySelector('.avatar-card__image')?.getAttribute('alt')).toBe(
      PROFILE.avatarAlt,
    );
  });

  it('should keep both surnames together for a clean line break', () => {
    const fixture = TestBed.createComponent(ProfileComponent);
    fixture.detectChanges();
    const element = fixture.nativeElement as HTMLElement;
    const [firstSurname, secondSurname] = PROFILE.name.split(' ').slice(-2);

    expect(element.querySelector('h1')?.textContent).toContain(
      `${firstSurname}\u00a0${secondSurname}`,
    );
  });

  it('should render one progress bar per language and every technology chip', () => {
    const fixture = TestBed.createComponent(ProfileComponent);
    fixture.detectChanges();
    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelectorAll('[role="progressbar"]')).toHaveLength(PROFILE.languages.length);
    expect(element.querySelectorAll('.chip')).toHaveLength(PROFILE.technologies.length);
  });
});
