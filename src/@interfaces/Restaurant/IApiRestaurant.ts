interface IApiRestaurant {
  business_status?: string;
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
    viewport: {
      northeast: {
        lat: number;
        lng: number;
      };
      southwest: {
        lat: number;
        lng: number;
      };
    };
  };
  icon?: string;
  name: string;
  opening_hours?: {
    open_now?: boolean;
  };
  permanently_closed?: boolean;
  photos: Array<any>;
  place_id: string;
  plus_code?: any;
  price_level?: number;
  rating?: number;
  reference: string;
  scope?: string;
  types?: Array<string>;
  user_ratings_total?: number;
  vicinity: string;
}

export default IApiRestaurant;
