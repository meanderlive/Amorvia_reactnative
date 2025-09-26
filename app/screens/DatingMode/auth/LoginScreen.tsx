import {
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import MainLayout from '../../../components/MainLayout';
import { BigText, RegularText, SmallText } from '../../../components/MyText';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../../../navigation/types';
import { COLORS } from '../../../styles';
import HeartSvg from '../../../../assets/images/svg/heart.svg';
import LoginSvg from '../../../../assets/images/svg/login.svg';
import PrimaryBtn from '../../../components/PrimaryBtn';
import { api_loginOTP } from '../../../api/auth';
import { Formik } from 'formik';
import * as Yup from 'yup';

// Validation Schema
const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a valid email')
    .required('Email is required')
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      'Invalid email format'
    ),
});

const LoginScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const [loading, setLoading] = React.useState(false);

  const handleSendOtp = async (values: { email: string }) => {
    setLoading(true);
    try {
      console.log(values.email, "payload Email");
      const res = await api_loginOTP(values.email);
      console.log('Login OTP API response:', res.data);
      navigation.navigate('CodeVerify', {
        otp: res.data.otp,
        token: res.data.token
      });
    } catch (error) {
      console.log(error);
      Alert.alert('Error', 'Something went wrong!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout>
      <Formik
        initialValues={{ email: '' }}
        validationSchema={loginSchema}
        onSubmit={handleSendOtp}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <ScrollView>
            <LoginSvg
              width={250}
              style={{
                marginTop: 20,
                marginHorizontal: '15%',
              }}
            />
            <View style={styles.heartContainer}>
              <HeartSvg width={45} height={45} />
            </View>

            <View>
              <BigText style={styles.title}>
                Lets start exploring!
              </BigText>
              <SmallText style={styles.subtitle}>
                Don't lose access to your account, verify
              </SmallText>
              <SmallText style={styles.subtitle}>
                your email or phone number
              </SmallText>
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Enter your email"
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                style={[
                  styles.input,
                  errors.email && touched.email && styles.inputError
                ]}
                autoCapitalize="none"
                keyboardType="email-address"
              />
              {errors.email && touched.email && (
                <SmallText style={styles.errorText}>{errors.email}</SmallText>
              )}
            </View>

            <PrimaryBtn
              onPress={handleSubmit}
              //@ts-ignore
              disabled={loading || !values.email}
              containerStyle={styles.button}
              text={loading ? 'Sending OTP...' : 'Continue'}
            />

            <TouchableOpacity onPress={() => navigation.navigate("CreateAccount")} style={styles.signupContainer}>
              <RegularText style={styles.signupText}>
                Don't have an account? </RegularText>

              <RegularText
                style={styles.signupLink}

              >
                Sign Up
              </RegularText>


            </TouchableOpacity>
          </ScrollView>
        )}
      </Formik>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heartContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  title: {
    textAlign: 'center',
    fontSize: 28,
    color: 'black',
    marginBottom: 10,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 13,
  },
  inputContainer: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 30,
  },
  input: {
    width: '100%',
    borderRadius: 25,
    borderColor: 'rgba(0,0,0,0.2)',
    borderWidth: 2,
    height: 50,
    paddingLeft: 20,
    fontSize: 16,
  },
  inputError: {
    borderColor: COLORS.error,
  },
  errorText: {
    color: COLORS.error,
    fontSize: 12,
    marginTop: 5,
    marginLeft: 15,
  },
  button: {
    marginTop: 30,
    marginHorizontal: 20,
  },
  signupContainer: {
    marginTop: 20,
    alignItems: 'center',
    marginBottom: 30,
    flexDirection: 'row'
    , alignSelf: 'center'
  },
  signupText: {
    color: COLORS.grey,
    fontSize: 14,
  },
  signupLink: {
    color: COLORS.secondary,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
