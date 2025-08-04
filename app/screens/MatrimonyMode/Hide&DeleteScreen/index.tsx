import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MatProfileStackParams} from '../../../navigation/types';
import MainLayout from '../../../components/MainLayout';
import {
  MediumText,
  RegularText,
  RegularTextG,
} from '../../../components/MyText';
import AntDesign from 'react-native-vector-icons/AntDesign';
const HideAndDeleteScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<MatProfileStackParams>>();
  return (
    <MainLayout onBack={navigation.goBack} title="Hide / Delete Profile">
      <View style={{flex: 1, padding: 20}}>
        <RegularText style={styles.textLine}>Hide Details</RegularText>
        <TouchableOpacity
          onPress={() => navigation.navigate('HideProfile')}
          style={styles.row}>
          <RegularTextG>Your profile is visible</RegularTextG>
          <AntDesign size={15} name="right" color={'gray'} />
        </TouchableOpacity>

        <View style={{flexDirection: 'row', gap: 5}}>
          <AntDesign
            style={{marginTop: 4}}
            size={20}
            name="infocirlceo"
            color={'gray'}
          />
          <Text>
            When your hide your profile, you will not be visible on Marrier.com.
            You will neither be able to send invitation or messages.
          </Text>
        </View>

        <RegularText style={[styles.textLine, {marginTop: 30}]}>
          Delete Profile
        </RegularText>
        <TouchableOpacity
          onPress={() => navigation.navigate('DeleteProfile')}
          style={styles.row}>
          <RegularTextG>Delete your profile from Marier.com</RegularTextG>
          <AntDesign size={15} name="right" color={'gray'} />
        </TouchableOpacity>

        <View style={{flexDirection: 'row', gap: 5}}>
          <AntDesign
            style={{marginTop: 4}}
            size={20}
            name="infocirlceo"
            color={'gray'}
          />
          <Text>
            You will permanently lose all profile information, match
            interactions and paid memberships.
          </Text>
        </View>
      </View>
    </MainLayout>
  );
};

export default HideAndDeleteScreen;
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  textLine: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    marginBottom: 10,
    paddingBottom: 10,
  },
});
