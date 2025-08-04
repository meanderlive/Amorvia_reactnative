import {
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Text,
} from 'react-native';
import React, {useState} from 'react';
import MainLayout from '../../../components/MainLayout';
import {BigText, RegularText, SmallText} from '../../../components/MyText';
import {useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../navigation/types';
import PrimaryBtn from '../../../components/PrimaryBtn';
import {COLORS} from '../../../styles';
import DatePicker from 'react-native-date-picker';
import {useDispatch, useSelector} from 'react-redux';
import {api_update} from '../../../api/user';
import {setAuth, updateUser} from '../../../redux/feature/auth/authSlice';
import {api_getSexualOrientations} from '../../../api/sexualOrientations';
import RadioBtn from '../../../components/RadioBtn';

const GENDER_LIST = [
  'Female',
  'Male',
  'Non-Binary',
  'Transgender Female',
  'Transgender Male',
  'Transgender',
];

const SEXUALITY_LIST = [
  'Straight',
  'Gay',
  'Lesbian',
  'Bisexual',
  'Pansexual',
  'Transgender',
];

const PersonalDetailsScreeen = () => {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [isDatePickerOpen, setIsDatePickerOpen] = React.useState(false);
  const [dob, setDob] = useState<any>('');
  const [selectedSexuality, setSelectedSexuality] = useState('');
  const [selectedgender, setSelectedGender] = useState('');
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    <MainLayout title="Personal" onBack={navigation.goBack}>
      <ScrollView style={{padding: 15}}>
        <View
          style={{
            borderColor: '#E0E0E0',
            borderWidth: 1,
            height: 130,
            marginHorizontal: 10,
            borderRadius: 15,
            marginVertical: 15,
            padding: 10,
          }}>
          <BigText style={{textAlign: 'center', fontSize: 22}}>
            My Name is
          </BigText>
          <TextInput
            style={{
              borderBottomWidth: 1,
              borderBottomColor: 'lightgray',
              fontSize: 20,
              textAlign: 'center',
              height: 50,
            }}
            placeholder="Type your name"
            value={name}
            onChangeText={setName}
          />
          <RegularText
            style={{textAlign: 'center', color: COLORS.grey, marginTop: 10}}>
            This is how it will appear in Application.
          </RegularText>
        </View>

        <View
          style={{
            borderColor: '#E0E0E0',
            borderWidth: 1,
            height: 130,
            marginHorizontal: 10,
            borderRadius: 15,
            marginVertical: 15,
            padding: 10,
          }}>
          <BigText style={{textAlign: 'center', fontSize: 22}}>
            My Birthday is
          </BigText>

          <TouchableOpacity
            onPress={() => setIsDatePickerOpen(true)}
            style={{
              // marginVertical: 5,
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 10,
              height: 50,
              justifyContent: 'center',
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
                marginLeft: 10,
                color: 'rgba(0,0,0,0.4)',
                fontSize: 20,
              }}>
              {dob ? dob?.toISOString().slice(0, 10) : 'DD - MM - YYYY'}
            </Text>
          </TouchableOpacity>
          <RegularText
            style={{textAlign: 'center', color: COLORS.grey, marginTop: 10}}>
            Your age will be public
          </RegularText>
        </View>

        <View
          style={{
            borderColor: '#E0E0E0',
            borderWidth: 1,
            height: 110,
            marginHorizontal: 10,
            borderRadius: 15,
            marginVertical: 15,
            padding: 10,
          }}>
          <BigText style={{textAlign: 'center', fontSize: 22}}>Bio</BigText>
          <TextInput
            style={{
              height: 55,
              borderBottomWidth: 1,
              borderBottomColor: 'lightgray',
              fontSize: 15,
              textAlign: 'center',
            }}
            placeholder="type something about yourself."
            value={bio}
            onChangeText={setBio}
          />
        </View>

        {/* {GENDER} */}

        <View
          style={{
            borderColor: '#E0E0E0',
            borderWidth: 1,
            marginHorizontal: 10,
            borderRadius: 15,
            marginVertical: 15,
            padding: 10,
          }}>
          <BigText style={{textAlign: 'center', fontSize: 22}}>Gender</BigText>

          {GENDER_LIST.map(item => {
            return (
              <TouchableOpacity
                onPress={() => setSelectedGender(item)}
                key={item}
                style={{
                  marginVertical: 7,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <RegularText style={{color: 'grey', fontSize: 17}}>
                  {item}
                </RegularText>
                <RadioBtn bool={selectedgender === item} />
              </TouchableOpacity>
            );
          })}
        </View>

        {/* {SEXUALITY} */}

        <View
          style={{
            borderColor: '#E0E0E0',
            borderWidth: 1,
            marginHorizontal: 10,
            borderRadius: 15,
            marginVertical: 15,
            padding: 10,
          }}>
          <BigText style={{textAlign: 'center', fontSize: 22}}>
            Sexuality
          </BigText>

          {SEXUALITY_LIST.map(item => {
            return (
              <TouchableOpacity
                onPress={() => setSelectedSexuality(item)}
                key={item}
                style={{
                  marginVertical: 7,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <RegularText style={{color: 'grey', fontSize: 17}}>
                  {item}
                </RegularText>
                <RadioBtn bool={selectedSexuality === item} />
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={{marginBottom: 50}}>
          <PrimaryBtn
            text={'Proceed'}
            onPress={() =>
              //@ts-ignore
              navigation.navigate('Interest', {user: null, accessToken: null})
            }
          />
        </View>
      </ScrollView>
    </MainLayout>
  );
};

export default PersonalDetailsScreeen;
