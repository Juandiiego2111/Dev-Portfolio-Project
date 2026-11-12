import { TestBed } from '@angular/core/testing';

import type { Project } from '../../../core/models/project.model';
import { ProjectCardComponent } from './project-card.component';

const MOCK_PROJECT: Project = {
  id: 'demo-project',
  name: 'Proyecto de prueba',
  description: 'Una descripción breve para validar el renderizado de la tarjeta.',
  technologies: ['Angular', 'TypeScript', 'Vitest'],
  features: ['Primera característica', 'Segunda característica'],
  repoUrl: 'https://github.com/Juandiiego2111/proyecto-demo',
  demoUrl: 'https://juandiiego2111.github.io/proyecto-demo/',
};

describe('ProjectCardComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectCardComponent],
    }).compileComponents();
  });

  function createFixture() {
    const fixture = TestBed.createComponent(ProjectCardComponent);
    fixture.componentRef.setInput('project', MOCK_PROJECT);
    fixture.componentRef.setInput('position', 3);
    fixture.detectChanges();
    return fixture;
  }

  it('should render the project name, description and features', () => {
    const fixture = createFixture();
    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelector('.project-card__title')?.textContent).toContain(MOCK_PROJECT.name);
    expect(element.querySelector('.project-card__description')?.textContent).toContain(
      MOCK_PROJECT.description,
    );
    expect(element.querySelector('.project-card__features')?.textContent).toContain(
      'Primera característica',
    );
  });

  it('should render every technology', () => {
    const fixture = createFixture();
    const element = fixture.nativeElement as HTMLElement;
    const technologies = [...element.querySelectorAll('.project-card__tech-item')].map((item) =>
      item.textContent?.trim(),
    );

    expect(technologies).toEqual(MOCK_PROJECT.technologies);
  });

  it('should render the repository link with the correct URL and security attributes', () => {
    const fixture = createFixture();
    const element = fixture.nativeElement as HTMLElement;
    const links = [...element.querySelectorAll<HTMLAnchorElement>('a.project-card__action')];
    const repositoryLink = links.find((link) => link.textContent?.includes('Ver repositorio'));

    expect(repositoryLink).toBeDefined();
    expect(repositoryLink?.getAttribute('href')).toBe(MOCK_PROJECT.repoUrl);
    expect(repositoryLink?.getAttribute('target')).toBe('_blank');
    expect(repositoryLink?.getAttribute('rel')).toBe('noopener noreferrer');
  });

  it('should render the demo link with the correct URL and security attributes', () => {
    const fixture = createFixture();
    const element = fixture.nativeElement as HTMLElement;
    const links = [...element.querySelectorAll<HTMLAnchorElement>('a.project-card__action')];
    const demoLink = links.find((link) => link.textContent?.includes('Ver aplicación'));

    expect(demoLink).toBeDefined();
    expect(demoLink?.getAttribute('href')).toBe(MOCK_PROJECT.demoUrl);
    expect(demoLink?.getAttribute('target')).toBe('_blank');
    expect(demoLink?.getAttribute('rel')).toBe('noopener noreferrer');
  });

  it('should expose exactly two action buttons and the padded position', () => {
    const fixture = createFixture();
    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelectorAll('a.project-card__action')).toHaveLength(2);
    expect(element.querySelector('.project-card__index')?.textContent?.trim()).toBe('03');
  });
});
