import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering() // Injecte les outils nécessaires au SSG
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
