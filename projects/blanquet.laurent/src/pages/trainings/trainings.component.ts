import {Component, inject, input} from '@angular/core';
import {globalStore} from '../../global.store';
import {ClarityModule, ClrAlertModule, ClrIconModule} from '@clr/angular';
import {TrainingComponent} from './components/training/training.component';

@Component({
  selector: 'app-trainings',
  imports: [
    ClarityModule,
    ClrAlertModule,
    ClrIconModule,
    TrainingComponent
  ],
  templateUrl: './trainings.component.html',
  styleUrl: './trainings.component.scss'
})
export class TrainingsComponent {
  $store = inject(globalStore);
}
