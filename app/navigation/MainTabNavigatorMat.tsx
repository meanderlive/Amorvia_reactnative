import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Screens ===>
import {COLORS} from '../styles';
import ProfileStack from './ProfileStack';
import {StyleSheet} from 'react-native';

import ChatOff from '../../assets/logo/svg/ChatOffM.svg';
import ChatOn from '../../assets/logo/svg/ChatOn.svg';

import MatchOff from '../../assets/logo/svg/MatchOff.svg';
import Match from '../../assets/logo/svg/Match.svg';

import HomeOff from '../../assets/logo/svg/HomeOff.svg';
import Home from '../../assets/logo/svg/Home.svg';

import ProfileOff from '../../assets/logo/svg/ProfileOffM.svg';
import ProfileOn from '../../assets/logo/svg/ProfileOn.svg';

import PremiumOff from '../../assets/logo/svg/PremiumOffM.svg';
import PremiumOn from '../../assets/logo/svg/PremiumOn.svg';

import PremiumStack from './PremiumStack';
import EventStack from './EventStack';
import {MainTabNavigatorParams} from './types';
import HomeStack from './HomeStack';
import ChatStack from './ChatStack';
import MatchStack from './MatchStack';
import MatProfileStack from './MatProfileStack';

const MainTab = createBottomTabNavigator<MainTabNavigatorParams>();

const MainTabNavigatorMat = () => {
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
              return <Home />;
            }
            return <HomeOff />;
          },
        }}
        name="HomeTab"
        component={HomeStack}
      />
      <MainTab.Screen
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => {
            if (focused) {
              return <Match />;
            }
            return <MatchOff />;
          },
        }}
        name="MatchTab"
        component={MatchStack}
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
        name="MatProfileTab"
        component={MatProfileStack}
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

export default MainTabNavigatorMat;

export const styles = StyleSheet.create({
  tabBarStyle: {
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    padding: 20,
    height: 90,
  },
});
