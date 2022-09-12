import React, { FC, useContext } from 'react';
import { View } from 'react-native';
import { ActivityIndicator, Button, Colors } from 'react-native-paper';
import { StackScreenProps } from '@react-navigation/stack';
import { AccountStackParamList } from '../../../../../App/Navigation/AccountNavigator/AccountNavigator';
import theme from '../../../../theme';
import AccountBackground from '../../components/AccountBackground';
import styles from './AccountScreen.styles';
import { AuthContext } from '../../../../services/authentication/auth.context';

export interface IAccountScreenProps extends StackScreenProps<AccountStackParamList> {}

const AccountScreen: FC<IAccountScreenProps> = ({ navigation }) => {
  const { isLoading } = useContext(AuthContext);
  return (
    <AccountBackground showAnimation>
      {!isLoading ? (
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
            icon="email"
            style={[styles.button, styles.marginTopMed]}
            mode="contained"
            color={theme.colors.brand.primary}
            onPress={() => navigation.navigate('Register')}>
            Register
          </Button>
        </View>
      ) : (
        <View style={styles.loadingIndicator}>
          <ActivityIndicator animating={true} size={theme.sizes.xl} color={Colors.blue300} />
        </View>
      )}
    </AccountBackground>
  );
};

export default AccountScreen;
