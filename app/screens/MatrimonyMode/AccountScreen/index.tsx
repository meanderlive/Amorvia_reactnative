import {
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';
import Foundation from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../../../styles';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  MatProfileStackParams,
  ProfileStackParams,
} from '../../../navigation/types';
import {SheetManager} from 'react-native-actions-sheet';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {SHEETS} from '../../../sheets/sheets';
import {api_getCurrent, api_updateProfile} from '../../../api/user';
import {useDispatch, useSelector} from 'react-redux';
import {updateUser} from '../../../redux/feature/auth/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LOCAL_KEYS} from '../../../utils/helper';
import MainLayout from '../../../components/MainLayout';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {BigText, RegularText} from '../../../components/MyText';
import Line from '../../../components/Line';
import Details from './Details';
import Options from './Options';

type RowProps = {
  text: string;
  icon: () => React.ReactNode;
  onPress?: () => void;
};

const Row = ({text, icon, onPress}: RowProps) => {
  return (
    <React.Fragment>
      <TouchableOpacity
        onPress={onPress}
        style={{
          width: '90%',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 15,
        }}>
        <View
          style={{
            width: 55,
            height: 55,
            backgroundColor: COLORS.white,
            borderRadius: 60,
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: COLORS.black,
            borderWidth: 2,
          }}>
          {icon && icon()}
        </View>
        <RegularText style={{flex: 1}}>{text}</RegularText>
        <Entypo name="chevron-small-right" color={COLORS.black} size={30} />
      </TouchableOpacity>
      <Line />
    </React.Fragment>
  );
};

const {width} = Dimensions.get('screen');
const checkRememberMe = async () => {
  try {
    const res = await AsyncStorage.getItem(LOCAL_KEYS.REMEMBER_ME);
    if (res) {
      return JSON.parse(res);
    } else {
      return null;
    }
  } catch (error: any) {
    console.log(error);
  }
};

const IMAGE_URI =
  'https://cdn.ttgtmedia.com/rms/onlineimages/anime_girl-h_half_column_mobile.png';

const AccountScreen = () => {
  const [profilePhotoUri, setProfilePhotoUri] = React.useState(null);

  const dispatch = useDispatch();
  const token = useSelector((s: any) => s.auth.accessToken);
  const {user, accessToken} = useSelector((s: any) => s.auth);
  const [defaultVal, setDefaultVal] = React.useState(null);
  const navigation =
    useNavigation<NativeStackNavigationProp<MatProfileStackParams>>();

  const openCamera = async () => {
    await launchCamera(
      {
        mediaType: 'photo',
      },
      (res: any) => {
        console.log(res);
        setProfilePhotoUri(res.assets[0].uri);
      },
    );
    SheetManager.hide(SHEETS.CameraAndGalleryOption);
  };

  const openGallery = async () => {
    await launchImageLibrary(
      {
        mediaType: 'photo',
      },
      (res: any) => {
        console.log({res}, 'sdfsdfds');
        setProfilePhotoUri(res.assets[0].uri);
      },
    );
    closeSheet();
  };

  const closeSheet = async () => {
    if (profilePhotoUri !== null) {
      handleUploadProfile();
    }
    SheetManager.hide(SHEETS.CameraAndGalleryOption);
  };

  const handleUploadProfile = async () => {
    try {
      const payload = profilePhotoUri;
      const res = await api_updateProfile(user.id, payload);
      console.log({res}, 'Updated Profile Photo');
      dispatch(updateUser(res.data));
    } catch (error: any) {
      console.log(error);
      Alert.alert('Alert', error.message);
    }
  };
  console.log({profilePhotoUri}, 'Photo');

  React.useEffect(() => {
    const init = async () => {
      try {
        const res = await checkRememberMe();
        if (!res) return;
        setDefaultVal(res);
      } catch (error) {
        console.log(error);
      }
    };
    const init2 = async () => {
      await AsyncStorage.setItem(
        LOCAL_KEYS.IS_FIRST_TIME_OPEN,
        JSON.stringify(false),
      );
      console.log('IS FIRST TIME SET TO FALSE');
    };

    init();
    init2();
  }, []);

  return (
    <MainLayout onBack={navigation.goBack} title="Account">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.imgView}>
          {profilePhotoUri ? (
            <Image style={styles.img} source={{uri: profilePhotoUri}} />
          ) : (
            <Image style={styles.img} source={{uri: IMAGE_URI}} />
          )}
        </View>
        <View style={styles.cameraBtn}>
          <Feather
            onPress={() => {
              SheetManager.show(SHEETS.CameraAndGalleryOption, {
                payload: {openCamera, openGallery, closeSheet},
              });
            }}
            name="camera"
            size={18}
            color={COLORS.secondary}
          />
        </View>

        {/* {} */}
        <Details />
        <Options />

        {/* {END} */}
      </ScrollView>
    </MainLayout>
  );
};

export default AccountScreen;

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
    marginTop: 10,
  },
  img: {
    resizeMode: 'contain',
    height: 135,
    width: 135,
    borderRadius: 135,
    right: 1,
  },
});
