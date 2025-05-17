import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {ClarityModule} from '@clr/angular';
import {
  announcementIcon,
  briefcaseIcon,
  ClarityIcons,
  formIcon,
  organizationIcon,
  userIcon
} from '@cds/core/icon';

ClarityIcons.addIcons(formIcon, userIcon, briefcaseIcon, organizationIcon, announcementIcon);

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    ClarityModule, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  protected readonly RouterLink = RouterLink;
}
