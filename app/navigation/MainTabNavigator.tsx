import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MainTabNavigatorParams} from './types';

// Screens ===>
import ProfileStack from './ProfileStack';
import ChatStack from './ChatStack';
import DiscoverStack from './DiscoverStack';
import {StyleSheet} from 'react-native';
import DiscoverOn from '../../assets/logo/svg/DiscoverOn.svg';
import DiscoverOff from '../../assets/logo/svg/DiscoverOff.svg';
import EventOff from '../../assets/logo/svg/EvenntOFf.svg';
import EventOn from '../../assets/logo/svg/EventOn.svg';
import ChatOff from '../../assets/logo/svg/ChatOff.svg';
import ChatOn from '../../assets/logo/svg/ChatOn.svg';
import ProfileOff from '../../assets/logo/svg/ProfileOff.svg';
import PremiumOff from '../../assets/logo/svg/PremiumOff.svg';
import ProfileOn from '../../assets/logo/svg/ProfileOn.svg';
import PremiumOn from '../../assets/logo/svg/PremiumOn.svg';
import PremiumStack from './PremiumStack';
import EventStack from './EventStack';

const MainTab = createBottomTabNavigator<MainTabNavigatorParams>();

const MainTabNavigator = () => {
  return (
    <MainTab.Navigator
      backBehavior="initialRoute"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          ...styles.tabBarStyle,
        },
      }}>
      <MainTab.Screen
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => {
            if (focused) {
              return <DiscoverOn />;
            }
            return <DiscoverOff />;
          },
        }}
        name="DiscoverTab"
        component={DiscoverStack}
      />

      <MainTab.Screen
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => {
            if (focused) {
              return <EventOn />;
            }
            return <EventOff />;
          },
        }}
        name="EventsTab"
        component={EventStack}
      />

      <MainTab.Screen
        name="ChatTab"
        component={ChatStack}
        options={({route}) => ({
          tabBarLabel: '',
          tabBarIcon: ({focused}) => {
            if (focused) {
              return <ChatOn />;
            }
            return <ChatOff />;
          },
        })}
      />
      <MainTab.Screen
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => {
            if (focused) {
              return <ProfileOn />;
            }
            return <ProfileOff />;
          },
        }}
        name="ProfileTab"
        component={ProfileStack}
      />
      <MainTab.Screen
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => {
            if (focused) {
              return <PremiumOn />;
            }
            return <PremiumOff />;
          },
        }}
        name="PremiumTab"
        component={PremiumStack}
      />
    </MainTab.Navigator>
  );
};

export default MainTabNavigator;

export const styles = StyleSheet.create({
  tabBarStyle: {
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    padding: 20,
    height: 90,
  },
});
