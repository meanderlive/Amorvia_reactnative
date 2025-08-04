import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {RegularText, RegularTextG} from '../../../components/MyText';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import PrimaryBtn from '../../../components/PrimaryBtn';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {HomeStackParams} from '../../../navigation/types';

const Details = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParams>>();
  return (
    <View style={{marginTop: 25, paddingHorizontal: 5}}>
      <View style={styles.row}>
        <Image
          style={{height: 50, width: 50, borderRadius: 50}}
          source={require('../../../components/SwipeCard/assets/img2.jpg')}
        />
        <RegularText> John's Birth Chart</RegularText>
      </View>

      <View style={styles.row2}>
        <View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <RegularTextG>Date of Birth</RegularTextG>
            <FontAwesome5 name="crown" size={13} color="#FFBB37" />
          </View>
          <RegularText style={{marginTop: 5}}>**/**/****</RegularText>
        </View>
        <View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <RegularTextG>Time of Birth</RegularTextG>
            <FontAwesome5 name="crown" size={13} color="#FFBB37" />
          </View>
          <RegularText style={{marginTop: 5}}>**:**</RegularText>
        </View>
      </View>

      <View style={{marginBottom: 15}}>
        <RegularTextG style={{marginBottom: 5}}>Place of Birth</RegularTextG>
        <RegularText>California, USA</RegularText>
      </View>

      <View style={styles.row2}>
        <View>
          <RegularTextG style={{marginBottom: 5}}>Nakshatra</RegularTextG>
          <RegularText>Ashwini</RegularText>
        </View>
        <View>
          <RegularTextG>Manglik</RegularTextG>
          <RegularText>Don't know</RegularText>
        </View>
      </View>

      <View style={{marginBottom: 15}}>
        <RegularTextG style={{marginBottom: 5}}>Rashi</RegularTextG>
        <RegularText>Aries (Mesh)</RegularText>
      </View>

      <View style={styles.row}>
        <FontAwesome5 name="crown" size={13} color="#FFBB37" />
        <RegularText>These are visible only to Premium users.</RegularText>
      </View>
      <PrimaryBtn
        onPress={() => navigation.goBack()}
        text="Connect"
        containerStyle={{marginVertical: 20}}
      />
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
  },
  row2: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 15,
  },
});
