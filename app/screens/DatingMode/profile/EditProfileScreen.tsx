import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import {MediumText, RegularText} from '../../../components/MyText';
import {ProfileStackParams} from '../../../navigation/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {COLORS} from '../../../styles';
import {useNavigation} from '@react-navigation/native';
import PrimaryBtn from '../../../components/PrimaryBtn';
import {useDispatch, useSelector} from 'react-redux';
import DatePicker from 'react-native-date-picker';
import {SheetManager} from 'react-native-actions-sheet';
import {SHEETS} from '../../../sheets/sheets';
import MainLayout from '../../../components/MainLayout';

const EditProfileScreen = () => {
  const {user, accessToken} = useSelector((s: any) => s.auth);
  const [name, setName] = useState(user?.name || '');
  const [phoneNumber, setPhoneNumber] = useState(user?.phone || '');
  const [email, setEmail] = useState(user?.email || '');
  const [bio, setBio] = useState(user?.bio || '');
  const [profession, setProfession] = useState(user?.profession || '');
  const [sex, setSex] = useState(user?.sex || 'Male');
  const [interest, setInterest] = useState(user?.interests?.type || '');
  const [address, setAddress] = useState(user?.address?.type || '');
  const [loading, setLoading] = React.useState(false);
  const [isDatePickerOpen, setIsDatePickerOpen] = React.useState(false);
  const [dob, setDob] = useState<any>('');
  const dispatch = useDispatch();
  const navigation =
    useNavigation<NativeStackNavigationProp<ProfileStackParams>>();

  return (
    <MainLayout title="Edit Profile" onBack={navigation.goBack}>
      <ScrollView style={{marginHorizontal: 20}}>
        {/* {NAME} */}
        <View style={{marginBottom: 10, marginTop: 20}}>
          <MediumText style={{fontSize: 16}}>Name</MediumText>
          <TextInput
            style={styles.input}
            placeholder="John Doe"
            value={name}
            onChangeText={setName}
          />
        </View>

        {/* {PHONE} */}
        <View style={{marginBottom: 10}}>
          <MediumText style={{fontSize: 16}}>Phone Number</MediumText>
          <TextInput
            style={styles.input}
            keyboardType="phone-pad"
            placeholder="09876543212"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            // editable={false}
          />
        </View>

        {/* {DOB} */}
        <View style={{marginBottom: 10}}>
          <MediumText style={{fontSize: 16}}>Date Of Birth</MediumText>
          <TouchableOpacity
            onPress={() => setIsDatePickerOpen(true)}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              height: 35,
              borderBottomWidth: 1,
              borderBottomColor: 'lightgray',
            }}>
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
                marginLeft: 5,
                color: 'rgba(0,0,0,0.4)',
                fontSize: 12,
              }}>
              {dob ? dob?.toISOString().slice(0, 10) : 'DD - MM - YYYY'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* {EMAIL} */}
        <View style={{marginBottom: 20}}>
          <MediumText style={{fontSize: 16}}>Email</MediumText>
          <TextInput
            style={styles.input}
            placeholder="karter@gmail.com"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        {/* {ABOUT} */}
        <View style={{marginBottom: 10}}>
          <MediumText style={{fontSize: 16}}>About Karter</MediumText>
          <TextInput
            style={styles.input}
            placeholder="I'm a photographer"
            value={bio}
            onChangeText={setBio}
          />
        </View>

        {/* {GENDER} */}
        <View style={{marginBottom: 10}}>
          <MediumText style={{fontSize: 16}}>Gender</MediumText>
          <TouchableOpacity
            onPress={() =>
              SheetManager.show(SHEETS.GenderSelectSheet, {
                payload: {
                  onSelect: (v: string) => setSex(v),
                },
              })
            }
            style={{
              marginVertical: 5,
              flexDirection: 'row',
              alignItems: 'center',
              borderRadius: 10,
              justifyContent: 'space-between',
              height: 30,
              borderBottomWidth: 1,
              borderBottomColor: 'lightgray',
            }}>
            <RegularText style={{fontSize: 12}}>{sex}</RegularText>
          </TouchableOpacity>
        </View>

        {/* {INTEREST} */}
        <View style={{marginBottom: 10}}>
          <MediumText style={{fontSize: 16}}>Interest</MediumText>
          <TouchableOpacity
            onPress={() => navigation.navigate('UpdateInterest')}
            style={{
              marginVertical: 5,
              flexDirection: 'row',
              alignItems: 'center',
              borderRadius: 10,
              justifyContent: 'space-between',
              height: 30,
              borderBottomWidth: 1,
              borderBottomColor: 'lightgray',
            }}>
            <RegularText style={{marginLeft: 10, fontSize: 12}}>
              {interest?.type}
            </RegularText>
          </TouchableOpacity>
        </View>
        {/* {PROFESSION} */}
        <View style={{marginBottom: 10}}>
          <MediumText style={{fontSize: 16}}>Profession</MediumText>
          <TextInput
            style={styles.input}
            placeholder="Fashion Critic"
            value={profession}
            onChangeText={setProfession}
          />
        </View>
        {/* {LIVING} */}
        <View style={{marginBottom: 20}}>
          <MediumText style={{fontSize: 16}}>Living</MediumText>
          <TextInput
            style={styles.input}
            placeholder="Enter Your City..."
            value={address}
            onChangeText={setAddress}
          />
        </View>

        <View style={{marginBottom: 130}}>
          <PrimaryBtn text="Done" />
        </View>
      </ScrollView>
    </MainLayout>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    color: 'gray',
    height: 50,
    fontSize: 12,
  },
});
