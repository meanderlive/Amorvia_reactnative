import {
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import MainLayout from '../../../components/MainLayout';
import { BigText, RegularText, SmallText } from '../../../components/MyText';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../../../navigation/types';
import PrimaryBtn from '../../../components/PrimaryBtn';
import { COLORS } from '../../../styles';
import OtpInputs from 'react-native-otp-inputs';
import { api_otpVerify } from '../../../api/auth';
import Toast from 'react-native-toast-message';

const CodeVerifyScreen = () => {
  const [loading, setLoading] = React.useState(false);
  const [screenOtp, setscreenOtp] = useState('');
  const { otp, token } = useRoute<any>().params;
  console.log(otp, token )
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  // Show OTP in toast when component mounts
  useEffect(() => {
    if (otp) {
      Toast.show({
        type: 'info',
        text1: 'Your OTP Code',
        text2: `Use this code to verify: ${otp}`,
        visibilityTime: 10000, // 10 seconds
        autoHide: true,
        topOffset: 50,
        bottomOffset: 40,
      });
    }
  }, [otp]);

  const handleVerifyOtp = async () => {
    setLoading(true);

    try {
      console.log('Verifying OTP...');
      const res = await api_otpVerify(screenOtp, token);
      console.log('Verify OTP API response:', res.data);
      //@ts-ignore
      navigation.navigate('Welcome',{res:res});
      Alert.alert('Success', 'OTP verified successfully!');
    } catch (error: any) {
      console.log(error);
      Alert.alert('Error', error.message || 'Something went wrong!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout onBack={navigation.goBack} title="My Code is">
      <>
        <ScrollView>
          <OtpInputs
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              marginTop:60
            }}
            autofillFromClipboard={false}
            inputStyles={{
              borderBottomColor: 'lightgray',
              borderBottomWidth: 1,
              width: 50,
              margin: 5,
              fontSize: 30,
              textAlign: 'center',
              borderRadius: 10,
              marginTop: 20,
            }}
            handleChange={code => setscreenOtp(code)}
            numberOfInputs={4}
          />
          <RegularText
            style={{
              marginTop: 10,
              alignSelf: 'center',
              textAlign: 'center',
              marginBottom: 40,
              color: COLORS.grey,
              width: 230,
            }}
          >
            Please enter the 4-digit code sent to you at +91 9876543210
          </RegularText>
          <TouchableOpacity
            style={{
              width: 130,
              height: 40,
              borderRadius: 50,
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
              borderWidth: 1,
              borderColor: COLORS.secondary,
            }}
          >
            <RegularText style={{ color: COLORS.secondary }}>
              Resend
            </RegularText>
          </TouchableOpacity>
        </ScrollView>
        <View style={{ marginBottom: 20 }}>
          <PrimaryBtn
            onPress={handleVerifyOtp}
            loading={loading}
            disabled={screenOtp.length !== 4}
            text="Verify"
          />
        </View>
      </>
    </MainLayout>
  );
};

export default CodeVerifyScreen;

const styles = StyleSheet.create({
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: '#03DAC6',
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
  },

  underlineStyleHighLighted: {
    borderColor: '#03DAC6',
  },
});
