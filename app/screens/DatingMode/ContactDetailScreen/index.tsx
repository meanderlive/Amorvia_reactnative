import {View} from 'react-native';
import React from 'react';
import MainLayout from '../../../components/MainLayout';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../navigation/types';
import Input from '../../../components/Input';
import PrimaryBtn from '../../../components/PrimaryBtn';

const ContactDetailScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <MainLayout onBack={navigation.goBack} title="Contact Details">
      <View style={{flex: 1}}>
        <View style={{flex: 1, marginHorizontal: 20}}>
          <Input label="Email" placeholder="example@gmail.com" />
          <Input label="Phone" placeholder="+1 123 456 789" />
        </View>
        <PrimaryBtn
          onPress={() => navigation.navigate('VerifyOtpTwo')}
          containerStyle={{marginBottom: 40, marginHorizontal: 20}}
          text="Send OTP"
        />
      </View>
    </MainLayout>
  );
};

export default ContactDetailScreen;
