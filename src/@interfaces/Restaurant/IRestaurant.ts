import ICoords from '../Geo/ICoords';

interface IRestaurant {
  businessStatus?: string;
  geometry: {
    location: ICoords;
    viewport: {
      northeast: ICoords;
      southwest: ICoords;
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
