import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {RegularText, RegularTextG} from '../../../components/MyText';
import {COLORS} from '../../../styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import JesusSvg from '../../../../assets/images/jesus.svg';
import PrimaryBtn from '../../../components/PrimaryBtn';
import SecondaryBtn from '../../../components/SecondaryBtn';

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

const EduCareer = () => {
  return (
    <View style={styles.container}>
      <RegularText bold>Career & Education</RegularText>
      {/* {CONTACT} */}

      {/* {} */}
      <Row
        title="Profession"
        text="Work in the digital Service"
        icon={() => (
          <FontAwesome5 name="shopping-bag" size={22} color="white" />
        )}
      />
      {/* {} */}
      <View style={styles.row}>
        <View style={styles.icon}>
          <FontAwesome5 name="building" size={22} color="white" />
        </View>
        <View>
          <RegularTextG style={{fontSize: 12}}>Company Name</RegularTextG>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
            <RegularText>************</RegularText>
            <Fontisto name="locked" size={20} color={COLORS.primary} />
          </View>
        </View>
      </View>
      {/* {} */}
      <Row
        title="Annual Income"
        text="Earns $20000 Annually"
        icon={() => <FontAwesome5 name="dollar-sign" size={22} color="white" />}
      />
      {/* {} */}
      <Row
        title="Highest Qualification"
        text="B.E/B.Tech"
        icon={() => (
          <SimpleLineIcons name="graduation" size={22} color="white" />
        )}
      />
      {/* {} */}
      <Row
        title="Education"
        text="Engineering"
        icon={() => <Feather name="book-open" size={24} color="white" />}
      />
      {/* {} */}
      <View style={styles.row}>
        <View style={styles.icon}>
          <MaterialCommunityIcons name="bank-outline" size={24} color="white" />
        </View>
        <View>
          <RegularTextG style={{fontSize: 12}}>College Name</RegularTextG>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
            <RegularText>************</RegularText>
            <Fontisto name="locked" size={20} color={COLORS.primary} />
          </View>
        </View>
      </View>

      <RegularTextG style={{textAlign: 'center'}}>
        To unlock compoany & collage name
      </RegularTextG>

      <SecondaryBtn
        containerStyle={{marginHorizontal: 70, marginVertical: 20, height: 45}}
        text="Go Premium Now"
      />

      <PrimaryBtn
        text="Connect Now"
        containerStyle={{marginHorizontal: 70, height: 45}}
      />

      {/* {} */}
    </View>
  );
};

export default EduCareer;

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
