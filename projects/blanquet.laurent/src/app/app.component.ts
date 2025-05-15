import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {ClarityModule} from '@clr/angular';
import {ClarityIcons, cogIcon, formIcon} from '@cds/core/icon';

ClarityIcons.addIcons(formIcon, cogIcon);

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    ClarityModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  protected readonly RouterLink = RouterLink;
}
