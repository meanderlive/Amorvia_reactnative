import {View, Text} from 'react-native';
import React from 'react';
import Img from '../../../../assets/images/ConnectionLost.svg';
import {BigText} from '../../../components/MyText';
import PrimaryBtn from '../../../components/PrimaryBtn';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {DiscoverStackParams} from '../../../navigation/types';

const ConnectionLostScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<DiscoverStackParams>>();
  return (
    <View style={{flex: 1, paddingHorizontal: 20}}>
      <View style={{alignItems: 'center', marginTop: 120}}>
        <Img />
        <BigText style={{marginVertical: 10, marginTop: 35}} bold>
          Connection Lost
        </BigText>
        <Text
          style={{fontSize: 16, paddingHorizontal: 30, textAlign: 'center'}}>
          Seems like you are not connected to the internet. Check your
          connection and try again.
        </Text>
      </View>
      <PrimaryBtn
        onPress={() => navigation.navigate('Discover')}
        containerStyle={{marginTop: 30}}
        text="Try Agian"
      />
    </View>
  );
};

export default ConnectionLostScreen;
