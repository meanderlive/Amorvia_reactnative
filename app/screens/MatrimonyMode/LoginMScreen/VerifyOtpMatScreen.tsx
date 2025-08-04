import {StyleSheet, View, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import MainLayout from '../../../components/MainLayout';
import {BigText, RegularText, SmallText} from '../../../components/MyText';
import {useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../navigation/types';
import PrimaryBtn from '../../../components/PrimaryBtn';
import {COLORS} from '../../../styles';
import OtpInputs from 'react-native-otp-inputs';
import {useDispatch} from 'react-redux';
import {setAuth} from '../../../redux/feature/auth/authSlice';

const VerifyOtpMatScreen = () => {
  const [loading, setLoading] = React.useState(false);
  const [otp, setOtp] = useState('');
  const params = useRoute<any>().params;
  const dispatch = useDispatch();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const handleVerifyOtp = async () => {
    // if (!true) {
    dispatch(
      setAuth({
        name: 'GHOST',
        token: 'GHOST_TOKEN',
      }),
    );
    // } else {
    //   //@ts-ignore
    //   navigation.navigate('MainTab', {user: null, accessToken: null});
    // }
  };

  return (
    <MainLayout onBack={navigation.goBack} title="My Code is">
      <>
        <ScrollView>
          <OtpInputs
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
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
            handleChange={code => setOtp(code)}
            numberOfInputs={4}
          />
          <RegularText
            style={{
              marginTop: 10,
              alignSelf: 'center',
              textAlign: 'center',
              marginBottom: 40,
              color: COLORS.grey,
              width: 300,
            }}>
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
            }}>
            <RegularText style={{color: COLORS.secondary}}>Resend</RegularText>
          </TouchableOpacity>
        </ScrollView>
        <View style={{marginBottom: 20}}>
          <PrimaryBtn
            onPress={handleVerifyOtp}
            // onPress={() => navigation.navigate('Welcome')}
            text={'Submit'}
            loading={loading}
            containerStyle={{marginHorizontal: 20, marginBottom: 30}}
          />
        </View>
      </>
    </MainLayout>
  );
};

export default VerifyOtpMatScreen;

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
