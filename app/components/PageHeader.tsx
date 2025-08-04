import {View, Text} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {BigText} from './MyText';
import {COLORS} from '../styles';
import {useNavigation} from '@react-navigation/native';

type Props = {
  title: string;
};
const PageHeader = ({title}: Props) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        paddingHorizontal: 15,
        marginTop: 10,
      }}>
      <MaterialIcons
        onPress={navigation.goBack}
        name="arrow-back"
        size={30}
        color={COLORS.black}
      />
      <BigText style={{fontSize: 23}}>{title} </BigText>
      <View />
    </View>
  );
};

export default PageHeader;
