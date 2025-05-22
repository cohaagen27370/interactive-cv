import { Component, inject } from '@angular/core';
import { ClarityModule } from '@clr/angular';
import { ClarityIcons, exclamationCircleIcon } from '@cds/core/icon';
import { globalStore } from '../../global.store';
import { Experience } from '../../types';
import { ExperienceComponent } from './components/experience/experience.component';

ClarityIcons.addIcons(exclamationCircleIcon);

@Component({
  selector: 'page-experiences',
  imports: [ClarityModule, ExperienceComponent],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  $store = inject(globalStore);
}
