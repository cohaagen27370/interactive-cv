import {Component, inject} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {ClarityModule} from '@clr/angular';
import {
  announcementIcon,
  certificateIcon,
  ClarityIcons,
  formIcon,
  organizationIcon,
  userIcon,
  cpuIcon,
  briefcaseIcon
} from '@cds/core/icon';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  group
} from '@angular/animations';
import {CommonModule} from '@angular/common';
import {globalStore} from '../global.store';

ClarityIcons.addIcons(formIcon, userIcon, certificateIcon, organizationIcon,briefcaseIcon, announcementIcon, cpuIcon);

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule,
    ClarityModule, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [ // S'applique à toutes les transitions de route
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
          })
        ], { optional: true }),
        query(':enter', [
          style({ opacity: 0 }) // Commence avec une opacité de 0
        ], { optional: true }),
        group([
          query(':leave', [
            animate('300ms ease-out', style({ opacity: 0 })) // L'ancienne page disparaît rapidement
          ], { optional: true }),
          query(':enter', [
            animate('500ms ease-in', style({ opacity: 1 })) // La nouvelle page apparaît progressivement
          ], { optional: true })
        ])
      ])
    ])
  ]
})
export class AppComponent {

  $store = inject(globalStore);
  nowYear: number = new Date().getFullYear();

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
