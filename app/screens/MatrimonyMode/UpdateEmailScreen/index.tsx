import {View, TouchableOpacity, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ProfileStackParams} from '../../../navigation/types';
import MainLayout from '../../../components/MainLayout';
import {RegularText} from '../../../components/MyText';
import PrimaryBtn from '../../../components/PrimaryBtn';
import SecondaryBtn from '../../../components/SecondaryBtn';
import Input from '../../../components/Input';

const UpdateEmailScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<ProfileStackParams>>();
  return (
    <MainLayout onBack={navigation.goBack} title="Email">
      <View style={{flex: 1, paddingHorizontal: 20}}>
        <Input label="Email" placeholder="johnsmith@gmail.com" />

        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'space-between',
            marginTop: 50,
          }}>
          <View style={{width: '48%'}}>
            <SecondaryBtn onPress={() => navigation.goBack()} text="Cancel" />
          </View>
          <View style={{width: '48%'}}>
            <PrimaryBtn onPress={() => navigation.goBack()} text="Submit" />
          </View>
        </View>
      </View>
    </MainLayout>
  );
};

export default UpdateEmailScreen;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.06)',
    marginBottom: 20,
  },
});
