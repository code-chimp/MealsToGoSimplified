/* eslint-disable react/no-unstable-nested-components */
/* NOTE: this is due to the suggested pattern for adding tab icons */
import React, { FC, useContext } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { Avatar, List } from 'react-native-paper';
import { StackScreenProps } from '@react-navigation/stack';
import { AuthContext } from '../../../../services/authentication/auth.context';
import { SettingsStackParamList } from '../../../../../App/Navigation/AppNavigator/SettingsNavigator';
import styles from './SettingsScreen.styles';

export interface ISettingsScreenProps
  extends StackScreenProps<SettingsStackParamList, 'Settings'> {}

const SettingsScreen: FC<ISettingsScreenProps> = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.avatarWrapper}>
        <Avatar.Icon icon="human" style={styles.avatar} size={180} color="#fff" />
        <Text style={styles.avatarText}>{user!.displayName || user!.email}</Text>
      </View>
      <List.Section>
        <List.Item
          style={styles.listItem}
          title="Favorites"
          description="View your favorites"
          left={props => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate('Favorites')}
        />
        <List.Item
          style={styles.listItem}
          title="Logout"
          left={props => <List.Icon {...props} color="black" icon="door" />}
          onPress={onLogout}
        />
      </List.Section>
    </SafeAreaView>
  );
};

export default SettingsScreen;
