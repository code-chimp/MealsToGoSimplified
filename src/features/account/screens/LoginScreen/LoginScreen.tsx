import React, { FC, useContext, useState } from 'react';
import { View } from 'react-native';
import { ActivityIndicator, Button, Colors, TextInput } from 'react-native-paper';
import { StackScreenProps } from '@react-navigation/stack';
import theme from '../../../../theme';
import { AccountStackParamList } from '../../../../../App/Navigation/AccountNavigator/AccountNavigator';
import ErrorDisplay from '../../../../components/ErrorDisplay';
import { AuthContext } from '../../../../services/authentication/auth.context';
import AccountBackground from '../../components/AccountBackground';
import styles from './LoginScreen.styles';

export interface ILoginScreenProps extends StackScreenProps<AccountStackParamList> {}

const LoginScreen: FC<ILoginScreenProps> = ({ navigation }) => {
  const { isLoading, onLogin, error } = useContext(AuthContext);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <AccountBackground>
      <View style={styles.content}>
        <TextInput
          label="Email"
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={t => setEmail(t)}
          disabled={isLoading}
        />
        <TextInput
          label="Password"
          style={styles.topSpace}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          value={password}
          onChangeText={t => setPassword(t)}
          disabled={isLoading}
        />
        {error ? <ErrorDisplay errorText={error} /> : null}
        {!isLoading ? (
          <Button
            icon="lock-open-outline"
            style={[styles.button, styles.topSpace]}
            mode="contained"
            color={theme.colors.brand.primary}
            onPress={() => onLogin(email, password)}>
            Login
          </Button>
        ) : (
          <ActivityIndicator color={Colors.blue300} animating />
        )}
      </View>
      <Button
        style={styles.backButton}
        mode="contained"
        color={theme.colors.brand.primary}
        onPress={() => navigation.goBack()}
        disabled={isLoading}>
        Back
      </Button>
    </AccountBackground>
  );
};

export default LoginScreen;
