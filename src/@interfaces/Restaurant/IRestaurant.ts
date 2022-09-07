interface IRestaurant {
  name: string;
  icon: string;
  photos: Array<string>;
  address: string;
  rating: number;
  isOpenNow: boolean;
  isClosedTemporarily: boolean;
}

export default IRestaurant;
