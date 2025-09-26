import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SheetManager } from 'react-native-actions-sheet';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';
import Foundation from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

import MainLayout from '../../../components/MainLayout';
import { BigText, RegularText } from '../../../components/MyText';
import { COLORS } from '../../../styles';
import About from './About';
import { SHEETS } from '../../../sheets/sheets';
import { api_updateProfile } from '../../../api/user';
import { updateUser, authSelector } from '../../../redux/feature/auth/authSlice';
import { ProfileStackParams } from '../../../navigation/types';
import { onShare } from '../../../utils/helper';

const { width } = Dimensions.get('screen');

const PLACEHOLDER_IMAGE =
  'https://cdn.ttgtmedia.com/rms/onlineimages/anime_girl-h_half_column_mobile.png';

const ProfileScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ProfileStackParams>>();
  const dispatch = useDispatch();
  const user = useSelector(authSelector);
  console.log('User data in ProfileScreen:', user); // For debugging

  // Initialize profile photo safely
  const [profilePhotoUri, setProfilePhotoUri] = React.useState<string>(PLACEHOLDER_IMAGE);

  // Update profile photo when user changes
  React.useEffect(() => {
    if (user?.profilePhoto) {
      setProfilePhotoUri(user.profilePhoto);
    } else if (user?.user?.profilePhoto) { // Check nested user object
      setProfilePhotoUri(user.user.profilePhoto);
    } else {
      setProfilePhotoUri(PLACEHOLDER_IMAGE);
    }
  }, [user]);

  const openCamera = async () => {
    launchCamera({ mediaType: 'photo' }, (res: any) => {
      if (res.assets && res.assets.length > 0) {
        setProfilePhotoUri(res.assets[0].uri);
      }
    });
    SheetManager.hide(SHEETS.CameraAndGalleryOption);
  };

  const openGallery = async () => {
    launchImageLibrary({ mediaType: 'photo' }, (res: any) => {
      if (res.assets && res.assets.length > 0) {
        setProfilePhotoUri(res.assets[0].uri);
      }
    });
    closeSheet();
  };

  const closeSheet = async () => {
    if (profilePhotoUri) {
      handleUploadProfile();
    }
    SheetManager.hide(SHEETS.CameraAndGalleryOption);
  };

  const handleUploadProfile = async () => {
    if (!user?._id) {
      Alert.alert('Error', 'User not loaded yet');
      return;
    }
    try {
      const res = await api_updateProfile(user._id, profilePhotoUri);
      dispatch(updateUser({ profilePhoto: res.data.profilePhoto }));
      Alert.alert('Success', 'Profile photo updated!');
    } catch (error: any) {
      console.log(error);
      Alert.alert('Error', error.message || 'Failed to update profile photo');
    }
  };

  return (
    <MainLayout
      onBack={navigation.goBack}
      title="Profile"
      rightSideIcon={() => (
        <AntDesign
          onPress={() => navigation.navigate('Settings')}
          name="setting"
          size={30}
          color="black"
        />
      )}
    >
      <ScrollView>
        {/* Profile Photo */}
        <View style={styles.imgView}>
          <Image style={styles.img} source={{ uri: profilePhotoUri }} />
        </View>
        <View style={styles.cameraBtn}>
          <Feather
            onPress={() =>
              SheetManager.show(SHEETS.CameraAndGalleryOption, {
                //@ts-ignore
                payload: { openCamera, openGallery, closeSheet },
              })
            }
            name="camera"
            size={18}
            color={COLORS.secondary}
          />
        </View>

        {/* Online Status */}
        <View style={[styles.onlineStatus, { width: 85, gap: 0 }]}>
          <Entypo name="dot-single" size={30} color="#02BC49" />
          <Text style={{ color: '#02BC49', marginRight: 5 }}>Online</Text>
        </View>

        {/* Name */}
        <BigText bold style={{ textAlign: 'center' }}>
          {user?.name ?? 'Not provided'}
        </BigText>

        {/* Profession / Occupation and Share */}
        <View
          style={{
            flexDirection: 'row',
            gap: 5,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 20,
          }}
        >
          <RegularText style={{ color: 'grey' }}>
            {user?.profession ?? user?.occupation ?? 'Not provided'}
          </RegularText>

          <Octicons
            style={{ marginLeft: 15 }}
            name="share"
            size={24}
            color={COLORS.lightBlue}
          />
          <TouchableOpacity onPress={onShare}>
            <RegularText style={{ color: COLORS.lightBlue }}>Share profile</RegularText>
          </TouchableOpacity>
        </View>

        {/* Upgrade Button */}
        <TouchableOpacity
          //@ts-ignore
          onPress={() => navigation.navigate('PremiumTab')}
          style={styles.onlineStatus}
        >
          <Foundation name="crown" size={24} color="#F9A000" />
          <Text style={{ color: '#F9A000' }}>Upgrade</Text>
        </TouchableOpacity>

        {/* About Section */}
        <About />
        </ScrollView>
    </MainLayout>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  cameraBtn: {
    height: 35,
    width: 35,
    backgroundColor: 'white',
    borderRadius: 50,
    alignSelf: 'center',
    bottom: 35,
    left: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgView: {
    height: 140,
    width: 140,
    borderRadius: 100,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  onlineStatus: {
    backgroundColor: 'white',
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    height: 28,
    marginBottom: 5,
    marginTop: -10,
    paddingHorizontal: 15,
    gap: 10,
  },
  img: {
    resizeMode: 'cover',
    height: 135,
    width: 135,
    borderRadius: 135,
    right: 1,
  },
});
