import {
  patchState,
  signalStore,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import * as presentationJson from '../public/datas/presentation.data.json';
import * as experiencesJson from '../public/datas/experiences.data.json';
import * as skillsJson from '../public/datas/skills.data.json';
import { Experience, Presentation, Skill } from './types';

export interface State {
  presentation: Presentation | undefined;
  experiences: Array<Experience>;
  skills: Array<Skill>;
  isloading: boolean;
}

export const StateInitial: State = {
  presentation: undefined,
  experiences: [],
  skills: [],
  isloading: false,
};

export const globalStore = signalStore(
  { providedIn: 'root' },
  withState(StateInitial),
  //withMethods((store) => ({})),
  withHooks((store) => ({
    onInit() {
      patchState(store, { isloading: true });
      patchState(store, {
        presentation: presentationJson as Presentation,
        experiences: experiencesJson.experiences as Array<Experience>,
        skills: skillsJson.skills as Array<Skill>,
      });
      patchState(store, { isloading: true });
    },
  }))
);
