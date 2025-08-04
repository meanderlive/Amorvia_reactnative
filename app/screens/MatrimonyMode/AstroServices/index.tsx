import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MatProfileStackParams} from '../../../navigation/types';
import MainLayout from '../../../components/MainLayout';
import AstroSvg from '../../../../assets/images/svg/Astro.svg';
import {
  MediumText,
  RegularText,
  RegularTextG,
} from '../../../components/MyText';
import {COLORS} from '../../../styles';
import DatePicker from 'react-native-date-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment';
import PrimaryBtn from '../../../components/PrimaryBtn';

const AstroServicesScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<MatProfileStackParams>>();

  const [view, setView] = useState(1);
  const [isDatePickerOpen, setIsDatePickerOpen] = React.useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = React.useState(false);
  const [date, setDate] = React.useState<any>('');
  const [time, setTime] = React.useState<any>('');

  return (
    <MainLayout onBack={navigation.goBack} title="Astro Services">
      <View style={{padding: 20}}>
        <AstroSvg style={{alignSelf: 'center'}} />
        <MediumText style={{marginTop: 25}}>Astro Plans</MediumText>
        {/* {} */}
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
          <TouchableOpacity
            onPress={() => {
              setView(1);
            }}
            style={[
              styles.price,
              {borderColor: view === 1 ? COLORS.primary : 'black'},
            ]}>
            <RegularText style={{color: view === 1 ? COLORS.primary : 'black'}}>
              $ 1/min
            </RegularText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setView(2);
            }}
            style={[
              styles.price,
              {borderColor: view === 2 ? COLORS.primary : 'black'},
            ]}>
            <RegularText style={{color: view === 2 ? COLORS.primary : 'black'}}>
              $ 2/min
            </RegularText>
          </TouchableOpacity>
        </View>
        {/* {Date Time} */}
        <View
          style={{
            flexDirection: 'row',
            marginTop: 30,
            justifyContent: 'space-between',
          }}>
          <View style={{width: '48%'}}>
            <RegularText>Select Date</RegularText>
            <TouchableOpacity
              onPress={() => setIsDatePickerOpen(true)}
              style={styles.input}>
              <DatePicker
                modal
                mode="date"
                open={isDatePickerOpen}
                date={date || new Date()}
                onConfirm={dob => {
                  setIsDatePickerOpen(false);
                  setDate(dob);
                }}
                onCancel={() => {
                  setIsDatePickerOpen(false);
                }}
              />
              <RegularTextG>
                {date ? date?.toISOString().slice(0, 10) : 'Choose Date'}
              </RegularTextG>
              <AntDesign name="calendar" size={18} color="gray" />
            </TouchableOpacity>
          </View>
          <View style={{width: '48%'}}>
            <RegularText>Select Time</RegularText>

            <TouchableOpacity
              onPress={() => setTimePickerVisibility(true)}
              style={styles.input}>
              <DatePicker
                modal
                mode="time"
                open={isTimePickerVisible}
                date={new Date()}
                onConfirm={time => {
                  setTimePickerVisibility(false);
                  const t = moment(time).format('LT');
                  setTime(t);
                  console.log(t, 'LT');
                }}
                onCancel={() => {
                  setTimePickerVisibility(false);
                }}
              />
              <RegularTextG>{time === '' ? 'Choose Time' : time}</RegularTextG>
              <MaterialCommunityIcons
                name="clock-time-three-outline"
                size={20}
                color="gray"
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* {} */}
        <RegularText style={{marginTop: 20}}>Phone Number</RegularText>
        <View style={styles.input}>
          <TextInput
            keyboardType="phone-pad"
            style={{flex: 1}}
            placeholder="Enter your phone number"
          />
        </View>

        <PrimaryBtn
          onPress={() => navigation.goBack()}
          text="Book a Call"
          containerStyle={{marginVertical: 40}}
        />
      </View>
    </MainLayout>
  );
};

export default AstroServicesScreen;
const styles = StyleSheet.create({
  price: {
    borderRadius: 69,
    borderWidth: 1,
    padding: 10,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  input: {
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'lightgray',
    paddingHorizontal: 10,
    height: 50,
    justifyContent: 'space-between',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
