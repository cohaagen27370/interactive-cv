import {map, of, Observable, lastValueFrom} from "rxjs";

import versionDatas from '../../public/datas/version.data.json';
import presentationDatas from '../../public/datas/presentation.data.json';
import {inject} from '@angular/core';
import {DbService, Version} from './db.service';

export function initializeAppFactory(): () => Observable<any> {

  const db = inject(DbService);

  let isInitialized = false;

  return () => {
    if (isInitialized) {
      return of(true);
    }

    let versionsTab : Version[];

    lastValueFrom(db.getAllVersions()).then(
      (versions) => {
        versionsTab = versions;
        console.log(versionsTab);
      }
    );

    return of(true);
  };
}
