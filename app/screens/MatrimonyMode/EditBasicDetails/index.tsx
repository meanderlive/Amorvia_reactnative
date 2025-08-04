import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import {
  MediumText,
  RegularText,
  RegularTextG,
} from '../../../components/MyText';
import {
  MatProfileStackParams,
  ProfileStackParams,
} from '../../../navigation/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {COLORS} from '../../../styles';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import DatePicker from 'react-native-date-picker';
import {SheetManager} from 'react-native-actions-sheet';
import {SHEETS} from '../../../sheets/sheets';
import MainLayout from '../../../components/MainLayout';
import Input from '../../../components/Input';
import AntDesign from 'react-native-vector-icons/AntDesign';

const EditBasicDetailsScreen = () => {
  const {user, accessToken} = useSelector((s: any) => s.auth);
  const [name, setName] = useState(user?.name || '');
  const [sex, setSex] = useState(user?.sex || 'Male');
  const [interest, setInterest] = useState(user?.interests?.type || '');
  const [address, setAddress] = useState(user?.address?.type || '');
  const [loading, setLoading] = React.useState(false);
  const [isDatePickerOpen, setIsDatePickerOpen] = React.useState(false);
  const [maritalStatus, setMaritalStatus] = useState('Select');

  const [dob, setDob] = useState<any>('');
  const dispatch = useDispatch();
  const navigation =
    useNavigation<NativeStackNavigationProp<MatProfileStackParams>>();

  return (
    <MainLayout
      title="Basic Details"
      onBack={navigation.goBack}
      rightSideIcon={() => {
        return (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{color: COLORS.primary}}>Save</Text>
          </TouchableOpacity>
        );
      }}>
      <View style={{marginHorizontal: 20, marginTop: 20}}>
        {/* {NAME} */}

        <Input label="Name" placeholder="John Doe" />

        {/* {DOB} */}
        <View style={{marginBottom: 10}}>
          <MediumText style={{fontSize: 17}}>Date of Birth</MediumText>
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
            <RegularTextG>
              {dob ? dob?.toISOString().slice(0, 10) : 'YYYY - MM - DD'}
            </RegularTextG>
            <AntDesign name="calendar" size={20} color={'gray'} />
          </TouchableOpacity>
        </View>

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
            <RegularTextG>{sex}</RegularTextG>
            <AntDesign name="down" size={15} color={'gray'} />
          </TouchableOpacity>
        </View>

        {/* {INTEREST} */}
        <View style={{marginBottom: 10}}>
          <MediumText style={{fontSize: 17}}>Marital Status</MediumText>
          <TouchableOpacity
            onPress={() =>
              SheetManager.show(SHEETS.MaritalStatusSheet, {
                payload: {
                  onSelect: (m: string) => setMaritalStatus(m),
                },
              })
            }
            style={styles.container}>
            <RegularText style={{color: 'gray'}}>{maritalStatus}</RegularText>
            <AntDesign name="down" size={15} color={'gray'} />
          </TouchableOpacity>
        </View>
      </View>
    </MainLayout>
  );
};

export default EditBasicDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 45,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});
