import { Injectable, signal } from '@angular/core';

import { PROFILE } from '../data/profile.data';
import type { Profile } from '../models/profile.model';

/** Expone la información del perfil mediante un signal de solo lectura. */
@Injectable({ providedIn: 'root' })
export class ProfileService {
  private readonly profileSignal = signal<Profile>(PROFILE).asReadonly();

  readonly profile = this.profileSignal;
}
