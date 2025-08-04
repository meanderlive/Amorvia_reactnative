import {
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';
import Foundation from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../../../styles';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ProfileStackParams} from '../../../navigation/types';
import {SheetManager} from 'react-native-actions-sheet';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {SHEETS} from '../../../sheets/sheets';
import {api_getCurrent, api_updateProfile} from '../../../api/user';
import {useDispatch, useSelector} from 'react-redux';
import {updateUser} from '../../../redux/feature/auth/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LOCAL_KEYS, onShare} from '../../../utils/helper';
import MainLayout from '../../../components/MainLayout';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {BigText, RegularText} from '../../../components/MyText';
import Line from '../../../components/Line';

const Details = () => {
  return (
    <View>
      <View style={[styles.onlineStatus, {width: 85, gap: 0}]}>
        <Entypo name="dot-single" size={30} color="#02BC49" />
        <Text style={{color: '#02BC49', marginRight: 5}}>Online</Text>
      </View>
      <BigText bold style={{textAlign: 'center'}}>
        John Deo
      </BigText>
      <View
        style={{
          flexDirection: 'row',
          gap: 5,
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 20,
        }}>
        <RegularText style={{color: 'gray'}}>Software engineer</RegularText>

        <Octicons
          style={{marginLeft: 15}}
          name="share"
          size={24}
          color={COLORS.lightBlue}
        />
        <TouchableOpacity onPress={onShare}>
          <RegularText style={{color: COLORS.lightBlue}}>
            Share profile
          </RegularText>
        </TouchableOpacity>
      </View>
      <View style={styles.onlineStatus}>
        <Foundation name="crown" size={24} color="#F9A000" />
        <Text style={{color: '#F9A000'}}>Upgrade</Text>
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  onlineStatus: {
    backgroundColor: 'white',
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    height: 28,
    marginBottom: 5,
    marginTop: -10,
    paddingHorizontal: 15,
    gap: 10,
  },
  img: {
    resizeMode: 'contain',
    height: 135,
    width: 135,
    borderRadius: 135,
    right: 1,
  },
});
