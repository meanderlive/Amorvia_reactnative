import {
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import {RegularText} from '../../../components/MyText';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ProfileStackParams} from '../../../navigation/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {COLORS} from '../../../styles';
import {useNavigation} from '@react-navigation/native';
import {onShare} from '../../../utils/helper';
import {useDispatch} from 'react-redux';
import {logOut} from '../../../redux/feature/auth/authSlice';
import MainLayout from '../../../components/MainLayout';
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import DeleteAccountPopup from '../../../components/popups/DeleteAccountPopup';
import LogoutPopup from '../../../components/popups/LogoutPopup';
import PrimaryBtn from '../../../components/PrimaryBtn';
import SecondaryBtn from '../../../components/SecondaryBtn';

const SettingScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<ProfileStackParams>>();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOut(null));
  };

  const [deleteAcPopupVisible, setDeleteAcPopupVisible] = useState(false);
  const [logoutPopupVisible, setLogoutPopupVisible] = useState(false);

  return (
    <MainLayout title="Settings" onBack={navigation.goBack}>
      <DeleteAccountPopup
        visible={deleteAcPopupVisible}
        onCancel={() => setDeleteAcPopupVisible(false)}
      />
      <LogoutPopup
        visible={logoutPopupVisible}
        // onConfirm={() => handleLogout()}
        onCancel={() => setLogoutPopupVisible(false)}
      />
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <ScrollView style={{paddingHorizontal: 20}}>
          <View
            style={{
              flexDirection: 'row',
              gap: 5,
              alignItems: 'center',
              marginBottom: 20,
            }}>
            <RegularText style={{fontSize: 20, color: 'black'}}>
              Edit Profile
            </RegularText>

            <TouchableOpacity
              onPress={() => navigation.navigate('EditProfile')}
              style={{
                height: 25,
                width: 25,
                borderRadius: 20,
                backgroundColor: 'white',
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.22,
                shadowRadius: 2.22,
                elevation: 5,
                overflow: 'hidden',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <MaterialIcons
                onPress={() => navigation.navigate('EditProfile')}
                name="edit"
                size={20}
                color={COLORS.primary}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              height: 55,
              backgroundColor: '#FAFAFA',
              borderWidth: 1,
              borderColor: '#E0E0E0',
              paddingLeft: 15,
              borderRadius: 10,
              marginVertical: 10,
              justifyContent: 'center',
            }}>
            <RegularText style={{color: COLORS.grey}}>Name</RegularText>
          </View>

          <View style={styles.input}>
            <RegularText style={{color: COLORS.grey}}>Phone Number</RegularText>
            <FontAwesome name="phone" size={24} color="gray" />
          </View>

          <View style={styles.input}>
            <RegularText style={{color: COLORS.grey}}>
              Date of birth
            </RegularText>
            <MaterialIcons name="date-range" size={24} color="gray" />
          </View>

          {/* {Design} */}

          <TouchableOpacity
            onPress={() => navigation.navigate('PremiumInfo')}
            style={{
              height: 90,
              backgroundColor: COLORS.primary,
              marginVertical: 10,
              borderRadius: 10,
              justifyContent: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../../../assets/images/2hearts.png')}
                style={{width: 30, height: 30, resizeMode: 'contain'}}
              />
              <RegularText
                bold
                style={{color: 'white', alignSelf: 'center', fontSize: 18}}>
                {' '}
                Marier Plus
              </RegularText>
            </View>

            <RegularText style={{color: 'white', alignSelf: 'center'}}>
              Unlimited likes & more!
            </RegularText>
          </TouchableOpacity>

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('PremiumInfo')}
              style={{
                height: 50,
                backgroundColor: COLORS.primary,
                alignItems: 'center',
                justifyContent: 'center',
                width: '44%',
                borderRadius: 10,
                flexDirection: 'row',
                gap: 5,
              }}>
              <Octicons name="zap" size={18} color={COLORS.white} />
              <RegularText style={{color: 'white'}}>Premium</RegularText>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('PremiumInfo')}
              style={{
                height: 50,
                backgroundColor: COLORS.primary,
                alignItems: 'center',
                justifyContent: 'center',
                width: '52%',
                borderRadius: 10,
                flexDirection: 'row',
                gap: 5,
              }}>
              <FontAwesome name="star" size={15} color="white" />
              <RegularText style={{color: 'white'}}>Paid connect</RegularText>
            </TouchableOpacity>
          </View>

          {/* {Discovery} */}
          <RegularText
            style={{
              fontSize: 20,
              color: 'black',
              marginVertical: 10,
              marginTop: 22,
            }}>
            Discovery Settings
          </RegularText>

          <View style={styles.input}>
            <RegularText style={{color: COLORS.grey}}>
              Edit location
            </RegularText>
            <Ionicons name="md-location-outline" size={24} color="gray" />
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('MyPhotos')}
            style={styles.input}>
            <RegularText style={{color: COLORS.grey}}>My photos</RegularText>
            <FontAwesome name="photo" size={20} color="gray" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('PrivacySetting')}
            style={styles.input}>
            <RegularText style={{color: COLORS.grey}}>
              Privacy Setting
            </RegularText>
            <MaterialIcons name="privacy-tip" size={24} color="gray" />
          </TouchableOpacity>

          {/* {Others} */}
          <RegularText
            style={{fontSize: 20, color: 'black', marginVertical: 10}}>
            Others
          </RegularText>

          <TouchableOpacity
            onPress={() => navigation.navigate('BlockedUsers')}
            style={styles.input}>
            <RegularText style={{color: COLORS.grey}}>
              Block contact
            </RegularText>
            <MaterialIcons name="block" size={24} color="gray" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('ManageNotification')}
            style={styles.input}>
            <RegularText style={{color: COLORS.grey}}>
              Manage Notifications
            </RegularText>
            <Feather name="bell" size={24} color="gray" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('RecentPasses')}
            style={styles.input}>
            <RegularText style={{color: COLORS.grey}}>
              Recent Passes
            </RegularText>
            <Entypo name="stopwatch" size={24} color="gray" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => onShare()} style={styles.input}>
            <RegularText style={{color: COLORS.grey}}>Refer friend</RegularText>
            <Feather name="users" size={20} color="gray" />
          </TouchableOpacity>

          {/* {Help & Suppport} */}
          <RegularText
            style={{fontSize: 20, color: 'black', marginVertical: 10}}>
            Help & Suppport
          </RegularText>

          <TouchableOpacity
            onPress={() => navigation.navigate('Faq')}
            style={styles.input}>
            <RegularText style={{color: COLORS.grey}}>FAQs</RegularText>
            <AntDesign name="questioncircleo" size={20} color="gray" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('HelpSupport')}
            style={styles.input}>
            <RegularText style={{color: COLORS.grey}}>
              Contact Support
            </RegularText>
            <Feather name="headphones" size={24} color="gray" />
          </TouchableOpacity>

          {/* {Buttons} */}

          <PrimaryBtn
            onPress={() => {
              setLogoutPopupVisible(true);
            }}
            containerStyle={{marginVertical: 20}}
            text="Logout"
          />
          <SecondaryBtn
            onPress={() => setDeleteAcPopupVisible(true)}
            text="Delete My Account"
          />
          <View style={{height: 50}}></View>
        </ScrollView>
      </View>
    </MainLayout>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  input: {
    height: 55,
    backgroundColor: '#FAFAFA',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    paddingLeft: 15,
    borderRadius: 10,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
});
