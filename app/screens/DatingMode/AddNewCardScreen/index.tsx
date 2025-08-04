import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import React from 'react';
import MainLayout from '../../../components/MainLayout';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../navigation/types';
import DatePicker from 'react-native-date-picker';
import {RegularText} from '../../../components/MyText';
import VisaCard from '../../../../assets/images/PaymentSvg/VisaCard.svg';
import {StyleSheet} from 'react-native';
import PrimaryBtn from '../../../components/PrimaryBtn';

const AddNewCardScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const [isDatePickerOpen, setIsDatePickerOpen] = React.useState(false);
  const [dob, setDob] = React.useState<any>('');
  return (
    <MainLayout title="Add New Card" onBack={navigation.goBack}>
      <ScrollView style={{flex: 1}}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 25,
          }}>
          <VisaCard />
        </View>

        <View style={{marginHorizontal: 20, marginTop: 5}}>
          <RegularText>CARD NAME</RegularText>
          <TextInput style={styles.input} placeholder="Enter your Name" />

          <RegularText>CARD NUMBER</RegularText>
          <TextInput
            style={styles.input}
            placeholder=" Enter your 16 digit number"
          />
          <View
            style={{
              flexDirection: 'row',
              marginTop: 15,
              justifyContent: 'space-between',
            }}>
            <View style={{width: '48%'}}>
              <RegularText>EXPIRY DATE</RegularText>

              <TouchableOpacity
                onPress={() => setIsDatePickerOpen(true)}
                style={[styles.input, {paddingVertical: 13}]}>
                <DatePicker
                  modal
                  mode="date"
                  open={isDatePickerOpen}
                  date={dob || new Date()}
                  onConfirm={dob => {
                    setIsDatePickerOpen(false);
                    setDob(dob);
                  }}
                  onCancel={() => {
                    setIsDatePickerOpen(false);
                  }}
                />
                <Text
                  style={{
                    color: 'rgba(0,0,0,0.4)',
                    fontSize: 14,
                  }}>
                  {dob ? dob?.toISOString().slice(0, 10) : 'YYYY - MM - DD'}
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{width: '48%'}}>
              <RegularText style={{marginLeft: 5}}>CVV</RegularText>
              <TextInput
                style={styles.input}
                placeholder="Enter your CVV"
                keyboardType="number-pad"
              />
            </View>
          </View>
        </View>

        <PrimaryBtn
          onPress={() => navigation.goBack()}
          containerStyle={{marginHorizontal: 20, marginTop: 20}}
          text="Add Card"
        />
      </ScrollView>
    </MainLayout>
  );
};

export default AddNewCardScreen;

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: 'lightgray',
    borderRadius: 10,
    paddingLeft: 15,
    marginTop: 10,
    marginBottom: 25,
  },
});
