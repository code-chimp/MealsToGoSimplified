import camelize from 'camelize-ts';
import IRestaurantsResponse from '../../@interfaces/Restaurant/IRestaurantsResponse';
import IRestaurantDto from '../../@interfaces/Restaurant/IRestaurantDto';
import IRestaurant from '../../@interfaces/Restaurant/IRestaurant';
import config from '../../config';
import ICloudFunctionPayload from '../../@interfaces/ICloudFunctionPayload';

export const restaurantsRequest = async (location: string): Promise<IRestaurantsResponse> => {
  try {
    const response = await fetch(
      `${config.cloudFunctionBaseUri}/placesNearby?location=${encodeURI(location)}`,
    );
    const payload: ICloudFunctionPayload = await response.json();

    if (payload.status === 'ok') {
      return payload.data as IRestaurantsResponse;
    }

    throw new Error(payload.message ?? 'unknown server error');
  } catch (e) {
    throw new Error(`server error ${e}`);
  }
};

export const restaurantsTransform = ({ results = [] }: IRestaurantsResponse) => {
  return results.map((restaurant: IRestaurantDto): IRestaurant => {
    const camelRestaurant = camelize<IRestaurantDto>(restaurant);

    return {
      ...camelRestaurant,
      isOpenNow: restaurant.opening_hours?.open_now ?? false,
      isClosedTemporarily: restaurant.business_status === 'CLOSED_TEMPORARILY',
    } as IRestaurant;
  });
};
