import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {RegularText, RegularTextG} from '../../../components/MyText';
import {COLORS} from '../../../styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
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

const Family = () => {
  return (
    <View style={styles.container}>
      <RegularText bold>Family Details</RegularText>
      {/* {CONTACT} */}

      {/* {} */}
      <Row
        title="Family Status"
        text="Upper Middle Class"
        icon={() => (
          <MaterialIcons name="family-restroom" size={24} color="white" />
        )}
      />
      {/* {} */}
      <Row
        title="Father's Status"
        text="Employed"
        icon={() => (
          <FontAwesome5 name="chalkboard-teacher" size={18} color="white" />
        )}
      />
      {/* {} */}
      <Row
        title="Mother's Status"
        text="Homemaker"
        icon={() => <AntDesign name="home" size={24} color="white" />}
      />
      {/* {} */}
      <Row
        title="Number of Brother"
        text="2"
        icon={() => <EvilIcons name="user" size={30} color="white" />}
      />
      {/* {} */}
      <Row
        title="No. of Married Brother"
        text="1"
        icon={() => (
          <MaterialCommunityIcons name="ring" size={24} color="white" />
        )}
      />
      {/* {} */}
      <Row
        title="Number of Sister"
        text="1"
        icon={() => (
          <MaterialIcons
            name="face-retouching-natural"
            size={24}
            color="white"
          />
        )}
      />
      {/* {} */}
      <Row
        title="No. of Married Sister"
        text="1"
        icon={() => (
          <MaterialCommunityIcons name="ring" size={24} color="white" />
        )}
      />
      {/* {} */}

      <PrimaryBtn
        text="Connect Now"
        containerStyle={{marginHorizontal: 70, height: 45, marginTop: 20}}
      />

      {/* {} */}
    </View>
  );
};

export default Family;

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
