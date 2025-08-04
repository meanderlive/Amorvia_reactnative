import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import {MediumText, RegularText, SmallText} from '../../../components/MyText';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '../../../styles';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {HomeStackParams} from '../../../navigation/types';

const Testimonails = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParams>>();
  return (
    <View style={{marginTop: 20}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 20,
        }}>
        <MediumText>Testimonails</MediumText>
        <TouchableOpacity
          onPress={() => navigation.navigate('Testimonial')}
          style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
          <Text>View All</Text>
          <AntDesign name="right" size={20} />
        </TouchableOpacity>
      </View>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{marginTop: 5, marginHorizontal: 10}}
        data={[1, 2, 3, 4]}
        renderItem={() => {
          return (
            <View style={styles.container}>
              <View style={styles.row}>
                <View style={styles.img}>
                  <Image
                    style={{height: '100%', width: '100%'}}
                    source={require('../../../../assets/images/testimonial.png')}
                  />
                </View>
                <View style={{flex: 1}}>
                  <RegularText>Mickey and Minnie</RegularText>
                  <View
                    style={{
                      flexDirection: 'row',
                      gap: 2,
                      alignItems: 'center',
                    }}>
                    <Text style={{marginRight: 5}}>4.5</Text>
                    <FontAwesome name="star" size={20} color="#F1C40F" />
                    <FontAwesome name="star" size={20} color="#F1C40F" />
                    <FontAwesome name="star" size={20} color="#F1C40F" />
                    <FontAwesome name="star" size={20} color="#F1C40F" />
                    <FontAwesome name="star" size={20} color="lightgray" />
                  </View>
                </View>
                <Fontisto name="quote-right" size={22} color={COLORS.primary} />
              </View>

              <Text style={{fontSize: 12, marginTop: 15}}>
                "Finding love seemed like an overwhelming task until I
                discovered [Matrimony App Name]. This app has been a
                game-changer in my quest for a life partner. The user-friendly
                interface made creating my profile a breeze, and the diverse
                pool of potential matches surprised me in the best way possible.
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Testimonails;

const styles = StyleSheet.create({
  container: {
    height: 260,
    margin: 7,
    borderRadius: 20,
    marginVertical: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: 330,
    padding: 20,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    gap: 10,
  },
  img: {
    height: 55,
    width: 55,
    borderRadius: 40,
    backgroundColor: 'gray',
  },
});
