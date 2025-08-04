import {View, FlatList, Image} from 'react-native';
import React, {useState} from 'react';
import {RegularText, SmallText} from '../../../components/MyText';
import Entypo from 'react-native-vector-icons/Entypo';
import MainLayout from '../../../components/MainLayout';
import {useNavigation} from '@react-navigation/native';

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
  const [connect, setConnect] = useState(false);
  const [like, setLike] = useState(false);
  return (
    <View
      style={{
        flex: 1 / 2,
        height: 225,
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
            resizeMode: 'contain',
          }}
          source={img}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Entypo name="dot-single" size={29} color="#64DD17" />
        <RegularText
          style={{
            textAlign: 'center',
            fontSize: 13,
          }}>
          Monica
        </RegularText>
      </View>
      <View
        style={{
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          marginLeft: 10,
        }}>
        <SmallText>Howard University</SmallText>
      </View>
    </View>
  );
};

const FavoritesScreen = () => {
  const navigation = useNavigation();
  return (
    <MainLayout title="Liked Profiles" onBack={navigation.goBack}>
      <View style={{paddingHorizontal: 15, backgroundColor: 'white'}}>
        <FlatList
          style={{marginBottom: 50, paddingTop: 20}}
          showsVerticalScrollIndicator={false}
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

export default FavoritesScreen;
