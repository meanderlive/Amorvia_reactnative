import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProfileStackParams} from './types';
import ProfileScreen from '../screens/DatingMode/profile/ProfileScreen';
import EditProfileScreen from '../screens/DatingMode/profile/EditProfileScreen';
import UpdateInterestScreen from '../screens/DatingMode/UpdateInterest';
import SettingScreen from '../screens/DatingMode/profile/SettingScreen';
import SettingsScreen from '../screens/DatingMode/SettingsScreen';
import MyPhotosScreen from '../screens/DatingMode/MyPhotosScreen';
import PrivacySettingScreen from '../screens/DatingMode/PrivacySettingScreen';
import RecentPassesScreen from '../screens/DatingMode/RecentPassesScreen';
import HelpSupportScreen from '../screens/DatingMode/HelpSupportScreen';
import BlockedUsersScreen from '../screens/DatingMode/BlockedUsersScreen';
import FaqScreen from '../screens/DatingMode/FaqScreen';
import ActivityHistoryScreen from '../screens/DatingMode/ActivityHistoryScreen';
import NotificationScreen from '../screens/DatingMode/NotificationScreen';
import AccountSettingScreen from '../screens/DatingMode/AccountSettingScreen';
import UpdateEmailScreen from '../screens/DatingMode/UpdateEmailScreen';
import LanguageScreen from '../screens/DatingMode/LanguageScreen';
import ComingSoonScreen from '../screens/DatingMode/ComingSoonScreen';
import FavoritesScreen from '../screens/DatingMode/Favouities';
import TravelModeScreen from '../screens/DatingMode/TravelModeScreen';
import RateUsScreen from '../screens/DatingMode/RateUsScreen';
import PremiumScreen from '../screens/DatingMode/PremiumInfoScreen';
import TermsAndConditionsScreen from '../screens/DatingMode/TermsAndConditonsScreen';
import ManageNotificationScreen from '../screens/DatingMode/ManageNotificationScreen';
import FaqsScreen from '../screens/DatingMode/FaqsScreen';
import PrivacyPolicyScreen from '../screens/DatingMode/PrivacyPolicyScreen';

const Stack = createNativeStackNavigator<ProfileStackParams>();
const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      <Stack.Screen name="UpdateInterest" component={UpdateInterestScreen} />
      <Stack.Screen name="Setting" component={SettingScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="MyPhotos" component={MyPhotosScreen} />
      <Stack.Screen name="PrivacySetting" component={PrivacySettingScreen} />
      <Stack.Screen name="RecentPasses" component={RecentPassesScreen} />
      <Stack.Screen name="HelpSupport" component={HelpSupportScreen} />
      <Stack.Screen name="BlockedUsers" component={BlockedUsersScreen} />
      <Stack.Screen name="AccountSetting" component={AccountSettingScreen} />
      <Stack.Screen name="UpdateEmail" component={UpdateEmailScreen} />
      <Stack.Screen name="Language" component={LanguageScreen} />
      <Stack.Screen name="RateUs" component={RateUsScreen} />
      <Stack.Screen name="Faq" component={FaqScreen} />
      <Stack.Screen name="ActivityHistory" component={ActivityHistoryScreen} />
      <Stack.Screen name="PremiumInfo" component={PremiumScreen} />
      <Stack.Screen name="Notification" component={NotificationScreen} />
      <Stack.Screen name="Faqs" component={FaqsScreen} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />

      <Stack.Screen name="ComingSoon" component={ComingSoonScreen} />
      <Stack.Screen name="Favorites" component={FavoritesScreen} />
      <Stack.Screen name="TravelMode" component={TravelModeScreen} />
      <Stack.Screen
        name="TermsAndConditions"
        component={TermsAndConditionsScreen}
      />
      <Stack.Screen
        name="ManageNotification"
        component={ManageNotificationScreen}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
