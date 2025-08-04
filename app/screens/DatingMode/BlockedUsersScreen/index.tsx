import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../../../styles';
import {RegularText} from '../../../components/MyText';
import PageHeader from '../../../components/PageHeader';
import Entypo from 'react-native-vector-icons/Entypo';
import BlockedUsersOptionsModal from '../../../modals/BlockedUsersOptionsModal';
import MainLayout from '../../../components/MainLayout';
import {useNavigation} from '@react-navigation/native';

const data = [
  {
    name: 'Ehtan Thomsan',
    img: require('../../../components/SwipeCard/assets/img2.jpg'),
  },
  {
    name: 'Noah Martinex',
    img: require('../../../components/SwipeCard/assets/img1.jpg'),
  },
  {
    name: 'Liam Johnsan',
    img: require('../../../components/SwipeCard/assets/img4.jpg'),
  },
  {
    name: 'Samuel Mitchell',
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
        <RegularText
          style={{
            color: active ? COLORS.white : COLORS.black,
            textAlign: 'center',
          }}>
          {name}
        </RegularText>
      </View>
    </TouchableOpacity>
  );
};

const BlockedUsersScreen = () => {
  const navigation = useNavigation();
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  return (
    <MainLayout title="Blocked Contacts" onBack={navigation.goBack}>
      <ScrollView
        style={{
          paddingHorizontal: 25,
          backgroundColor: 'white',
          marginTop: 10,
        }}>
        <FlatList
          style={{marginBottom: 200}}
          data={data}
          numColumns={2}
          renderItem={({item}) => {
            return <Item name={item.name} img={item.img} />;
          }}
        />
      </ScrollView>
    </MainLayout>
  );
};

export default BlockedUsersScreen;
