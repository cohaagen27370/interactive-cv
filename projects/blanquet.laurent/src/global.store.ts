import {
  patchState,
  signalStore,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import * as presentationJson  from '../public/datas/presentation.data.json';
import * as experiencesJson  from '../public/datas/experiences.data.json';

export interface Presentation {
  title: string
  description : string
  profil : string
  address : {
    name : string
    street: string
    city : string
    telephone : string
    email: string
  }
}

export interface Experience {
  society: {
    name:string,
    url:string
  },
  job: string
  startYear:number,
  endYear? :number,
  description: string,
  tags: Array<string>
}

export interface State {
  presentation: Presentation | undefined;
  experiences: Array<Experience>;
  isloading: boolean;
}

export const StateInitial: State = {
  presentation : undefined,
  experiences : [],
  isloading: false
};

export const globalStore = signalStore(
  { providedIn: 'root' },
  withState(StateInitial),
  withMethods((store) => ({

  })),
  withHooks((store) => ({
    onInit() {
      patchState( store, { isloading: true });
      patchState( store, { presentation : presentationJson as Presentation, experiences : experiencesJson.experiences as Array<Experience>});
      patchState( store, { isloading: true });
    }
  }))


);
