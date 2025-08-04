import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import {
  MediumText,
  RegularText,
  RegularTextG,
} from '../../../components/MyText';
import {
  MatProfileStackParams,
  ProfileStackParams,
} from '../../../navigation/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {COLORS} from '../../../styles';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import DatePicker from 'react-native-date-picker';
import {SheetManager} from 'react-native-actions-sheet';
import {SHEETS} from '../../../sheets/sheets';
import MainLayout from '../../../components/MainLayout';
import Input from '../../../components/Input';
import AntDesign from 'react-native-vector-icons/AntDesign';

const EditEduCareerScreen = () => {
  const {user, accessToken} = useSelector((s: any) => s.auth);
  const dispatch = useDispatch();
  const [education, setEducation] = useState('Select');
  const [income, setIncome] = useState('Select');

  const navigation =
    useNavigation<NativeStackNavigationProp<MatProfileStackParams>>();

  return (
    <MainLayout
      title="Edu & Career"
      onBack={navigation.goBack}
      rightSideIcon={() => {
        return (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{color: COLORS.primary}}>Save</Text>
          </TouchableOpacity>
        );
      }}>
      <View style={{marginHorizontal: 20, marginTop: 20}}>
        {/* {NAME} */}

        <Input label="Profession" placeholder="Work in Digital Service" />
        <Input label="Company name" placeholder="ABC Pvt. Ltd." />

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
        {/* {EDUCATION} */}
        <View style={{marginBottom: 10}}>
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
        {/* {} */}
        <Input label="College name" placeholder="Oxford University" />
      </View>
    </MainLayout>
  );
};

export default EditEduCareerScreen;

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
