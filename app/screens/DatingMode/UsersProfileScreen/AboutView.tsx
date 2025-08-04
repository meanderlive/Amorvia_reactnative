import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {RegularText, RegularTextG} from '../../../components/MyText';
import {COLORS} from '../../../styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import PrimaryBtn from '../../../components/PrimaryBtn';

const interest = [
  {type: 'Painting'},
  {type: 'Dancing'},
  {type: 'Travelling'},
  {type: 'Sports'},
  {type: 'Running'},
];
const AboutView = () => {
  return (
    <View>
      <View style={styles.container}>
        <RegularText bold style={{marginBottom: 10}}>
          About Monica222
        </RegularText>
        <RegularTextG>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock.
        </RegularTextG>
      </View>

      <View style={styles.container}>
        <RegularText bold style={{marginBottom: 10}}>
          Hobbies & Interests
        </RegularText>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
          {interest.map((item: any, index: any) => {
            return (
              <View
                style={{
                  margin: 5,
                  borderRadius: 20,
                  paddingHorizontal: 15,
                  borderWidth: 2,
                  borderColor: 'lightgray',
                }}>
                <Text
                  style={{
                    opacity: 1,
                    fontSize: 15,
                    color: 'rgba(0,0,0,0.3)',
                    padding: 2,
                    margin: 3,
                  }}>
                  {item?.type}
                </Text>
              </View>
            );
          })}
        </View>
      </View>

      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <RegularText bold style={{marginBottom: 10}}>
            Basic Details
          </RegularText>
          <FontAwesome5 name="crown" size={18} color="#FFBB37" />
        </View>
        {/* {CONTACT} */}
        <View style={styles.row}>
          <View style={styles.icon}>
            <Feather name="phone-call" size={24} color="white" />
          </View>
          <View>
            <RegularTextG style={{fontSize: 13}}>Contact Number</RegularTextG>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
              <RegularText>+91 9456******</RegularText>
              <Fontisto name="locked" size={20} color={COLORS.primary} />
            </View>
          </View>
        </View>

        {/* {EMAIL} */}
        <View style={styles.row}>
          <View style={styles.icon}>
            <Feather name="mail" size={24} color="white" />
          </View>
          <View>
            <RegularTextG style={{fontSize: 13}}>Email ID</RegularTextG>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
              <RegularText>**********@gmail.com</RegularText>
              <Fontisto name="locked" size={20} color={COLORS.primary} />
            </View>
          </View>
        </View>

        {/* {DOB} */}
        <View style={styles.row}>
          <View style={styles.icon}>
            <AntDesign name="calendar" size={24} color="white" />
          </View>
          <View>
            <RegularTextG style={{fontSize: 13}}>Birth Date</RegularTextG>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
              <RegularText>Born on **/**/****</RegularText>
              <Fontisto name="locked" size={20} color={COLORS.primary} />
            </View>
          </View>
        </View>

        {/* {CITY} */}
        <View style={styles.row}>
          <View style={styles.icon}>
            <SimpleLineIcons name="location-pin" size={24} color="white" />
          </View>
          <View>
            <RegularTextG style={{fontSize: 13}}>Lives in</RegularTextG>
            <RegularText>California , USA</RegularText>
          </View>
        </View>
        {/* {} */}
      </View>

      <PrimaryBtn
        text="Connect Now"
        containerStyle={{marginHorizontal: 70, marginVertical: 20}}
      />
      {/* {} */}
    </View>
  );
};

export default AboutView;
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
    padding: 15,
    marginHorizontal: 20,
    borderRadius: 20,
    marginVertical: 1,
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 5,
  },
  icon: {
    height: 50,
    width: 50,
    borderRadius: 40,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
