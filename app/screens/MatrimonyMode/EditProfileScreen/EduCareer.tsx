import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {RegularText, RegularTextG} from '../../../components/MyText';
import Octicons from 'react-native-vector-icons/Octicons';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MatProfileStackParams} from '../../../navigation/types';

type RowProps = {
  text: string;
  title: string;
};

const Row = ({text, title}: RowProps) => {
  return (
    <React.Fragment>
      <View style={styles.row2}>
        <RegularTextG style={{width: 150}}>{title}</RegularTextG>
        <RegularText>{text}</RegularText>
      </View>
    </React.Fragment>
  );
};
const EduCareer = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<MatProfileStackParams>>();
  return (
    <View style={{paddingHorizontal: 20}}>
      <View style={styles.row}>
        <RegularText bold>Edu & Career</RegularText>
        <Octicons
          onPress={() => navigation.navigate('EditEduCareer')}
          name="pencil"
          size={20}
          color="gray"
        />
      </View>
      <View>
        <Row title="Profession" text="Work in Digital Service" />
        <Row title="Company Name" text="ABC Pvt. Ltd." />
        <Row title="Annual Income" text="$200000 " />
        <Row title="Highest Qualification" text="Masters" />
        <Row title="College Name" text="Oxford University" />
      </View>
    </View>
  );
};

export default EduCareer;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: 'rgba(0,0,0,0.04)',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  row2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
});
