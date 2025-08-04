import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React from 'react';
import MainLayout from '../../../components/MainLayout';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MatProfileStackParams} from '../../../navigation/types';
import PrimaryBtn from '../../../components/PrimaryBtn';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  MediumText,
  RegularText,
  RegularTextG,
} from '../../../components/MyText';

const PartnerPrefScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<MatProfileStackParams>>();
  return (
    <MainLayout title="Partner Preference" onBack={navigation.goBack}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{flex: 1, marginHorizontal: 20}}>
        <View>
          {/* {AGE} */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 20,
              marginBottom: 10,
              width: '100%',
            }}>
            {/* {MinAge} */}
            <View style={{width: '48%'}}>
              <MediumText style={{fontSize: 17}}>Min Age</MediumText>
              <TouchableOpacity style={styles.container}>
                <RegularText style={{color: 'gray'}}>Select</RegularText>
                <AntDesign name="down" size={15} color={'gray'} />
              </TouchableOpacity>
            </View>
            {/* {MAX AGE} */}
            <View style={{width: '48%'}}>
              <MediumText style={{fontSize: 17}}>Max Age</MediumText>
              <TouchableOpacity style={styles.container}>
                <RegularText style={{color: 'gray'}}>Select</RegularText>
                <AntDesign name="down" size={15} color={'gray'} />
              </TouchableOpacity>
            </View>
          </View>
          {/* {HEIGHT} */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 10,
              width: '100%',
            }}>
            {/* {MinAge} */}
            <View style={{width: '48%'}}>
              <MediumText style={{fontSize: 17}}>Min Height</MediumText>
              <TouchableOpacity style={styles.container}>
                <RegularText style={{color: 'gray'}}>Select</RegularText>
                <AntDesign name="down" size={15} color={'gray'} />
              </TouchableOpacity>
            </View>
            {/* {MAX AGE} */}
            <View style={{width: '48%'}}>
              <MediumText style={{fontSize: 17}}>Max Height</MediumText>
              <TouchableOpacity style={styles.container}>
                <RegularText style={{color: 'gray'}}>Select</RegularText>
                <AntDesign name="down" size={15} color={'gray'} />
              </TouchableOpacity>
            </View>
          </View>

          {/* {Country} */}
          <View style={{marginBottom: 10}}>
            <MediumText style={{fontSize: 17}}>Country</MediumText>
            <TouchableOpacity style={styles.container}>
              <RegularText style={{color: 'gray'}}>Select</RegularText>
              <AntDesign name="down" size={15} color={'gray'} />
            </TouchableOpacity>
          </View>

          {/* {Professional Status} */}
          <View style={{marginBottom: 10}}>
            <MediumText style={{fontSize: 17}}>Professional Status</MediumText>
            <TouchableOpacity style={styles.container}>
              <RegularText style={{color: 'gray'}}>Doesn't Matter</RegularText>
              <AntDesign name="down" size={15} color={'gray'} />
            </TouchableOpacity>
          </View>

          {/* {Marital Status} */}
          <View style={{marginBottom: 10}}>
            <MediumText style={{fontSize: 17}}>Marital Status</MediumText>
            <TouchableOpacity style={styles.container}>
              <RegularText style={{color: 'gray'}}>Doesn't Matter</RegularText>
              <AntDesign name="down" size={15} color={'gray'} />
            </TouchableOpacity>
          </View>
          {/* {Religion} */}
          <View style={{marginBottom: 10}}>
            <MediumText style={{fontSize: 17}}>Religion</MediumText>
            <TouchableOpacity style={styles.container}>
              <RegularText style={{color: 'gray'}}>Hindu</RegularText>
              <AntDesign name="down" size={15} color={'gray'} />
            </TouchableOpacity>
          </View>
          {/* {Caste} */}
          <View style={{marginBottom: 10}}>
            <MediumText style={{fontSize: 17}}>Caste</MediumText>
            <TouchableOpacity style={styles.container}>
              <RegularText style={{color: 'gray'}}>Doesn't Matter</RegularText>
              <AntDesign name="down" size={15} color={'gray'} />
            </TouchableOpacity>
          </View>
          {/* {} */}
        </View>

        <PrimaryBtn
          onPress={() => navigation.goBack()}
          text="Save"
          containerStyle={{marginVertical: 20}}
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
});
