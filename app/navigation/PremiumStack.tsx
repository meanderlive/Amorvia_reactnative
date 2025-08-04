import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {EventStackParams, PremiumStackParams} from './types';
import PremiumScreen from '../screens/DatingMode/PremiumInfoScreen';
import PaymentScreen from '../screens/DatingMode/PaymentScreen';
import AddNewCardScreen from '../screens/DatingMode/AddNewCardScreen';
import AddBankScreen from '../screens/DatingMode/AddBankScreen';
import CancelPlanScreen from '../screens/DatingMode/CancelPlanScreen';
import PaymentVerifyOtpScreen from '../screens/DatingMode/PaymentVerifyOtpScreen';

const Stack = createNativeStackNavigator<PremiumStackParams>();
const PremiumStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="PremiumInfo"
      screenOptions={{
        headerShown: false,
      }}>
      {/* <Stack.Screen name="ComingSoon" component={ComingSoonScreen} /> */}
      <Stack.Screen name="PremiumInfo" component={PremiumScreen} />
      <Stack.Screen name="Payment" component={PaymentScreen} />
      <Stack.Screen name="AddNewCard" component={AddNewCardScreen} />
      <Stack.Screen name="AddBank" component={AddBankScreen} />
      <Stack.Screen name="CancelPlan" component={CancelPlanScreen} />
      <Stack.Screen
        name="PaymentVerifyOtp"
        component={PaymentVerifyOtpScreen}
      />
    </Stack.Navigator>
  );
};

export default PremiumStack;
