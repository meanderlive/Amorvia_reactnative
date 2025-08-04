import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import React from 'react';
import MainLayout from '../../../components/MainLayout';
import {BigText, RegularText, SmallText} from '../../../components/MyText';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../navigation/types';
import {COLORS} from '../../../styles';
// ==> images
import HeartSvg from '../../../../assets/images/svg/heart.svg';
import LoginSvg from '../../../../assets/images/svg/login.svg';
import PrimaryBtn from '../../../components/PrimaryBtn';

const LoginScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const [phoneNumber, setPhoneNumber] = React.useState('');

  const handleSendOtp = async () => {
    navigation.navigate('CodeVerify');
  };

  return (
    <MainLayout>
      <ScrollView>
        <LoginSvg
          width={250}
          style={{
            marginTop: 20,
            marginHorizontal: '15%',
          }}
        />
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 10,
          }}>
          <HeartSvg width={45} height={45} />
        </View>

        <View>
          <BigText style={{textAlign: 'center', fontSize: 28, color: 'black'}}>
            Lets start exploring!
          </BigText>
          <SmallText style={{textAlign: 'center', fontSize: 13, marginTop: 10}}>
            Don't lose access to your account, verify
          </SmallText>
          <SmallText style={{textAlign: 'center', fontSize: 13}}>
            your email or phone number
          </SmallText>
        </View>

        <TextInput
          placeholder="Enter your email or phone number"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          style={{
            width: '80%',
            alignSelf: 'center',
            borderRadius: 25,
            borderColor: 'rgba(0,0,0,0.2)',
            borderWidth: 2,
            height: 45,
            marginVertical: 30,
            marginTop: 40,
            paddingLeft: 20,
          }}
        />

        <PrimaryBtn
          containerStyle={{marginHorizontal: 20}}
          onPress={handleSendOtp}
          text="Conitnue"
        />

        <View
          style={{flexDirection: 'row', alignSelf: 'center', marginTop: 15}}>
          <RegularText>Don't have an account? </RegularText>
          <TouchableOpacity
            onPress={() => navigation.navigate('CreateAccount')}>
            <RegularText style={{color: COLORS.secondary}}>Sign up</RegularText>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </MainLayout>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
