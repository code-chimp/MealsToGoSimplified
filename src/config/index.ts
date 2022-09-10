import { FirebaseOptions } from 'firebase/app';
import {
  FBASE_APIKEY,
  FBASE_APPID,
  FBASE_AUTHDOMAIN,
  FBASE_MESSAGINGSENDERID,
  FBASE_PROJECTID,
  FBASE_STORAGEBUCKET,
} from '@env';

export interface IConfig {
  firebaseConfig: FirebaseOptions;
}

const config = {
  firebaseConfig: {
    apiKey: FBASE_APIKEY,
    authDomain: FBASE_AUTHDOMAIN,
    projectId: FBASE_PROJECTID,
    storageBucket: FBASE_STORAGEBUCKET,
    messagingSenderId: FBASE_MESSAGINGSENDERID,
    appId: FBASE_APPID,
  },
};

export default config;
