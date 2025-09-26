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

const Family = ({ user }: { user: any }) => {
  const navigation = useNavigation<NativeStackNavigationProp<MatProfileStackParams>>();
  return (
    <View style={{paddingHorizontal: 20}}>
      <View style={styles.row}>
        <RegularText bold>Family Details</RegularText>
        <Octicons onPress={() => navigation.navigate('EditFamilyDetail')} name="pencil" size={20} color="gray" />
      </View>
      <View>
        <Row title="Family Status" text={user?.familyStatus || user?.FamilyBackground || 'N/A'} />
        <Row title="Father Name" text={user?.FathersName || user?.fatherName || 'N/A'} />
        <Row title="Father Status" text={user?.FathersStatus || user?.fatherStatus || 'N/A'} />
        <Row title="Mother Name" text={user?.MothersName || user?.motherName || 'N/A'} />
        <Row title="Mother Status" text={user?.MothersStatus || user?.motherStatus || 'N/A'} />
        <Row title="No of Brother" text={user?.NumberOfBrother || user?.brothers || 'N/A'} />
        <Row title="Married Brothers" text={user?.NoOfMarriedBrother || 'N/A'} />
        <Row title="No of Sister" text={user?.NumberOfSister || user?.sisters || 'N/A'} />
        <Row title="Married Sisters" text={user?.NoOfMarriedSister || 'N/A'} />
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
