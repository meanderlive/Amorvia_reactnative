import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DiscoverStackParams} from './types';
import DiscoverScreen from '../screens/DatingMode/discover/DiscoverScreen';
import FilterScreen from '../screens/DatingMode/FilterScreen';
import UsersProfileScreen from '../screens/DatingMode/UsersProfileScreen';
import ErrorScreen from '../screens/DatingMode/ErrorScreen';
import ConnectionLostScreen from '../screens/DatingMode/ConnectionLostScreen';
import ChatScreen from '../screens/DatingMode/ChatScreen';
import MessageScreen from '../screens/DatingMode/ChatScreen/MessageScreen';
import CompatibilityScreen from '../screens/DatingMode/CompatibilityScreen';
import CompatibilityResultScreen from '../screens/DatingMode/CompatibilityResultScreen';

const Stack = createNativeStackNavigator<DiscoverStackParams>();
const DiscoverStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Discover" component={DiscoverScreen} />
      <Stack.Screen name="Filter" component={FilterScreen} />
      <Stack.Screen name="UsersProfile" component={UsersProfileScreen} />
      <Stack.Screen name="Error" component={ErrorScreen} />
      <Stack.Screen name="ConnectionLost" component={ConnectionLostScreen} />
      <Stack.Screen name="Chat" component={ChatScreen} />
      <Stack.Screen name="Message" component={MessageScreen} />
      <Stack.Screen name="Compatibility" component={CompatibilityScreen} />
      <Stack.Screen
        name="CompatibilityResult"
        component={CompatibilityResultScreen}
      />
    </Stack.Navigator>
  );
};

export default DiscoverStack;
