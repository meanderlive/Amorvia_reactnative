import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CrossSvg from '../../../../assets/images/btnSvg/cross.svg';
import CheckSvg from '../../../../assets/images/btnSvg/check.svg';
import StarSvg from '../../../../assets/images/btnSvg/star.svg';
import {MediumText, RegularTextG, SmallText} from '../../../components/MyText';
import {COLORS} from '../../../styles';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MatchStackParams} from '../../../navigation/types';

const data = [
  {
    img: require('../../../components/SwipeCard/assets/img3.jpg'),
  },
  {
    img: require('../../../components/SwipeCard/assets/img1.jpg'),
  },
  {
    img: require('../../../components/SwipeCard/assets/img5.jpg'),
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
              <CrossSvg />
              <Text style={{fontSize: 12, color: 'white'}}>Not Interested</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{alignItems: 'center', gap: 10}}>
              <StarSvg />
              <Text style={{fontSize: 12, color: 'white', marginTop: 2}}>
                Shortlist
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{alignItems: 'center', gap: 10}}>
              <CheckSvg />
              <Text style={{fontSize: 12, color: 'white'}}>Connect</Text>
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

const NearMeScreen = () => {
  return (
    <View>
      <View
        style={{
          marginHorizontal: 20,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={styles.input}>
          <EvilIcons name="location" size={24} color="gray" />
          <TextInput style={{flex: 1}} placeholder="Matches near you" />
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.primary,
            borderRadius: 10,
            height: 60,
            width: 60,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Entypo name="sound-mix" size={24} color="white" />
        </TouchableOpacity>
      </View>
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

export default NearMeScreen;

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
    justifyContent: 'space-between',
    marginTop: 15,
    paddingHorizontal: 20,
  },
  input: {
    flexDirection: 'row',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.84,
    elevation: 1,
    padding: 8,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
    gap: 10,
    paddingLeft: 15,
    marginVertical: 15,
    paddingVertical: 15,
  },
});
