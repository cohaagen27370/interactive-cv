import {
  patchState,
  signalStore,
  withHooks,
  withState,
} from '@ngrx/signals';
import * as presentationJson from '../public/datas/presentation.data.json';
import * as experiencesJson from '../public/datas/experiences.data.json';
import * as skillsJson from '../public/datas/skills.data.json';
import * as trainingsJson from '../public/datas/trainings.data.json';
import * as howToJson from '../public/datas/howto.data.json';
import {Experience, HowTo, Presentation, Skill, Training} from './types';
import {inject} from '@angular/core';
import {DbService} from './services/db.service';

export interface State {
  presentation: Presentation | undefined;
  experiences: Array<Experience>;
  skills: Array<Skill>;
  trainings: Array<Training>;
  howto: HowTo;
  isloading: boolean;
}

export const StateInitial: State = {
  presentation: undefined,
  experiences: [],
  skills: [],
  trainings: [],
  howto: { qualities: [], defaults: [] },
  isloading: false,
};

export const globalStore = signalStore(
  { providedIn: 'root' },
  withState(StateInitial),
  //withMethods((store) => ({})),
  withHooks((store, dbService = inject(DbService)) => ({
    async onInit() {
      patchState(store, { isloading: true });

      const presentations = await dbService.getAllPresentations();
      if (presentations && presentations.length > 0)
      {
        patchState(store, {
          presentation: presentations[0]
        });
      }
      else {
        await dbService.addPresentation(presentationJson as Presentation);
        patchState(store, {
          presentation: presentationJson as Presentation
        });
      }

      const howtos = await dbService.getAllHowtos();
      console.log(howtos);
      if (howtos && howtos.length > 0)
      {
        patchState(store, {
          howto : howtos[0]
        });
      }
      else {
        await dbService.addHowto(howToJson as HowTo);
        patchState(store, {
          howto: howToJson as HowTo
        });
      }


      const experiences = await dbService.getAllExperiences();
      if (experiences && experiences.length > 0)
      {
        patchState(store, {
          experiences
        });
      }
      else {
        await dbService.addExperiences(experiencesJson.experiences as Array<Experience>);
        patchState(store, {
          experiences: experiencesJson.experiences as Array<Experience>
        });
      }

      const skills = await dbService.getAllSkills();
      if (skills && skills.length > 0)
      {
        patchState(store, {
          skills
        });
      }
      else {
        await dbService.addSkills(skillsJson.skills as Array<Skill>);
        patchState(store, {
          skills: skillsJson.skills as Array<Skill>
        });
      }

      const trainings = await dbService.getAllTrainings();
      if (trainings && trainings.length > 0)
      {
        patchState(store, {
          trainings
        });
      }
      else {
        await dbService.addTrainings(trainingsJson.trainings as Array<Training>);
        patchState(store, {
          trainings : trainingsJson.trainings as Array<Training>
        });
      }

      patchState(store, { isloading: true });
    },
  }))
);
