import {Component, inject, ChangeDetectionStrategy} from '@angular/core';
import {globalStore} from '../../global.store';
import {ClarityModule} from '@clr/angular';

@Component({
  selector: 'page-being',
  imports: [ClarityModule],
  templateUrl: './being.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './being.component.scss'
})
export class BeingComponent {
  $store = inject(globalStore);

  maxLength: number[] = Array.from({ length: 20 }, (_, i) => i);

}
