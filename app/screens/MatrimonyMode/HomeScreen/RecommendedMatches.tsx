import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import {MediumText} from '../../../components/MyText';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {COLORS} from '../../../styles';
import {HomeStackParams} from '../../../navigation/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

const data = [
  {
    name: 'Sarah William',
    img: require('../../../components/SwipeCard/assets/img1.jpg'),
  },
  {
    name: 'Mary Thomas',
    img: require('../../../components/SwipeCard/assets/img3.jpg'),
  },
  {
    name: 'Elizabeth',
    img: require('../../../components/SwipeCard/assets/img5.jpg'),
  },
  {
    name: 'Sarah',
    img: require('../../../components/SwipeCard/assets/img7.jpg'),
  },
];

const Item = ({name, img}: {name: string; img: {uri: string}}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParams>>();
  const [connect, setConnect] = useState(false);
  const [like, setLike] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('UsersProfile')}
      style={{
        height: 270,
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
        width: 200,
      }}>
      <View
        style={{
          height: 160,
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
            resizeMode: Platform.OS === 'ios' ? 'cover' : 'contain',
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
        <View
          style={{
            position: 'absolute',
            height: '100%',
            justifyContent: 'flex-end',
            paddingLeft: 10,
            paddingBottom: 5,
          }}>
          <Text style={{color: 'white'}}>{name}</Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          marginLeft: 10,
        }}>
        <Text style={{marginTop: 8, fontSize: 12}}>29 yrs, 6'0 English</Text>
        <Text style={{fontSize: 12}}>California United States</Text>
        <TouchableOpacity
          onPress={() => setConnect(!connect)}
          style={styles.btn}>
          <AntDesign name="check" size={18} color="white" />
          <Text style={{color: 'white'}}>
            {connect ? 'Connected' : 'Connect'}
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const RecommendedMatches = () => {
  return (
    <View style={{marginTop: 20}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 20,
        }}>
        <MediumText>Recommended Matches</MediumText>
        <TouchableOpacity
          style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
          <Text>View All</Text>
          <AntDesign name="right" size={20} />
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{marginTop: 5, marginHorizontal: 10}}
        data={data}
        renderItem={({item}: any) => {
          return <Item name={item.name} img={item.img} />;
        }}
      />
    </View>
  );
};

export default RecommendedMatches;

const styles = StyleSheet.create({
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    paddingHorizontal: 20,
    backgroundColor: COLORS.primary,
    borderRadius: 30,
    marginTop: 15,
    gap: 5,
    height: 35,
    justifyContent: 'center',
  },
});
