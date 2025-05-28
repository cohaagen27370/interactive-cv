import { Component, inject, input } from '@angular/core';
import { ClarityModule } from '@clr/angular';
import { Experience, Skill } from '../../../../types';
import { globalStore } from '../../../../global.store';
import {TagComponent} from '../tag/tag.component';

@Component({
  imports: [ClarityModule, TagComponent],
  selector: 'app-experience',
  styleUrl: './experience.component.scss',
  templateUrl: './experience.component.html',
})
export class ExperienceComponent {
  model = input.required<Experience>();

  $store = inject(globalStore);

  nowYear: number = new Date().getFullYear();

  navigateTo(link: string) {
    window.open(link, '_blank');
  }
}
