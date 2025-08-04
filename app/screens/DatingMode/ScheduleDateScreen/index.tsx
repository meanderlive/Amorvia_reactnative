import {View, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import React from 'react';
import MainLayout from '../../../components/MainLayout';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ChatStackParams, EventStackParams} from '../../../navigation/types';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {RegularText, RegularTextG} from '../../../components/MyText';
import DatePicker from 'react-native-date-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import moment from 'moment';
import PrimaryBtn from '../../../components/PrimaryBtn';
import {SHEETS} from '../../../sheets/sheets';
import {SheetManager} from 'react-native-actions-sheet';
import MatchedModal from '../../../modals/MatchedModal';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../../redux';
import {addSchedule} from '../../../redux/feature/event/eventSlice';

const ScheduleDateScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<ChatStackParams>>();
  const params = useRoute<RouteProp<EventStackParams, 'ScheduleDate'>>().params;
  const dispatch = useDispatch<AppDispatch>();
  const [isDatePickerOpen, setIsDatePickerOpen] = React.useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = React.useState(false);
  const [date, setDate] = React.useState<any>('');
  const [time, setTime] = React.useState<any>('');
  const [venue, setVenue] = React.useState('Choose Venue');
  const [isMatchedModalOpen, setIsMatchedModalOpen] = React.useState(false);

  return (
    <MainLayout title="Schedule Date" onBack={navigation.goBack}>
      {isMatchedModalOpen && (
        <MatchedModal
          onHide={() => setIsMatchedModalOpen(false)}
          onSubmit={() => {
            if (params?.isReSchedule) return;
            dispatch(addSchedule({}));
          }}
        />
      )}
      <View style={{flex: 1, marginHorizontal: 20}}>
        <View
          style={{
            marginTop: 50,
          }}>
          {/* {DATE} */}
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
            <RegularText>
              {date ? date?.toISOString().slice(0, 10) : 'Choose Date'}
            </RegularText>
            <Octicons name="calendar" size={20} color="black" />
          </TouchableOpacity>

          {/* {TIME} */}
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
            <RegularText>{time === '' ? 'Choose Time' : time}</RegularText>
            <MaterialCommunityIcons
              name="clock-time-three-outline"
              size={24}
              color="black"
            />
          </TouchableOpacity>

          {/* {VENUE} */}
          <TouchableOpacity
            onPress={() =>
              SheetManager.show(SHEETS.VenueListSheet, {
                payload: {
                  onSelect: (v: string) => setVenue(v),
                },
              })
            }
            style={styles.input}>
            <RegularText style={{width: '95%'}}>{venue}</RegularText>
            <Octicons name="calendar" size={20} color="black" />
          </TouchableOpacity>
          {/* {} */}
        </View>
        <PrimaryBtn
          onPress={() => {
            setIsMatchedModalOpen(true);
          }}
          containerStyle={{marginTop: 50}}
          text={params?.isReSchedule ? 'Re-Schedule Date' : 'Schedule Date'}
        />
      </View>
    </MainLayout>
  );
};

export default ScheduleDateScreen;

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginTop: 20,
    paddingHorizontal: 20,
  },
});
