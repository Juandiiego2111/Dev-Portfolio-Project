import { TestBed } from '@angular/core/testing';

import { PROJECTS } from '../../core/data/projects.data';
import { ProjectsService } from '../../core/services/projects.service';
import { ProjectsComponent } from './projects.component';

describe('ProjectsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsComponent],
    }).compileComponents();
  });

  it('should render five project cards', () => {
    const fixture = TestBed.createComponent(ProjectsComponent);
    fixture.detectChanges();
    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelectorAll('app-project-card')).toHaveLength(5);
  });

  it('should render the catalog data in the same order as the service', () => {
    const fixture = TestBed.createComponent(ProjectsComponent);
    const service = TestBed.inject(ProjectsService);
    fixture.detectChanges();
    const element = fixture.nativeElement as HTMLElement;

    const renderedNames = [...element.querySelectorAll('.project-card__title')].map((title) =>
      title.textContent?.trim(),
    );
    const expectedNames = service.projects().map((project) => project.name);

    expect(renderedNames).toEqual(expectedNames);
    expect(renderedNames).toEqual(PROJECTS.map((project) => project.name));
  });

  it('should render the section heading, counter and five card components', () => {
    const fixture = TestBed.createComponent(ProjectsComponent);
    fixture.detectChanges();
    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelector('#projects-title')?.textContent).toContain('Cinco proyectos');
    expect(element.querySelector('.projects__counter')?.textContent).toContain('5');
    expect(element.querySelectorAll('app-project-card')).toHaveLength(5);
  });
});
