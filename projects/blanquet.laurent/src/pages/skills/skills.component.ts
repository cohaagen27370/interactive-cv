import { Component, inject } from '@angular/core';
import { ClarityModule } from '@clr/angular';
import { ClarityIcons, exclamationCircleIcon } from '@cds/core/icon';
import { globalStore } from '../../global.store';
import { SkillComponent } from './components/skill/skill.component';

ClarityIcons.addIcons(exclamationCircleIcon);

@Component({
  selector: 'page-skills',
  imports: [ClarityModule, SkillComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  $store = inject(globalStore);
}
