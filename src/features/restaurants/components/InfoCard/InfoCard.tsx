import React, { FC } from 'react';
import { Image, Text, View } from 'react-native';
import { Card } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import styles from './InfoCard.styles';
import openSvgXml from '../../../../assets/openSvgXml';
import starSvgXml from '../../../../assets/starSvgXml';
import IRestaurant from '../../../../@interfaces/Restaurant/IRestaurant';

export interface IInfoCardProps {
  restaurant: IRestaurant;
}

const InfoCard: FC<IInfoCardProps> = ({ restaurant }) => {
  const {
    name,
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos,
    vicinity,
    rating = 0,
    isOpenNow,
    isClosedTemporarily,
    placeId,
  } = restaurant;

  return (
    <Card style={styles.card} elevation={5}>
      <Card.Cover style={styles.cardImage} key={name} source={{ uri: photos[0] }} />
      <View style={styles.infoWrapper}>
        <Text style={styles.title}>{name}</Text>
        <View style={styles.row}>
          <View style={styles.rating}>
            {Array.from(new Array(Math.floor(rating))).map((k, i) => (
              <SvgXml key={`${placeId}_${i}`} xml={starSvgXml} width={16} height={16} />
            ))}
          </View>
          <View style={styles.info}>
            {isClosedTemporarily && <Text style={styles.closed}>CLOSED TEMPORARILY</Text>}
            {isOpenNow && (
              <SvgXml xml={openSvgXml} height={16} width={16} style={styles.mrMd} />
            )}
            <Image style={styles.icon} source={{ uri: icon }} />
          </View>
        </View>
        <Text style={styles.address}>{vicinity}</Text>
      </View>
    </Card>
  );
};

export default InfoCard;
