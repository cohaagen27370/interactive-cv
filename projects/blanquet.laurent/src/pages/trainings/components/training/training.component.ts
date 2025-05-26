import {Component, inject, input} from '@angular/core';
import {globalStore} from '../../../../global.store';
import {Training} from '../../../../types';
import {ClarityModule} from '@clr/angular';

@Component({
  selector: 'app-training',
  imports: [
    ClarityModule
  ],
  templateUrl: './training.component.html',
  styleUrl: './training.component.scss'
})
export class TrainingComponent {
  model = input.required<Training>();

  $store = inject(globalStore);
}
