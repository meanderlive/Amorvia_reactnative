import {View, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {MediumText, RegularText, Text30} from '../../../components/MyText';
import Input from '../../../components/Input';
import PrimaryBtn from '../../../components/PrimaryBtn';
import DatePicker from 'react-native-date-picker';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../navigation/types';
import {SheetManager} from 'react-native-actions-sheet';
import {SHEETS} from '../../../sheets/sheets';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const CreateAccountScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const [isDatePickerOpen, setIsDatePickerOpen] = React.useState(false);
  const [dob, setDob] = useState<any>('');
  const [sex, setSex] = useState('Male');
  const [height, setHeight] = useState('180 cm');
  return (
    <ScrollView style={{flex: 1}}>
      <View style={{marginHorizontal: 20, marginTop: 40}}>
        <Text30 bold>Create</Text30>
        <Text30 style={{marginBottom: 40}} bold>
          your account
        </Text30>
        <Input label="Full Name" placeholder="Jessica Smith" />
        {/* {GENDER} */}
        <View style={{marginBottom: 10}}>
          <MediumText style={{fontSize: 17}}>Gender</MediumText>
          <TouchableOpacity
            onPress={() =>
              SheetManager.show(SHEETS.GenderSelectSheet, {
                payload: {
                  onSelect: (v: string) => setSex(v),
                },
              })
            }
            style={styles.container}>
            <RegularText style={{color: 'gray'}}>{sex}</RegularText>
            <AntDesign name="down" size={15} color={'gray'} />
          </TouchableOpacity>
        </View>

        {/* {DOB} */}
        <View style={{marginBottom: 10}}>
          <MediumText style={{fontSize: 17, marginBottom: 10}}>
            Date Of Birth
          </MediumText>
          <TouchableOpacity
            onPress={() => setIsDatePickerOpen(true)}
            style={styles.container}>
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
            <RegularText
              style={{
                color: dob ? 'black' : 'gray',
              }}>
              {dob ? dob?.toISOString().slice(0, 10) : 'DD - MM - YYYY'}
            </RegularText>
            <MaterialIcons name="date-range" size={24} color="gray" />
          </TouchableOpacity>
        </View>
        {/* {HEIGHT} */}
        <View style={{marginBottom: 10}}>
          <MediumText style={{fontSize: 17}}>Height</MediumText>
          <TouchableOpacity
            onPress={() =>
              SheetManager.show(SHEETS.HeightSelectSheet, {
                payload: {
                  onSelect: (h: string) => setHeight(h),
                },
              })
            }
            style={styles.container}>
            <RegularText style={{color: 'gray'}}>{height}</RegularText>
            <AntDesign name="down" size={15} color={'gray'} />
          </TouchableOpacity>
        </View>
        {/* {} */}
        <Input label="Country" placeholder="California, USA" />
      </View>
      <PrimaryBtn
        onPress={() => navigation.navigate('ContactDetail')}
        containerStyle={{marginVertical: 40, marginHorizontal: 20}}
        text="Next"
      />
    </ScrollView>
  );
};

export default CreateAccountScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 35,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});
