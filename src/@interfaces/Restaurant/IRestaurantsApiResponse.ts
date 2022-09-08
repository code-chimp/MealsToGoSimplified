import IApiRestaurant from './IApiRestaurant';

interface IRestaurantsApiResponse {
  html_attributions: Array<any>;
  next_page_token: string;
  results: Array<IApiRestaurant>;
  status: string;
}

export default IRestaurantsApiResponse;
