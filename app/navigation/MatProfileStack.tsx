import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MatProfileStackParams, ProfileStackParams} from './types';
import AccountScreen from '../screens/MatrimonyMode/AccountScreen';
import AccountSettingScreen from '../screens/MatrimonyMode/AccountSettingScreen';
import NotificationScreen from '../screens/MatrimonyMode/NotificationScreen';
import PartnerPrefScreen from '../screens/MatrimonyMode/PartnerPrefScreen';
import EditProfileScreen from '../screens/MatrimonyMode/EditProfileScreen';
import RecentPassesScreen from '../screens/MatrimonyMode/RecentPassesScreen';
import UpdateEmailScreen from '../screens/MatrimonyMode/UpdateEmailScreen';
import FaqsScreen from '../screens/MatrimonyMode/FaqsScreen';
import RateUsScreen from '../screens/MatrimonyMode/RateUsScreen';
import LanguageScreen from '../screens/MatrimonyMode/LanguageScreen';
import EditBasicDetailsScreen from '../screens/MatrimonyMode/EditBasicDetails';
import EditContactDetailsScreen from '../screens/MatrimonyMode/EditContactDetails';
import EditPersonalDetailScreen from '../screens/MatrimonyMode/EditPersonalDetails';
import PrivacySettingScreen from '../screens/MatrimonyMode/PrivacySettingScreen';
import BlockedUsersScreen from '../screens/MatrimonyMode/BlockedUsersScreen';
import TermsAndConditionsScreen from '../screens/MatrimonyMode/TermsAndConditonsScreen';
import PrivacyPolicyScreen from '../screens/MatrimonyMode/PrivacyPolicyScreen';
import HelpSupportScreen from '../screens/MatrimonyMode/HelpSupportScreen';
import WeddingResourceScreen from '../screens/MatrimonyMode/WeddingResourceScreen';
import AstroServicesScreen from '../screens/MatrimonyMode/AstroServices';
import WeddingVenueScreen from '../screens/MatrimonyMode/WeddingVenueScreen';
import WeddingShootScreen from '../screens/MatrimonyMode/WeddingShootScreen';
import WeddingDecorScreen from '../screens/MatrimonyMode/WeddingDecorScreen';
import WeddingMusicScreen from '../screens/MatrimonyMode/WeddingMusicScree.';
import WeddingDressScreen from '../screens/MatrimonyMode/WeddingDressScreen';
import WeddingCakeScreen from '../screens/MatrimonyMode/WeddingCakeScreen';
import DressDetailScreen from '../screens/MatrimonyMode/DressDetailScreen';
import CakeDetailScreen from '../screens/MatrimonyMode/CakeDetailScreen';
import ManageNotificationScreen from '../screens/MatrimonyMode/ManageNotificationScreen';
import HideAndDeleteScreen from '../screens/MatrimonyMode/Hide&DeleteScreen';
import DeleteProfileScreen from '../screens/MatrimonyMode/DeleteProfileScreen';
import HideProfileScreen from '../screens/MatrimonyMode/HideProfileScreen';
import EditEduCareerScreen from '../screens/MatrimonyMode/EditEduCareer';
import EditFamilyDetailScreen from '../screens/MatrimonyMode/EditFamilyDetails';

const Stack = createNativeStackNavigator<MatProfileStackParams>();
const MatProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Account" component={AccountScreen} />
      <Stack.Screen name="AccountSetting" component={AccountSettingScreen} />
      <Stack.Screen name="Notification" component={NotificationScreen} />
      <Stack.Screen name="PartnerPref" component={PartnerPrefScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      <Stack.Screen name="RecentPasses" component={RecentPassesScreen} />
      <Stack.Screen name="UpdateEmail" component={UpdateEmailScreen} />
      <Stack.Screen name="Language" component={LanguageScreen} />
      <Stack.Screen name="RateUs" component={RateUsScreen} />
      <Stack.Screen name="Faqs" component={FaqsScreen} />
      <Stack.Screen name="HelpSupport" component={HelpSupportScreen} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
      <Stack.Screen name="BlockedUsers" component={BlockedUsersScreen} />
      <Stack.Screen name="PrivacySetting" component={PrivacySettingScreen} />
      <Stack.Screen name="WeddingResource" component={WeddingResourceScreen} />
      <Stack.Screen name="AstroServices" component={AstroServicesScreen} />
      <Stack.Screen name="WeddingVenues" component={WeddingVenueScreen} />
      <Stack.Screen name="WeddingShoot" component={WeddingShootScreen} />
      <Stack.Screen name="WeddingDecor" component={WeddingDecorScreen} />
      <Stack.Screen name="WeddingMusic" component={WeddingMusicScreen} />
      <Stack.Screen name="WeddingDress" component={WeddingDressScreen} />
      <Stack.Screen name="WeddingCake" component={WeddingCakeScreen} />
      <Stack.Screen name="DressDetail" component={DressDetailScreen} />
      <Stack.Screen name="CakeDetail" component={CakeDetailScreen} />
      <Stack.Screen name="HideAndDelete" component={HideAndDeleteScreen} />
      <Stack.Screen name="DeleteProfile" component={DeleteProfileScreen} />
      <Stack.Screen name="HideProfile" component={HideProfileScreen} />
      <Stack.Screen name="EditEduCareer" component={EditEduCareerScreen} />
      <Stack.Screen
        name="EditFamilyDetail"
        component={EditFamilyDetailScreen}
      />
      <Stack.Screen
        name="ManageNotification"
        component={ManageNotificationScreen}
      />
      <Stack.Screen
        name="TermsAndConditions"
        component={TermsAndConditionsScreen}
      />
      <Stack.Screen
        name="EditPersonalDetail"
        component={EditPersonalDetailScreen}
      />
      <Stack.Screen
        name="EditContactDetails"
        component={EditContactDetailsScreen}
      />
      <Stack.Screen
        name="EditBasicDetails"
        component={EditBasicDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default MatProfileStack;
