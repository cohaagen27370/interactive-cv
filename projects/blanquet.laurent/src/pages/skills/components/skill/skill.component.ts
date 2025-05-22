import { Component, input } from '@angular/core';
import { ClarityModule } from '@clr/angular';
import { Skill } from '../../../../types';

@Component({
  selector: 'app-skill',
  imports: [ClarityModule],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss',
})
export class SkillComponent {
  model = input.required<Skill>();

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
}
