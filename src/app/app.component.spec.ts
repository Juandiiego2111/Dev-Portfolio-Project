import { TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { PROFILE } from './core/data/profile.data';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the application shell', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the header, main content and footer', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelector('app-header')).not.toBeNull();
    expect(element.querySelector('main#main-content')).not.toBeNull();
    expect(element.querySelector('app-profile')).not.toBeNull();
    expect(element.querySelector('app-projects')).not.toBeNull();
    expect(element.querySelector('app-footer')).not.toBeNull();
  });

  it('should render the full profile name in the main heading', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const element = fixture.nativeElement as HTMLElement;
    const heading = element.querySelector('h1')?.textContent?.replace(/\s+/g, ' ').trim();

    expect(heading).toContain(PROFILE.name);
  });

  it('should render the five project cards', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelectorAll('app-project-card')).toHaveLength(5);
  });

  it('should update the document title from the profile data', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    expect(document.title).toBe(`${PROFILE.name} | Portafolio`);
  });
});
