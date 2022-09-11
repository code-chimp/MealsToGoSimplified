import ILocation from './ILocation';

interface IGeoLocationResponse {
  results: Array<ILocation>;
  status?: string;
}

export default IGeoLocationResponse;
