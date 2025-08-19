import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MatProfileStackParams} from '../../../navigation/types';
import MainLayout from '../../../components/MainLayout';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {
  MediumText,
  RegularText,
  RegularTextG,
  SmallText,
  SmallTextG,
} from '../../../components/MyText';
import {COLORS} from '../../../styles';

const data = [
  {
    img: require('../../../../assets/images/Music/img1.png'),
    name: 'Wedding DJ MC',
    price: '$ 500/ ',
  },
  {
    img: require('../../../../assets/images/Music/img2.png'),
    name: 'Golden Gate Sunrise Enter...',
    price: '$ 550/ ',
  },
  {
    img: require('../../../../assets/images/Music/img3.png'),
    name: 'The Urban League DJ',
    price: '$ 600/ ',
  },
  {
    img: require('../../../../assets/images/Music/img4.png'),
    name: 'DJ Keelez',
    price: '$ 500/ ',
  },
];
const WeddingMusicScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<MatProfileStackParams>>();
  return (
    <MainLayout onBack={navigation.goBack} title="Wedding Music">
      <View style={{padding: 20}}>
        <FlatList
          data={data}
          renderItem={({item}) => {
            return (
              <View style={styles.container}>
                <TouchableOpacity style={styles.row}>
                  <View style={styles.imgView}>
                    <Image style={styles.imgView} source={item.img} />
                  </View>
                  <View style={{gap: 7}}>
                    <RegularText>{item.name}</RegularText>
                    <View
                      style={{
                        flexDirection: 'row',
                        gap: 2,
                      }}>
                      <FontAwesome name="star" size={12} color="#F1C40F" />
                      <FontAwesome name="star" size={12} color="#F1C40F" />
                      <FontAwesome name="star" size={12} color="#F1C40F" />
                      <FontAwesome name="star" size={12} color="#F1C40F" />
                      <FontAwesome name="star" size={12} color="#F1C40F" />
                    </View>
                    <SmallTextG>California, USA</SmallTextG>
                    <Text style={{color: COLORS.primary}}>
                      {item.price}
                      <SmallText style={{color: COLORS.primary}}>
                        onwards
                      </SmallText>
                    </Text>
                  </View>
                </TouchableOpacity>
                <View style={styles.row2}>
                  <TouchableOpacity style={styles.btn}>
                    <FontAwesome5
                      name="phone-alt"
                      size={15}
                      color={COLORS.primary}
                    />
                    <Text style={{color: COLORS.primary}}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.btn}>
                    <AntDesign
                      name="message1"
                      size={15}
                      color={COLORS.primary}
                    />
                    <Text style={{color: COLORS.primary}}>Chat</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />
      </View>
    </MainLayout>
  );
};

export default WeddingMusicScreen;
const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    paddingBottom: 15,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  row2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imgView: {
    height: 100,
    width: 100,
    borderRadius: 20,
  },
  btn: {
    flexDirection: 'row',
    borderRadius: 69,
    padding: 10,
    paddingHorizontal: 20,
    marginTop: 15,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
    marginLeft: 1,
    gap: 7,
    marginRight: 2,
  },
});
