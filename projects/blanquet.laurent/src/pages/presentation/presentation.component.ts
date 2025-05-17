import {Component, OnInit} from '@angular/core';
import { differenceInYears } from 'date-fns';

@Component({
  selector: 'page-presentation',
  imports: [],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.scss'
})
export class PresentationComponent implements OnInit{

    age:number = 44;

    ngOnInit() {
      const now = new Date();
      this.age = differenceInYears(now, new Date(1980,7,11));
    }

}
