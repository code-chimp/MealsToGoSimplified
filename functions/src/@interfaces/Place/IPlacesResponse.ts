import IPlace from './IPlace';

interface IPlacesResponse {
  html_attributions: Array<any>;
  next_page_token: string;
  results: Array<IPlace>;
  status: string;
}

export default IPlacesResponse;
