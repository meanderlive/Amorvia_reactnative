import {
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import React from 'react';
import {
  MediumText,
  RegularText,
  RegularTextG,
} from '../../../components/MyText';
import {useNavigation} from '@react-navigation/native';
import MainLayout from '../../../components/MainLayout';
import RadioBtn from '../../../components/RadioBtn';
import AntDesign from 'react-native-vector-icons/AntDesign';

const PrivacySettingScreen = () => {
  const [mobile, setMobile] = React.useState('first');
  const [mobileView, setMobileView] = React.useState(false);
  const [active, setActive] = React.useState('first');
  const [activeView, setActiveView] = React.useState(false);
  const [photo, setPhoto] = React.useState('first');
  const [photoView, setPhotoView] = React.useState(false);
  const [profile, setProfile] = React.useState('first');
  const [profileView, setProfileView] = React.useState(false);
  const [call, setCall] = React.useState('first');
  const [callView, setCallView] = React.useState(false);
  const [blocked, setBlocked] = React.useState('first');
  const [blockedView, setBlockedView] = React.useState(false);
  const navigation = useNavigation();

  return (
    <MainLayout title="Privacy Settings" onBack={navigation.goBack}>
      <ScrollView style={{marginHorizontal: 20}}>
        <View style={{marginTop: 30}}></View>
        {/* {MOBILE NUMBER} */}
        <TouchableOpacity
          onPress={() => setMobileView(!mobileView)}
          style={styles.row}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
            <RegularText>Mobile Number</RegularText>
            <Text style={{fontSize: 13}}>+123 456 7890</Text>
          </View>
          <AntDesign
            name={mobileView ? 'down' : 'right'}
            color={'gray'}
            size={14}
          />

          {/* {MOBILE NUMBER} */}
        </TouchableOpacity>
        {mobileView ? (
          <View style={styles.container}>
            <View style={styles.subRow}>
              <RegularTextG>Show to all</RegularTextG>
              <RadioBtn
                bool={mobile === 'first'}
                onPress={() => setMobile('first')}
              />
            </View>
            <View style={styles.subRow}>
              <RegularTextG>
                Only members I accept/Express interest in
              </RegularTextG>
              <RadioBtn
                bool={mobile === 'second'}
                onPress={() => setMobile('second')}
              />
            </View>
            <View style={styles.subRow}>
              <RegularTextG>No one</RegularTextG>
              <RadioBtn
                bool={mobile === 'third'}
                onPress={() => setMobile('third')}
              />
            </View>
          </View>
        ) : null}

        {/* {ACTIVE STATUS} */}
        <TouchableOpacity
          onPress={() => setActiveView(!activeView)}
          style={styles.row}>
          <RegularText>Active Status</RegularText>
          <AntDesign
            name={activeView ? 'down' : 'right'}
            color={'gray'}
            size={14}
          />
        </TouchableOpacity>
        {activeView ? (
          <View style={styles.container}>
            <View style={styles.subRow}>
              <RegularTextG>Show to all</RegularTextG>
              <RadioBtn
                bool={active === 'first'}
                onPress={() => setActive('first')}
              />
            </View>
            <View style={styles.subRow}>
              <RegularTextG>
                Only members I accept/Express interest in
              </RegularTextG>
              <RadioBtn
                bool={active === 'second'}
                onPress={() => setActive('second')}
              />
            </View>
            <View style={styles.subRow}>
              <RegularTextG>No one</RegularTextG>
              <RadioBtn
                bool={active === 'third'}
                onPress={() => setActive('third')}
              />
            </View>
          </View>
        ) : null}

        {/* {PHOTO PRIVACY} */}
        <TouchableOpacity
          onPress={() => setPhotoView(!photoView)}
          style={styles.row}>
          <RegularText>Photo Privacy</RegularText>
          <AntDesign
            name={photoView ? 'down' : 'right'}
            color={'gray'}
            size={14}
          />
        </TouchableOpacity>
        {photoView ? (
          <View style={styles.container}>
            <View style={styles.subRow}>
              <RegularTextG>Show to all</RegularTextG>
              <RadioBtn
                bool={photo === 'first'}
                onPress={() => setPhoto('first')}
              />
            </View>
            <View style={styles.subRow}>
              <RegularTextG>
                Only members I accept/Express interest in
              </RegularTextG>
              <RadioBtn
                bool={photo === 'second'}
                onPress={() => setPhoto('second')}
              />
            </View>
            <View style={styles.subRow}>
              <RegularTextG>No one</RegularTextG>
              <RadioBtn
                bool={photo === 'third'}
                onPress={() => setPhoto('third')}
              />
            </View>
          </View>
        ) : null}

        {/* {PROFILE VISIBILITY} */}
        <TouchableOpacity
          onPress={() => setProfileView(!profileView)}
          style={styles.row}>
          <RegularText>Profile Visibility</RegularText>
          <AntDesign
            name={profileView ? 'down' : 'right'}
            color={'gray'}
            size={14}
          />
        </TouchableOpacity>
        {profileView ? (
          <View style={styles.container}>
            <View style={styles.subRow}>
              <RegularTextG>Show to all</RegularTextG>
              <RadioBtn
                bool={profile === 'first'}
                onPress={() => setProfile('first')}
              />
            </View>
            <View style={styles.subRow}>
              <RegularTextG>
                Only members I accept/Express interest in
              </RegularTextG>
              <RadioBtn
                bool={profile === 'second'}
                onPress={() => setProfile('second')}
              />
            </View>
            <View style={styles.subRow}>
              <RegularTextG>No one</RegularTextG>
              <RadioBtn
                bool={profile === 'third'}
                onPress={() => setProfile('third')}
              />
            </View>
          </View>
        ) : null}

        {/* {CALL SETTING} */}
        <TouchableOpacity
          onPress={() => setCallView(!callView)}
          style={styles.row}>
          <RegularText>Call Setting</RegularText>
          <AntDesign
            name={callView ? 'down' : 'right'}
            color={'gray'}
            size={14}
          />
        </TouchableOpacity>
        {callView ? (
          <View style={styles.container}>
            <View style={styles.subRow}>
              <RegularTextG>Show to all</RegularTextG>
              <RadioBtn
                bool={call === 'first'}
                onPress={() => setCall('first')}
              />
            </View>
            <View style={styles.subRow}>
              <RegularTextG>
                Only members I accept/Express interest in
              </RegularTextG>
              <RadioBtn
                bool={call === 'second'}
                onPress={() => setCall('second')}
              />
            </View>
            <View style={styles.subRow}>
              <RegularTextG>No one</RegularTextG>
              <RadioBtn
                bool={call === 'third'}
                onPress={() => setCall('third')}
              />
            </View>
          </View>
        ) : null}

        {/* {BLOCKED ACCOUNT} */}
        <TouchableOpacity
          onPress={() => setBlockedView(!blockedView)}
          style={styles.row}>
          <RegularText>Block Account</RegularText>
          <AntDesign
            name={blockedView ? 'down' : 'right'}
            color={'gray'}
            size={14}
          />
        </TouchableOpacity>
        {blockedView ? (
          <View style={styles.container}>
            <View style={styles.subRow}>
              <RegularTextG>Show to all</RegularTextG>
              <RadioBtn
                bool={blocked === 'first'}
                onPress={() => setBlocked('first')}
              />
            </View>
            <View style={styles.subRow}>
              <RegularTextG>
                Only members I accept/Express interest in
              </RegularTextG>
              <RadioBtn
                bool={blocked === 'second'}
                onPress={() => setBlocked('second')}
              />
            </View>
            <View style={styles.subRow}>
              <RegularTextG>No one</RegularTextG>
              <RadioBtn
                bool={blocked === 'third'}
                onPress={() => setBlocked('third')}
              />
            </View>
          </View>
        ) : null}
        {/* {} */}
      </ScrollView>
    </MainLayout>
  );
};

export default PrivacySettingScreen;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    paddingBottom: 10,
  },
  container: {
    backgroundColor: '#F9F9F9',
    padding: 10,
    marginBottom: 15,
    borderRadius: 10,
    marginTop: -5,
  },
  subRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
});
