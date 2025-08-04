import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import MainLayout from '../../../components/MainLayout';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {MediumText, RegularText, SmallText} from '../../../components/MyText';
import {COLORS} from '../../../styles';
import {EventStackParams} from '../../../navigation/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import PrimaryBtn from '../../../components/PrimaryBtn';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../../redux';
import {removeSchedule} from '../../../redux/feature/event/eventSlice';

type ScheduleType = {
  id: number;
  date: string;
  venue: string;
};

const data = [
  {
    id: 1,
    date: '07 Jan 2024',
    venue: 'California , US',
  },
];

const EventScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<EventStackParams>>();

  const {schedule} = useSelector((s: RootState) => s.event);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <MainLayout title="Events" onBack={navigation.goBack}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{flex: 1, padding: 15}}>
        <View style={styles.btnView}>
          <PrimaryBtn
            //@ts-ignore
            onPress={() => navigation.navigate('SelectUser')}
            containerStyle={{backgroundColor: '#25D366', height: 45}}
            text="Schedule Date"
          />
        </View>

        <FlatList
          data={schedule}
          //@ts-ignore
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={styles.container}>
                <View style={{height: 130, width: 130, borderRadius: 10}}>
                  <Image
                    source={require('../../../components/SwipeCard/assets/img2.jpg')}
                    style={{height: '100%', width: '100%', borderRadius: 10}}
                  />
                </View>

                <View>
                  <RegularText bold>Social Circle Mix-Up</RegularText>
                  <View style={styles.row}>
                    <AntDesign name="calendar" size={16} color="gray" />
                    <SmallText>{item.date}</SmallText>
                  </View>
                  <View style={styles.row}>
                    <MaterialIcons
                      name="location-on"
                      size={16}
                      color="rgba(0,0,0,0.4)"
                    />
                    <SmallText>{item.venue}</SmallText>
                  </View>

                  <View style={styles.row}>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate('ScheduleDate', {
                          isReSchedule: true,
                        })
                      }
                      style={styles.btn}>
                      <Text style={{fontSize: 12, color: 'white'}}>
                        Re-schedule
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.btn}
                      onPress={() => dispatch(removeSchedule({id: item.id}))}>
                      <Text style={{fontSize: 12, color: 'white'}}>Cancel</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </ScrollView>
    </MainLayout>
  );
};

export default EventScreen;
const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginTop: 15,
    marginHorizontal: 1,
    marginBottom: 1,
    gap: 15,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginTop: 10,
  },
  btn: {
    backgroundColor: COLORS.primary,
    height: 28,
    width: 85,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginRight: 10,
  },
  btnView: {
    width: '45%',
    alignSelf: 'flex-end',
    marginBottom: 5,
  },
});
