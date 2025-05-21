import {Component, inject, OnInit} from '@angular/core';
import { differenceInYears } from 'date-fns';
import {globalStore} from '../../global.store';

@Component({
  selector: 'page-presentation',
  imports: [],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.scss'
})
export class PresentationComponent{

    $store = inject(globalStore);

    age:string = differenceInYears(new Date(), new Date(1980,7,11)).toString();

}
