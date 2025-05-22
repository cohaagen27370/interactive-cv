import { Component, inject, input } from '@angular/core';
import { ClarityModule } from '@clr/angular';
import { NgClass } from '@angular/common';
import { Experience, Skill } from '../../../../types';
import { globalStore } from '../../../../global.store';

@Component({
  imports: [ClarityModule, NgClass],
  selector: 'app-experience',
  styleUrl: './experience.component.scss',
  templateUrl: './experience.component.html',
})
export class ExperienceComponent {
  model = input.required<Experience>();

  $store = inject(globalStore);

  nowYear: number = new Date().getFullYear();

  getTagInfo(key: string) {
    const skills = this.$store.skills();

    for (var skill of skills) {
      const foundContent = skill.content.find((x) => x.name == key);

      if (foundContent) return foundContent;
    }

    return undefined;
  }

  getColor(level: number) {
    switch (level) {
      case 100:
        return 'success';
      case 80:
        return 'default';
      case 50:
        return 'warning';
      case 10:
        return 'danger';
    }

    return '';
  }

  navigateTo(link: string) {
    window.open(link, '_blank');
  }
}
