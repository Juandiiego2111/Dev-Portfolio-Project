import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { ProfileService } from './core/services/profile.service';
import { ProfileComponent } from './features/profile/profile.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, ProfileComponent, ProjectsComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  private readonly titleService = inject(Title);
  private readonly metaService = inject(Meta);
  private readonly profile = inject(ProfileService).profile;

  constructor() {
    const profile = this.profile();

    this.titleService.setTitle(`${profile.name} | Portafolio profesional`);
    this.metaService.updateTag({
      name: 'description',
      content:
        `Portafolio profesional de ${profile.name}, ${profile.role.toLowerCase()} en ` +
        `${profile.institution}. Proyectos de desarrollo web, arquitectura de software y CI/CD.`,
    });
    this.metaService.updateTag({ name: 'author', content: profile.name });
  }
}
