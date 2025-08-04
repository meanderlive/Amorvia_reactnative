import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import MainLayout from '../../../components/MainLayout';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../navigation/types';
import PrimaryBtn from '../../../components/PrimaryBtn';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  BigText,
  MediumText,
  RegularText,
  RegularTextG,
} from '../../../components/MyText';
import {SheetManager} from 'react-native-actions-sheet';
import {SHEETS} from '../../../sheets/sheets';

const PartnerPrefScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const [minAge, setMinAge] = useState('Select');
  const [maxAge, setMaxAge] = useState('Select');
  const [minHeight, setMinHeight] = useState('Select');
  const [maxHeight, setMaxHeight] = useState('Select');
  const [country, setCountry] = useState('Select');
  const [professionalStatus, setProfessionalStatus] = useState('Select');
  const [maritalStatus, setMaritalStatus] = useState('Select');
  const [caste, setCaste] = useState('Select');
  const [religion, setReligion] = useState('Select');

  return (
    <MainLayout
      title="Partner Preference"
      onBack={navigation.goBack}
      rightSideIcon={() => {
        return (
          <TouchableOpacity onPress={() => navigation.navigate('InterestMat')}>
            <RegularTextG>Skip</RegularTextG>
          </TouchableOpacity>
        );
      }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{flex: 1, marginHorizontal: 20}}>
        <View>
          {/* {AGE} */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 20,
              marginBottom: 10,
              width: '100%',
            }}>
            {/* {MinAge} */}
            <View style={{width: '48%'}}>
              <MediumText style={{fontSize: 17}}>Min Age</MediumText>
              <TouchableOpacity
                onPress={() =>
                  SheetManager.show(SHEETS.AgeSelectSheet, {
                    payload: {
                      onSelect: (min: string) => setMinAge(min),
                    },
                  })
                }
                style={styles.container}>
                <RegularText style={{color: 'gray'}}>{minAge}</RegularText>
                <AntDesign name="down" size={15} color={'gray'} />
              </TouchableOpacity>
            </View>
            {/* {MAX AGE} */}
            <View style={{width: '48%'}}>
              <MediumText style={{fontSize: 17}}>Max Age</MediumText>
              <TouchableOpacity
                onPress={() =>
                  SheetManager.show(SHEETS.AgeSelectSheet, {
                    payload: {
                      onSelect: (max: string) => setMaxAge(max),
                    },
                  })
                }
                style={styles.container}>
                <RegularText style={{color: 'gray'}}>{maxAge}</RegularText>
                <AntDesign name="down" size={15} color={'gray'} />
              </TouchableOpacity>
            </View>
          </View>
          {/* {HEIGHT} */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 10,
              width: '100%',
            }}>
            {/* {MinAge} */}
            <View style={{width: '48%'}}>
              <MediumText style={{fontSize: 17}}>Min Height</MediumText>
              <TouchableOpacity
                onPress={() =>
                  SheetManager.show(SHEETS.HeightSelectSheet, {
                    payload: {
                      onSelect: (minh: string) => setMinHeight(minh),
                    },
                  })
                }
                style={styles.container}>
                <RegularText style={{color: 'gray'}}>{minHeight}</RegularText>
                <AntDesign name="down" size={15} color={'gray'} />
              </TouchableOpacity>
            </View>
            {/* {MAX AGE} */}
            <View style={{width: '48%'}}>
              <MediumText style={{fontSize: 17}}>Max Height</MediumText>
              <TouchableOpacity
                onPress={() =>
                  SheetManager.show(SHEETS.HeightSelectSheet, {
                    payload: {
                      onSelect: (minh: string) => setMaxHeight(minh),
                    },
                  })
                }
                style={styles.container}>
                <RegularText style={{color: 'gray'}}>{maxHeight}</RegularText>
                <AntDesign name="down" size={15} color={'gray'} />
              </TouchableOpacity>
            </View>
          </View>

          {/* {Country} */}
          <View style={{marginBottom: 10}}>
            <MediumText style={{fontSize: 17}}>Country</MediumText>
            <TouchableOpacity
              onPress={() =>
                SheetManager.show(SHEETS.CounytrySelectSheet, {
                  payload: {
                    onSelect: (c: string) => setCountry(c),
                  },
                })
              }
              style={styles.container}>
              <RegularText style={{color: 'gray'}}>{country}</RegularText>
              <AntDesign name="down" size={15} color={'gray'} />
            </TouchableOpacity>
          </View>

          {/* {Professional Status} */}
          <View style={{marginBottom: 10}}>
            <MediumText style={{fontSize: 17}}>Professional Status</MediumText>
            <TouchableOpacity
              onPress={() =>
                SheetManager.show(SHEETS.ProfessionalStatusSheet, {
                  payload: {
                    onSelect: (m: string) => setProfessionalStatus(m),
                  },
                })
              }
              style={styles.container}>
              <RegularText style={{color: 'gray'}}>
                {professionalStatus}
              </RegularText>
              <AntDesign name="down" size={15} color={'gray'} />
            </TouchableOpacity>
          </View>

          {/* {Marital Status} */}
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
          {/* {Religion} */}
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
          {/* {Caste} */}
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
        </View>

        <PrimaryBtn
          onPress={() => navigation.navigate('InterestMat')}
          text="Next"
          containerStyle={{marginVertical: 20}}
        />
      </ScrollView>
    </MainLayout>
  );
};

export default PartnerPrefScreen;

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
});
