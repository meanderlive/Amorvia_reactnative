import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MatchStackParams} from './types';
import MatchesScreen from '../screens/MatrimonyMode/MatchesScreen';
import UsersProfileScreen from '../screens/MatrimonyMode/UsersProfileScreen';
import AstroScreen from '../screens/MatrimonyMode/AstroScreen';

const Stack = createNativeStackNavigator<MatchStackParams>();
const MatchStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Matches" component={MatchesScreen} />
      <Stack.Screen name="UsersProfile" component={UsersProfileScreen} />
      <Stack.Screen name="Astro" component={AstroScreen} />
    </Stack.Navigator>
  );
};

export default MatchStack;
