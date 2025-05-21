import { Injectable, inject } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Observable, lastValueFrom } from 'rxjs';


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

  addVersion(version: Version) {
    return lastValueFrom(this.dbService.add('version', version));
  }
  clearVersions() {
    return lastValueFrom(this.dbService.clear('version'));
  }
  getAllVersions() {
    return lastValueFrom(this.dbService.getAll<Version>('version'));
  }


  addPresentation(presentation: Presentation) {
    return lastValueFrom(this.dbService.add('presentation', presentation));
  }
  clearPresentation() {
    return lastValueFrom(this.dbService.clear('presentation'));
  }
  getAllPresentations() {
    return lastValueFrom(this.dbService.getAll<Presentation>('presentation'));
  }






}
