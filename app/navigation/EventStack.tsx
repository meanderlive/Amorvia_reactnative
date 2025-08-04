import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {EventStackParams} from './types';
import EventScreen from '../screens/DatingMode/EventScreen';
import ScheduleDateScreen from '../screens/DatingMode/ScheduleDateScreen';
import SelectUserScreen from '../screens/DatingMode/SelectUserScreen';

const Stack = createNativeStackNavigator<EventStackParams>();
const EventStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Event" component={EventScreen} />
      <Stack.Screen name="ScheduleDate" component={ScheduleDateScreen} />
      <Stack.Screen name="SelectUser" component={SelectUserScreen} />
    </Stack.Navigator>
  );
};

export default EventStack;
