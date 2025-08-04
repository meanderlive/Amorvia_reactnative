import {
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';
import React, {useState} from 'react';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {COLORS} from '../../../styles';
import {MediumText, RegularTextG, SmallText} from '../../../components/MyText';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MatchStackParams} from '../../../navigation/types';
import {useNavigation} from '@react-navigation/native';
import AboutView from './AboutView';
import CrossSvg from '../../../../assets/images/btnSvg/cross.svg';
import CheckSvg from '../../../../assets/images/btnSvg/check.svg';
import StarSvg from '../../../../assets/images/btnSvg/star.svg';
import AstrooSvg from '../../../../assets/logo/astrology .svg';

import Family from './Family';
import EduCareer from './EduCareer';
import ProfileOptionsModal2 from '../../../modals/ProfileOptionModal2';

const UsersProfileScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<MatchStackParams>>();

  const [view, setView] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <View style={{flex: 1}}>
      {isModalOpen && (
        <ProfileOptionsModal2 onHide={() => setIsModalOpen(false)} />
      )}
      <View
        style={{
          height: '60%',
          width: '100%',
          zIndex: 1,
          borderBottomLeftRadius: 25,
          borderBottomRightRadius: 25,
        }}>
        <View
          style={{
            position: 'absolute',
            zIndex: 1,
            width: '100%',
            height: '100%',
            justifyContent: 'space-between',
            paddingHorizontal: 15,
          }}>
          <View
            style={{
              width: '100%',
              marginTop: 50,
              alignItems: 'flex-end',
              gap: 20,
            }}>
            <Entypo
              onPress={() => setIsModalOpen(true)}
              name="dots-three-vertical"
              size={24}
              color="white"
            />
            <TouchableOpacity
              onPress={() => navigation.navigate('Astro')}
              style={styles.astro}>
              <AstrooSvg />
              <SmallText style={{color: 'white'}}>Astro</SmallText>
            </TouchableOpacity>
          </View>

          <View style={{marginBottom: 20}}>
            <View style={[styles.row, {gap: 10}]}>
              <Octicons name="shield-check" size={22} color={COLORS.primary} />
              <MediumText bold style={{color: 'white'}}>
                Monica22
              </MediumText>
              <FontAwesome5 name="crown" size={22} color="#FFBB37" />
              <View style={styles.row5}>
                <Entypo
                  style={{marginTop: -4, marginRight: -5}}
                  name="dot-single"
                  size={29}
                  color="#64DD17"
                />

                <SmallText
                  style={{
                    color: COLORS.white,
                    fontSize: 12,
                  }}>
                  1 hr ago.
                </SmallText>
              </View>
            </View>

            <RegularTextG style={{color: 'white', marginVertical: 5}}>
              Photographer
            </RegularTextG>

            <View style={styles.row}>
              <Entypo name="location-pin" size={15} color={COLORS.primary} />
              <Text style={{fontSize: 12, color: COLORS.white}}>10 miles</Text>
            </View>

            <View style={styles.row}>
              <Entypo name="location-pin" size={15} color={COLORS.primary} />
              <Text style={{fontSize: 12, color: COLORS.white}}>
                23 years, 5.5ft
              </Text>
            </View>

            <View style={styles.row3}>
              <TouchableOpacity style={{alignItems: 'center', gap: 10}}>
                <CrossSvg />
                <Text style={{fontSize: 12, color: 'white'}}>
                  Not Interested
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{alignItems: 'center', gap: 10}}>
                <StarSvg />
                <Text style={{fontSize: 12, color: 'white', marginTop: 2}}>
                  Shortlist
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{alignItems: 'center', gap: 10}}>
                <CheckSvg />
                <Text style={{fontSize: 12, color: 'white'}}>Connect</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Image
          style={{
            height: '100%',
            width: '100%',
            resizeMode: 'cover',
            borderBottomLeftRadius: 25,
            borderBottomRightRadius: 25,
          }}
          source={require('../../../components/SwipeCard/assets/img1.jpg')}
        />
      </View>

      <View style={{flex: 1, backgroundColor: 'white'}}>
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
              size={20}
              color={view === 1 ? COLORS.primary : 'gray'}
            />
            <RegularTextG style={{color: view === 1 ? COLORS.primary : 'gray'}}>
              About
            </RegularTextG>
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
              size={22}
              color={view === 2 ? COLORS.primary : 'gray'}
            />

            <RegularTextG style={{color: view === 2 ? COLORS.primary : 'gray'}}>
              Edu & Career
            </RegularTextG>
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
              size={24}
              color={view === 3 ? COLORS.primary : 'gray'}
            />

            <RegularTextG style={{color: view === 3 ? COLORS.primary : 'gray'}}>
              Family
            </RegularTextG>
          </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} style={{}}>
          {view === 1 ? <AboutView /> : null}
          {view === 2 ? <EduCareer /> : null}
          {view === 3 ? <Family /> : null}
        </ScrollView>
      </View>
    </View>
  );
};

export default UsersProfileScreen;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
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
  views: {
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 5,
    marginTop: 25,
    paddingBottom: 5,
    alignItems: 'center',
  },
  row3: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
    paddingHorizontal: 20,
  },
  row5: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    height: 20,
    borderRadius: 30,
    width: 80,
    paddingRight: 5,
  },
  astro: {
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0.6)',
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    borderRadius: 30,
    paddingHorizontal: 15,
    gap: 5,
  },
});
