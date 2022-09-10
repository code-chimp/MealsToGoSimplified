import React, { FC, ReactNode } from 'react';
import { ImageBackground, Text, View } from 'react-native';
import styles from './AccountBackground.styles';

export interface IAccountBackgroundProps {
  children: ReactNode;
}

const backgroundImage = require('../../../../assets/home_bg.jpg');

const AccountBackground: FC<IAccountBackgroundProps> = ({ children }) => {
  return (
    <ImageBackground style={styles.image} source={backgroundImage}>
      <View style={styles.cover}>
        <Text style={styles.title}>Meals To Go</Text>
        {children}
      </View>
    </ImageBackground>
  );
};

export default AccountBackground;
