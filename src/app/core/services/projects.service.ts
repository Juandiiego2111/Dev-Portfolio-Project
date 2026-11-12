import { computed, Injectable, signal } from '@angular/core';

import { PROJECTS } from '../data/projects.data';
import type { Project } from '../models/project.model';

/**
 * Fuente única de verdad para el catálogo de proyectos.
 * Expone la colección mediante un signal de solo lectura.
 */
@Injectable({ providedIn: 'root' })
export class ProjectsService {
  private readonly projectList = signal<readonly Project[]>(PROJECTS).asReadonly();

  /** Lista reactiva de proyectos disponible para los componentes. */
  readonly projects = this.projectList;

  /** Cantidad total de proyectos del catálogo. */
  readonly total = computed(() => this.projectList().length);

  /** Busca un proyecto por su identificador estable. */
  findById(id: string): Project | undefined {
    return this.projectList().find((project) => project.id === id);
  }
}
