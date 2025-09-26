import { View, ScrollView, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import React, { useState } from 'react';
import MainLayout from '../../../components/MainLayout';
import { useNavigation, RouteProp, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../../../navigation/types';
import PrimaryBtn from '../../../components/PrimaryBtn';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { MediumText, RegularTextG } from '../../../components/MyText';
import { SheetManager } from 'react-native-actions-sheet';
import { SHEETS } from '../../../sheets/sheets';

const PartnerPrefScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams, 'PartnerPref'>>();

  const route = useRoute<RouteProp<RootStackParams, 'PartnerPref'>>();
  
  //@ts-ignore
  const { fullPayload } = route.params;

  // Local state for partner preferences
  const [minAge, setMinAge] = useState('Select');
  const [maxAge, setMaxAge] = useState('Select');
  const [minHeight, setMinHeight] = useState('Select');
  const [maxHeight, setMaxHeight] = useState('Select');
  const [country, setCountry] = useState('Select');
  const [professionalStatus, setProfessionalStatus] = useState('Select');
  const [maritalStatus, setMaritalStatus] = useState('Select');
  const [caste, setCaste] = useState('Select');
  const [religion, setReligion] = useState('Select');

  const handleNext = () => {
    if (minAge === 'Select') {
      Alert.alert('Validation Error', 'Please select minimum age.');
      return;
    }
    if (maxAge === 'Select') {
      Alert.alert('Validation Error', 'Please select maximum age.');
      return;
    }
    if (minHeight === 'Select') {
      Alert.alert('Validation Error', 'Please select minimum height.');
      return;
    }
    if (maxHeight === 'Select') {
      Alert.alert('Validation Error', 'Please select maximum height.');
      return;
    }
    if (country === 'Select') {
      Alert.alert('Validation Error', 'Please select a country.');
      return;
    }
    if (professionalStatus === 'Select') {
      Alert.alert('Validation Error', 'Please select professional status.');
      return;
    }
    if (maritalStatus === 'Select') {
      Alert.alert('Validation Error', 'Please select marital status.');
      return;
    }
    if (caste === 'Select') {
      Alert.alert('Validation Error', 'Please select caste.');
      return;
    }
    if (religion === 'Select') {
      Alert.alert('Validation Error', 'Please select religion.');
      return;
    }

    const updatedPayload = {
      ...fullPayload,
      partnerPreference: {
        minAge,
        maxAge,
        minHeight,
        maxHeight,
        country,
        professionalStatus,
        maritalStatus,
        caste,
        religion,
      },
    };

    console.log('➡️ Updated Payload:', updatedPayload);

    navigation.navigate('InterestMat', { fullPayload: updatedPayload });
  };

  return (
    <MainLayout
      title="Partner Preference"
      onBack={navigation.goBack}
      rightSideIcon={() => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('InterestMat', { fullPayload })
          }
        >
          <RegularTextG>Skip</RegularTextG>
        </TouchableOpacity>
      )}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ flex: 1, marginHorizontal: 20 }}
      >
        {/* Age Selection */}
        <View style={styles.row}>
          <View style={{ width: '48%' }}>
            <MediumText style={{ fontSize: 17 }}>Min Age</MediumText>
            <TouchableOpacity
              onPress={() =>
                SheetManager.show(SHEETS.AgeSelectSheet, {
                  payload: { onSelect: setMinAge },
                })
              }
              style={styles.container}
            >
              <MediumText style={{ color: 'gray' }}>{minAge}</MediumText>
              <AntDesign name="down" size={15} color="gray" />
            </TouchableOpacity>
          </View>
          <View style={{ width: '48%' }}>
            <MediumText style={{ fontSize: 17 }}>Max Age</MediumText>
            <TouchableOpacity
              onPress={() =>
                SheetManager.show(SHEETS.AgeSelectSheet, {
                  payload: { onSelect: setMaxAge },
                })
              }
              style={styles.container}
            >
              <MediumText style={{ color: 'gray' }}>{maxAge}</MediumText>
              <AntDesign name="down" size={15} color="gray" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Height Selection */}
        <View style={styles.row}>
          <View style={{ width: '48%' }}>
            <MediumText style={{ fontSize: 17 }}>Min Height</MediumText>
            <TouchableOpacity
              onPress={() =>
                SheetManager.show(SHEETS.HeightSelectSheet, {
                  payload: { onSelect: setMinHeight },
                })
              }
              style={styles.container}
            >
              <MediumText style={{ color: 'gray' }}>{minHeight}</MediumText>
              <AntDesign name="down" size={15} color="gray" />
            </TouchableOpacity>
          </View>
          <View style={{ width: '48%' }}>
            <MediumText style={{ fontSize: 17 }}>Max Height</MediumText>
            <TouchableOpacity
              onPress={() =>
                SheetManager.show(SHEETS.HeightSelectSheet, {
                  payload: { onSelect: setMaxHeight },
                })
              }
              style={styles.container}
            >
              <MediumText style={{ color: 'gray' }}>{maxHeight}</MediumText>
              <AntDesign name="down" size={15} color="gray" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Other Dropdowns */}
        {[ 
          { label: 'Country', value: country, setter: setCountry, sheet: SHEETS.CounytrySelectSheet },
          { label: 'Professional Status', value: professionalStatus, setter: setProfessionalStatus, sheet: SHEETS.ProfessionalStatusSheet },
          { label: 'Marital Status', value: maritalStatus, setter: setMaritalStatus, sheet: SHEETS.MaritalStatusSheet },
          { label: 'Religion', value: religion, setter: setReligion, sheet: SHEETS.ReligionSheet },
          { label: 'Caste', value: caste, setter: setCaste, sheet: SHEETS.CasteSheet },
        ].map((item, idx) => (
          <View key={idx} style={{ marginBottom: 10 }}>
            <MediumText style={{ fontSize: 17 }}>{item.label}</MediumText>
            <TouchableOpacity
              onPress={() =>
                SheetManager.show(item.sheet, {
                  payload: { onSelect: item.setter },
                })
              }
              style={styles.container}
            >
              <MediumText style={{ color: 'gray' }}>{item.value}</MediumText>
              <AntDesign name="down" size={15} color="gray" />
            </TouchableOpacity>
          </View>
        ))}

        <PrimaryBtn
          onPress={handleNext}
          text="Next"
          containerStyle={{ marginVertical: 20 }}
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginTop: 20,
  },
});
