import {
  ApplicationConfig,
  importProvidersFrom,
  provideExperimentalZonelessChangeDetection,
  provideZoneChangeDetection
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { ClarityModule } from '@clr/angular';

import { routes } from './app.routes';
import {provideAnimations, provideNoopAnimations} from '@angular/platform-browser/animations';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    //provideExperimentalZonelessChangeDetection(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimations(),
    provideAnimationsAsync(),
    provideNoopAnimations()
    //importProvidersFrom(ClarityModule)
  ]
};
