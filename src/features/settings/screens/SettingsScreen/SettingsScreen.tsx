/* eslint-disable react/no-unstable-nested-components */
/* NOTE: this is due to the suggested pattern for adding tab icons */
import React, { FC, useContext, useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { Avatar, List } from 'react-native-paper';
import { StackScreenProps } from '@react-navigation/stack';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../../../../services/authentication/auth.context';
import { SettingsStackParamList } from '../../../../../App/Navigation/AppNavigator/SettingsNavigator';
import theme from '../../../../theme';
import styles from './SettingsScreen.styles';
import { PHOTO_STORAGE_KEY } from '../../../../constants';
import { User } from 'firebase/auth';

export interface ISettingsScreenProps
  extends StackScreenProps<SettingsStackParamList, 'Settings'> {}

const SettingsScreen: FC<ISettingsScreenProps> = ({ navigation }) => {
  const [avatarUri, setAvatarUri] = useState<string | null>(null);
  const { onLogout, user } = useContext(AuthContext);

  const getAvatarUri = async (u: User): Promise<void> => {
    try {
      const uri = await AsyncStorage.getItem(`${PHOTO_STORAGE_KEY}${u.uid}`);
      setAvatarUri(uri);
    } catch (e) {
      setAvatarUri(null);
    }
  };

  useFocusEffect(() => {
    getAvatarUri(user!);
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.avatarWrapper}>
        <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
          {avatarUri ? (
            <Avatar.Image source={{ uri: avatarUri }} style={styles.avatar} size={180} />
          ) : (
            <Avatar.Icon icon="human" style={styles.avatar} size={180} color="#fff" />
          )}
        </TouchableOpacity>
        <Text style={styles.avatarText}>{user!.displayName || user!.email}</Text>
      </View>
      <List.Section>
        <List.Item
          style={styles.listItem}
          title="Favorites"
          description="View your favorites"
          left={props => <List.Icon {...props} color={theme.colors.ui.error} icon="heart" />}
          onPress={() => navigation.navigate('Favorites')}
        />
        <List.Item
          style={styles.listItem}
          title="Logout"
          left={props => (
            <List.Icon {...props} color={theme.colors.brand.secondary} icon="door" />
          )}
          onPress={onLogout}
        />
      </List.Section>
    </SafeAreaView>
  );
};

export default SettingsScreen;
