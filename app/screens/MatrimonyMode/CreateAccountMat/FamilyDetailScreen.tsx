import { View, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import React, { useState } from 'react';
import MainLayout from '../../../components/MainLayout';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../../../navigation/types';
import PrimaryBtn from '../../../components/PrimaryBtn';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { MediumText, RegularText, RegularTextG } from '../../../components/MyText';
import Input from '../../../components/Input';
import { SheetManager } from 'react-native-actions-sheet';
import { SHEETS } from '../../../sheets/sheets';

const FamilyDetailScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams, 'FamilyDetail'>>();
  const route = useRoute<RouteProp<RootStackParams, 'FamilyDetail'>>();

  //@ts-ignore
  const { fullPayload } = route.params;

  const [familyStatus, setFamilyStatus] = useState('Select');
  const [fatherName, setFatherName] = useState('');
  const [fatherStatus, setFatherStatus] = useState('Select');
  const [motherName, setMotherName] = useState('');
  const [motherStatus, setMotherStatus] = useState('Select');
  const [brothers, setBrothers] = useState('Select');
  const [sisters, setSisters] = useState('Select');

  const handleContinue = () => {
    if (familyStatus === 'Select') {
      Alert.alert('Validation Error', 'Please select family status.');
      return;
    }
    if (fatherName.trim() === '') {
      Alert.alert('Validation Error', 'Please enter father\'s name.');
      return;
    }
    if (fatherStatus === 'Select') {
      Alert.alert('Validation Error', 'Please select father\'s status.');
      return;
    }
    if (motherName.trim() === '') {
      Alert.alert('Validation Error', 'Please enter mother\'s name.');
      return;
    }
    if (motherStatus === 'Select') {
      Alert.alert('Validation Error', 'Please select mother\'s status.');
      return;
    }
    if (brothers === 'Select') {
      Alert.alert('Validation Error', 'Please select number of brothers.');
      return;
    }
    if (sisters === 'Select') {
      Alert.alert('Validation Error', 'Please select number of sisters.');
      return;
    }

    // Merge family details into fullPayload
    const updatedPayload = {
      ...fullPayload,
      family: {
        familyStatus: familyStatus,
        fatherName: fatherName,
        fatherStatus: fatherStatus,
        motherName: motherName,
        motherStatus: motherStatus,
        brothers: brothers,
        sisters: sisters,
      },
    };

    console.log('➡️ FamilyDetailScreen updatedPayload:', updatedPayload);

    navigation.navigate('SubmitId', {
      fullPayload: updatedPayload,
    });
  };

  return (
    <MainLayout
      title="Family Details"
      onBack={navigation.goBack}
      rightSideIcon={() => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('SubmitId', {
              fullPayload: { ...fullPayload, family: null },
            })
          }
        >
          <RegularTextG>Skip</RegularTextG>
        </TouchableOpacity>
      )}
    >
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, marginHorizontal: 20 }}>
        <View>
          <MediumText style={{ marginTop: 20, textAlign: 'center' }}>
            Some details about your family will improve profile quality
          </MediumText>

          {/* Family Status */}
          <View style={{ marginBottom: 10, marginTop: 20 }}>
            <MediumText style={{ fontSize: 17 }}>Family Status</MediumText>
            <TouchableOpacity
              onPress={() =>
                SheetManager.show(SHEETS.FamilyStatusSheet, {
                  payload: { onSelect: (val: string) => setFamilyStatus(val) },
                })
              }
              style={styles.container}
            >
              <RegularText style={{ color: familyStatus === 'Select' ? 'gray' : 'black' }}>
                {familyStatus}
              </RegularText>
              <AntDesign name="down" size={15} color={'gray'} />
            </TouchableOpacity>
          </View>

          {/* Father Name */}
          <Input label="Father Name" placeholder="Name" value={fatherName} onChangeText={setFatherName} />

          {/* Father Status */}
          <View style={{ marginBottom: 10 }}>
            <MediumText style={{ fontSize: 17 }}>Father Status</MediumText>
            <TouchableOpacity
              onPress={() =>
                SheetManager.show(SHEETS.FatherStatusSheet, {
                  payload: { onSelect: (val: string) => setFatherStatus(val) },
                })
              }
              style={styles.container}
            >
              <RegularText style={{ color: fatherStatus === 'Select' ? 'gray' : 'black' }}>
                {fatherStatus}
              </RegularText>
              <AntDesign name="down" size={15} color={'gray'} />
            </TouchableOpacity>
          </View>

          {/* Mother Name */}
          <Input label="Mother Name" placeholder="Name" value={motherName} onChangeText={setMotherName} />

          {/* Mother Status */}
          <View style={{ marginBottom: 10 }}>
            <MediumText style={{ fontSize: 17 }}>Mother Status</MediumText>
            <TouchableOpacity
              onPress={() =>
                SheetManager.show(SHEETS.MotherStatusSheet, {
                  payload: { onSelect: (val: string) => setMotherStatus(val) },
                })
              }
              style={styles.container}
            >
              <RegularText style={{ color: motherStatus === 'Select' ? 'gray' : 'black' }}>
                {motherStatus}
              </RegularText>
              <AntDesign name="down" size={15} color={'gray'} />
            </TouchableOpacity>
          </View>

          {/* Brothers */}
          <View style={{ marginBottom: 10 }}>
            <MediumText style={{ fontSize: 17 }}>No of Brothers</MediumText>
            <TouchableOpacity
              onPress={() =>
                SheetManager.show(SHEETS.SiblingsSheet, {
                  payload: { onSelect: (val: string) => setBrothers(val) },
                })
              }
              style={styles.container}
            >
              <RegularText style={{ color: brothers === 'Select' ? 'gray' : 'black' }}>
                {brothers}
              </RegularText>
              <AntDesign name="down" size={15} color={'gray'} />
            </TouchableOpacity>
          </View>

          {/* Sisters */}
          <View style={{ marginBottom: 10 }}>
            <MediumText style={{ fontSize: 17 }}>No of Sisters</MediumText>
            <TouchableOpacity
              onPress={() =>
                SheetManager.show(SHEETS.SiblingsSheet, {
                  payload: { onSelect: (val: string) => setSisters(val) },
                })
              }
              style={styles.container}
            >
              <RegularText style={{ color: sisters === 'Select' ? 'gray' : 'black' }}>
                {sisters}
              </RegularText>
              <AntDesign name="down" size={15} color={'gray'} />
            </TouchableOpacity>
          </View>
        </View>

        <PrimaryBtn onPress={handleContinue} text="Continue" containerStyle={{ marginVertical: 20 }} />
      </ScrollView>
    </MainLayout>
  );
};

export default FamilyDetailScreen;

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
