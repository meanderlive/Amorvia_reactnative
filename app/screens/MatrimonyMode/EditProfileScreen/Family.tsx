import {View, Text} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {RegularText, RegularTextG, SmallText} from '../../../components/MyText';
import Octicons from 'react-native-vector-icons/Octicons';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MatProfileStackParams} from '../../../navigation/types';
import {useNavigation} from '@react-navigation/native';

type RowProps = {
  text: string;
  title: string;
};

const Row = ({text, title}: RowProps) => {
  return (
    <React.Fragment>
      <View style={styles.row2}>
        <RegularTextG style={{width: 140}}>{title}</RegularTextG>
        <RegularText>{text}</RegularText>
      </View>
    </React.Fragment>
  );
};

const Family = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<MatProfileStackParams>>();
  return (
    <View style={{paddingHorizontal: 20}}>
      <View style={styles.row}>
        <RegularText bold>Family Details</RegularText>
        <Octicons
          onPress={() => navigation.navigate('EditFamilyDetail')}
          name="pencil"
          size={20}
          color="gray"
        />
      </View>
      <View>
        <Row title="Family Status" text="Rich" />
        <Row title="Father Name" text="Richi Rich" />
        <Row title="Father Status" text="Working" />
        <Row title="Mother Name" text="Moinica" />
        <Row title="Mother Status" text="Homemaker" />
        <Row title="No of Brother" text="2" />
        <Row title="Married" text="1" />
        <Row title="No of Sister" text="1" />
        <Row title="Married" text="1" />
      </View>
    </View>
  );
};

export default Family;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: 'rgba(0,0,0,0.04)',
    padding: 10,
    borderRadius: 10,
  },
  row2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
});
