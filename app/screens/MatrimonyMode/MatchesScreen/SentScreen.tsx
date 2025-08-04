import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {MediumText, RegularTextG, SmallText} from '../../../components/MyText';
import {COLORS} from '../../../styles';
import RequestedSvg from '../../../../assets/images/btnSvg/video calll button.svg';
import RemoveSvg from '../../../../assets/images/btnSvg/remove.svg';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MatchStackParams} from '../../../navigation/types';

const data = [
  {
    img: require('../../../components/SwipeCard/assets/img3.jpg'),
  },
  {
    img: require('../../../components/SwipeCard/assets/img5.jpg'),
  },
  {
    img: require('../../../components/SwipeCard/assets/img1.jpg'),
  },
];

const Item = ({img}: {img: {uri: string}}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<MatchStackParams>>();
  const [like, setLike] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('UsersProfile')}
      style={styles.container}>
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
            marginTop: 30,
            alignItems: 'flex-end',
            gap: 25,
          }}>
          <Entypo name="dots-three-vertical" size={24} color="white" />
          <AntDesign
            onPress={() => setLike(!like)}
            name={like ? 'heart' : 'hearto'}
            size={22}
            color={like ? COLORS.primary : 'white'}
          />
        </View>

        <View style={{marginBottom: 20}}>
          <View style={[styles.row, {gap: 10}]}>
            <Octicons name="shield-check" size={22} color={COLORS.primary} />
            <MediumText bold style={{color: 'white'}}>
              Monica22
            </MediumText>
            <FontAwesome5 name="crown" size={22} color="#FFBB37" />
            <View style={styles.row2}>
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
              <RequestedSvg />
            </TouchableOpacity>
            <TouchableOpacity style={{alignItems: 'center', gap: 10}}>
              <RemoveSvg />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Image
        style={{height: '100%', width: '100%', borderRadius: 30}}
        source={img}
      />
    </TouchableOpacity>
  );
};

const SentScreen = () => {
  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({item}: any) => {
          return <Item img={item.img} />;
        }}
      />
    </View>
  );
};

export default SentScreen;

const styles = StyleSheet.create({
  container: {
    height: 420,
    borderRadius: 30,
    backgroundColor: 'gray',
    margin: 15,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  row2: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    height: 20,
    borderRadius: 30,
    width: 80,
    paddingRight: 5,
  },
  row3: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 15,
  },
});
