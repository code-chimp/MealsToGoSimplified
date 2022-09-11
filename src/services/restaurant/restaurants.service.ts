import camelize from 'camelize-ts';
import IPlacesResponse from '../../@interfaces/Restaurant/IPlacesResponse';
import IPlace from '../../@interfaces/Restaurant/IPlace';
import IRestaurant from '../../@interfaces/Restaurant/IRestaurant';
import config from '../../config';
import ICloudFunctionPayload from '../../@interfaces/ICloudFunctionPayload';

export const restaurantsRequest = async (location: string): Promise<IPlacesResponse> => {
  try {
    const response = await fetch(
      `${config.cloudFunctionBaseUri}/placesNearby?location=${encodeURI(location)}`,
    );
    const payload: ICloudFunctionPayload = await response.json();

    if (payload.status === 'ok') {
      return payload.data as IPlacesResponse;
    }

    throw new Error(payload.message ?? 'unknown server error');
  } catch (e) {
    throw new Error(`server error ${e}`);
  }
};

export const restaurantsTransform = ({ results = [] }: IPlacesResponse) => {
  return results.map((restaurant: IPlace): IRestaurant => {
    const camelRestaurant = camelize<IPlace>(restaurant);

    return {
      ...camelRestaurant,
      isOpenNow: restaurant.opening_hours?.open_now ?? false,
      isClosedTemporarily: restaurant.business_status === 'CLOSED_TEMPORARILY',
    } as IRestaurant;
  });
};
