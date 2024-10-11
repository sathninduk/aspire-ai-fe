import { useEffect } from 'react';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '@/app/types';
import AsyncStorage from "@react-native-async-storage/async-storage";

export function useAuthRedirect() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    const checkAuth = async () => {
      const authStatus = await AsyncStorage.getItem('isAuthenticated');
      if (authStatus !== 'true') {
        navigation.reset({
          index: 0,
          routes: [{ name: 'login' }],
        });
      }
    };

    checkAuth();
  }, [navigation]);
}