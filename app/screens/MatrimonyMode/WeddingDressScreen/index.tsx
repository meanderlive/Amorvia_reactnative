import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MatProfileStackParams} from '../../../navigation/types';
import MainLayout from '../../../components/MainLayout';
import {Image} from 'react-native';
import {SmallText} from '../../../components/MyText';

const data = [
  {img: require('../../../../assets/images/Dress/img1.png')},
  {img: require('../../../../assets/images/Dress/img2.png')},
  {img: require('../../../../assets/images/Dress/img3.png')},
  {img: require('../../../../assets/images/Dress/img4.png')},
  {img: require('../../../../assets/images/Dress/img5.png')},
  {img: require('../../../../assets/images/Dress/img6.png')},
];
const Item = ({img}: {img: {uri: string}}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<MatProfileStackParams>>();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('DressDetail')}
      style={styles.container}>
      <View style={styles.imgView}>
        <Image
          style={{
            height: '100%',
            width: '100%',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            // resizeMode: 'contain',
          }}
          source={img}
        />
      </View>
      <View
        style={{
          flex: 1,
          marginLeft: 10,
        }}>
        <Text style={{marginTop: 8, color: 'black'}}>Designer Gown</Text>
        <SmallText>$ 500.00</SmallText>
      </View>
    </TouchableOpacity>
  );
};

const WeddingDressScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<MatProfileStackParams>>();
  return (
    <MainLayout onBack={navigation.goBack} title="Wedding Dress">
      <View style={{paddingHorizontal: 10, backgroundColor: 'white'}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          style={{marginTop: 20, marginBottom: 50}}
          data={data}
          numColumns={2}
          renderItem={({item}: any) => {
            return <Item img={item.img} />;
          }}
        />
      </View>
    </MainLayout>
  );
};

export default WeddingDressScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1 / 2,
    height: 225,
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
    marginHorizontal: 10,
  },
  imgView: {
    height: 160,
    borderRadius: 20,
    backgroundColor: 'lightgray',
  },
});
