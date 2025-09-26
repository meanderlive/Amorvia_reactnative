import {
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';
import React from 'react';
import {
  MediumText,
  RegularText,
} from '../../../components/MyText';
import PrimaryBtn from '../../../components/PrimaryBtn';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../../../navigation/types';
import { SheetManager } from 'react-native-actions-sheet';
import { SHEETS } from '../../../sheets/sheets';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { COLORS } from '../../../styles';
import MainLayout from '../../../components/MainLayout';
import { Formik } from 'formik';
import * as Yup from 'yup';

interface BasicDetailsForm {
  diet: string;
  height: string;
  maritalStatus: string;
  motherTongue: string;
  religion: string;
  caste: string;
  casteCheck: boolean;
  horoscope: string;
}

const BasicDetailScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const route = useRoute();
  // @ts-ignore
  const { newpayload } = route.params || {};

  const initialValues: BasicDetailsForm = {
    diet: 'Select',
    height: 'Select',
    maritalStatus: 'Select',
    motherTongue: 'Select',
    religion: 'Select',
    caste: 'Select',
    casteCheck: false,
    horoscope: 'Select',
  };

  const validationSchema = Yup.object().shape({
    diet: Yup.string().notOneOf(['Select'], 'Please select your diet'),
    height: Yup.string().notOneOf(['Select'], 'Please select your height'),
    maritalStatus: Yup.string().notOneOf(['Select'], 'Please select your marital status'),
    motherTongue: Yup.string().notOneOf(['Select'], 'Please select your mother tongue'),
    religion: Yup.string().notOneOf(['Select'], 'Please select your religion'),
    caste: Yup.string().notOneOf(['Select'], 'Please select your caste'),
    horoscope: Yup.string().notOneOf(['Select'], 'Please select your horoscope'),
  });

  return (
    <MainLayout title="Basic Details" onBack={navigation.goBack}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log('Basic Details Payload:', values);
            navigation.navigate('CareerDetailMat', {
              BasicDetails: values,
              newpayload: newpayload,
            });
          }}
        >
          {({
            handleChange,
            handleSubmit,
            values,
            setFieldValue,
            errors,
            touched,
          }) => (
            <View style={{ marginHorizontal: 20, marginTop: 30 }}>
              {/* DIET */}
              <View style={{ marginBottom: 10 }}>
                <MediumText style={{ fontSize: 17 }}>Your Diet</MediumText>
                <TouchableOpacity
                  onPress={() =>
                    SheetManager.show(SHEETS.DietSelectSheet, {
                      payload: { onSelect: (d: string) => setFieldValue('diet', d) },
                    })
                  }
                  style={styles.container}
                >
                  <RegularText style={{ color: values.diet === 'Select' ? 'gray' : 'black' }}>
                    {values.diet}
                  </RegularText>
                  <AntDesign name="down" size={15} color={'gray'} />
                </TouchableOpacity>
                {touched.diet && errors.diet && (
                  <RegularText style={{ color: 'red' }}>{errors.diet}</RegularText>
                )}
              </View>

              {/* HEIGHT */}
              <View style={{ marginBottom: 10 }}>
                <MediumText style={{ fontSize: 17 }}>Height</MediumText>
                <TouchableOpacity
                  onPress={() =>
                    SheetManager.show(SHEETS.HeightSelectSheet, {
                      payload: { onSelect: (h: string) => setFieldValue('height', h) },
                    })
                  }
                  style={styles.container}
                >
                  <RegularText style={{ color: values.height === 'Select' ? 'gray' : 'black' }}>
                    {values.height}
                  </RegularText>
                  <AntDesign name="down" size={15} color={'gray'} />
                </TouchableOpacity>
                {touched.height && errors.height && (
                  <RegularText style={{ color: 'red' }}>{errors.height}</RegularText>
                )}
              </View>

              {/* MARITAL STATUS */}
              <View style={{ marginBottom: 10 }}>
                <MediumText style={{ fontSize: 17 }}>Marital Status</MediumText>
                <TouchableOpacity
                  onPress={() =>
                    SheetManager.show(SHEETS.MaritalStatusSheet, {
                      payload: { onSelect: (m: string) => setFieldValue('maritalStatus', m) },
                    })
                  }
                  style={styles.container}
                >
                  <RegularText style={{ color: values.maritalStatus === 'Select' ? 'gray' : 'black' }}>
                    {values.maritalStatus}
                  </RegularText>
                  <AntDesign name="down" size={15} color={'gray'} />
                </TouchableOpacity>
                {touched.maritalStatus && errors.maritalStatus && (
                  <RegularText style={{ color: 'red' }}>{errors.maritalStatus}</RegularText>
                )}
              </View>

              {/* MOTHER TONGUE */}
              <View style={{ marginBottom: 10 }}>
                <MediumText style={{ fontSize: 17 }}>Mother Tongue</MediumText>
                <TouchableOpacity
                  onPress={() =>
                    SheetManager.show(SHEETS.MotherTongueSheet, {
                      payload: { onSelect: (t: string) => setFieldValue('motherTongue', t) },
                    })
                  }
                  style={styles.container}
                >
                  <RegularText style={{ color: values.motherTongue === 'Select' ? 'gray' : 'black' }}>
                    {values.motherTongue}
                  </RegularText>
                  <AntDesign name="down" size={15} color={'gray'} />
                </TouchableOpacity>
                {touched.motherTongue && errors.motherTongue && (
                  <RegularText style={{ color: 'red' }}>{errors.motherTongue}</RegularText>
                )}
              </View>

              {/* RELIGION */}
              <View style={{ marginBottom: 10 }}>
                <MediumText style={{ fontSize: 17 }}>Religion</MediumText>
                <TouchableOpacity
                  onPress={() =>
                    SheetManager.show(SHEETS.ReligionSheet, {
                      payload: { onSelect: (r: string) => setFieldValue('religion', r) },
                    })
                  }
                  style={styles.container}
                >
                  <RegularText style={{ color: values.religion === 'Select' ? 'gray' : 'black' }}>
                    {values.religion}
                  </RegularText>
                  <AntDesign name="down" size={15} color={'gray'} />
                </TouchableOpacity>
                {touched.religion && errors.religion && (
                  <RegularText style={{ color: 'red' }}>{errors.religion}</RegularText>
                )}
              </View>

              {/* CASTE */}
              <View style={{ marginBottom: 10 }}>
                <MediumText style={{ fontSize: 17 }}>Caste</MediumText>
                <TouchableOpacity
                  onPress={() =>
                    SheetManager.show(SHEETS.CasteSheet, {
                      payload: { onSelect: (c: string) => setFieldValue('caste', c) },
                    })
                  }
                  style={styles.container}
                >
                  <RegularText style={{ color: values.caste === 'Select' ? 'gray' : 'black' }}>
                    {values.caste}
                  </RegularText>
                  <AntDesign name="down" size={15} color={'gray'} />
                </TouchableOpacity>
                {touched.caste && errors.caste && (
                  <RegularText style={{ color: 'red' }}>{errors.caste}</RegularText>
                )}
              </View>

              {/* CASTE NO BAR */}
              <View style={styles.casteNoBarContainer}>
                <TouchableOpacity
                  onPress={() => setFieldValue('casteCheck', !values.casteCheck)}
                  style={styles.check}
                >
                  {values.casteCheck ? <Feather name="check" size={22} color="white" /> : null}
                </TouchableOpacity>
                <View>
                  <Text style={{ color: COLORS.primary }}>Caste no bar</Text>
                  <Text style={{ fontSize: 12 }}>
                    I am open to marry people of all castes
                  </Text>
                </View>
              </View>

              {/* HOROSCOPE */}
              <View style={{ marginBottom: 10 }}>
                <MediumText style={{ fontSize: 17 }}>Horoscope</MediumText>
                <TouchableOpacity
                  onPress={() =>
                    SheetManager.show(SHEETS.HoroscopeSheet, {
                      payload: { onSelect: (h: string) => setFieldValue('horoscope', h) },
                    })
                  }
                  style={styles.container}
                >
                  <RegularText style={{ color: values.horoscope === 'Select' ? 'gray' : 'black' }}>
                    {values.horoscope}
                  </RegularText>
                  <AntDesign name="down" size={15} color={'gray'} />
                </TouchableOpacity>
                {touched.horoscope && errors.horoscope && (
                  <RegularText style={{ color: 'red' }}>{errors.horoscope}</RegularText>
                )}
              </View>

              <PrimaryBtn
                onPress={() => handleSubmit()}
                containerStyle={{ marginVertical: 30, marginHorizontal: 20 }}
                text="Next"
              />
            </View>
          )}
        </Formik>
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
    paddingHorizontal: 10,
  },
  check: {
    borderRadius: 7,
    height: 30,
    width: 30,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  casteNoBarContainer: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
});
