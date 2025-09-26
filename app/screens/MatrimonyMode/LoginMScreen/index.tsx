// import {View, TouchableOpacity, ScrollView} from 'react-native';
// import React, {useState} from 'react';
// import {useNavigation, useRoute} from '@react-navigation/native';
// import {useDispatch} from 'react-redux';
// import {NativeStackNavigationProp} from '@react-navigation/native-stack';
// import {RootStackParams} from '../../../navigation/types';
// import PrimaryBtn from '../../../components/PrimaryBtn';
// import {BigText, RegularText, SmallText} from '../../../components/MyText';
// import {COLORS} from '../../../styles';
// import MainLayout from '../../../components/MainLayout';
// import Input from '../../../components/Input';

// const LoginMScreen = () => {
//   const [loading, setLoading] = React.useState(false);
//   const [phoneNumber, setPhoneNumber] = React.useState('');

//   const [otp, setOtp] = useState('');
//   const params = useRoute<any>().params;
//   const dispatch = useDispatch();
//   const navigation =
//     useNavigation<NativeStackNavigationProp<RootStackParams>>();

//   return (
//     <MainLayout>
//       <ScrollView contentContainerStyle={{paddingHorizontal: 20}}>
//         <View style={{marginVertical: 50}}>
//           <BigText bold>Sign in</BigText>
//           <BigText bold>your account</BigText>
//         </View>

//         <Input
//           value={phoneNumber}
//           onChangeText={setPhoneNumber}
//           label="Mobile No/Email ID"
//           placeholder="Enter Mobile no"
//         />

//         <PrimaryBtn
//           containerStyle={{marginTop: 50}}
//           onPress={() => navigation.navigate('VerifyOtpMat')}
//           text="SendOTP"
//         />

//         <View
//           style={{flexDirection: 'row', alignSelf: 'center', marginTop: 15}}>
//           <RegularText>Don't have an account? </RegularText>
//           <TouchableOpacity
//             onPress={() => navigation.navigate('CreateProfileFor')}>
//             <RegularText style={{color: COLORS.secondary}}>Sign up</RegularText>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </MainLayout>
//   );
// };

// export default LoginMScreen;

import { View, TouchableOpacity, ScrollView, Alert } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../../../navigation/types';
import PrimaryBtn from '../../../components/PrimaryBtn';
import { BigText, RegularText } from '../../../components/MyText';
import { COLORS } from '../../../styles';
import MainLayout from '../../../components/MainLayout';
import Input from '../../../components/Input';
import { api_loginOTP } from '../../../api/auth';

const LoginMScreen = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const handleSendOTP = async () => {
    if (!email.trim()) {
      Alert.alert('Validation', 'Please enter your email.');
      return;
    }

    setLoading(true);
    try {
      console.log('Sending OTP to:', email);
      const res = await api_loginOTP(email);
      console.log('Login OTP API response:', res.data);

      if (res?.data?.otp && res?.data?.token) {
        navigation.navigate('CodeVerify', {
          otp: res.data.otp,
          token: res.data.token,
        });
      } else {
        Alert.alert('Error', 'Failed to send OTP. Please try again.');
      }
    } catch (error) {
      console.error('API Error:', error);
      Alert.alert('Error', 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout>
      <ScrollView contentContainerStyle={{ paddingHorizontal: 20 }}>
        <View style={{ marginVertical: 50 }}>
          <BigText bold>Sign in</BigText>
          <BigText bold>with your email</BigText>
        </View>

        <Input
          value={email}
          onChangeText={setEmail}
          label="Email ID"
          placeholder="Enter your email"
          keyboardType="email-address"
        />

        <PrimaryBtn
          containerStyle={{ marginTop: 50 }}
          onPress={handleSendOTP}
          text={loading ? 'Sending...' : 'Send OTP'}
        />

        <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 15 }}>
          <RegularText>Don't have an account? </RegularText>
          <TouchableOpacity onPress={() => navigation.navigate('CreateProfileFor')}>
            <RegularText style={{ color: COLORS.secondary }}>Sign up</RegularText>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </MainLayout>
  );
};

export default LoginMScreen;
