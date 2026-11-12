import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { ProjectsService } from '../../core/services/projects.service';
import { ProjectCardComponent } from '../../shared/components/project-card/project-card.component';

@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  private readonly projectsService = inject(ProjectsService);

  protected readonly projects = this.projectsService.projects;
  protected readonly total = this.projectsService.total;
}
