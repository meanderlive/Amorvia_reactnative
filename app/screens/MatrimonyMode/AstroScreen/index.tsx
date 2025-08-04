import {View, Text, ScrollView, Image, StyleSheet} from 'react-native';
import React from 'react';
import {HomeStackParams} from '../../../navigation/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import MainLayout from '../../../components/MainLayout';
import Header from './Header';
import Compatibility from './Compatibility';
import Details from './Details';

const AstroScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParams>>();
  return (
    <MainLayout onBack={navigation.goBack}>
      <ScrollView style={{paddingHorizontal: 15}}>
        <Header />
        <Compatibility />
        <Details />
      </ScrollView>
    </MainLayout>
  );
};

export default AstroScreen;
const styles = StyleSheet.create({
  imgView: {
    height: 90,
    width: 90,
    borderRadius: 80,
  },
});
