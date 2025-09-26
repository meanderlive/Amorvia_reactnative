import {
  View,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import { MediumText, RegularText } from '../../../components/MyText';
import PrimaryBtn from '../../../components/PrimaryBtn';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../../../navigation/types';
import { SheetManager } from 'react-native-actions-sheet';
import { SHEETS } from '../../../sheets/sheets';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { COLORS } from '../../../styles';
import MainLayout from '../../../components/MainLayout';

const CareerDetailMatScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const route = useRoute<RouteProp<RootStackParams, 'CareerDetailMat'>>();

  //@ts-ignore
  const { BasicDetails, usedetails, profile,newpayload } = route.params || {};

  const [education, setEducation] = useState('Select');
  const [experience, setExperience] = useState('Select');
  const [occupation, setOccupation] = useState('Select');
  const [income, setIncome] = useState('Select');

  const handleNext = () => {
    if (education === 'Select') {
      Alert.alert('Validation Error', 'Please select your education.');
      return;
    }
    if (experience === 'Select') {
      Alert.alert('Validation Error', 'Please select your experience.');
      return;
    }
    if (occupation === 'Select') {
      Alert.alert('Validation Error', 'Please select your occupation.');
      return;
    }
    if (income === 'Select') {
      Alert.alert('Validation Error', 'Please select your income.');
      return;
    }

    const careerDetail = {
      education: education,
      experience: experience,
      occupation: occupation,
      income: income,
    };

    // Combine all payloads into one object
    const fullPayload = {
      ...BasicDetails,
      ...usedetails,
      ...profile,
      ...newpayload,
      careerDetail,
    };

    console.log('Combined Payload:', fullPayload);

    // Navigate and pass the combined payload
    navigation.navigate('AlmostDoneMat', { fullPayload });
  };

  return (
    <MainLayout onBack={navigation.goBack} title="Career Details">
      <View style={{ flex: 1, marginHorizontal: 20, marginTop: 20 }}>
        {/* EDUCATION */}
        <View style={{ marginBottom: 10 }}>
          <MediumText style={{ fontSize: 17 }}>Education</MediumText>
          <TouchableOpacity
            onPress={() =>
              SheetManager.show(SHEETS.EducationSheet, {
                payload: { onSelect: setEducation },
              })
            }
            style={styles.container}
          >
            <RegularText style={{ color: education === 'Select' ? 'gray' : 'black' }}>
              {education}
            </RegularText>
            <AntDesign name="down" size={15} color={'gray'} />
          </TouchableOpacity>
        </View>

        {/* WORK EXPERIENCE */}
        <View style={{ marginBottom: 10 }}>
          <MediumText style={{ fontSize: 17 }}>Work Experience</MediumText>
          <TouchableOpacity
            onPress={() =>
              SheetManager.show(SHEETS.ExperienceSheet, {
                payload: { onSelect: setExperience },
              })
            }
            style={styles.container}
          >
            <RegularText style={{ color: experience === 'Select' ? 'gray' : 'black' }}>
              {experience}
            </RegularText>
            <AntDesign name="down" size={15} color={'gray'} />
          </TouchableOpacity>
        </View>

        {/* OCCUPATION */}
        <View style={{ marginBottom: 10 }}>
          <MediumText style={{ fontSize: 17 }}>Occupation</MediumText>
          <TouchableOpacity
            onPress={() =>
              SheetManager.show(SHEETS.OccupationSheet, {
                payload: { onSelect: setOccupation },
              })
            }
            style={styles.container}
          >
            <RegularText style={{ color: occupation === 'Select' ? 'gray' : 'black' }}>
              {occupation}
            </RegularText>
            <AntDesign name="down" size={15} color={'gray'} />
          </TouchableOpacity>
        </View>

        {/* INCOME */}
        <View style={{ marginBottom: 10 }}>
          <MediumText style={{ fontSize: 17 }}>Income</MediumText>
          <TouchableOpacity
            onPress={() =>
              SheetManager.show(SHEETS.IncomeSheet, {
                payload: { onSelect: setIncome },
              })
            }
            style={styles.container}
          >
            <RegularText style={{ color: income === 'Select' ? 'gray' : 'black' }}>
              {income}
            </RegularText>
            <AntDesign name="down" size={15} color={'gray'} />
          </TouchableOpacity>
        </View>
      </View>

      <PrimaryBtn
        onPress={handleNext}
        containerStyle={{ marginBottom: 40, marginHorizontal: 20 }}
        text="Next"
      />
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
    paddingHorizontal: 10,
  },
});
