import {View, ScrollView, TouchableOpacity, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import NewMatchScreen from './NewMatchScreen';
import ReceivedScreen from './ReceivedScreen';
import SentScreen from './SentScreen';
import ShortlistedScreen from './ShortlistedScreen';
import NearMeScreen from './NearMeScreen';
import {COLORS} from '../../../styles';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {backgroundColor: 'white', height: 3},
        tabBarActiveTintColor: 'white',

        tabBarLabelStyle: {
          fontSize: 13,
          color: 'white',
        },
        tabBarItemStyle: {
          width: 145,
        },
        tabBarStyle: {backgroundColor: COLORS.primary},
        tabBarScrollEnabled: true,
      }}>
      <Tab.Screen name="New Matches" component={NewMatchScreen} />
      <Tab.Screen name="Received" component={ReceivedScreen} />
      <Tab.Screen name="Sent" component={SentScreen} />
      <Tab.Screen name="Shortlisted" component={ShortlistedScreen} />
      <Tab.Screen name="Near Me" component={NearMeScreen} />
    </Tab.Navigator>
  );
}

const MatchesScreen = ({title}: any) => {
  const [view, setView] = useState(1);

  return (
    <View style={{flex: 1}}>
      <SafeAreaView />
      <MyTabs />
    </View>
  );
};

export default MatchesScreen;
