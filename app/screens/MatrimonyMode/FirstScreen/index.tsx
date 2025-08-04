import {
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
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

const FirstScreen = () => {
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
            marginBottom: 20,
          }}>
          <HeartSvg width={45} height={45} />
        </View>

        <View>
          <BigText
            bold
            style={{
              textAlign: 'center',
              fontSize: 26,
              color: 'black',
              marginBottom: 20,
            }}>
            Lets start exploring!
          </BigText>
        </View>

        <PrimaryBtn
          containerStyle={{marginHorizontal: 20}}
          onPress={() => navigation.navigate('CreateProfileFor')}
          text="Let's Begin"
        />

        <View
          style={{flexDirection: 'row', alignSelf: 'center', marginTop: 15}}>
          <RegularText>Already have an account? </RegularText>
          <TouchableOpacity onPress={() => navigation.navigate('LoginM')}>
            <RegularText style={{color: COLORS.secondary}}>Login</RegularText>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </MainLayout>
  );
};

export default FirstScreen;

const styles = StyleSheet.create({});
