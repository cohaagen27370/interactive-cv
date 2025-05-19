import { Injectable, inject } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Observable } from 'rxjs';


export interface Address {
  name: string;
  street: string;
  city: string;
  email: string;
}

export interface Presentation {
  id: number;
  title: string;
  description: string;
  profil: string;
  address: Address;
}

export interface Version {
  id: number;
  modificationDate: Date;
  version?: string;
}

@Injectable({
  providedIn: 'root',
})
export class DbService {
  private dbService = inject(NgxIndexedDBService);

  addVersion(version: Version): Observable<Version> {
    return this.dbService.add('version', version);
  }
  getVersion(id: number): Observable<Version | undefined> {
    return this.dbService.getByKey('version', id);
  }
  getAllVersions(): Observable<Version[]> {
    return this.dbService.getAll('version');
  }
  updateVersion(version: Version): Observable<any> {
    return this.dbService.update('version', version);
  }


  addPresentation(presentation: Presentation): Observable<Presentation> {
    return this.dbService.add('presentation', presentation);
  }
  getAllPresentations(): Observable<Presentation[]> {
    return this.dbService.getAll('presentation');
  }
  updatePresentation(presentation: Presentation): Observable<any> {
    return this.dbService.update('presentation', presentation);
  }



}
