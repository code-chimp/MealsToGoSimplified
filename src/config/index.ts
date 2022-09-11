import { FirebaseOptions } from 'firebase/app';
import {
  CLOUD_FUNCTION_REGION,
  CLOUD_FUNCTION_SERVER,
  FBASE_APIKEY,
  FBASE_APPID,
  FBASE_AUTHDOMAIN,
  FBASE_MESSAGINGSENDERID,
  FBASE_PROJECTID,
  FBASE_STORAGEBUCKET,
} from '@env';

export interface IConfig {
  firebaseConfig: FirebaseOptions;
  cloudFunctionBaseUri: string;
}

const config: IConfig = {
  firebaseConfig: {
    apiKey: FBASE_APIKEY,
    authDomain: FBASE_AUTHDOMAIN,
    projectId: FBASE_PROJECTID,
    storageBucket: FBASE_STORAGEBUCKET,
    messagingSenderId: FBASE_MESSAGINGSENDERID,
    appId: FBASE_APPID,
  },
  cloudFunctionBaseUri: `${CLOUD_FUNCTION_SERVER}/${FBASE_PROJECTID}/${CLOUD_FUNCTION_REGION}`,
};

export default config;
