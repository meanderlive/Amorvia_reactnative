import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  Platform,
} from 'react-native';
import React, {memo} from 'react';
import {RegularText, RegularTextG, SmallText} from '../../MyText';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {COLORS} from '../../../styles';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {DiscoverStackParams} from '../../../navigation/types';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');
type Props = {
  isFirst: boolean;
  name: string;
};
const InfoBox = memo(({isFirst, name}: Props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<DiscoverStackParams>>();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('UsersProfile');
      }}
      style={{
        // position: 'absolute',
        width: '70%',
        top: Platform.OS === 'ios' ? 458 : 510,
        // zIndex: 1,
        alignSelf: 'center',
        borderRadius: 20,
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 7,
      }}>
      <View style={[styles.row, {gap: 10}]}>
        <Octicons name="shield-check" size={22} color={COLORS.primary} />
        <RegularText style={{textAlign: 'center', fontSize: 16}}>
          {name}, 23
        </RegularText>
        <FontAwesome5 name="crown" size={22} color="#FFBB37" />
      </View>
      <View style={styles.row}>
        <RegularTextG style={{marginRight: 5}}>Art Manager</RegularTextG>
        <Entypo name="location-pin" size={15} color={COLORS.primary} />
        <RegularText style={{fontSize: 14, color: COLORS.grey}}>
          10 miles
        </RegularText>
      </View>
      <View style={styles.row}>
        <Entypo name="dot-single" size={29} color="#64DD17" />

        <SmallText
          style={{
            textAlign: 'center',
            color: COLORS.grey,
            fontSize: 11,
          }}>
          Active 2 hours ago.
        </SmallText>
      </View>
    </TouchableOpacity>
  );
});

export default InfoBox;
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
