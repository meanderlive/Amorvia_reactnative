import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import MainLayout from '../../../components/MainLayout';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  MatProfileStackParams,
  ProfileStackParams,
} from '../../../navigation/types';
import {TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {RegularText} from '../../../components/MyText';
import DeleteAccountPopup from '../../../components/popups/DeleteAccountPopup';
import LogoutPopup from '../../../components/popups/LogoutPopup';
import SecondaryBtn from '../../../components/SecondaryBtn';

const AccountSettingScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<MatProfileStackParams>>();
  const [deleteAcPopupVisible, setDeleteAcPopupVisible] = useState(false);
  const [logoutPopupVisible, setLogoutPopupVisible] = useState(false);
  return (
    <MainLayout onBack={navigation.goBack} title="Account Settings">
      <DeleteAccountPopup
        visible={deleteAcPopupVisible}
        onCancel={() => setDeleteAcPopupVisible(false)}
      />
      <LogoutPopup
        visible={logoutPopupVisible}
        // onConfirm={() => handleLogout()}
        onCancel={() => setLogoutPopupVisible(false)}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{marginHorizontal: 20}}>
        <View style={{marginTop: 20}}></View>

        {/* {ACCOUNT SETTINGS} */}
        <RegularText style={{marginBottom: 10}}>Email Setting</RegularText>
        <TouchableOpacity
          onPress={() => navigation.navigate('UpdateEmail')}
          style={styles.row}>
          <Text style={{flex: 1}}>john@gmail.com</Text>
          <AntDesign name="right" size={15} color="gray" />
        </TouchableOpacity>

        {/* {Privacy} */}
        <RegularText style={{marginBottom: 10}}>Privacy</RegularText>
        <TouchableOpacity
          onPress={() => navigation.navigate('PrivacySetting')}
          style={styles.row}>
          <Text style={{flex: 1}}>Edit privacy preference</Text>
          <AntDesign name="right" size={15} color="gray" />
        </TouchableOpacity>

        {/* {NOTIFICATION} */}
        <RegularText style={{marginBottom: 10}}>
          Manage Notification
        </RegularText>
        <TouchableOpacity
          onPress={() => navigation.navigate('ManageNotification')}
          style={styles.row}>
          <Text style={{flex: 1}}>Manage Notification</Text>
          <AntDesign name="right" size={15} color="gray" />
        </TouchableOpacity>

        {/* {VERIFICATION} */}
        {/* <RegularText style={{marginBottom: 10}}>Verification Badge</RegularText>
        <TouchableOpacity style={styles.row}>
          <Text style={{flex: 1}}>Visible to all members</Text>
          <AntDesign name="right" size={15} color="gray" />
        </TouchableOpacity> */}

        {/* {LANGUAGE} */}
        <RegularText style={{marginBottom: 10}}>Language</RegularText>
        <TouchableOpacity
          onPress={() => navigation.navigate('Language')}
          style={styles.row}>
          <Text style={{flex: 1}}>English</Text>
          <AntDesign name="right" size={15} color="gray" />
        </TouchableOpacity>

        {/* {BLOCK ACCOUNT} */}
        <TouchableOpacity
          onPress={() => navigation.navigate('BlockedUsers')}
          style={styles.row}>
          <RegularText style={{flex: 1}}>Blocked Account</RegularText>
          <AntDesign name="right" size={15} color="gray" />
        </TouchableOpacity>

        {/* {PRIVACY POLICY} */}
        <TouchableOpacity
          onPress={() => navigation.navigate('PrivacyPolicy')}
          style={styles.row}>
          <RegularText style={{flex: 1}}>Privacy Policy</RegularText>
          <AntDesign name="right" size={15} color="gray" />
        </TouchableOpacity>

        {/* {TERMS AND CONDITIONS} */}
        <TouchableOpacity
          onPress={() => navigation.navigate('TermsAndConditions')}
          style={styles.row}>
          <RegularText style={{flex: 1}}>Terms & Conditions</RegularText>
          <AntDesign name="right" size={15} color="gray" />
        </TouchableOpacity>

        {/* {FAQs} */}
        <TouchableOpacity
          onPress={() => navigation.navigate('Faqs')}
          style={styles.row}>
          <RegularText style={{flex: 1}}>FAQs</RegularText>
          <AntDesign name="right" size={15} color="gray" />
        </TouchableOpacity>

        {/* {RATE US} */}
        <TouchableOpacity
          onPress={() => navigation.navigate('RateUs')}
          style={styles.row}>
          <RegularText style={{flex: 1}}>Rate us</RegularText>
          <AntDesign name="right" size={15} color="gray" />
        </TouchableOpacity>

        {/* {HELP SUPPORT} */}
        <TouchableOpacity
          onPress={() => navigation.navigate('HelpSupport')}
          style={styles.row}>
          <RegularText style={{flex: 1}}>Help & Support</RegularText>
          <AntDesign name="right" size={15} color="gray" />
        </TouchableOpacity>

        {/* {HIDE / DELETE} */}
        <TouchableOpacity
          // onPress={() => setDeleteAcPopupVisible(true)}
          onPress={() => navigation.navigate('HideAndDelete')}
          style={styles.row}>
          <RegularText style={{flex: 1}}>Hide/ Delete Profile</RegularText>
          <AntDesign name="right" size={15} color="gray" />
        </TouchableOpacity>

        <SecondaryBtn
          onPress={() => {
            setLogoutPopupVisible(true);
          }}
          containerStyle={{marginVertical: 20}}
          text="Logout"
        />

        {/* {} */}
      </ScrollView>
    </MainLayout>
  );
};

export default AccountSettingScreen;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    paddingBottom: 10,
    marginBottom: 20,
  },
});
