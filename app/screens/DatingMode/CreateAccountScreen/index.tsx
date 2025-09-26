import { View, ScrollView, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import React, { useState } from 'react';
import { MediumText, RegularText, Text30 } from '../../../components/MyText';
import Input from '../../../components/Input';
import PrimaryBtn from '../../../components/PrimaryBtn';
import DatePicker from 'react-native-date-picker';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../../../navigation/types';
import { SheetManager } from 'react-native-actions-sheet';
import { SHEETS } from '../../../sheets/sheets';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Formik } from 'formik';
import * as Yup from 'yup';
<<<<<<< Updated upstream

// Validation Schema
const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, 'Name is too short')
    .required('Full name is required'),
  gender: Yup.string()
    .required('Gender is required'),
  dob: Yup.date()
    .max(new Date(), 'Date cannot be in the future')
    .required('Date of birth is required')
    .test('age', 'You must be at least 18 years old', function(value) {
=======
import { useDispatch } from 'react-redux';
import { setAuth } from '../../../redux/feature/auth/authSlice';

// Validation Schema
const validationSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Name is too short').required('Name is required'),
  gender: Yup.string().required('Gender is required'),
  dob: Yup.date()
    .max(new Date(), 'Date cannot be in the future')
    .required('Date of birth is required')
    .test('age', 'You must be at least 18 years old', function (value) {
>>>>>>> Stashed changes
      const cutoff = new Date();
      cutoff.setFullYear(cutoff.getFullYear() - 18);
      return value <= cutoff;
    }),
<<<<<<< Updated upstream
  height: Yup.string()
    .required('Height is required'),
  country: Yup.string()
    .required('Country is required')
=======
  height: Yup.string().required('Height is required'),
  country: Yup.string().required('Country is required'),
>>>>>>> Stashed changes
});

const CreateAccountScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();
<<<<<<< Updated upstream
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  const initialValues = {
    fullName: '',
=======
  const dispatch = useDispatch();
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  const initialValues = {
    name: '',
>>>>>>> Stashed changes
    gender: 'Male',
    dob: null as Date | null,
    height: '180 cm',
    country: '',
  };

<<<<<<< Updated upstream
  const handleSubmit = async (values: typeof initialValues) => {
    const payload = {
      fullname: values.fullName,
      dob: values.dob,
=======
  const handleSubmit = (values: typeof initialValues) => {
    const payload = {
      _id: '',           // backend will assign later
      email: '',         // will be filled in ContactDetailScreen
      name: values.name,
      dob: values.dob?.toISOString(),
>>>>>>> Stashed changes
      gender: values.gender,
      height: values.height,
      country: values.country,
    };
<<<<<<< Updated upstream
    console.log("payload of CREATE YOUR ACCOUNT--------", JSON.stringify(payload));
=======

    console.log('CreateAccount payload:', JSON.stringify(payload));
    dispatch(setAuth({ user: payload, token: '' }));
>>>>>>> Stashed changes
    navigation.navigate('ContactDetail', { payload });
  };

  return (
<<<<<<< Updated upstream
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ handleChange, handleBlur, handleSubmit, setFieldValue, values, errors }) => (
        <ScrollView style={{ flex: 1 }}>
          <View style={{ marginHorizontal: 20, marginTop: 40 }}>
            <Text30 bold>Create</Text30>
            <Text30 style={{ marginBottom: 40 }} bold>
              your account
            </Text30>
            
            <View style={{ marginBottom: 25 }}>
              <MediumText style={{ fontSize: 17, marginBottom: 5 }}>Full Name</MediumText>
              <Input 
                onChangeText={handleChange('fullName')}
                onBlur={handleBlur('fullName')}
                value={values.fullName}
                placeholder="Jessica Smith"
              />
              {errors.fullName && <RegularText style={{ color: 'red' }}>{errors.fullName}</RegularText>}
            </View>

            <View style={{ marginBottom: 25 }}>
              <MediumText style={{ fontSize: 17, marginBottom: 5 }}>Gender</MediumText>
              <TouchableOpacity
                onPress={() =>
                  SheetManager.show(SHEETS.GenderSelectSheet, {
                    payload: {
                      onSelect: (v: string) => setFieldValue('gender', v),
                    },
                  })
                }
                style={styles.container}>
                <RegularText style={{ color: 'gray' }}>{values.gender}</RegularText>
                <AntDesign name="down" size={15} color={'gray'} />
              </TouchableOpacity>
              {errors.gender && <RegularText style={{ color: 'red' }}>{errors.gender}</RegularText>}
            </View>

            <View style={{ marginBottom: 25 }}>
              <MediumText style={{ fontSize: 17, marginBottom: 5 }}>
                Date Of Birth
              </MediumText>
              <TouchableOpacity
                onPress={() => {
                  setIsDatePickerOpen(true);
                }}
                style={styles.container}>
                <DatePicker
                  modal
                  mode="date"
                  open={isDatePickerOpen}
                  date={values.dob || new Date()}
                  onConfirm={(date) => {
                    setIsDatePickerOpen(false);
                    setFieldValue('dob', date);
                  }}
                  onCancel={() => {
                    setIsDatePickerOpen(false);
                  }}
                />
                <RegularText style={{ color: values.dob ? 'black' : 'gray' }}>
                  {values.dob ? values.dob.toISOString().slice(0, 10) : 'DD - MM - YYYY'}
                </RegularText>
                <MaterialIcons name="date-range" size={24} color="gray" />
              </TouchableOpacity>
              {errors.dob && <RegularText style={{ color: 'red' }}>{errors.dob}</RegularText>}
            </View>

            <View style={{ marginBottom: 25 }}>
              <MediumText style={{ fontSize: 17, marginBottom: 5 }}>
                Height
              </MediumText>
              <TouchableOpacity
                onPress={() =>
                  SheetManager.show(SHEETS.HeightSelectSheet, {
                    payload: {
                      onSelect: (h: string) => setFieldValue('height', h),
                    },
                  })
                }
                style={styles.container}>
                <RegularText style={{ color: 'gray' }}>{values.height}</RegularText>
                <AntDesign name="down" size={15} color={'gray'} />
              </TouchableOpacity>
              {errors.height && <RegularText style={{ color: 'red' }}>{errors.height}</RegularText>}
            </View>

            <View style={{ marginBottom: 25 }}>
              <MediumText style={{ fontSize: 17, marginBottom: 5 }}>Country</MediumText>
              <Input
                onChangeText={handleChange('country')}
                onBlur={handleBlur('country')}
                value={values.country}
                placeholder="California, USA"
              />
              {errors.country && <RegularText style={{ color: 'red' }}>{errors.country}</RegularText>}
            </View>

            <PrimaryBtn
              onPress={handleSubmit}
              containerStyle={{ marginVertical: 40 }}
              text="Next"
            />
          </View>
        </ScrollView>
=======
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      {({ handleChange, handleBlur, handleSubmit, setFieldValue, values, errors, touched }) => (
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0} // adjust if you have header
        >
          <ScrollView
            style={{ flex: 1 }}
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="handled"
          >
            <View style={{ marginHorizontal: 20, marginTop: 40 }}>
              <Text30 bold>Create</Text30>
              <Text30 style={{ marginBottom: 40 }} bold>your account</Text30>

              {/* Name */}
              <View style={{ marginBottom: 25 }}>
                <MediumText style={{ fontSize: 17, marginBottom: 5 }}>Full Name</MediumText>
                <Input
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                  placeholder="Jessica Smith"
                />
                {errors.name && touched.name && <RegularText style={{ color: 'red' }}>{errors.name}</RegularText>}
              </View>

              {/* Gender */}
              <View style={{ marginBottom: 25 }}>
                <MediumText style={{ fontSize: 17, marginBottom: 5 }}>Gender</MediumText>
                <TouchableOpacity
                  onPress={() =>
                    SheetManager.show(SHEETS.GenderSelectSheet, { payload: { onSelect: (v: string) => setFieldValue('gender', v) } })
                  }
                  style={styles.container}
                >
                  <RegularText style={{ color: 'gray' }}>{values.gender}</RegularText>
                  <AntDesign name="down" size={15} color={'gray'} />
                </TouchableOpacity>
                {errors.gender && touched.gender && <RegularText style={{ color: 'red' }}>{errors.gender}</RegularText>}
              </View>

              {/* Date of Birth */}
              <View style={{ marginBottom: 25 }}>
                <MediumText style={{ fontSize: 17, marginBottom: 5 }}>Date Of Birth</MediumText>
                <TouchableOpacity onPress={() => setIsDatePickerOpen(true)} style={styles.container}>
                  <DatePicker
                    modal
                    mode="date"
                    open={isDatePickerOpen}
                    date={values.dob || new Date()}
                    onConfirm={(date) => { setIsDatePickerOpen(false); setFieldValue('dob', date); }}
                    onCancel={() => setIsDatePickerOpen(false)}
                  />
                  <RegularText style={{ color: values.dob ? 'black' : 'gray' }}>
                    {values.dob ? values.dob.toISOString().slice(0, 10) : 'DD - MM - YYYY'}
                  </RegularText>
                  <MaterialIcons name="date-range" size={24} color="gray" />
                </TouchableOpacity>
                {errors.dob && touched.dob && <RegularText style={{ color: 'red' }}>{errors.dob}</RegularText>}
              </View>

              {/* Height */}
              <View style={{ marginBottom: 25 }}>
                <MediumText style={{ fontSize: 17, marginBottom: 5 }}>Height</MediumText>
                <TouchableOpacity
                  onPress={() =>
                    SheetManager.show(SHEETS.HeightSelectSheet, { payload: { onSelect: (h: string) => setFieldValue('height', h) } })
                  }
                  style={styles.container}
                >
                  <RegularText style={{ color: 'gray' }}>{values.height}</RegularText>
                  <AntDesign name="down" size={15} color={'gray'} />
                </TouchableOpacity>
                {errors.height && touched.height && <RegularText style={{ color: 'red' }}>{errors.height}</RegularText>}
              </View>

              {/* Country */}
              <View style={{ marginBottom: 25 }}>
                <MediumText style={{ fontSize: 17, marginBottom: 5 }}>Country</MediumText>
                <Input
                  onChangeText={handleChange('country')}
                  onBlur={handleBlur('country')}
                  value={values.country}
                  placeholder="California, USA"
                />
                {errors.country && touched.country && <RegularText style={{ color: 'red' }}>{errors.country}</RegularText>}
              </View>

              <PrimaryBtn onPress={handleSubmit} containerStyle={{ marginVertical: 40 }} text="Next" />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
>>>>>>> Stashed changes
      )}
    </Formik>
  );
};

export default CreateAccountScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    justifyContent: 'space-between',
    paddingRight: 10,
  },
});
