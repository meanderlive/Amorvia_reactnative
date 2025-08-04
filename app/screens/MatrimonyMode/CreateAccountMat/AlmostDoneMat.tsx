import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import MainLayout from '../../../components/MainLayout';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../navigation/types';
import PrimaryBtn from '../../../components/PrimaryBtn';
import {
  BigText,
  MediumText,
  RegularText,
  RegularTextG,
} from '../../../components/MyText';

const AlmostDoneMat = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <MainLayout
      onBack={navigation.goBack}
      rightSideIcon={() => {
        return (
          <TouchableOpacity onPress={() => navigation.navigate('FamilyDetail')}>
            <RegularTextG>Skip</RegularTextG>
          </TouchableOpacity>
        );
      }}>
      <View style={{flex: 1}}>
        <View style={{flex: 1, marginHorizontal: 18, gap: 10}}>
          <BigText style={{textAlign: 'center', fontSize: 22}}>
            You are almost done
          </BigText>
          <MediumText style={{marginTop: 15}}>About yourself</MediumText>
          <Text style={{fontSize: 14}}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here.
          </Text>
        </View>
        <PrimaryBtn
          onPress={() => navigation.navigate('FamilyDetail')}
          text="Create Profile"
          containerStyle={{marginBottom: 40, marginHorizontal: 20}}
        />
      </View>
    </MainLayout>
  );
};

export default AlmostDoneMat;
