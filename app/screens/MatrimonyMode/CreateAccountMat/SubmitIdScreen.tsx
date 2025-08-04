import {View, Text, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../navigation/types';
import MainLayout from '../../../components/MainLayout';
import {MediumText, RegularTextG} from '../../../components/MyText';
import PrimaryBtn from '../../../components/PrimaryBtn';

const SubmitIdScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <MainLayout onBack={navigation.goBack}>
      <View style={{flex: 1, padding: 20}}>
        <View style={{height: 170, width: '100%'}}>
          <Image
            style={{height: '100%', width: '100%', resizeMode: 'contain'}}
            source={require('../../../../assets/images/IdCard.png')}
          />
        </View>
        <View style={{alignItems: 'center', marginVertical: 25}}>
          <MediumText>Upload a scanned copy of a</MediumText>
          <MediumText style={{marginBottom: 15}}>Govt. issued ID</MediumText>
          <RegularTextG>In the interest of security, Marrier.com.</RegularTextG>
          <RegularTextG>
            occasionally asks members to verify their IDs.
          </RegularTextG>
        </View>

        <PrimaryBtn
          onPress={() => navigation.navigate('IdUploaded')}
          containerStyle={{marginVertical: 10}}
          text="Submit ID Proof"
        />
        <RegularTextG style={{textAlign: 'center'}}>
          Eg: Passport, Driving Licence, Voter/Tax Id etc.
        </RegularTextG>
      </View>
    </MainLayout>
  );
};

export default SubmitIdScreen;
