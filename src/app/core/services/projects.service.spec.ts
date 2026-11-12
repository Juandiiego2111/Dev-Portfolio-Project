import { TestBed } from '@angular/core/testing';

import { PROJECTS } from '../data/projects.data';
import { ProjectsService } from './projects.service';

describe('ProjectsService', () => {
  let service: ProjectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectsService);
  });

  it('should expose the five catalog projects', () => {
    expect(service.projects()).toHaveLength(5);
    expect(service.total()).toBe(5);
  });

  it('should keep unique ids and complete information', () => {
    const ids = service.projects().map((project) => project.id);

    expect(new Set(ids).size).toBe(service.projects().length);

    for (const project of service.projects()) {
      expect(project.name.trim()).not.toBe('');
      expect(project.description.trim()).not.toBe('');
      expect(project.technologies.length).toBeGreaterThan(0);
      expect(project.features.length).toBeGreaterThan(0);
      expect(project.repoUrl).toMatch(/^https:\/\/github\.com\/Juandiiego2111\/[A-Za-z0-9-]+$/);
      expect(project.demoUrl).toMatch(/^https:\/\/juandiiego2111\.github\.io\/[A-Za-z0-9-]+\/$/);
    }
  });

  it('should expose this portfolio as the first project', () => {
    const portfolio = PROJECTS[0];

    expect(portfolio?.repoUrl).toBe('https://github.com/Juandiiego2111/Dev-Portfolio-Project');
    expect(portfolio?.demoUrl).toBe('https://juandiiego2111.github.io/Dev-Portfolio-Project/');
  });

  it('should find a project by id', () => {
    expect(service.findById('dev-portfolio')?.name).toBe('Portafolio Dev');
    expect(service.findById('does-not-exist')).toBeUndefined();
  });
});
