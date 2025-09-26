import {
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import { MediumText, RegularText, Text30 } from '../../../components/MyText';
import Input from '../../../components/Input';
import PrimaryBtn from '../../../components/PrimaryBtn';
import DatePicker from 'react-native-date-picker';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../../../navigation/types';
import { SheetManager } from 'react-native-actions-sheet';
import { SHEETS } from '../../../sheets/sheets';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { COLORS } from '../../../styles';
import { Formik } from 'formik';
import * as Yup from 'yup';

const CreateAccountMatScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const route = useRoute();
  // @ts-ignore
  const { profile } = route.params || {};

  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  const SignupSchema = Yup.object().shape({
    fullName: Yup.string().required('Full name is required'),
    gender: Yup.string().required('Gender is required'),
    dob: Yup.date().nullable().required('Date of birth is required'),
    email: Yup.string()
      .email('Invalid email')
      .required('Email is required'),
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .required('Confirm password is required'),
    phone: Yup.string().required('Phone number is required'),
  });

  return (
    <ScrollView style={{ flex: 1 }}>
      <SafeAreaView />
      <View style={{ marginHorizontal: 20, marginTop: 40 }}>
        <Text30 bold>Create</Text30>
        <Text30 bold style={{ marginBottom: 40 }}>
          your account
        </Text30>

        <Formik
          initialValues={{
            fullName: '',
            gender: 'Male',
            dob: null,
            email: '',
            password: '',
            confirmPassword: '',
            phone: '',
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            const newpayload = {
              ...profile,
              fullName: values.fullName,
              gender: values.gender,
              dob: values.dob ? values.dob.toISOString().slice(0, 10) : '',
              email: values.email,
              password: values.password,
              confirmPassword: values.confirmPassword,
              phone: values.phone,
            };
            console.log('Payload:', newpayload);
            navigation.navigate('BasicDetail', { newpayload });
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            setFieldValue,
            errors,
            touched,
          }) => (
            <>
              {/* Full Name */}
              <Input
                label="Full Name"
                placeholder="Jessica Smith"
                value={values.fullName}
                onChangeText={handleChange('fullName')}
                onBlur={handleBlur('fullName')}
              />
              {touched.fullName && errors.fullName && (
                <RegularText style={{ color: 'red' }}>
                  {errors.fullName}
                </RegularText>
              )}

              {/* Gender */}
              <View style={{ marginBottom: 10 }}>
                <MediumText style={{ fontSize: 17 }}>Gender</MediumText>
                <TouchableOpacity
                  onPress={() =>
                    SheetManager.show(SHEETS.GenderSelectSheet, {
                      //@ts-ignore
                      payload: {
                        onSelect: (v: string) => setFieldValue('gender', v),
                      },
                    })
                  }
                  style={styles.container}
                >
                  <RegularText style={{ color: 'gray' }}>
                    {values.gender}
                  </RegularText>
                  <AntDesign name="down" size={15} color={'gray'} />
                </TouchableOpacity>
                {touched.gender && errors.gender && (
                  <RegularText style={{ color: 'red' }}>
                    {errors.gender}
                  </RegularText>
                )}
              </View>

              {/* Date of Birth */}
              <View style={{ marginBottom: 10 }}>
                <MediumText style={{ fontSize: 17, marginBottom: 10 }}>
                  Date Of Birth
                </MediumText>
                <TouchableOpacity
                  onPress={() => setIsDatePickerOpen(true)}
                  style={styles.container}
                >
                  <DatePicker
                    modal
                    mode="date"
                    open={isDatePickerOpen}
                    date={values.dob || new Date()}
                    onConfirm={(date) => {
                      setIsDatePickerOpen(false);
                      setFieldValue('dob', date);
                    }}
                    onCancel={() => setIsDatePickerOpen(false)}
                  />
                  <RegularText style={{ color: values.dob ? 'black' : 'gray' }}>
                    {values.dob
                      ? values.dob.toISOString().slice(0, 10)
                      : 'DD - MM - YYYY'}
                  </RegularText>
                  <MaterialIcons name="date-range" size={24} color="gray" />
                </TouchableOpacity>
                {touched.dob && errors.dob && (
                  <RegularText style={{ color: 'red' }}>
                    {errors.dob}
                  </RegularText>
                )}
              </View>

              {/* Email */}
              <Input
                label="Email"
                placeholder="example@gmail.com"
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
              />
              {touched.email && errors.email && (
                <RegularText style={{ color: 'red' }}>{errors.email}</RegularText>
              )}

              {/* Password */}
              <Input
                label="Password"
                secureTextEntry
                placeholder="Enter your password"
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
              />
              {touched.password && errors.password && (
                <RegularText style={{ color: 'red' }}>
                  {errors.password}
                </RegularText>
              )}

              {/* Confirm Password */}
              <Input
                label="Confirm Password"
                secureTextEntry
                placeholder="Confirm your password"
                value={values.confirmPassword}
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
              />
              {touched.confirmPassword && errors.confirmPassword && (
                <RegularText style={{ color: 'red' }}>
                  {errors.confirmPassword}
                </RegularText>
              )}

              {/* Phone */}
              <Input
                label="Phone"
                placeholder="+1 123 456 789"
                value={values.phone}
                onChangeText={handleChange('phone')}
                onBlur={handleBlur('phone')}
              />
              {touched.phone && errors.phone && (
                <RegularText style={{ color: 'red' }}>{errors.phone}</RegularText>
              )}

              <PrimaryBtn
                onPress={() => handleSubmit()}
                containerStyle={{ marginTop: 40, marginHorizontal: 20 }}
                text="Continue"
              />
            </>
          )}
        </Formik>

        <View
          style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 15 }}
        >
          <RegularText>Already a member? </RegularText>
          <TouchableOpacity onPress={() => navigation.navigate('LoginM')}>
            <RegularText style={{ color: COLORS.primary }}>Login</RegularText>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default CreateAccountMatScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 35,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});
