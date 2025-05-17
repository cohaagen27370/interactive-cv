import { Component } from '@angular/core';
import {ClarityModule} from '@clr/angular';
import {
  ClarityIcons,
  exclamationCircleIcon
} from '@cds/core/icon';

ClarityIcons.addIcons(exclamationCircleIcon);

@Component({
  selector: 'page-experiences',
  imports: [ClarityModule],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {

  navigateTo(link:string) {
    window.open(link, '_blank');
  }

}
