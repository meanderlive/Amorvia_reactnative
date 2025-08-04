import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {Platform} from 'react-native';
import {styles} from '../navigation/MainTabNavigator';
const isIOS = Platform.OS === 'ios';
export function useHideBottomBar() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {display: 'none', height: 0},
      tabBarVisible: false,
    });

    return () => {
      navigation.getParent()?.setOptions({
        tabBarStyle: {
          ...styles.tabBarStyle,
        },
        tabBarVisible: true,
      });
    };
  }, [navigation]);
}
