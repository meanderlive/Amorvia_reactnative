<<<<<<< Updated upstream
import { View } from 'react-native';
import React from 'react';
=======
import { View, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import React, { useState } from 'react';
>>>>>>> Stashed changes
import MainLayout from '../../../components/MainLayout';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../../../navigation/types';
import Input from '../../../components/Input';
import PrimaryBtn from '../../../components/PrimaryBtn';
import { Formik } from 'formik';
import * as Yup from 'yup';
<<<<<<< Updated upstream
import { MediumText, RegularText } from '../../../components/MyText';
=======
import { RegularText } from '../../../components/MyText';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useDispatch } from 'react-redux';
import { setAuth } from '../../../redux/feature/auth/authSlice';
>>>>>>> Stashed changes

// Validation Schema
const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
<<<<<<< Updated upstream
  phone: Yup.string().matches(/^(\+?\d{1,3}?)?\s?(\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/, 'Invalid phone number').required('Phone number is required'),
=======
  phone: Yup.string().required('Phone number is required'),
>>>>>>> Stashed changes
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

const ContactDetailScreen = () => {
<<<<<<< Updated upstream
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const route = useRoute<RouteProp<RootStackParams, 'ContactDetail'>>();
  const { payload } = route.params;

  const initialValues = {
    email: payload.email,
    phone: '',
    password: '',
    confirmPassword: '',
  };

=======
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const route = useRoute<RouteProp<RootStackParams, 'ContactDetail'>>();
  const { payload } = route.params;
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const initialValues = {
    email: payload.email || '',
    phone: payload.phoneNumber || '',
    password: '',
    confirmPassword: '',
  };

>>>>>>> Stashed changes
  const handleSubmit = (values: typeof initialValues) => {
    const newPayload = {
      ...payload,
      email: values.email,
<<<<<<< Updated upstream
      phone: values.phone,
      password: values.password,
      confirmPassword: values.confirmPassword,
    };
=======
      phoneNumber: values.phone,  // Changed from values.phoneNumber to values.phone
      password: values.password,
      confirmPassword: values.confirmPassword,
    };

    console.log('ContactDetail newPayload:', newPayload);
    dispatch(setAuth({ user: newPayload, token: '' }));
>>>>>>> Stashed changes
    navigation.navigate('CareerDetail', { newPayload });
  };

  return (
    <MainLayout onBack={navigation.goBack} title="Contact Details">
<<<<<<< Updated upstream
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View style={{ flex: 1 }}>
            <View style={{ flex: 1, marginHorizontal: 20 }}>
              <Input
                label="Email"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                placeholder="john@example.com"
               
              />
              {errors.email && touched.email && <RegularText style={{ color: 'red', marginTop: -15, marginBottom: 10 }}>{errors.email}</RegularText>}

              <Input
                label="Phone"
                onChangeText={handleChange('phone')}
                onBlur={handleBlur('phone')}
                value={values.phone}
                placeholder="+1 123 456 789"
                keyboardType="phone-pad"
              />
              {errors.phone && touched.phone && <RegularText style={{ color: 'red', marginTop: -15, marginBottom: 10 }}>{errors.phone}</RegularText>}

=======
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0} // adjust if you have header
                  >
          <View style={{ flex: 1, marginHorizontal: 20 }}>
            {/* Email */}
            <Input
  label="Email"
  onChangeText={text => handleChange('email')(text.toLowerCase())} // text ko lowercase me convert
  onBlur={handleBlur('email')}
  value={values.email}
  placeholder="john@example.com"
  keyboardType="email-address"
  autoCapitalize="none" // keyboard me automatic capitalization off kare
/>
{errors.email && touched.email && (
  <RegularText style={{ color: 'red', marginTop: 5 }}>
    {errors.email}
  </RegularText>
)}

            {/* Phone */}
            <Input
              label="Phone"
              onChangeText={handleChange('phone')}
              onBlur={handleBlur('phone')}
              value={values.phone}
              placeholder="+1 123 456 789"
              keyboardType="phone-pad"
            />
            {errors.phone && touched.phone && <RegularText style={{ color: 'red', marginTop: 5 }}>{errors.phone}</RegularText>}

            {/* Password */}
            <View style={{ marginTop: 20, position: 'relative' }}>
>>>>>>> Stashed changes
              <Input
                label="Password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
<<<<<<< Updated upstream
                placeholder="enter password"
                secureTextEntry
              />
              {errors.password && touched.password && <RegularText style={{ color: 'red', marginTop: -15, marginBottom: 10 }}>{errors.password}</RegularText>}

=======
                placeholder="Enter password"
                secureTextEntry={!showPassword}
                style={{ paddingRight: 40 }}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={{ position: 'absolute', right: 10, top: 35 }}>
                <AntDesign name={showPassword ? 'eye' : 'eyeo'} size={20} color="gray" />
              </TouchableOpacity>
            </View>
            {errors.password && touched.password && <RegularText style={{ color: 'red', marginTop: 5 }}>{errors.password}</RegularText>}

            {/* Confirm Password */}
            <View style={{ marginTop: 20, position: 'relative' }}>
>>>>>>> Stashed changes
              <Input
                label="Confirm Password"
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                value={values.confirmPassword}
<<<<<<< Updated upstream
                placeholder="enter confirm password"
                secureTextEntry
              />
              {errors.confirmPassword && touched.confirmPassword && <RegularText style={{ color: 'red', marginTop: -15, marginBottom: 10 }}>{errors.confirmPassword}</RegularText>}
            </View>
            <PrimaryBtn
              onPress={handleSubmit}
              containerStyle={{ marginBottom: 40, marginHorizontal: 20 }}
              text="Continue"
            />
          </View>
=======
                placeholder="Confirm password"
                secureTextEntry={!showConfirmPassword}
                style={{ paddingRight: 40 }}
              />
              <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)} style={{ position: 'absolute', right: 10, top: 35 }}>
                <AntDesign name={showConfirmPassword ? 'eye' : 'eyeo'} size={20} color="gray" />
              </TouchableOpacity>
            </View>
            {errors.confirmPassword && touched.confirmPassword && <RegularText style={{ color: 'red', marginTop: 5 }}>{errors.confirmPassword}</RegularText>}

            <PrimaryBtn onPress={handleSubmit} containerStyle={{ marginVertical: 40 }} text="Continue" />
          </View>
          </KeyboardAvoidingView>
>>>>>>> Stashed changes
        )}
      </Formik>
    </MainLayout>
  );
};

export default ContactDetailScreen;
