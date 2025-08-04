import {
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../../../styles';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ProfileStackParams} from '../../../navigation/types';
import {SheetManager} from 'react-native-actions-sheet';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {SHEETS} from '../../../sheets/sheets';
import {api_updateProfile} from '../../../api/user';
import {useDispatch, useSelector} from 'react-redux';
import {updateUser} from '../../../redux/feature/auth/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LOCAL_KEYS} from '../../../utils/helper';
import MainLayout from '../../../components/MainLayout';
import {BigText, RegularText, RegularTextG} from '../../../components/MyText';
import About from './About';
import EduCareer from './EduCareer';
import Family from './Family';
import GalleryView from './GalleryView';

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

const EditProfileScreen = () => {
  const [profilePhotoUri, setProfilePhotoUri] = React.useState(null);

  const dispatch = useDispatch();
  const token = useSelector((s: any) => s.auth.accessToken);
  const [view, setView] = useState(1);

  const {user, accessToken} = useSelector((s: any) => s.auth);
  const [defaultVal, setDefaultVal] = React.useState(null);
  const navigation =
    useNavigation<NativeStackNavigationProp<ProfileStackParams>>();

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
    <MainLayout onBack={navigation.goBack} title=" Edit Profile">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* {HEADERS} */}
        <View>
          <View style={styles.imgView}>
            {profilePhotoUri ? (
              <Image style={styles.img} source={{uri: profilePhotoUri}} />
            ) : (
              <Image
                style={styles.img}
                source={require('../../../components/SwipeCard/assets/img2.jpg')}
              />
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

          <View style={[styles.onlineStatus, {width: 85, gap: 0}]}>
            <Entypo name="dot-single" size={30} color="#02BC49" />
            <Text style={{color: '#02BC49', marginRight: 5}}>Online</Text>
          </View>
          <BigText bold style={{textAlign: 'center'}}>
            John Deo
          </BigText>

          <RegularText style={{marginBottom: 20, textAlign: 'center'}}>
            Software engineer
          </RegularText>
        </View>
        {/* {HEADER END} */}
        {/* {} */}
        <View>
          <View style={styles.row2}>
            <TouchableOpacity
              onPress={() => setView(1)}
              style={[
                styles.views,
                {
                  borderBottomColor: view === 1 ? COLORS.primary : 'gray',
                  borderBottomWidth: view === 1 ? 2.5 : 0,
                },
              ]}>
              <Feather
                name="user"
                size={18}
                color={view === 1 ? COLORS.primary : 'gray'}
              />
              <Text
                style={{
                  color: view === 4 ? COLORS.primary : 'gray',
                  fontSize: 12,
                }}>
                About
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setView(2)}
              style={[
                styles.views,
                {
                  borderBottomColor: view === 2 ? COLORS.primary : 'gray',
                  borderBottomWidth: view === 2 ? 2.5 : 0,
                },
                ,
              ]}>
              <SimpleLineIcons
                name="graduation"
                size={20}
                color={view === 2 ? COLORS.primary : 'gray'}
              />
              <Text
                style={{
                  color: view === 4 ? COLORS.primary : 'gray',
                  fontSize: 12,
                }}>
                Edu & Career
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setView(3)}
              style={[
                styles.views,
                {
                  borderBottomColor: view === 3 ? COLORS.primary : 'lightgray',
                  borderBottomWidth: view === 3 ? 2.5 : 0,
                },
                ,
              ]}>
              <MaterialIcons
                name="family-restroom"
                size={20}
                color={view === 3 ? COLORS.primary : 'gray'}
              />

              <Text
                style={{
                  color: view === 4 ? COLORS.primary : 'gray',
                  fontSize: 12,
                }}>
                Family
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setView(4)}
              style={[
                styles.views,
                {
                  borderBottomColor: view === 4 ? COLORS.primary : 'lightgray',
                  borderBottomWidth: view === 4 ? 2.5 : 0,
                },
                ,
              ]}>
              <FontAwesome
                name="photo"
                size={18}
                color={view === 4 ? COLORS.primary : 'gray'}
              />

              <Text
                style={{
                  color: view === 4 ? COLORS.primary : 'gray',
                  fontSize: 12,
                }}>
                Gallery
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            {view === 1 ? <About /> : null}
            {view === 2 ? <EduCareer /> : null}
            {view === 3 ? <Family /> : null}
            {view === 4 ? <GalleryView /> : null}
          </View>
        </View>
        {/* {} */}
      </ScrollView>
    </MainLayout>
  );
};

export default EditProfileScreen;

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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    height: 28,
    marginBottom: 5,
    marginTop: -20,
    paddingHorizontal: 15,
    gap: 10,
  },
  img: {
    resizeMode: 'contain',
    height: 135,
    width: 135,
    borderRadius: 135,
    right: 1,
  },
  views: {
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 5,
    marginTop: 25,
    paddingBottom: 5,
    alignItems: 'center',
  },
  row2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    borderBottomWidth: 2,
    borderBottomColor: 'lightgray',
    marginTop: -10,
  },
});
