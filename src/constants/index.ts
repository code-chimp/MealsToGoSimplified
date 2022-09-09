/* NOTE: This is the place for all magic strings and numbers */

import IMapCoords from '../@interfaces/Geo/IMapCoords';

export const DEFAULT_LOCATION: IMapCoords = {
  lat: 0,
  lng: 0,
  viewport: {
    northeast: {
      lat: 0,
      lng: 0,
    },
    southwest: {
      lat: 0,
      lng: 0,
    },
  },
};
