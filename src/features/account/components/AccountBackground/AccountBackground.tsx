import React, { FC, ReactNode } from 'react';
import { ImageBackground, Text, View } from 'react-native';
import Lottie from 'lottie-react-native';
import styles from './AccountBackground.styles';

export interface IAccountBackgroundProps {
  showAnimation?: boolean;
  children: ReactNode;
}

const backgroundImage = require('../../../../assets/home_bg.jpg');

const AccountBackground: FC<IAccountBackgroundProps> = ({
  children,
  showAnimation = false,
}) => {
  return (
    <ImageBackground style={styles.image} source={backgroundImage}>
      <View style={styles.cover}>
        {showAnimation ? (
          <View style={styles.animationWrapper}>
            <Lottie
              source={require('../../../../assets/watermelon.json')}
              key="animation"
              resizeMode="cover"
              autoPlay
              loop
            />
          </View>
        ) : null}
        <Text style={styles.title}>Meals To Go</Text>
        {children}
      </View>
    </ImageBackground>
  );
};

export default AccountBackground;
