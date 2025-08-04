import {
  Dimensions,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ChatStackParams, DiscoverStackParams} from '../navigation/types';
import {COLORS} from '../styles';
import {BigText, RegularText, SmallText} from '../components/MyText';
import PrimaryBtn from '../components/PrimaryBtn';
import DatePicker from 'react-native-date-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';

const B =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXkV81Cc_pT6HWD4-UZnH_eiYwHQMlTNUkmw&usqp=CAU';
const A =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqa1_cT9DVW04ITh3Fm13o8yE_t6K6GPND2A&usqp=CAU';

const {width, height} = Dimensions.get('screen');
type Props = {
  onHide?: () => void;
};

const ScheduleModal = ({onHide}: Props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<DiscoverStackParams>>();
  const [isDatePickerOpen, setIsDatePickerOpen] = React.useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = React.useState(false);
  const [dob, setDob] = React.useState<any>('');
  const [time, setTime] = React.useState<any>('');

  return (
    <Modal visible={true} transparent>
      <TouchableWithoutFeedback onPress={onHide}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.5)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: '90%',
              backgroundColor: COLORS.white,
              borderRadius: 20,
              paddingVertical: 20,
            }}>
            <BigText
              style={{
                fontSize: 20,
                textAlign: 'center',
                paddingHorizontal: 40,
                marginVertical: 20,
              }}>
              Schedule Your Virtual Date for Meaningful Connections!
            </BigText>

            {/* {DATE} */}
            <TouchableOpacity
              onPress={() => setIsDatePickerOpen(true)}
              style={styles.input}>
              <DatePicker
                modal
                mode="date"
                open={isDatePickerOpen}
                date={dob || new Date()}
                onConfirm={dob => {
                  setIsDatePickerOpen(false);
                  setDob(dob);
                }}
                onCancel={() => {
                  setIsDatePickerOpen(false);
                }}
              />
              <RegularText
                style={{
                  color: dob ? 'black' : 'gray',
                }}>
                {dob ? dob?.toISOString().slice(0, 10) : 'Choose Date'}
              </RegularText>
              <Octicons name="calendar" size={20} color="lightgray" />
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
              <RegularText
                style={{
                  color: time ? 'black' : 'gray',
                }}>
                {time === '' ? 'Choose Time' : time}
              </RegularText>
              <MaterialCommunityIcons
                name="clock-time-three-outline"
                size={24}
                color="lightgray"
              />
            </TouchableOpacity>

            {/* {} */}
            <View style={{gap: 20, marginHorizontal: 35, marginTop: 20}}>
              <PrimaryBtn
                onPress={() => {
                  navigation.navigate('Discover'), onHide;
                }}
                textStyle={{fontSize: 14}}
                text="Send a Message"
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ScheduleModal;

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
    marginHorizontal: 30,
    marginBottom: 20,
  },
});
