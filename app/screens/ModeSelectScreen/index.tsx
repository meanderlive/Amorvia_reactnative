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
import MainLayout from '../../components/MainLayout';
import {BigText, RegularText, SmallText} from '../../components/MyText';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation/types';
import {COLORS} from '../../styles';
// ==> images
import HeartSvg from '../../../assets/images/svg/heart.svg';
import LoginSvg from '../../../assets/images/svg/login.svg';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../redux';
import {AppMode} from '../../constants';
import {changeAppMode} from '../../redux/feature/auth/authSlice';

const ModeSelectScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const mode = useSelector((s: RootState) => s.auth.mode);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <MainLayout>
      <ScrollView style={{marginHorizontal: 20}}>
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
            Choose Mode!
          </BigText>
          <SmallText style={{textAlign: 'center', fontSize: 13, marginTop: 10}}>
            Find like minded people to connect with.
          </SmallText>
          <SmallText style={{textAlign: 'center', fontSize: 13}}>
            See who you like and who likes you and connect with them
          </SmallText>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity
            onPress={() => {
              dispatch(changeAppMode(AppMode.Dating)),
                navigation.navigate('Login');
            }}
            style={styles.btn}>
            <RegularText style={{color: 'white'}}>Dating</RegularText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              dispatch(changeAppMode(AppMode.Matrimony)),
                navigation.navigate('First');
            }}
            style={styles.btn}>
            <RegularText style={{color: 'white'}}>Matrimony</RegularText>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </MainLayout>
  );
};

export default ModeSelectScreen;

const styles = StyleSheet.create({
  btn: {
    // backgroundColor: COLORS.primary,
    backgroundColor: '#25D366',
    borderRadius: 50,
    width: '48%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    marginTop: 50,
  },
});
