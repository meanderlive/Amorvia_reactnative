import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {RegularText, RegularTextG} from '../../../components/MyText';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {HomeStackParams} from '../../../navigation/types';
import MainLayout from '../../../components/MainLayout';
import {COLORS} from '../../../styles';

const data = [
  {
    name: 'Mickey and Minnie',
    img: require('../../../../assets/images/testimonial.png'),
  },
  {
    name: 'Romeo and Juliet',
    img: require('../../../../assets/images/testimonial3.png'),
  },
  {
    name: 'Ying and Yang',
    img: require('../../../../assets/images/testimonial2.png'),
  },
];

const footer = () => {
  return (
    <>
      <View style={{alignItems: 'center', gap: 8}}>
        <RegularText>Your Review</RegularText>
        <RegularTextG style={{fontSize: 12}}>
          What you feel about this us
        </RegularTextG>

        <View
          style={{
            flexDirection: 'row',
            gap: 10,
            alignItems: 'center',
          }}>
          <FontAwesome name="star" size={35} color="#F1C40F" />
          <FontAwesome name="star" size={35} color="#F1C40F" />
          <FontAwesome name="star" size={35} color="#F1C40F" />
          <FontAwesome name="star" size={35} color="#F1C40F" />
          <FontAwesome name="star" size={35} color="lightgray" />
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          marginBottom: 30,
          marginTop: 20,
          alignItems: 'center',
          paddingHorizontal: 20,
          gap: 15,
        }}>
        <TextInput
          style={{
            backgroundColor: '#DFE2EB',
            borderRadius: 15,
            fontSize: 12,
            flex: 1,
            paddingLeft: 10,
          }}
          placeholder="say something..."
        />
        <TouchableOpacity style={styles.btn}>
          <Feather name="send" size={16} color="white" />
        </TouchableOpacity>
      </View>
    </>
  );
};
const TestimonialScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParams>>();
  return (
    <MainLayout onBack={navigation.goBack} title="Testimonial">
      <View style={{flex: 1}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          ListFooterComponent={footer}
          style={{marginTop: 5, marginHorizontal: 10}}
          data={data}
          renderItem={({item}) => {
            return (
              <View style={styles.container}>
                <View style={styles.row}>
                  <View style={styles.img}>
                    <Image
                      style={{height: '100%', width: '100%'}}
                      source={item.img}
                    />
                  </View>
                  <View style={{flex: 1}}>
                    <RegularText>{item.name}</RegularText>
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
                </View>

                <Text style={{fontSize: 12, marginTop: 15}}>
                  "Finding love seemed like an overwhelming task until I
                  discovered [Matrimony App Name]. This app has been a
                  game-changer in my quest for a life partner. The user-friendly
                  interface made creating my profile a breeze, and the diverse
                  pool of potential matches surprised me in the best way
                  possible.
                </Text>
              </View>
            );
          }}
        />
      </View>
    </MainLayout>
  );
};

export default TestimonialScreen;

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    marginVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    paddingBottom: 15,
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
  btn: {
    height: 40,
    width: 40,
    borderRadius: 40,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
