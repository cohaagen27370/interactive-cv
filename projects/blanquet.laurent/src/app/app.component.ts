import { Component, inject } from "@angular/core";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { ClarityModule } from "@clr/angular";
import {
  announcementIcon,
  certificateIcon,
  ClarityIcons,
  formIcon,
  organizationIcon,
  userIcon,
  cpuIcon,
  briefcaseIcon,
} from "@cds/core/icon";

import { globalStore } from "../global.store";

ClarityIcons.addIcons(
  formIcon,
  userIcon,
  certificateIcon,
  organizationIcon,
  briefcaseIcon,
  announcementIcon,
  cpuIcon,
);

@Component({
  selector: "app-root",
  imports: [
    RouterOutlet,
    ClarityModule,
    RouterLink,
    RouterLinkActive
],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss"
})
export class AppComponent {
  $store = inject(globalStore);
  nowYear: number = new Date().getFullYear();

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData["animation"]
    );
  }
}
