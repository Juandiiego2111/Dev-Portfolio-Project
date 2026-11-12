import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';

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

  /**
   * Mantiene unidos los dos apellidos con un espacio no separable para que,
   * si el nombre no cabe, el apellido completo baje a la siguiente línea.
   */
  protected readonly heroName = computed(() => {
    const name = this.profile().name.trim();
    const lastSpace = name.lastIndexOf(' ');

    if (lastSpace === -1) {
      return name;
    }

    return `${name.slice(0, lastSpace)}\u00a0${name.slice(lastSpace + 1)}`;
  });
}
