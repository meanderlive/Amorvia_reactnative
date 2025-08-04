import {View, TouchableOpacity, Text} from 'react-native';
import React, {useState} from 'react';
import MainLayout from '../../../components/MainLayout';
import {MediumText} from '../../../components/MyText';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {PremiumStackParams} from '../../../navigation/types';
import Logo from '../../../../assets/logo/svg/logo.svg';
import {COLORS} from '../../../styles';

const CancelPlanScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<PremiumStackParams>>();

  return (
    <MainLayout onBack={navigation.goBack} title="Subscription">
      <View style={{flex: 1, marginHorizontal: 20}}>
        <View
          style={{
            alignItems: 'center',
            marginTop: 50,
            borderBottomWidth: 1,
            paddingBottom: 15,
            borderBottomColor: 'lightgray',
          }}>
          <Logo />
          <Text style={{fontSize: 40, color: COLORS.primary}}>$ 99.45</Text>
          <MediumText style={{color: 'gray'}}>Monthly</MediumText>
          <TouchableOpacity
            onPress={() => navigation.navigate('PremiumInfo')}
            style={{marginTop: 40}}>
            <MediumText style={{color: 'gray'}}>Cancel Subscription</MediumText>
          </TouchableOpacity>
        </View>
      </View>
    </MainLayout>
  );
};

export default CancelPlanScreen;
