import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { ProfileService } from '../../core/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent {
  private readonly profileService = inject(ProfileService);

  protected readonly profile = this.profileService.profile;
}
