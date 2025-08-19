import { View } from 'react-native';
import React, { useState } from 'react';
import MainLayout from '../../../components/MainLayout';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../../../navigation/types';
import Input from '../../../components/Input';
import PrimaryBtn from '../../../components/PrimaryBtn';

const ContactDetailScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
      const [email, setEmail] = useState("john@example.com");
      const [password, setpassword] = useState("");
      const [confirmPassword, setconfirmPassword] = useState("");
      const route = useRoute<RouteProp<RootStackParams, 'ContactDetail'>>();
      const { payload } = route.params;




const newPayload={
  ...payload,
  email:email,
  password:password,
  confirmPassword:confirmPassword,
}


  return (
    <MainLayout onBack={navigation.goBack} title="Contact Details">
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, marginHorizontal: 20 }}>
          <Input label="Email" onChangeText={setEmail} placeholder="john@example.com" />
          <Input label="Phone" placeholder="+1 123 456 789" />
          <Input label="Password" placeholder='enter password ' onChangeText={setpassword} secureTextEntry/>
          <Input label="confirm Password" onChangeText={setconfirmPassword} placeholder='enter confirm password ' />
        </View>
        <PrimaryBtn
          onPress={() => navigation.navigate('AlmostDone',{ newPayload })}
          containerStyle={{ marginBottom: 40, marginHorizontal: 20 }}
          text="Continue"
        />
      </View>
    </MainLayout>
  );
};

export default ContactDetailScreen;
