import {
  ApplicationConfig, provideExperimentalZonelessChangeDetection,
  provideZoneChangeDetection
} from '@angular/core';
import {provideRouter, withHashLocation, withRouterConfig} from '@angular/router';

import { routes } from './app.routes';
import {provideAnimations, provideNoopAnimations} from '@angular/platform-browser/animations';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {DBConfig, provideIndexedDb} from 'ngx-indexed-db';
import {provideHttpClient, withFetch} from '@angular/common/http';

const dbConfig: DBConfig  = {
  name: 'CvBlanquetLaurent',
  version: 5,
  objectStoresMeta: [
    {
    store: 'presentation',
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
      { name: 'title', keypath: 'title', options: { unique: false } },
      { name: 'description', keypath: 'description', options: { unique: false } },
      { name: 'profil', keypath: 'profil', options: { unique: false } },
      { name: 'name', keypath: 'address.name', options: { unique: false } },
      { name: 'street', keypath: 'address.street', options: { unique: false } },
      { name: 'city', keypath: 'address.city', options: { unique: false } },
      { name: 'telephone', keypath: 'address.telephone', options: { unique: false } },
      { name: 'email', keypath: 'address.email', options: { unique: false } }
    ]
    },
    {
      store: 'version',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'number', keypath: 'number', options: { unique: false } },
        { name: 'date', keypath: 'date', options: { unique: false } },
      ]
    },
    {
      store: 'experiences',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'society.name', keypath: 'society.name', options: { unique: false } },
        { name: 'society.url', keypath: 'society.url', options: { unique: false } },
        { name: 'job', keypath: 'job', options: { unique: false } },
        { name: 'startYear', keypath: 'startYear', options: { unique: false } },
        { name: 'endYear', keypath: 'endYear', options: { unique: false } },
        { name: 'description', keypath: 'description', options: { unique: false } },
        { name: 'tags.label', keypath: 'tags.label', options: { unique: false } },
        { name: 'tags.tag', keypath: 'tags.tag', options: { unique: false } }
      ]
    },
    {
      store: 'skills',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'title', keypath: 'title', options: { unique: false } },
        { name: 'content.name', keypath: 'content.name', options: { unique: false } },
        { name: 'content.level', keypath: 'content.level', options: { unique: false } },
        { name: 'content.label', keypath: 'content.label', options: { unique: false } }
      ]
    },
    {
      store: 'trainings',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'title', keypath: 'title', options: { unique: false } },
        { name: 'period', keypath: 'period', options: { unique: false } },
        { name: 'spec', keypath: 'spec', options: { unique: false } }
      ]
    },
    {
      store: 'howtos',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'qualities', keypath: 'qualities', options: { unique: false } },
        { name: 'defaults', keypath: 'defaults', options: { unique: false } }
      ]
    }

  ]
};




export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    //provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withHashLocation(),
      withRouterConfig({ onSameUrlNavigation: 'reload' }),
    ),
    provideAnimations(),
    provideIndexedDb(dbConfig),
    provideHttpClient(withFetch())
  ]
};
