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
import Input from '../../../components/Input';
import {SheetManager} from 'react-native-actions-sheet';
import {SHEETS} from '../../../sheets/sheets';

const FamilyDetailScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const [familyStatus, setFamilyStatus] = useState('Select');
  const [fatherStatus, setFatherStatus] = useState('Select');
  const [motherStatus, setMotherStatus] = useState('Select');
  const [brothers, setBrothers] = useState('Select');
  const [sisters, setSisters] = useState('Select');

  return (
    <MainLayout
      title="Family Details"
      onBack={navigation.goBack}
      rightSideIcon={() => {
        return (
          <TouchableOpacity onPress={() => navigation.navigate('SubmitId')}>
            <RegularTextG>Skip</RegularTextG>
          </TouchableOpacity>
        );
      }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{flex: 1, marginHorizontal: 20}}>
        <View>
          <MediumText style={{marginTop: 20, textAlign: 'center'}}>
            Some details about your family will improve profile quality
          </MediumText>
          {/* {Family Status} */}
          <View style={{marginBottom: 10, marginTop: 20}}>
            <MediumText style={{fontSize: 17}}>Family Status</MediumText>
            <TouchableOpacity
              onPress={() =>
                SheetManager.show(SHEETS.FamilyStatusSheet, {
                  payload: {
                    onSelect: (e: string) => setFamilyStatus(e),
                  },
                })
              }
              style={styles.container}>
              <RegularText style={{color: 'gray'}}>{familyStatus}</RegularText>
              <AntDesign name="down" size={15} color={'gray'} />
            </TouchableOpacity>
          </View>
          {/* {Father Name} */}
          <Input placeholder="Name" label="Father Name" />
          {/* {Father Status} */}
          <View style={{marginBottom: 10}}>
            <MediumText style={{fontSize: 17}}>Father Status</MediumText>
            <TouchableOpacity
              onPress={() =>
                SheetManager.show(SHEETS.FatherStatusSheet, {
                  payload: {
                    onSelect: (e: string) => setFatherStatus(e),
                  },
                })
              }
              style={styles.container}>
              <RegularText style={{color: 'gray'}}>{fatherStatus}</RegularText>
              <AntDesign name="down" size={15} color={'gray'} />
            </TouchableOpacity>
          </View>
          {/* {Mother Name} */}
          <Input placeholder="Name" label="Mother Name" />
          {/* {Mother Status} */}
          <View style={{marginBottom: 10}}>
            <MediumText style={{fontSize: 17}}>Mother Status</MediumText>
            <TouchableOpacity
              onPress={() =>
                SheetManager.show(SHEETS.MotherStatusSheet, {
                  payload: {
                    onSelect: (e: string) => setMotherStatus(e),
                  },
                })
              }
              style={styles.container}>
              <RegularText style={{color: 'gray'}}>{motherStatus}</RegularText>
              <AntDesign name="down" size={15} color={'gray'} />
            </TouchableOpacity>
          </View>

          {/* {Brothers} */}
          <View style={{marginBottom: 10}}>
            <MediumText style={{fontSize: 17}}>No of Brothers</MediumText>
            <TouchableOpacity
              onPress={() =>
                SheetManager.show(SHEETS.SiblingsSheet, {
                  payload: {
                    onSelect: (b: string) => setBrothers(b),
                  },
                })
              }
              style={styles.container}>
              <RegularText style={{color: 'gray'}}>{brothers}</RegularText>
              <AntDesign name="down" size={15} color={'gray'} />
            </TouchableOpacity>
          </View>

          {/* {Sisters} */}
          <View style={{marginBottom: 10}}>
            <MediumText style={{fontSize: 17}}>No of Sisters</MediumText>
            <TouchableOpacity
              onPress={() =>
                SheetManager.show(SHEETS.SiblingsSheet, {
                  payload: {
                    onSelect: (s: string) => setSisters(s),
                  },
                })
              }
              style={styles.container}>
              <RegularText style={{color: 'gray'}}>{sisters}</RegularText>
              <AntDesign name="down" size={15} color={'gray'} />
            </TouchableOpacity>
          </View>
          {/* {} */}
        </View>

        <PrimaryBtn
          onPress={() => navigation.navigate('SubmitId')}
          text="Continue"
          containerStyle={{marginVertical: 20}}
        />
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
