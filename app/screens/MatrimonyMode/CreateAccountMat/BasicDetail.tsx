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

const BasicDetailScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const [casteCheck, setCasteCheck] = useState(false);
  const [height, setHeight] = useState('Select');
  const [diet, setDiet] = useState('Select');
  const [motherTongue, setMotherTongue] = useState('Select');
  const [maritalStatus, setMaritalStatus] = useState('Select');
  const [caste, setCaste] = useState('Select');
  const [religion, setReligion] = useState('Select');
  const [horoscope, setHoroscope] = useState('Select');
  return (
    <MainLayout title="Basic Details" onBack={navigation.goBack}>
      <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
        <View style={{marginHorizontal: 20, marginTop: 30}}>
          {/* {DIET} */}
          <View style={{marginBottom: 10}}>
            <MediumText style={{fontSize: 17}}>Your Diet</MediumText>
            <TouchableOpacity
              onPress={() =>
                SheetManager.show(SHEETS.DietSelectSheet, {
                  payload: {
                    onSelect: (d: string) => setDiet(d),
                  },
                })
              }
              style={styles.container}>
              <RegularText style={{color: 'gray'}}>{diet}</RegularText>
              <AntDesign name="down" size={15} color={'gray'} />
            </TouchableOpacity>
          </View>
          {/* {HEIGHT} */}
          <View style={{marginBottom: 10}}>
            <MediumText style={{fontSize: 17}}>Height</MediumText>
            <TouchableOpacity
              onPress={() =>
                SheetManager.show(SHEETS.HeightSelectSheet, {
                  payload: {
                    onSelect: (h: string) => setHeight(h),
                  },
                })
              }
              style={styles.container}>
              <RegularText style={{color: 'gray'}}>{height}</RegularText>
              <AntDesign name="down" size={15} color={'gray'} />
            </TouchableOpacity>
          </View>
          {/* {MARITAL STATUS} */}
          <View style={{marginBottom: 10}}>
            <MediumText style={{fontSize: 17}}>Marital Status</MediumText>
            <TouchableOpacity
              onPress={() =>
                SheetManager.show(SHEETS.MaritalStatusSheet, {
                  payload: {
                    onSelect: (m: string) => setMaritalStatus(m),
                  },
                })
              }
              style={styles.container}>
              <RegularText style={{color: 'gray'}}>{maritalStatus}</RegularText>
              <AntDesign name="down" size={15} color={'gray'} />
            </TouchableOpacity>
          </View>
          {/* {Mother Toungue} */}
          <View style={{marginBottom: 10}}>
            <MediumText style={{fontSize: 17}}>Mother Tongue</MediumText>
            <TouchableOpacity
              onPress={() =>
                SheetManager.show(SHEETS.MotherTongueSheet, {
                  payload: {
                    onSelect: (t: string) => setMotherTongue(t),
                  },
                })
              }
              style={styles.container}>
              <RegularText style={{color: 'gray'}}>{motherTongue}</RegularText>
              <AntDesign name="down" size={15} color={'gray'} />
            </TouchableOpacity>
          </View>
          {/* {RELIGION} */}
          <View style={{marginBottom: 10}}>
            <MediumText style={{fontSize: 17}}>Religion</MediumText>
            <TouchableOpacity
              onPress={() =>
                SheetManager.show(SHEETS.ReligionSheet, {
                  payload: {
                    onSelect: (r: string) => setReligion(r),
                  },
                })
              }
              style={styles.container}>
              <RegularText style={{color: 'gray'}}>{religion}</RegularText>
              <AntDesign name="down" size={15} color={'gray'} />
            </TouchableOpacity>
          </View>
          {/* {CASTE} */}
          <View style={{marginBottom: 10}}>
            <MediumText style={{fontSize: 17}}>Caste</MediumText>
            <TouchableOpacity
              onPress={() =>
                SheetManager.show(SHEETS.CasteSheet, {
                  payload: {
                    onSelect: (c: string) => setCaste(c),
                  },
                })
              }
              style={styles.container}>
              <RegularText style={{color: 'gray'}}>{caste}</RegularText>
              <AntDesign name="down" size={15} color={'gray'} />
            </TouchableOpacity>
          </View>
          {/* {} */}
          <View
            style={{
              flexDirection: 'row',
              gap: 10,
              alignItems: 'center',
              marginBottom: 15,
            }}>
            <TouchableOpacity
              onPress={() => setCasteCheck(!casteCheck)}
              style={styles.check}>
              {casteCheck ? (
                <Feather name="check" size={22} color="white" />
              ) : null}
            </TouchableOpacity>
            <View>
              <Text style={{color: COLORS.primary}}>Caste no bar</Text>
              <Text style={{fontSize: 12}}>
                I am open to mary people of all castes
              </Text>
            </View>
          </View>
          {/* {HOROSCOPE} */}
          <View style={{marginBottom: 10}}>
            <MediumText style={{fontSize: 17}}>Horoscope</MediumText>
            <TouchableOpacity
              onPress={() =>
                SheetManager.show(SHEETS.HoroscopeSheet, {
                  payload: {
                    onSelect: (h: string) => setHoroscope(h),
                  },
                })
              }
              style={styles.container}>
              <RegularText style={{color: 'gray'}}>{horoscope}</RegularText>
              <AntDesign name="down" size={15} color={'gray'} />
            </TouchableOpacity>
          </View>
          {/* {} */}
        </View>
        <PrimaryBtn
          onPress={() => navigation.navigate('CareerDetailMat')}
          containerStyle={{marginVertical: 30, marginHorizontal: 20}}
          text="Next"
        />
      </ScrollView>
    </MainLayout>
  );
};

export default BasicDetailScreen;

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
