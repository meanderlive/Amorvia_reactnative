import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeStackParams} from './types';

import HomeScreen from '../screens/MatrimonyMode/HomeScreen';
import UsersProfileScreen from '../screens/MatrimonyMode/UsersProfileScreen';
import FilterScreen from '../screens/MatrimonyMode/FilterScreen';
import TestimonialScreen from '../screens/MatrimonyMode/TestimonialScreen';
import AstroScreen from '../screens/MatrimonyMode/AstroScreen';
import NotificationScreen from '../screens/MatrimonyMode/NotificationScreen';

const Stack = createNativeStackNavigator<HomeStackParams>();
const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="UsersProfile" component={UsersProfileScreen} />
      <Stack.Screen name="Filter" component={FilterScreen} />
      <Stack.Screen name="Testimonial" component={TestimonialScreen} />
      <Stack.Screen name="Astro" component={AstroScreen} />
      <Stack.Screen name="Notification" component={NotificationScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
