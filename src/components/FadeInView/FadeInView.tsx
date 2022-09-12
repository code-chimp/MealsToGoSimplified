import React, { FC, ReactNode, useEffect, useRef } from 'react';
import { Animated } from 'react-native';

export interface IFadeInViewProps {
  duration?: number;
  style?: any;
  children: ReactNode;
}

const FadeInView: FC<IFadeInViewProps> = ({ children, duration = 1500, style = {} }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      useNativeDriver: true,
      duration,
    }).start();
  }, [fadeAnim, duration]);

  return (
    <Animated.View
      style={{
        ...style,
        opacity: fadeAnim,
      }}>
      {children}
    </Animated.View>
  );
};

export default FadeInView;
