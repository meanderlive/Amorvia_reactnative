import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Img from '../../../../assets/images/Error.svg';
import {BigText, RegularText, RegularTextG} from '../../../components/MyText';
import PrimaryBtn from '../../../components/PrimaryBtn';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {DiscoverStackParams} from '../../../navigation/types';

const ErrorScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<DiscoverStackParams>>();
  return (
    <View style={{flex: 1, paddingHorizontal: 20}}>
      <View style={{alignItems: 'center', marginTop: 100}}>
        <Img />
        <BigText style={{marginVertical: 10, marginTop: 25}} bold>
          404 Error
        </BigText>
        <RegularTextG>Seems like what you are looking for</RegularTextG>
        <RegularTextG>isn't available</RegularTextG>
      </View>
      <PrimaryBtn
        onPress={() => navigation.navigate('ConnectionLost')}
        containerStyle={{marginVertical: 20}}
        text="Try Agian"
      />
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{alignSelf: 'center'}}>
        <RegularText bold>Go Home</RegularText>
      </TouchableOpacity>
    </View>
  );
};

export default ErrorScreen;
