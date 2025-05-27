import {
  patchState,
  signalStore,
  withHooks,
  withState,
} from '@ngrx/signals';
import {Experience, HowTo, Presentation, Skill, Training, Version} from './types';
import {inject} from '@angular/core';
import {DbService} from './services/db.service';

export interface State {
  presentation: Presentation | undefined;
  experiences: Array<Experience>;
  skills: Array<Skill>;
  trainings: Array<Training>;
  howto: HowTo;
  dataUrl: string;
  version: Version;
  isloading: boolean;
}

export const StateInitial: State = {
  presentation: undefined,
  experiences: [],
  skills: [],
  trainings: [],
  howto: { qualities: [], defaults: [] },
  dataUrl: 'https://cohaagen.proxydns.com/services/datasCV/',
  version: { version: 0, date: '', id: 0 },
  isloading: false,
};

export const globalStore = signalStore(
  { providedIn: 'root' },
  withState(StateInitial),
  withHooks((store, dbService = inject(DbService)) => ({
    async onInit() {
      patchState(store, { isloading: true });

      const versions = await dbService.getAllVersions();
      const remoteVersion = await (await fetch(`${store.dataUrl()}version.data.json`)).json() as Version;

      if (versions && versions.length > 0)
      {
        if (versions[0].version != remoteVersion.version)
        {
          remoteVersion.id = versions[0].id;

          await dbService.clearPresentation();
          await dbService.clearHowto();
          await dbService.clearExperiences();
          await dbService.clearSkills();
          await dbService.clearTrainings();
          await dbService.updateVersion(remoteVersion);

          patchState(store, {
            version: remoteVersion
          });
        }
        else {
          patchState(store, {
            version: versions[0]
          });
        }

      }
      else {
        await dbService.addVersion(remoteVersion);
        patchState(store, {
          version: remoteVersion
        });
      }

      const presentations = await dbService.getAllPresentations();
      if (presentations && presentations.length > 0)
      {
        patchState(store, {
          presentation: presentations[0]
        });
      }
      else {
        const presentationJson = await (await fetch(`${store.dataUrl()}presentation.data.json`)).json() as Presentation;
        await dbService.addPresentation(presentationJson);
        patchState(store, {
          presentation: presentationJson
        });
      }

      const howtos = await dbService.getAllHowtos();
      if (howtos && howtos.length > 0)
      {
        patchState(store, {
          howto : howtos[0]
        });
      }
      else {
        const howToJson = await (await fetch(`${store.dataUrl()}howto.data.json`)).json() as HowTo;
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
        const experiencesJson = await (await fetch(`${store.dataUrl()}experiences.data.json`)).json();
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
        const skillsJson = await (await fetch(`${store.dataUrl()}skills.data.json`)).json();
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
        const trainingsJson = await (await fetch(`${store.dataUrl()}trainings.data.json`)).json();
        await dbService.addTrainings(trainingsJson.trainings as Array<Training>);
        patchState(store, {
          trainings : trainingsJson.trainings as Array<Training>
        });
      }

      patchState(store, { isloading: true });
    },
  }))
);
