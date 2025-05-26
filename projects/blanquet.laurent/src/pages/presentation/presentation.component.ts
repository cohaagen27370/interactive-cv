import {Component, inject, OnInit} from '@angular/core';
import { differenceInYears } from 'date-fns';
import {globalStore} from '../../global.store';
import {MapComponent} from './component/map/map.component';

@Component({
  selector: 'page-presentation',
  imports: [MapComponent],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.scss'
})
export class PresentationComponent{

    $store = inject(globalStore);

    age:string = differenceInYears(new Date(), new Date(1980,7,11)).toString();
    anneesExperience: string = differenceInYears(new Date(), new Date(2001,7,1)).toString();

}
