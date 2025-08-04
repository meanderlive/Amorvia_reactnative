import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MatProfileStackParams} from '../../../navigation/types';
import MainLayout from '../../../components/MainLayout';
import {MediumText, RegularTextG} from '../../../components/MyText';
import VenueSvg from '../../../../assets/images/WeddingSvg/Venues.svg';
import DressSvg from '../../../../assets/images/WeddingSvg/Dresses.svg';
import MusicSvg from '../../../../assets/images/WeddingSvg/Music.svg';
import ShootSvg from '../../../../assets/images/WeddingSvg/Shoot.svg';
import CakeSvg from '../../../../assets/images/WeddingSvg/Cake.svg';
import DecorSvg from '../../../../assets/images/WeddingSvg/Decor.svg';

const WeddingResourceScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<MatProfileStackParams>>();
  return (
    <MainLayout onBack={navigation.goBack} title="Wedding Resources">
      <ScrollView showsVerticalScrollIndicator={false} style={{padding: 20}}>
        <MediumText>Categories</MediumText>
        <TouchableOpacity
          onPress={() => navigation.navigate('WeddingVenues')}
          style={styles.container}>
          <VenueSvg />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('WeddingDress')}
          style={styles.container}>
          <DressSvg />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('WeddingMusic')}
          style={styles.container}>
          <MusicSvg />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('WeddingShoot')}
          style={styles.container}>
          <ShootSvg />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('WeddingCake')}
          style={styles.container}>
          <CakeSvg />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('WeddingDecor')}
          style={styles.container}>
          <DecorSvg />
        </TouchableOpacity>
      </ScrollView>
    </MainLayout>
  );
};

export default WeddingResourceScreen;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF2F4',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    gap: 15,
    marginTop: 15,
  },
});
