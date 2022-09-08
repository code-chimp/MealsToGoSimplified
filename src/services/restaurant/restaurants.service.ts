import camelize from 'camelize-ts';
import IRestaurantsApiResponse from '../../@interfaces/Restaurant/IRestaurantsApiResponse';
import IApiRestaurant from '../../@interfaces/Restaurant/IApiRestaurant';
import IRestaurant from '../../@interfaces/Restaurant/IRestaurant';
import { restaurantsApiResponses, mockImages } from '../../@mocks/restaurantsApiResponses';

export const restaurantsTranform = ({ results = [] }: IRestaurantsApiResponse) => {
  return results.map((restaurant: IApiRestaurant): IRestaurant => {
    const camelRestaurant = camelize<IApiRestaurant>(restaurant);

    camelRestaurant.photos = camelRestaurant.photos.map(() => {
      return mockImages[Math.ceil(Math.random() * mockImages.length - 1)];
    });

    return {
      ...camelRestaurant,
      isOpenNow: restaurant.opening_hours?.open_now ?? false,
      isClosedTemporarily: restaurant.business_status === 'CLOSED_TEMPORARILY',
    } as IRestaurant;
  });
};

export const restaurantsRequest = (
  location = '37.7749295,-122.4194155',
): Promise<IRestaurantsApiResponse> => {
  return new Promise((resolve, reject) => {
    const mock = restaurantsApiResponses[location];

    if (!mock) {
      reject('not found');
    }

    resolve(mock);
  });
};
