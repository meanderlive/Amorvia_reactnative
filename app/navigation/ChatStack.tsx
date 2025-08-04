import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ChatStackParams} from './types';
import ChatScreen from '../screens/DatingMode/ChatScreen';
import MessageScreen from '../screens/DatingMode/ChatScreen/MessageScreen';
import AudioCallScreen from '../screens/DatingMode/ChatScreen/AudioCallScreen';
import ScheduleDateScreen from '../screens/DatingMode/ScheduleDateScreen';

const Stack = createNativeStackNavigator<ChatStackParams>();
const ChatStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Chat"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Chat" component={ChatScreen} />
      <Stack.Screen name="Message" component={MessageScreen} />
      <Stack.Screen name="AudioCall" component={AudioCallScreen} />
      <Stack.Screen name="ScheduleDate" component={ScheduleDateScreen} />
    </Stack.Navigator>
  );
};

export default ChatStack;
