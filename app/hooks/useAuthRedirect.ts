// app/hooks/useAuthRedirect.ts
import { useEffect } from 'react';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '@/app/types';

export function useAuthRedirect() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('authToken'); // Replace 'authToken' with your key

    if (!isAuthenticated) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'login' }],
      });
    }
  }, [navigation]);
}