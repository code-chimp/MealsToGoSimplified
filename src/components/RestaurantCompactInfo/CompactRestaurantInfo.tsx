import React, { FC } from 'react';
import { Image, Platform, Text, View } from 'react-native';
import WebView from 'react-native-webview';
import IRestaurant from '../../@interfaces/Restaurant/IRestaurant';
import styles from './CompactRestaurantInfo.styles';

export interface ICompactRestaurantInfoProps {
  restaurant: IRestaurant;
  inMap?: boolean;
}

const isAndroid = Platform.OS === 'android';

const CompactRestaurantInfo: FC<ICompactRestaurantInfoProps> = ({
  restaurant,
  inMap = false,
}) => {
  return (
    <View style={styles.container}>
      {isAndroid && inMap ? (
        <View style={styles.webviewWrapper}>
          <WebView style={styles.image} source={{ uri: restaurant.photos[0] }} />
        </View>
      ) : (
        <Image style={styles.image} source={{ uri: restaurant.photos[0] }} />
      )}
      <Text style={styles.title}>{restaurant.name}</Text>
    </View>
  );
};

export default CompactRestaurantInfo;
