import IGeoLocationResponse from '../../@interfaces/Geo/IGeoLocationResponse';
import config from '../../config';
import IMapCoords from '../../@interfaces/Geo/IMapCoords';
import ICloudFunctionPayload from '../../@interfaces/ICloudFunctionPayload';

export const locationRequest = async (city: string): Promise<IGeoLocationResponse> => {
  try {
    const response = await fetch(
      `${config.cloudFunctionBaseUri}/geocode?city=${encodeURI(city)}`,
    );
    const payload: ICloudFunctionPayload = await response.json();

    if (payload.status === 'ok') {
      return payload.data as IGeoLocationResponse;
    }

    throw new Error(payload.message ?? 'unknown server error');
  } catch (e) {
    throw new Error(`server error ${e}`);
  }
};

export const locationTransform = ({ results = [] }: IGeoLocationResponse): IMapCoords => {
  const { geometry } = results[0];

  return { ...geometry.location, viewport: geometry.viewport };
};
