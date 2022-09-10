import React, { FC } from 'react';
import { Text } from 'react-native';
import AccountBackground from '../../components/AccountBackground';
import styles from './RegistrationScreen.styles';

const RegistrationScreen: FC = () => {
  return (
    <AccountBackground>
      <Text style={styles.text}>Registration Screen</Text>
    </AccountBackground>
  );
};

export default RegistrationScreen;
