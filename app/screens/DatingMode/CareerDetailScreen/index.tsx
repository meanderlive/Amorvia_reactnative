import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Input from '../../../components/Input';
import PrimaryBtn from '../../../components/PrimaryBtn';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../navigation/types';
import MainLayout from '../../../components/MainLayout';
import {MediumText, RegularText} from '../../../components/MyText';
import {SheetManager} from 'react-native-actions-sheet';
import {SHEETS} from '../../../sheets/sheets';
import AntDesign from 'react-native-vector-icons/AntDesign';

const CareerDetailScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <MainLayout onBack={navigation.goBack} title="Career Details">
      <View style={{flex: 1}}>
        <View style={{flex: 1, marginHorizontal: 20}}>
          {/* {EDUCATION} */}
          <View style={{marginBottom: 10}}>
            <MediumText style={{fontSize: 17}}>Education</MediumText>
            <TouchableOpacity
              // onPress={() =>
              //   SheetManager.show(SHEETS.GenderSelectSheet, {
              //     payload: {
              //       onSelect: (v: string) => setSex(v),
              //     },
              //   })
              // }
              style={styles.container}>
              <RegularText style={{color: 'gray'}}>
                {'Higghest Education'}
              </RegularText>
              <AntDesign name="down" size={15} color={'gray'} />
            </TouchableOpacity>
          </View>

          {/* {PROFESSION} */}
          <View style={{marginBottom: 10}}>
            <MediumText style={{fontSize: 17}}>Profession</MediumText>
            <TouchableOpacity
              // onPress={() =>
              //   SheetManager.show(SHEETS.GenderSelectSheet, {
              //     payload: {
              //       onSelect: (v: string) => setSex(v),
              //     },
              //   })
              // }
              style={styles.container}>
              <RegularText style={{color: 'gray'}}>{'Others'}</RegularText>
              <AntDesign name="down" size={15} color={'gray'} />
            </TouchableOpacity>
          </View>
        </View>
        <PrimaryBtn
          onPress={() => navigation.navigate('AddPhoto')}
          containerStyle={{marginBottom: 40, marginHorizontal: 20}}
          text="Next"
        />
      </View>
    </MainLayout>
  );
};

export default CareerDetailScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 35,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});
