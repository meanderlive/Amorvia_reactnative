import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import PrimaryBtn from '../../../components/PrimaryBtn';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../navigation/types';
import MainLayout from '../../../components/MainLayout';
import {MediumText, RegularText} from '../../../components/MyText';
import {SheetManager} from 'react-native-actions-sheet';
import {SHEETS} from '../../../sheets/sheets';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Formik } from 'formik';
import * as Yup from 'yup';
<<<<<<< Updated upstream
=======
import { useDispatch } from 'react-redux';
import { setAuth } from '../../../redux/feature/auth/authSlice';
>>>>>>> Stashed changes

// Validation Schema
const validationSchema = Yup.object().shape({
  education: Yup.string().required('Education is required'),
  profession: Yup.string().required('Profession is required'),
});

const CareerDetailScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
<<<<<<< Updated upstream
=======
    const dispatch = useDispatch()
>>>>>>> Stashed changes
    const route = useRoute<RouteProp<RootStackParams, 'CareerDetail'>>();
    const { newPayload } = route.params;

    const initialValues = {
      education: '',
      profession: '',
    };

    const handleSubmit = (values: typeof initialValues) => {
      const moreNewPayload = {
        ...newPayload,
        education: values.education,
        profession: values.profession,
      };
<<<<<<< Updated upstream
=======
      dispatch(setAuth({ user: moreNewPayload, token: '' }));
      console.log("new updated data", moreNewPayload);
>>>>>>> Stashed changes
      navigation.navigate('AddPhoto', { moreNewPayload });
    };

  return (
    <MainLayout onBack={navigation.goBack} title="Career Details">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, handleSubmit, values, errors, touched }) => (
          <View style={{flex: 1}}>
            <View style={{flex: 1, marginHorizontal: 20}}>
              {/* {EDUCATION} */}
              <View style={{marginBottom: 10}}>
                <MediumText style={{fontSize: 17}}>Education</MediumText>
                <TouchableOpacity
                  onPress={() =>
                    SheetManager.show(SHEETS.EducationSheet, {
                      payload: {
                        onSelect: (v: string) => setFieldValue('education', v),
                      },
                    })
                  }
                  style={styles.container}>
                  <RegularText style={{color: 'gray'}}>
                    {values.education || 'Select Education'}
                  </RegularText>
                  <AntDesign name="down" size={15} color={'gray'} />
                </TouchableOpacity>
                {errors.education && touched.education && <RegularText style={{ color: 'red' }}>{errors.education}</RegularText>}
              </View>

              {/* {PROFESSION} */}
              <View style={{marginBottom: 10}}>
                <MediumText style={{fontSize: 17}}>Profession</MediumText>
                <TouchableOpacity
                  onPress={() =>
                    SheetManager.show(SHEETS.ProfessionalStatusSheet, {
                      payload: {
                        onSelect: (v: string) => setFieldValue('profession', v),
                      },
                    })
                  }
                  style={styles.container}>
                  <RegularText style={{color: 'gray'}}>{values.profession || 'Select Profession'}</RegularText>
                  <AntDesign name="down" size={15} color={'gray'} />
                </TouchableOpacity>
                {errors.profession && touched.profession && <RegularText style={{ color: 'red' }}>{errors.profession}</RegularText>}
              </View>
            </View>
            <PrimaryBtn
              onPress={handleSubmit}
              containerStyle={{marginBottom: 40, marginHorizontal: 20}}
              text="Next"
            />
          </View>
        )}
      </Formik>
    </MainLayout>
  );
};

export default CareerDetailScreen;

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
