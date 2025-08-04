import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {COLORS} from '../../../styles';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {
  BigText,
  MediumText,
  RegularTextG,
  SmallText,
} from '../../../components/MyText';

const Header = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          style={styles.imgView}
          source={require('../../../components/SwipeCard/assets/img1.jpg')}
        />
        <View style={styles.match}>
          <SmallText
            style={{color: 'white', fontSize: 12, textAlign: 'center'}}>
            It's a match
          </SmallText>
        </View>
        <Image
          style={styles.imgView}
          source={require('../../../components/SwipeCard/assets/img2.jpg')}
        />
      </View>
      <View style={{alignItems: 'center'}}>
        <MediumText style={{marginTop: 20, marginBottom: 5}}>
          Horocrope Score
        </MediumText>
        <RegularTextG style={{marginBottom: 5}}>
          Compatibility Score between Jessica and Smith
        </RegularTextG>
        <BigText bold style={{color: COLORS.primary, marginVertical: 15}}>
          27
          <MediumText bold style={{color: COLORS.primary}}>
            /36
          </MediumText>
        </BigText>
      </View>

      <View style={styles.row}>
        <SmallText style={{fontSize: 12}}>
          Prediction are based on your details
        </SmallText>
        <TouchableOpacity style={styles.btn}>
          <SmallText style={{color: COLORS.primary}}>Edit</SmallText>
          <EvilIcons name="pencil" size={20} color={COLORS.primary} />
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <View style={styles.boxes}>
          <Text style={{color: COLORS.primary, fontSize: 13}}>
            Time of Birth
          </Text>
          <Text>08:00 AM</Text>
        </View>
        <View style={styles.boxes}>
          <Text style={{color: COLORS.primary, fontSize: 13}}>
            Place of Birth
          </Text>
          <Text>USA</Text>
        </View>
        <View style={styles.boxes}>
          <Text style={{color: COLORS.primary, fontSize: 13}}>Rashi</Text>
          <Text>Capricon (Maker)</Text>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  imgView: {
    height: 90,
    width: 90,
    borderRadius: 80,
  },
  match: {
    height: 55,
    width: 55,
    borderRadius: 60,
    backgroundColor: COLORS.primary,
    zIndex: 1,
    marginHorizontal: -20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: COLORS.primary,
    padding: 5,
    paddingLeft: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  boxes: {
    height: 70,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: COLORS.primary,
    backgroundColor: '#F1F1F1',
    justifyContent: 'center',
    paddingHorizontal: 8,
    gap: 5,
    marginVertical: 15,
  },
});
