import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
} from 'react-native';
import React from 'react';
import DefaultImage from '../../../components/DefaultImage';
import Feather from 'react-native-vector-icons/Feather';
import {chatUserList} from '../../../utils/dummy';
import {useNavigation} from '@react-navigation/native';
import MainLayout from '../../../components/MainLayout';
import {BigText, RegularText, SmallText} from '../../../components/MyText';
import {COLORS} from '../../../styles';
import {ChatStackParams} from '../../../navigation/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const SearchChat = ({searchKeyword, setSearchKeyword}: any) => {
  return (
    <View
      style={{
        opacity: 0.8,
        backgroundColor: '#f5f5f5',
        marginVertical: 15,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        borderRadius: 40,
        marginHorizontal: 30,
        height: 45,
      }}>
      <Feather name="search" color={'#999'} size={20} />
      <TextInput
        style={{
          color: COLORS.black,
          fontSize: 17,
          width: '90%',
          marginHorizontal: 10,
        }}
        value={searchKeyword}
        onChangeText={text => setSearchKeyword(text)}
        placeholder="Search"
        placeholderTextColor="#999"
      />
    </View>
  );
};

const UserListItem = ({item, index}: any) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<ChatStackParams>>();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Message');
      }}
      style={{
        borderBottomColor: 'rgba(0,0,0,0.1)',
        borderBottomWidth: 0.5,
      }}>
      <View
        style={{
          margin: 2,
          padding: 10,
          flexDirection: 'row',
          alignItems: 'flex-end',
          maxWidth: 400,
        }}>
        {
          item?.image ? (
            <Image
              source={{uri: item?.image}}
              style={{
                width: 50,
                height: 50,
                borderRadius: 50,
                resizeMode: 'cover',
              }}
            />
          ) : null
          // <DefaultImage iconSize={50} />
        }
        <View
          style={{
            marginLeft: 20,
          }}>
          <RegularText
            style={{
              fontSize: 16,
              color: '#222',
              marginBottom: 5,
            }}>
            {item?.name ? item?.name : 'no-name'}
          </RegularText>
          <RegularText style={{fontSize: 12, color: '#222', opacity: 0.5}}>
            {item?.bio}
          </RegularText>
        </View>
        <View
          style={{
            alignItems: 'flex-end',
            flex: 1,
            justifyContent: 'flex-end',
          }}>
          <SmallText
            style={{
              color: COLORS.grey,
              fontSize: 12,
              opacity: 0.7,
              marginBottom: 20,
            }}>
            9:27 AM
          </SmallText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const ChatScreen = () => {
  const navigation = useNavigation();
  return (
    <MainLayout
      onBack={navigation.goBack}
      title="Messages"
      //@ts-ignore
      viewStyles={{marginVertical: 0, paddingHorizontal: 20}}>

      <SearchChat searchKeyword={''} setSearchKeyword={() => {}} />

      {/* HEADER */}

      <FlatList
        data={chatUserList}
        numColumns={1}
        ListEmptyComponent={
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: '100%',
            }}>
          </View>
        }
        renderItem={({item, index}) => {
          return <UserListItem index={index} item={item} />;
        }}
      />
    </MainLayout>
  );
};

export default ChatScreen;
