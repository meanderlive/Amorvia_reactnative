import {View, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {
  MediumText,
  RegularText,
  RegularTextG,
} from '../../../components/MyText';
import {COLORS} from '../../../styles';
import {useNavigation} from '@react-navigation/native';
import PrimaryBtn from '../../../components/PrimaryBtn';
import MainLayout from '../../../components/MainLayout';
import RadioBtn from '../../../components/RadioBtn';

const ManageNotificationScreen = () => {
  const [notification, setNotification] = React.useState('first');
  const [sound, setSound] = React.useState('first');
  const [vibrate, setVibrate] = React.useState('first');

  const navigation = useNavigation();

  return (
    <MainLayout onBack={navigation.goBack} title="Manage Notification">
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{marginHorizontal: 20}}>
        <RegularText style={{marginTop: 20, fontWeight: '500'}}>
          Notification Setting
        </RegularText>

        <RegularText
          style={{
            marginVertical: 10,
            color: COLORS.grey,
            marginTop: 15,
          }}>
          Select the type of activity
        </RegularText>

        <View style={styles.container}>
          <View style={styles.subRow}>
            <RegularTextG>Matches</RegularTextG>
            <RadioBtn
              bool={notification === 'first'}
              onPress={() => setNotification('first')}
            />
          </View>
          <View style={styles.subRow}>
            <RegularTextG>Messages</RegularTextG>
            <RadioBtn
              bool={notification === 'second'}
              onPress={() => setNotification('second')}
            />
          </View>
          <View style={styles.subRow}>
            <RegularTextG>Calls</RegularTextG>
            <RadioBtn
              bool={notification === 'third'}
              onPress={() => setNotification('third')}
            />
          </View>
          <View style={styles.subRow}>
            <RegularTextG>Promotional</RegularTextG>
            <RadioBtn
              bool={notification === 'fourth'}
              onPress={() => setNotification('fourth')}
            />
          </View>
        </View>

        <RegularText
          style={{marginVertical: 20, marginTop: 30, fontWeight: '500'}}>
          Sound Setting
        </RegularText>

        <View style={styles.container}>
          <View style={styles.subRow}>
            <RegularTextG>Default(Bongo)</RegularTextG>
            <RadioBtn
              bool={sound === 'first'}
              onPress={() => setSound('first')}
            />
          </View>
        </View>

        {/* {VIBRATE} */}
        <MediumText
          style={{marginVertical: 20, marginTop: 30, fontWeight: '500'}}>
          Vibrate Setting
        </MediumText>
        <View style={styles.container}>
          <View style={styles.subRow}>
            <RegularTextG>Off</RegularTextG>
            <RadioBtn
              bool={vibrate === 'first'}
              onPress={() => setVibrate('first')}
            />
          </View>
          <View style={styles.subRow}>
            <RegularTextG>Default</RegularTextG>
            <RadioBtn
              bool={vibrate === 'second'}
              onPress={() => setVibrate('second')}
            />
          </View>
          <View style={styles.subRow}>
            <RegularTextG>Short</RegularTextG>
            <RadioBtn
              bool={vibrate === 'third'}
              onPress={() => setVibrate('third')}
            />
          </View>
          <View style={styles.subRow}>
            <RegularTextG>Long</RegularTextG>
            <RadioBtn
              bool={vibrate === 'fourth'}
              onPress={() => setVibrate('fourth')}
            />
          </View>
        </View>

        <View style={{marginBottom: 50}}>
          <PrimaryBtn text="Save" />
        </View>
      </ScrollView>
    </MainLayout>
  );
};

export default ManageNotificationScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F9F9F9',
    padding: 10,
    marginBottom: 15,
    borderRadius: 10,
  },
  subRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 7,
  },
});
