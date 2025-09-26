import { View, Text, Image, Alert } from 'react-native';
import React from 'react';
import MainLayout from '../../../components/MainLayout';
import { BigText, MediumText } from '../../../components/MyText';
import PrimaryBtn from '../../../components/PrimaryBtn';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../../../navigation/types';
<<<<<<< Updated upstream
import { useDispatch } from 'react-redux';
import { setAuth } from '../../../redux/feature/auth/authSlice';
=======
>>>>>>> Stashed changes

type BasicGuidelinesScreenRouteProp = RouteProp<
  RootStackParams,
  'BasicGuidelines'
>;

const BasicGuidelinesScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
<<<<<<< Updated upstream
  const dispatch = useDispatch();
  const route = useRoute<BasicGuidelinesScreenRouteProp>();
  const { userName, token } = route.params;

  const handleSubmit = async () => {
    if (true) {
    dispatch(
      setAuth({
        name: userName,
        token: token,
      }),
    );
    } else {
   Alert.alert("We CANT LOGIN BECAUSE THERE IS AN ISSUE ")
=======
  const route = useRoute<BasicGuidelinesScreenRouteProp>();
  const { userName, token, userData } = route.params;

  const handleSubmit = async () => {
    try {
      // Just navigate to MainTab - auth state is already set in CodeVerifyScreen
      navigation.reset({
        index: 0,
        routes: [{ name: 'MainTab' }],
      });
    } catch (error) {
      console.error('Navigation error:', error);
      Alert.alert('Error', 'Failed to navigate to the main screen');
>>>>>>> Stashed changes
    }
  };
  return (
    <MainLayout>
      <View style={{ flex: 1 }}>
        <View style={{ alignItems: 'center', gap: 10, marginBottom: 80 }}>
          <BigText style={{ marginBottom: 20 }}>Start with the basics</BigText>
          <MediumText>Swipe right on profiles you like</MediumText>
          <Image
            style={{ marginTop: 10 }}
            source={require('../../../../assets/logo/likeLogos.png')}
          />
          <MediumText>Swipe left on profiles you dislike</MediumText>

          {/* <Image
            style={{marginTop: 10}}
            source={require('../../../../assets/logo/dislikeLogos.png')}
          /> */}
          <MediumText>Tap to see profile photos</MediumText>
          <Image
            style={{ marginTop: 15 }}
            source={require('../../../../assets/logo/tapLogo.png')}
          />
        </View>

        <PrimaryBtn
          onPress={handleSubmit}
          text="Continue"
          containerStyle={{ marginHorizontal: 20 }}
        />
      </View>
    </MainLayout>
  );
};

export default BasicGuidelinesScreen;
