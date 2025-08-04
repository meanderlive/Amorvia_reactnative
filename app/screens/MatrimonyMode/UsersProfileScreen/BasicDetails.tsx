import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {RegularText, RegularTextG} from '../../../components/MyText';
import {COLORS} from '../../../styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import JesusSvg from '../../../../assets/images/jesus.svg';

const details = [
  {type: 'Created by self'},
  {type: 'ID: SH750987878'},
  {type: '25 years old'},
  {type: 'Height: 5-11'},
];

type RowProps = {
  text: string;
  title: string;
  icon: () => React.ReactNode;
};

const Row = ({text, icon, title}: RowProps) => {
  return (
    <React.Fragment>
      <View
        style={{
          width: '90%',
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 15,
          gap: 15,
        }}>
        <View
          style={{
            width: 50,
            height: 50,
            backgroundColor: COLORS.primary,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {icon && icon()}
        </View>
        <View style={{justifyContent: 'center'}}>
          <Text style={{color: 'gray', fontSize: 13}}>{title}</Text>
          <RegularText style={{fontSize: 15}}>{text}</RegularText>
        </View>
      </View>
    </React.Fragment>
  );
};

const BasicDetails = () => {
  return (
    <View style={styles.container}>
      <RegularText bold style={{marginBottom: 10}}>
        Basic Details
      </RegularText>
      {/* {CONTACT} */}

      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
        {details.map((item: any, index: any) => {
          return (
            <View
              style={{
                margin: 5,
                borderRadius: 20,
                paddingHorizontal: 10,
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

      {/* {MARITAL STATUS} */}
      <Row
        title="Marital Status"
        text="Never Married"
        icon={() => (
          <MaterialCommunityIcons name="ring" size={24} color="white" />
        )}
      />
      {/* {CITY} */}
      <Row
        title="Lives in"
        text="Lives in Hyderabad, Telangana, India"
        icon={() => (
          <SimpleLineIcons name="location-pin" size={24} color="white" />
        )}
      />
      {/* {CITY} */}
      <Row
        title="Religion & Mother Tongue"
        text="Hindu, Hindi"
        icon={() => <JesusSvg />}
      />
      {/* {CITY} */}
      <Row
        title="Community"
        text="Brahman"
        icon={() => <FontAwesome name="users" size={24} color="white" />}
      />
      {/* {CITY} */}
      <Row
        title="Diet Preference"
        text="Non-Vegetsrin"
        icon={() => (
          <MaterialCommunityIcons name="food-turkey" size={24} color="white" />
        )}
      />

      {/* {} */}
    </View>
  );
};

export default BasicDetails;

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
