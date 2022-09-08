interface IRestaurant {
  businessStatus?: string;
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
  isClosedTemporarily: boolean;
  isOpenNow: boolean;
  name: string;
  openingHours?: {
    openNow?: boolean;
  };
  permanentlyClosed?: boolean;
  photos: Array<any>;
  placeId: string;
  plusCode?: any;
  priceLevel?: number;
  rating?: number;
  reference: string;
  scope?: string;
  types?: Array<string>;
  userRatingsTotal?: number;
  vicinity: string;
}

export default IRestaurant;