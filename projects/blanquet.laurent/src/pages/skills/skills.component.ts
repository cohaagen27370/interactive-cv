import { Component } from '@angular/core';
import {ClarityModule} from '@clr/angular';
import {
  ClarityIcons,
  exclamationCircleIcon
} from '@cds/core/icon';

ClarityIcons.addIcons(exclamationCircleIcon);

@Component({
  selector: 'page-skills',
  imports: [ClarityModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent{

}
