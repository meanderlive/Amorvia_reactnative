import {View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../../../styles';
import {RegularText, SmallText} from '../../../components/MyText';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {Image} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {DiscoverStackParams} from '../../../navigation/types';

const data = [
  {
    img: require('../../../components/SwipeCard/assets/img2.jpg'),
  },
  {
    img: require('../../../components/SwipeCard/assets/img1.jpg'),
  },
  {
    img: require('../../../components/SwipeCard/assets/img4.jpg'),
  },
  {
    img: require('../../../components/SwipeCard/assets/img3.jpg'),
  },
  {
    img: require('../../../components/SwipeCard/assets/img2.jpg'),
  },
  {
    img: require('../../../components/SwipeCard/assets/img1.jpg'),
  },
  {
    img: require('../../../components/SwipeCard/assets/img4.jpg'),
  },
  {
    img: require('../../../components/SwipeCard/assets/img3.jpg'),
  },
];

const Item = ({name, img}: {name: string; img: {uri: string}}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<DiscoverStackParams>>();
  const [connect, setConnect] = useState(false);
  const [like, setLike] = useState(false);
  return (
    <View
      style={{
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
      }}>
      <TouchableOpacity
        onPress={() => navigation.navigate('UsersProfile')}
        style={{
          height: 130,
          borderRadius: 20,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          backgroundColor: 'lightgray',
        }}>
        <Image
          style={{
            height: '100%',
            width: '100%',
            borderRadius: 20,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            resizeMode: 'cover',
          }}
          source={img}
        />
        <View
          style={{
            position: 'absolute',
            alignItems: 'flex-end',
            flex: 1,
            width: '100%',
            padding: 10,
          }}>
          <AntDesign
            onPress={() => setLike(!like)}
            name={like ? 'heart' : 'hearto'}
            size={22}
            color={COLORS.primary}
          />
        </View>
      </TouchableOpacity>
      {/* {} */}
      <View
        style={{
          flex: 1,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          marginLeft: 10,
        }}>
        <SmallText style={{marginTop: 8}}>29 yrs, 6'0 English</SmallText>
        <SmallText>California United States</SmallText>
        <TouchableOpacity
          onPress={() => setConnect(!connect)}
          style={styles.btn}>
          <AntDesign name="check" size={15} color="white" />
          <SmallText style={{color: 'white'}}>
            {connect ? 'Connected' : 'Connect'}
          </SmallText>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const ListView = () => {
  return (
    <View style={{paddingHorizontal: 15, backgroundColor: 'white'}}>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={{marginTop: 20, marginBottom: 50}}
        data={data}
        numColumns={2}
        renderItem={({item}: any) => {
          return <Item name={item.name} img={item.img} />;
        }}
      />
    </View>
  );
};

export default ListView;

const styles = StyleSheet.create({
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 6,
    paddingHorizontal: 20,
    backgroundColor: COLORS.primary,
    borderRadius: 30,
    marginTop: 10,
    gap: 5,
  },
});
