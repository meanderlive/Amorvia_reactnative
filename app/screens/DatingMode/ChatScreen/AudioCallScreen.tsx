import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS} from '../../../styles';
import {BigText, MediumText, RegularText} from '../../../components/MyText';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ChatStackParams} from '../../../navigation/types';

const AudioCallScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<ChatStackParams>>();
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          height: 200,
          width: 200,
          borderRadius: 100,
          marginTop: 120,
          alignSelf: 'center',
          borderWidth: 2,
          borderColor: '#02BC49',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={{borderRadius: 100, width: 185, height: 185}}
          source={require('../../../components/SwipeCard/assets/img2.jpg')}
        />
      </View>
      <BigText style={{textAlign: 'center', marginTop: 15}}>
        Dennis Steele, 23
      </BigText>
      <RegularText
        style={{
          margin: 10,
          textAlign: 'center',
          color: COLORS.grey,
        }}>
        Calling...
      </RegularText>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 20,
          marginTop: 150,
        }}>
        <TouchableOpacity style={styles.btn}>
          <Ionicons name="call-sharp" size={35} color={COLORS.white} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, {backgroundColor: 'lightgray'}]}>
          <FontAwesome name="volume-up" size={40} color={COLORS.black} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={[styles.btn, {backgroundColor: '#ED1B24'}]}>
          <Entypo name="cross" size={50} color={COLORS.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AudioCallScreen;

const styles = StyleSheet.create({
  btn: {
    height: 80,
    width: 80,
    borderRadius: 60,
    backgroundColor: '#02BC49',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
