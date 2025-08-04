import {View, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../navigation/types';
import PrimaryBtn from '../../../components/PrimaryBtn';
import {BigText, RegularText, SmallText} from '../../../components/MyText';
import {COLORS} from '../../../styles';
import MainLayout from '../../../components/MainLayout';
import Input from '../../../components/Input';

const LoginMScreen = () => {
  const [loading, setLoading] = React.useState(false);
  const [phoneNumber, setPhoneNumber] = React.useState('');

  const [otp, setOtp] = useState('');
  const params = useRoute<any>().params;
  const dispatch = useDispatch();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    <MainLayout>
      <ScrollView contentContainerStyle={{paddingHorizontal: 20}}>
        <View style={{marginVertical: 50}}>
          <BigText bold>Sign in</BigText>
          <BigText bold>your account</BigText>
        </View>

        <Input
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          label="Mobile No/Email ID"
          placeholder="Enter Mobile no"
        />

        <PrimaryBtn
          containerStyle={{marginTop: 50}}
          onPress={() => navigation.navigate('VerifyOtpMat')}
          text="SendOTP"
        />

        <View
          style={{flexDirection: 'row', alignSelf: 'center', marginTop: 15}}>
          <RegularText>Don't have an account? </RegularText>
          <TouchableOpacity
            onPress={() => navigation.navigate('CreateProfileFor')}>
            <RegularText style={{color: COLORS.secondary}}>Sign up</RegularText>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </MainLayout>
  );
};

export default LoginMScreen;
