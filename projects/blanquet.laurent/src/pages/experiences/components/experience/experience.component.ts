import {Component, input} from '@angular/core';
import {ClarityModule} from '@clr/angular';
import {Experience} from '../../../../global.store';
import {NgClass} from '@angular/common';

@Component({
  imports: [ClarityModule, NgClass],
  selector: 'app-experience',
  styleUrl: './experience.component.scss',
  templateUrl: './experience.component.html'
})
export class ExperienceComponent {

  model = input.required<Experience>();

  nowYear: number = new Date().getFullYear();

  navigateTo(link:string) {
    window.open(link, '_blank');
  }

}
