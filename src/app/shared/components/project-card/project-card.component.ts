import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

import type { Project } from '../../../core/models/project.model';

const IGNORED_INITIAL_WORDS = new Set([
  'de',
  'del',
  'el',
  'la',
  'las',
  'los',
  'y',
  'e',
  'en',
  'para',
  'por',
]);

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCardComponent {
  readonly project = input.required<Project>();
  readonly position = input<number>(1);

  protected readonly paddedPosition = computed(() => String(this.position()).padStart(2, '0'));

  protected readonly tone = computed(() => ((this.position() - 1) % 5) + 1);

  protected readonly initials = computed(() => {
    const meaningfulWords = this.project()
      .name.split(/\s+/)
      .filter((word) => word.length > 0 && !IGNORED_INITIAL_WORDS.has(word.toLowerCase()));

    const initials = meaningfulWords
      .slice(0, 2)
      .map((word) => word.charAt(0))
      .join('')
      .toUpperCase();

    return initials || this.project().name.slice(0, 2).toUpperCase();
  });
}
