import React, { FC } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { StackScreenProps } from '@react-navigation/stack';
import { AccountStackParamList } from '../../../../../App/Navigation/AccountNavigator/AccountNavigator';
import theme from '../../../../theme';
import AccountBackground from '../../components/AccountBackground';
import styles from './AccountScreen.styles';

export interface IAccountScreenProps extends StackScreenProps<AccountStackParamList> {}

const AccountScreen: FC<IAccountScreenProps> = ({ navigation }) => {
  return (
    <AccountBackground>
      <View style={styles.content}>
        <Button
          icon="lock-open-outline"
          style={styles.button}
          mode="contained"
          color={theme.colors.brand.primary}
          onPress={() => navigation.navigate('Login')}>
          Login
        </Button>
        <Button
          icon="lock-open-outline"
          style={[styles.button, styles.marginTopMed]}
          mode="contained"
          color={theme.colors.brand.primary}
          onPress={() => navigation.navigate('Register')}>
          Register
        </Button>
      </View>
    </AccountBackground>
  );
};

export default AccountScreen;
