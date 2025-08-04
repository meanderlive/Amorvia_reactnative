import {View, Text} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {RegularText, RegularTextG, SmallText} from '../../../components/MyText';
import Octicons from 'react-native-vector-icons/Octicons';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ProfileStackParams} from '../../../navigation/types';
import {useNavigation} from '@react-navigation/native';

const About = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<ProfileStackParams>>();
  return (
    <View style={{marginHorizontal: 20}}>
      <View style={styles.row}>
        <RegularText bold>About</RegularText>
        <Octicons
          onPress={() => navigation.navigate('EditProfile')}
          name="pencil"
          size={20}
          color="gray"
        />
      </View>
      <RegularTextG style={{marginRight: 22, marginBottom: 10}}>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here',
      </RegularTextG>
      <View style={styles.row}>
        <RegularText bold>Basic Details</RegularText>
        <Octicons
          onPress={() => navigation.navigate('EditProfile')}
          name="pencil"
          size={20}
          color="gray"
        />
      </View>

      <View
        style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
        <RegularTextG style={{width: 120}}>Name</RegularTextG>
        <RegularText>John Doe</RegularText>
      </View>
      <View
        style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
        <RegularTextG style={{width: 120}}>Date of Birth</RegularTextG>
        <RegularText>August 19, 1999</RegularText>
      </View>
      <View
        style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
        <RegularTextG style={{width: 120}}>Gender</RegularTextG>
        <RegularText>Male</RegularText>
      </View>
    </View>
  );
};

export default About;
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
  },
});
