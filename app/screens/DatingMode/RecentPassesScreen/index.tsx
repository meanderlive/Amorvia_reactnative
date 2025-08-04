import {View, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../../../styles';
import {RegularText} from '../../../components/MyText';
import Entypo from 'react-native-vector-icons/Entypo';
import MainLayout from '../../../components/MainLayout';
import {useNavigation} from '@react-navigation/native';
import {Image} from 'react-native';

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
];

const Item = ({name, img}: {name: string; img: {uri: string}}) => {
  const [active, setActive] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => setActive(!active)}
      style={{
        flex: 1 / 2,
        height: 200,
        backgroundColor: 'white',
        margin: 7,
        borderRadius: 20,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }}>
      <View
        style={{
          height: '80%',
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
            resizeMode: 'contain',
          }}
          source={img}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: active ? COLORS.primary : COLORS.white,
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}>
        <Entypo name="dot-single" size={29} color="#64DD17" />
        <RegularText
          style={{
            color: active ? COLORS.white : COLORS.black,
            textAlign: 'center',
          }}>
          Recently Active
        </RegularText>
      </View>
    </TouchableOpacity>
  );
};

const RecentPassesScreen = () => {
  const navigation = useNavigation();
  const [view, setView] = useState(1);
  return (
    <MainLayout title="Recent Passes" onBack={navigation.goBack}>
      <View style={{paddingHorizontal: 25, backgroundColor: 'white'}}>
        <View
          style={{
            width: '100%',
            alignSelf: 'center',
            height: 45,
            flexDirection: 'row',
            borderRadius: 30,
            borderWidth: 1,
            borderColor: COLORS.primary,
            marginVertical: 20,
          }}>
          <TouchableOpacity
            onPress={() => setView(1)}
            style={{
              backgroundColor: view === 1 ? COLORS.primary : 'white',
              width: '50%',
              borderTopLeftRadius: 30,
              borderBottomLeftRadius: 30,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <RegularText style={{color: view === 1 ? 'white' : COLORS.primary}}>
              Recent declined
            </RegularText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setView(2)}
            style={[
              styles.btn,
              {backgroundColor: view === 2 ? COLORS.primary : 'white'},
            ]}>
            <RegularText style={{color: view === 2 ? 'white' : COLORS.primary}}>
              Recent liked
            </RegularText>
          </TouchableOpacity>
        </View>

        <FlatList
          style={{marginBottom: 200}}
          data={data}
          numColumns={2}
          renderItem={({item}: any) => {
            return <Item name={item.name} img={item.img} />;
          }}
        />
      </View>
    </MainLayout>
  );
};

export default RecentPassesScreen;

const styles = StyleSheet.create({
  btn: {
    width: '50%',
    borderTopEndRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
