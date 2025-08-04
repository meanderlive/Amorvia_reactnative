import {View, Text, Image} from 'react-native';
import React from 'react';
import MainLayout from '../../../components/MainLayout';
import {BigText, MediumText} from '../../../components/MyText';
import PrimaryBtn from '../../../components/PrimaryBtn';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../navigation/types';
import {useDispatch} from 'react-redux';
import {setAuth} from '../../../redux/feature/auth/authSlice';

const BasicGuidelinesScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const dispatch = useDispatch();

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
    <MainLayout>
      <View style={{flex: 1}}>
        <View style={{alignItems: 'center', gap: 10, marginBottom: 80}}>
          <BigText style={{marginBottom: 20}}>Start with the basics</BigText>
          <MediumText>Swipe right on profiles you like</MediumText>
          <Image
            style={{marginTop: 10}}
            source={require('../../../../assets/logo/likeLogos.png')}
          />
          <MediumText>Swipe left on profiles you dislike</MediumText>

          <Image
            style={{marginTop: 10}}
            source={require('../../../../assets/logo/dislikeLogos.png')}
          />
          <MediumText>Tap to see profile photos</MediumText>
          <Image
            style={{marginTop: 15}}
            source={require('../../../../assets/logo/tapLogo.png')}
          />
        </View>

        <PrimaryBtn
          // onPress={() => navigation.navigate('MainTab')}
          onPress={handleVerifyOtp}
          text="Continue"
          containerStyle={{marginHorizontal: 20}}
        />
      </View>
    </MainLayout>
  );
};
`   `;

export default BasicGuidelinesScreen;
