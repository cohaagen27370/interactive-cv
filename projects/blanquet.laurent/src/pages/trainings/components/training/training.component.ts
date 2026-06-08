import {Component, inject, input, ChangeDetectionStrategy} from '@angular/core';
import {globalStore} from '../../../../global.store';
import {Training} from '../../../../types';
import {ClarityModule} from '@clr/angular';

@Component({
  selector: 'app-training',
  imports: [
    ClarityModule
  ],
  templateUrl: './training.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './training.component.scss'
})
export class TrainingComponent {
  model = input.required<Training>();

  $store = inject(globalStore);
}
