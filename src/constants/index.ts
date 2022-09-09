/* NOTE: This is the place for all magic strings and numbers */

import IMapCoords from '../@interfaces/Geo/IMapCoords';

// Defaulting to Chicago, because why not?
export const DEFAULT_LOCATION: IMapCoords = {
  lng: -87.629799,
  lat: 41.878113,
  viewport: {
    northeast: {
      lat: 41.88758823029149,
      lng: -87.6194830697085,
    },
    southwest: {
      lat: 41.88489026970849,
      lng: -87.6221810302915,
    },
  },
};

export const FAVORITES_STORAGE_KEY = '@favorites';
