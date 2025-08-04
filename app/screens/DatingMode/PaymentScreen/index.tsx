import {View, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import MainLayout from '../../../components/MainLayout';
import {COLORS} from '../../../styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {PremiumStackParams} from '../../../navigation/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RegularText, RegularTextG} from '../../../components/MyText';
import PaypalSvg from '../../../../assets/images/PaymentSvg/Paypal.svg';
import GpaySvg from '../../../../assets/images/PaymentSvg/GPay.svg';
import MastercardSvg from '../../../../assets/images/PaymentSvg/MasterCard.svg';
import PrimaryBtn from '../../../components/PrimaryBtn';

const data = [
  {id: 1, title: 'Google Pay', icon: <GpaySvg />},
  {id: 2, title: 'Paypal', icon: <PaypalSvg />},
  {id: 3, title: '**** **** 5659', icon: <MastercardSvg />},
];

const Item = ({
  title,
  onSelect,
  isSelected,
  icon,
}: {
  title: string;
  onSelect: () => void;
  isSelected: boolean;
  icon: any;
}) => {
  return (
    <>
      <TouchableOpacity onPress={onSelect} style={styles.container2}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
          {icon}
          <RegularText style={{flex: 1}}>{title}</RegularText>
        </View>
        <MaterialIcons
          name={isSelected ? 'radio-button-on' : 'radio-button-off'}
          size={22}
          color={isSelected ? COLORS.primary : '#BBBBBB'}
        />
      </TouchableOpacity>
    </>
  );
};

const PaymentScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<PremiumStackParams>>();
  const [selectedId, setSelectedId] = React.useState<null | number>(null);
  return (
    <MainLayout title="Payment" onBack={navigation.goBack}>
      <View style={{flex: 1, marginHorizontal: 20, paddingTop: 30}}>
        <View style={{flex: 1}}>
          {data.map(i => {
            return (
              <Item
                onSelect={() => setSelectedId(i.id)}
                title={i.title}
                icon={i.icon}
                isSelected={i.id === selectedId}
              />
            );
          })}

          <TouchableOpacity
            onPress={() => navigation.navigate('AddNewCard')}
            style={[
              styles.container2,
              {marginTop: 50, justifyContent: 'center'},
            ]}>
            <RegularTextG>+ Add new card </RegularTextG>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('AddBank')}
            style={[
              styles.container2,
              {marginTop: 20, justifyContent: 'center'},
            ]}>
            <RegularTextG>+ Add new bank </RegularTextG>
          </TouchableOpacity>
        </View>
        <View style={{marginBottom: 20}}>
          <PrimaryBtn
            onPress={() => navigation.navigate('PaymentVerifyOtp')}
            text="Submit"
          />
        </View>
      </View>
    </MainLayout>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginHorizontal: 1,
    marginBottom: 1,
    paddingRight: 35,
  },
});
