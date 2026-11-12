import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';

import { ProfileService } from '../../../core/services/profile.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  private readonly profileService = inject(ProfileService);

  protected readonly profile = this.profileService.profile;
  protected readonly currentYear = new Date().getFullYear();
  protected readonly githubUrl = computed(
    () =>
      this.profile().socialLinks.find((link) => link.icon === 'github')?.url ??
      this.profile().socialLinks[0]?.url ??
      '#',
  );
}
