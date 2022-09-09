import geoLocations from '../../@mocks/geoLocations';
import IGeoLocationResponse from '../../@interfaces/Geo/IGeoLocationResponse';
import IMapCoords from '../../@interfaces/Geo/IMapCoords';

export const locationRequest = (city: string): Promise<IGeoLocationResponse> => {
  return new Promise((resolve, reject) => {
    const response = geoLocations[city];

    if (!response) {
      reject('not found');
    }

    resolve(response);
  });
};

export const locationTransform = ({ results = [] }: IGeoLocationResponse): IMapCoords => {
  const { geometry } = results[0];

  return { ...geometry.location, viewport: geometry.viewport };
};
