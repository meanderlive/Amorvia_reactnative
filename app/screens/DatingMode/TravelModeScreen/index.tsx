import {View, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import MainLayout from '../../../components/MainLayout';
import {useNavigation} from '@react-navigation/native';
import CylinderSvg from '../../../../assets/images/svg/Cylinder2.svg';
import CoinSvg from '../../../../assets/images/svg/Coin.svg';
import {MediumText, RegularText, SmallText} from '../../../components/MyText';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ProfileStackParams} from '../../../navigation/types';
import {COLORS} from '../../../styles';
import PrimaryBtn from '../../../components/PrimaryBtn';

const TravelModeScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<ProfileStackParams>>();
  const [isActive, setIsActive] = useState(1);
  return (
    <MainLayout title="Get Premium" onBack={navigation.goBack}>
      <ScrollView style={{flex: 1, padding: 30}}>
        <View style={{alignItems: 'center', marginBottom: 30}}>
          <CylinderSvg />
          <MediumText style={{marginVertical: 20, marginTop: 10}}>
            Travel Mode
          </MediumText>
          <MediumText style={{color: 'gray', fontSize: 17, marginTop: -10}}>
            Change location to match in
          </MediumText>
          <MediumText style={{color: 'gray', fontSize: 17}}>
            other countries
          </MediumText>
        </View>
        {/* {} */}

        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => setIsActive(1)}
            style={[
              styles.box,
              {
                borderWidth: isActive === 1 ? 2 : 0,
                borderColor: isActive === 1 ? COLORS.primary : 'transparent',
              },
            ]}>
            {isActive === 1 ? (
              <View style={[styles.tag, {width: 110, marginTop: -12}]}>
                <SmallText style={{color: 'white', marginLeft: 3}}>
                  Most Popular
                </SmallText>
              </View>
            ) : null}
            <CoinSvg style={{marginTop: isActive === 1 ? 2 : 20}} />
            <MediumText bold>5 Coins</MediumText>
            <RegularText>$8.99</RegularText>
            <View style={styles.tag}>
              <SmallText style={{color: 'white'}}>Save 45%</SmallText>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setIsActive(2)}
            style={[
              styles.box,
              {
                borderWidth: isActive === 2 ? 2 : 0,
                borderColor: isActive === 2 ? COLORS.primary : 'transparent',
              },
            ]}>
            <CoinSvg style={{marginTop: 20}} />
            <MediumText bold>30 Coins</MediumText>
            <RegularText>$37.99</RegularText>
            <View style={styles.tag}>
              <SmallText style={{color: 'white'}}>Best Value</SmallText>
            </View>
          </TouchableOpacity>
        </View>
        {/* {} */}
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => setIsActive(3)}
            style={[
              styles.box,
              {
                borderWidth: isActive === 3 ? 2 : 0,
                borderColor: isActive === 3 ? COLORS.primary : 'transparent',
              },
            ]}>
            <CoinSvg style={{marginTop: 20}} />
            <MediumText bold>15 Coins</MediumText>
            <RegularText>$22.99</RegularText>
            <View style={styles.tag}>
              <SmallText style={{color: 'white'}}>Save 48%</SmallText>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setIsActive(4)}
            style={[
              styles.box,
              {
                borderWidth: isActive === 4 ? 2 : 0,
                borderColor: isActive === 4 ? COLORS.primary : 'transparent',
              },
            ]}>
            <CoinSvg style={{marginTop: 20}} />
            <MediumText bold>1 Coin</MediumText>
            <RegularText>$2.99</RegularText>
          </TouchableOpacity>
        </View>
        {/* {} */}
        <PrimaryBtn text="Continue" onPress={() => navigation.goBack()} />
      </ScrollView>
    </MainLayout>
  );
};

export default TravelModeScreen;
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  box: {
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 5,
    width: '45%',
    height: 200,
    marginLeft: 1,
    marginRight: 1,
    alignItems: 'center',
    gap: 5,
  },
  tag: {
    backgroundColor: COLORS.primary,
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 2,
    marginTop: 15,
  },
});
