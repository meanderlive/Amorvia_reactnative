import {useNavigation} from '@react-navigation/native';
import {useLayoutEffect} from 'react';
import {styles} from '../navigation/MainTabNavigator';

type Props = {
  unSubDisable?: boolean;
};
export function useHideBottomBarTwo({unSubDisable = false}: Props) {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {display: 'none', height: 0},
      tabBarVisible: false,
    });

    return () => {
      if (!unSubDisable) {
        navigation.getParent()?.setOptions({
          tabBarStyle: styles.tabBarStyle,
          tabBarVisible: undefined,
        });
      }
    };
  }, [navigation]);
}
