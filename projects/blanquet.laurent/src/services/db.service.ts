import { Injectable, inject } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { lastValueFrom } from 'rxjs';
import {Experience, HowTo, Presentation, Skill, Training} from '../types';

@Injectable({
  providedIn: 'root',
})
export class DbService {
  private dbService = inject(NgxIndexedDBService);

  // addVersion(version: Version) {
  //   return lastValueFrom(this.dbService.add('version', version));
  // }
  // clearVersions() {
  //   return lastValueFrom(this.dbService.clear('version'));
  // }
  // getAllVersions() {
  //   return lastValueFrom(this.dbService.getAll<Version>('version'));
  // }
  //

  addPresentation(presentation: Presentation) {
    return lastValueFrom(this.dbService.add('presentation', presentation));
  }
  clearPresentation() {
    return lastValueFrom(this.dbService.clear('presentation'));
  }
  getAllPresentations() {
    return lastValueFrom(this.dbService.getAll<Presentation>('presentation'));
  }

  addExperiences(experiences: Array<Experience>) {
    return lastValueFrom(this.dbService.bulkAdd('experiences', experiences));
  }
  clearExperiences() {
    return lastValueFrom(this.dbService.clear('experiences'));
  }
  getAllExperiences() {
    return lastValueFrom(this.dbService.getAll<Experience>('experiences'));
  }

  addSkills(skills: Array<Skill>) {
    return lastValueFrom(this.dbService.bulkAdd('skills', skills));
  }
  clearSkills() {
    return lastValueFrom(this.dbService.clear('skills'));
  }
  getAllSkills() {
    return lastValueFrom(this.dbService.getAll<Skill>('skills'));
  }

  addTrainings(training: Array<Training>) {
    return lastValueFrom(this.dbService.bulkAdd('trainings', training));
  }
  clearTrainings() {
    return lastValueFrom(this.dbService.clear('trainings'));
  }
  getAllTrainings() {
    return lastValueFrom(this.dbService.getAll<Training>('trainings'));
  }

  addHowto(howto: HowTo) {
    return lastValueFrom(this.dbService.add('howtos', howto));
  }
  clearHowto() {
    return lastValueFrom(this.dbService.clear('howtos'));
  }
  getAllHowtos() {
    return lastValueFrom(this.dbService.getAll<HowTo>('howtos'));
  }

}
