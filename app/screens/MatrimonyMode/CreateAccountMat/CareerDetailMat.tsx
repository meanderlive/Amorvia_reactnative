import {
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';
import React, {useState} from 'react';
import {
  MediumText,
  RegularText,
  RegularTextG,
  Text30,
} from '../../../components/MyText';
import Input from '../../../components/Input';
import PrimaryBtn from '../../../components/PrimaryBtn';
import DatePicker from 'react-native-date-picker';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../navigation/types';
import {SheetManager} from 'react-native-actions-sheet';
import {SHEETS} from '../../../sheets/sheets';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {COLORS} from '../../../styles';
import MainLayout from '../../../components/MainLayout';

const CareerDetailMatScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const [education, setEducation] = useState('Select');
  const [experience, setExperience] = useState('Select');
  const [occupation, setOccupation] = useState('Select');
  const [income, setIncome] = useState('Select');
  return (
    <MainLayout onBack={navigation.goBack} title="Career Details">
      <View style={{flex: 1}}>
        <View style={{flex: 1, marginHorizontal: 20}}>
          {/* {EDUCATION} */}
          <View style={{marginBottom: 10, marginTop: 20}}>
            <MediumText style={{fontSize: 17}}>Education</MediumText>
            <TouchableOpacity
              onPress={() =>
                SheetManager.show(SHEETS.EducationSheet, {
                  payload: {
                    onSelect: (ed: string) => setEducation(ed),
                  },
                })
              }
              style={styles.container}>
              <RegularText style={{color: 'gray'}}>{education}</RegularText>
              <AntDesign name="down" size={15} color={'gray'} />
            </TouchableOpacity>
          </View>
          {/* {EXP} */}
          <View style={{marginBottom: 10}}>
            <MediumText style={{fontSize: 17}}>Work Experience</MediumText>
            <TouchableOpacity
              onPress={() =>
                SheetManager.show(SHEETS.OccupationSheet, {
                  payload: {
                    onSelect: (e: string) => setExperience(e),
                  },
                })
              }
              style={styles.container}>
              <RegularText style={{color: 'gray'}}>{experience}</RegularText>
              <AntDesign name="down" size={15} color={'gray'} />
            </TouchableOpacity>
          </View>
          {/* {OCCUPATION} */}
          <View style={{marginBottom: 10}}>
            <MediumText style={{fontSize: 17}}>Occupation</MediumText>
            <TouchableOpacity
              onPress={() =>
                SheetManager.show(SHEETS.OccupationSheet, {
                  payload: {
                    onSelect: (o: string) => setOccupation(o),
                  },
                })
              }
              style={styles.container}>
              <RegularText style={{color: 'gray'}}>{occupation}</RegularText>
              <AntDesign name="down" size={15} color={'gray'} />
            </TouchableOpacity>
          </View>
          {/* {INCOME} */}
          <View style={{marginBottom: 10}}>
            <MediumText style={{fontSize: 17}}>Income</MediumText>
            <TouchableOpacity
              onPress={() =>
                SheetManager.show(SHEETS.IncomeSheet, {
                  payload: {
                    onSelect: (o: string) => setIncome(o),
                  },
                })
              }
              style={styles.container}>
              <RegularText style={{color: 'gray'}}>{income}</RegularText>
              <AntDesign name="down" size={15} color={'gray'} />
            </TouchableOpacity>
          </View>
          {/* {} */}
        </View>
        <PrimaryBtn
          onPress={() => navigation.navigate('AlmostDoneMat')}
          containerStyle={{marginBottom: 40, marginHorizontal: 20}}
          text="Next"
        />
      </View>
    </MainLayout>
  );
};

export default CareerDetailMatScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 45,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  check: {
    borderRadius: 7,
    height: 30,
    width: 30,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
