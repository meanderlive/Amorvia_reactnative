import {View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {HomeStackParams} from '../../../navigation/types';
import Icon from '../../../../assets/logo/svg/notification.svg';

const Header = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParams>>();
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
      }}>
     <Image style={{ width: 100, height: 40, backgroundColor: 'transparent' }} source={require('../../../../assets/images/AppLogo.png')} />
      {/* <Logoo /> */}
      <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
        <Icon />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
