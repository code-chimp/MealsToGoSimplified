import IRestaurantDto from './IRestaurantDto';

interface IRestaurantsResponse {
  html_attributions: Array<any>;
  next_page_token: string;
  results: Array<IRestaurantDto>;
  status: string;
}

export default IRestaurantsResponse;
