import React from 'react';

import {RootStackParams} from './types';

// SCRERNS ==>
import OnBoardingScreen from '../screens/OnBoardingScreen';

import MainTabNavigator from './MainTabNavigator';
import {useSelector} from 'react-redux';
import {tokenSelector} from '../redux/feature/auth/authSlice';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ModeSelectScreen from '../screens/ModeSelectScreen';

import LoginMScreen from '../screens/MatrimonyMode/LoginMScreen';
import {RootState} from '../redux';
import {AppMode} from '../constants';
import MainTabNavigatorMat from './MainTabNavigatorMat';
import LoginScreen from '../screens/DatingMode/auth/LoginScreen';
import CodeVerifyScreen from '../screens/DatingMode/auth/CodeVerifyScreen';
import PersonalDetailsScreeen from '../screens/DatingMode/PersonalDetailsScreeen';
import ContactDetailScreen from '../screens/DatingMode/ContactDetailScreen';
import InterestScreen from '../screens/DatingMode/InterestScreen';
import VerifyOtpTwoScreen from '../screens/DatingMode/VerifyOtpTwo';
import AlmostDoneScreen from '../screens/DatingMode/AlmostDoneScreen';
import WelcomeScreen from '../screens/DatingMode/WelcomeScreen';
import CareerDetailScreen from '../screens/DatingMode/CareerDetailScreen';
import BasicGuidelinesScreen from '../screens/DatingMode/BasicGuidelineScreen';
import CreateAccountScreen from '../screens/DatingMode/CreateAccountScreen';
import AddPhotoScreen from '../screens/DatingMode/AddPhotoScreen';
import FirstScreen from '../screens/MatrimonyMode/FirstScreen';
import VerifyOtpMatScreen from '../screens/MatrimonyMode/LoginMScreen/VerifyOtpMatScreen';
import CreateProfileForScreen from '../screens/MatrimonyMode/CreateProfileForScreen';
import CreateAccountMatScreen from '../screens/MatrimonyMode/CreateAccountMat';
import VerifySignupOtpMatScreen from '../screens/MatrimonyMode/CreateAccountMat/VerifySignupOtp';
import BasicDetailScreen from '../screens/MatrimonyMode/CreateAccountMat/BasicDetail';
import CareerDetailMatScreen from '../screens/MatrimonyMode/CreateAccountMat/CareerDetailMat';
import AlmostDoneMat from '../screens/MatrimonyMode/CreateAccountMat/AlmostDoneMat';
import FamilyDetailScreen from '../screens/MatrimonyMode/CreateAccountMat/FamilyDetailScreen';
import SubmitIdScreen from '../screens/MatrimonyMode/CreateAccountMat/SubmitIdScreen';
import IdUploadedScreen from '../screens/MatrimonyMode/CreateAccountMat/IdUploadedScreen';
import PartnerPrefScreen from '../screens/MatrimonyMode/CreateAccountMat/PartnerPrefScreen';
import InterestMatScreen from '../screens/MatrimonyMode/InterestMatScreen';
import AddPhotoMatScreen from '../screens/MatrimonyMode/AddPhotoMatScreen';

const Stack = createNativeStackNavigator<RootStackParams>();

const RootNavigator = ({isFirstTimeOpen}: any) => {
  const token = useSelector(tokenSelector);

  const rootState = useSelector((s: RootState) => s);
  const mode = rootState.auth.mode;

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {!token ? (
        <>
          {isFirstTimeOpen ? (
            <>
              <Stack.Screen name="OnBoarding" component={OnBoardingScreen} />
            </>
          ) : null}
          <Stack.Screen name="ModeSelect" component={ModeSelectScreen} />

          <Stack.Group>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="CodeVerify" component={CodeVerifyScreen} />
            <Stack.Screen
              name="PersonalDetails"
              component={PersonalDetailsScreeen}
            />
            <Stack.Screen
              name="ContactDetail"
              component={ContactDetailScreen}
            />
            <Stack.Screen name="Interest" component={InterestScreen} />
            <Stack.Screen name="VerifyOtpTwo" component={VerifyOtpTwoScreen} />
            <Stack.Screen name="AlmostDone" component={AlmostDoneScreen} />
            <Stack.Screen name="CareerDetail" component={CareerDetailScreen} />
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen
              name="BasicGuidelines"
              component={BasicGuidelinesScreen}
            />
            <Stack.Screen
              name="CreateAccount"
              component={CreateAccountScreen}
            />
            <Stack.Screen name="AddPhoto" component={AddPhotoScreen} />
          </Stack.Group>
          <Stack.Group>
            <Stack.Screen name="First" component={FirstScreen} />
            <Stack.Screen name="LoginM" component={LoginMScreen} />
            <Stack.Screen name="VerifyOtpMat" component={VerifyOtpMatScreen} />
            <Stack.Screen name="BasicDetail" component={BasicDetailScreen} />
            <Stack.Screen name="AlmostDoneMat" component={AlmostDoneMat} />
            <Stack.Screen name="FamilyDetail" component={FamilyDetailScreen} />
            <Stack.Screen name="SubmitId" component={SubmitIdScreen} />
            <Stack.Screen name="IdUploaded" component={IdUploadedScreen} />
            <Stack.Screen name="PartnerPref" component={PartnerPrefScreen} />
            <Stack.Screen name="InterestMat" component={InterestMatScreen} />
            <Stack.Screen name="AddPhotoMat" component={AddPhotoMatScreen} />
            <Stack.Screen
              name="CareerDetailMat"
              component={CareerDetailMatScreen}
            />
            <Stack.Screen
              name="VerifySignupOtp"
              component={VerifySignupOtpMatScreen}
            />
            <Stack.Screen
              name="CreateAccountMat"
              component={CreateAccountMatScreen}
            />
            <Stack.Screen
              name="CreateProfileFor"
              component={CreateProfileForScreen}
            />
          </Stack.Group>
        </>
      ) : (
        <>
          {mode === AppMode.Dating ? (
            <Stack.Screen name="MainTab" component={MainTabNavigator} />
          ) : (
            <Stack.Screen name="MainTabMat" component={MainTabNavigatorMat} />
          )}
        </>
      )}
    </Stack.Navigator>
  );
};

export default RootNavigator;
