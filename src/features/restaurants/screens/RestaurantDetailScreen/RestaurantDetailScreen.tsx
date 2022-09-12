/* eslint-disable react/no-unstable-nested-components */
/* NOTE: this is due to the suggested pattern for adding tab icons */
import React, { FC, useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import styles from './RestaurantDetailScreen.styles';
import { StackScreenProps } from '@react-navigation/stack';
import { RestaurantStackParamList } from '../../../../../App/Navigation/AppNavigator/RestaurantNavigator';
import RestaurantInfoCard from '../../../../components/RestaurantInfoCard';
import { List } from 'react-native-paper';

export interface IRestaurantDetailScreenProps
  extends StackScreenProps<RestaurantStackParamList, 'RestaurantDetail'> {}

const RestaurantDetailScreen: FC<IRestaurantDetailScreenProps> = ({ route }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState<boolean>(false);
  const [lunchExpanded, setLunchExpanded] = useState<boolean>(false);
  const [dinnerExpanded, setDinnerExpanded] = useState<boolean>(false);
  const [drinksExpanded, setDrinksExpanded] = useState<boolean>(false);
  const {
    params: { restaurant },
  } = route;

  const handleBreakfastPress = () => setBreakfastExpanded(!breakfastExpanded);
  const handleLunchPress = () => setLunchExpanded(!lunchExpanded);
  const handleDinnerPress = () => setDinnerExpanded(!dinnerExpanded);
  const handleDrinksPress = () => setDrinksExpanded(!drinksExpanded);

  return (
    <SafeAreaView style={styles.container}>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title="Breakfast"
          expanded={breakfastExpanded}
          onPress={handleBreakfastPress}
          left={props => <List.Icon icon="bread-slice" {...props} />}>
          <List.Item title="Eggs Benedict" />
          <List.Item title="Classic Breakfast" />
        </List.Accordion>
        <List.Accordion
          title="Lunch"
          expanded={lunchExpanded}
          onPress={handleLunchPress}
          left={props => <List.Icon icon="hamburger" {...props} />}>
          <List.Item title="Burger w/ Fries" />
          <List.Item title="Steak Sandwich" />
          <List.Item title="Beer Cheese Soup" />
        </List.Accordion>
        <List.Accordion
          title="Dinner"
          expanded={dinnerExpanded}
          onPress={handleDinnerPress}
          left={props => <List.Icon icon="food-variant" {...props} />}>
          <List.Item title="Chicken Alfredo" />
          <List.Item title="Veal Parmigiana" />
          <List.Item title="French Onion Soup" />
        </List.Accordion>
        <List.Accordion
          title="Drinks"
          expanded={drinksExpanded}
          onPress={handleDrinksPress}
          left={props => <List.Icon icon="cup" {...props} />}>
          <List.Item title="Coffee" />
          <List.Item title="Tea" />
          <List.Item title="Pepsi" />
          <List.Item title="Slice" />
          <List.Item title="Lemonade" />
        </List.Accordion>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RestaurantDetailScreen;
