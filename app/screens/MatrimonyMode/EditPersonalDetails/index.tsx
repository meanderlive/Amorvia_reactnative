import {
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';
import React, {useState} from 'react';
import {MediumText, RegularText} from '../../../components/MyText';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MatProfileStackParams} from '../../../navigation/types';
import {SheetManager} from 'react-native-actions-sheet';
import {SHEETS} from '../../../sheets/sheets';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {COLORS} from '../../../styles';
import MainLayout from '../../../components/MainLayout';

const EditPersonalDetailScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<MatProfileStackParams>>();
  const [dob, setDob] = useState<any>('');
  const [sex, setSex] = useState('Male');
  const [casteCheck, setCasteCheck] = useState(false);
  const [height, setHeight] = useState('Select');
  const [caste, setCaste] = useState('Select');
  const [diet, setDiet] = useState('Select');
  const [country, setCountry] = useState('Select');
  const [religion, setReligion] = useState('Select');

  return (
    <MainLayout
      title="Personal Details"
      onBack={navigation.goBack}
      rightSideIcon={() => {
        return (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{color: COLORS.primary}}>Save</Text>
          </TouchableOpacity>
        );
      }}>
      <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
        <View style={{marginHorizontal: 20, marginTop: 30}}>
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
          {/* {BIRTH PLACE} */}
          <View style={{marginBottom: 10}}>
            <MediumText style={{fontSize: 17}}>Birth Place</MediumText>
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

          {/* {} */}
        </View>
      </ScrollView>
    </MainLayout>
  );
};

export default EditPersonalDetailScreen;

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
