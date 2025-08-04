import {
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {COLORS} from '../../../styles';
import {RegularText, RegularTextG, SmallText} from '../../../components/MyText';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {DiscoverStackParams} from '../../../navigation/types';
import {useNavigation} from '@react-navigation/native';
import ProfileOptionsModal from '../../../modals/ProfileOptionsModal';
import AboutView from './AboutView';
import GalleryView from './GalleryView';
import {Platform} from 'react-native';

const UsersProfileScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<DiscoverStackParams>>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [view, setView] = useState(1);

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          height: '60%',
          width: '100%',
        }}>
        <SafeAreaView />
        <View
          style={{
            // position: 'absolute',
            // zIndex: 1,
            width: '100%',
            height: '100%',
            justifyContent: 'space-between',
            paddingHorizontal: 15,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              marginTop: Platform.OS === 'ios' ? 0 : 30,
              zIndex: 20,
            }}>
            <TouchableOpacity
              onPress={navigation.goBack}
              style={{
                width: 35,
                justifyContent: 'center',
                alignItems: 'center',
                height: 35,
                backgroundColor: 'rgba(0,0,0,0.1)',
                borderRadius: 35 / 2,
              }}>
              <MaterialIcons name="arrow-back" size={30} color={COLORS.white} />
            </TouchableOpacity>
            {isModalOpen && (
              <ProfileOptionsModal onHide={() => setIsModalOpen(false)} />
            )}
            <TouchableOpacity
              style={{width: 30}}
              onPress={() => setIsModalOpen(true)}>
              <Entypo name="dots-three-horizontal" size={24} color="white" />
            </TouchableOpacity>
          </View>

          <View style={{marginBottom: 30}}>
            <View style={[styles.row, {gap: 10}]}>
              <Octicons name="shield-check" size={22} color={COLORS.primary} />
              <RegularText
                style={{textAlign: 'center', fontSize: 16, color: 'white'}}>
                Eliza Williams, 23
              </RegularText>
              <FontAwesome5 name="crown" size={22} color="#FFBB37" />
            </View>
            <View style={styles.row}>
              <RegularTextG style={{marginRight: 5, color: 'white'}}>
                Art Manager
              </RegularTextG>
              <Entypo name="location-pin" size={15} color={COLORS.primary} />
              <RegularText style={{fontSize: 14, color: COLORS.white}}>
                10 miles
              </RegularText>
            </View>
            <View style={styles.row}>
              <Entypo name="dot-single" size={29} color="#64DD17" />

              <SmallText
                style={{
                  textAlign: 'center',
                  color: COLORS.white,
                  fontSize: 11,
                }}>
                Active 2 hours ago.
              </SmallText>
            </View>
          </View>
        </View>
        <Image
          style={{
            height: '100%',
            width: '100%',
            resizeMode: 'cover',
            position: 'absolute',
            zIndex: -1,
          }}
          source={require('../../../components/SwipeCard/assets/img1.jpg')}
        />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1,
          backgroundColor: 'white',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          marginTop: -25,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Compatibility')}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
            marginTop: 15,
            paddingHorizontal: 20,
            gap: 10,
          }}>
          <AntDesign name="questioncircleo" size={24} color={COLORS.primary} />
          <RegularText style={{color: COLORS.primary}}>
            Check Compatibility
          </RegularText>
        </TouchableOpacity>

        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => setView(1)}
            style={[
              styles.views,
              {
                borderBottomColor: view === 1 ? COLORS.primary : 'lightgray',
                borderBottomWidth: view === 1 ? 2.5 : 1,
              },
            ]}>
            <Feather
              name="user"
              size={24}
              color={view === 1 ? COLORS.primary : 'lightgray'}
            />
            <RegularTextG
              style={{color: view === 1 ? COLORS.primary : 'lightgray'}}>
              About
            </RegularTextG>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setView(2)}
            style={[
              styles.views,
              {
                borderBottomColor: view === 2 ? COLORS.primary : 'lightgray',
                borderBottomWidth: view === 2 ? 2.5 : 1,
              },
              ,
            ]}>
            <AntDesign
              name="picture"
              size={24}
              color={view === 2 ? COLORS.primary : 'lightgray'}
            />
            <RegularTextG
              style={{color: view === 2 ? COLORS.primary : 'lightgray'}}>
              Gallery
            </RegularTextG>
          </TouchableOpacity>
        </View>

        {view === 1 ? <AboutView /> : null}

        {view === 2 ? <GalleryView /> : null}
      </ScrollView>
    </View>
  );
};

export default UsersProfileScreen;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  views: {
    width: '50%',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 5,
    marginTop: 25,
    paddingBottom: 5,
  },
});
