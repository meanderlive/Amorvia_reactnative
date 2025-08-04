import {View, Text, ScrollView, SafeAreaView} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {HomeStackParams} from '../../../navigation/types';
import Header from './Header';
import Input from './Input';
import RecommendedMatches from './RecommendedMatches';
import NewMatches from './NewMatches';
import RecentVisitors from './RecentVisitors';
import Testimonails from './Testimonials';

const HomeScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParams>>();
  return (
    <ScrollView style={{flex: 1}}>
      <SafeAreaView />
      <Header />
      <Input />
      <RecommendedMatches />
      <NewMatches />
      <RecentVisitors />
      <Testimonails />
    </ScrollView>
  );
};

export default HomeScreen;
