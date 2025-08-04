import React, {useState} from 'react';
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import TextMsg from './components/TextMsg';
import {chatUserList, messagesList} from '../../../utils/dummy';
import {COLORS} from '../../../styles';
import {RegularText} from '../../../components/MyText';
import ImageMsg from './components/ImageMsg';
import ChatOptionsModal from '../../../modals/ChatOptionsModal';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ChatStackParams} from '../../../navigation/types';
import {useNavigation} from '@react-navigation/native';
import {SheetManager} from 'react-native-actions-sheet';
import {SHEETS} from '../../../sheets/sheets';

const ChatHeader = ({}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<ChatStackParams>>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 15,
        marginTop: 10,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <MaterialIcons
          onPress={() => navigation.goBack()}
          name="arrow-back"
          size={25}
          color={COLORS.black}
        />
        <View
          style={{
            height: 35,
            width: 35,
            borderRadius: 35,
            backgroundColor: 'lightgrey',
            marginHorizontal: 10,
            overflow: 'hidden',
          }}>
          <Image
            source={{uri: chatUserList[1].image}}
            style={{resizeMode: 'cover', width: '100%', height: '100%'}}
          />
        </View>
        <RegularText
          style={{
            color: COLORS.black,
            fontSize: 16,
          }}>
          Dennis Steele
        </RegularText>
      </View>
      <View style={{flexDirection: 'row', gap: 15, alignItems: 'center'}}>
        <MaterialIcons
          onPress={() => navigation.navigate('AudioCall')}
          name="call"
          size={20}
          color={COLORS.primary}
        />
        <FontAwesome5
          onPress={() => navigation.navigate('AudioCall')}
          name="video"
          size={20}
          color={COLORS.primary}
        />
        {isModalOpen && (
          <ChatOptionsModal onHide={() => setIsModalOpen(false)} />
        )}
        <Entypo
          onPress={() => setIsModalOpen(true)}
          name="dots-three-vertical"
          size={20}
          color={COLORS.primary}
        />
      </View>
    </View>
  );
};

const ChatForm = ({}) => {
  return (
    <>
      <View
        style={{
          height: 60,
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: 'white',
          justifyContent: 'space-evenly',
          paddingHorizontal: 15,
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,
          elevation: 5,
          overflow: 'hidden',
        }}>
        {/* input start */}
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 5,
            alignItems: 'center',
            marginHorizontal: 15,
            borderRadius: 40,
            backgroundColor: '#F5F5F5',
            height: 40,
            flex: 1,
          }}>
          <TextInput
            style={{
              marginHorizontal: 5,
              paddingRight: 12,
              color: COLORS.grey,
              backgroundColor: '#f5f5f5',
              height: 40,
            }}
            onFocus={() => {
              console.log('focus received');
            }}
            placeholderTextColor="#999"
            onBlur={() => console.log('focus lost')}
            placeholder="Type a message"
          />
        </View>
        {/* input end */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 15,
          }}>
          <FontAwesome name="photo" size={20} color={COLORS.primary} />
          <FontAwesome name="microphone" size={20} color={COLORS.primary} />
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.primary,
              width: 30,
              height: 30,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 28,
            }}>
            <FontAwesome
              name="send"
              size={15}
              color={COLORS.white}
              style={{marginRight: 2.5}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const ChatMessage = ({item}: any) => {
  const isSideLeft = item.senderId === 0;
  if (item?.type === 'image') {
    return <ImageMsg isSideLeft={isSideLeft} item={item} />;
  }
  return <TextMsg isSideLeft={isSideLeft} item={item} />;
};
const ChatBox = () => {
  return (
    <View
      style={{
        flex: 1,
        margin: 10,
      }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={messagesList}
        numColumns={1}
        ListEmptyComponent={() => (
          <Text style={{textAlign: 'center', color: '#555'}}>
            send message to start conversation
          </Text>
        )}
        renderItem={({item, index}) => (
          <ChatMessage index={index} item={item} />
        )}
      />

      {false ? (
        <View
          style={{
            padding: 5,
            position: 'absolute',
            bottom: 0,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              textAlign: 'center',
              backgroundColor: '#444',
              width: 70,
              borderRadius: 20,
              padding: 5,
              fontSize: 12,
              color: '#FFF',
            }}>
            typing...
          </Text>
        </View>
      ) : null}
    </View>
  );
};

const MessageScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<ChatStackParams>>();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <ChatHeader />
      <ChatBox />
      <View style={styles.gift}>
        <TouchableOpacity
          onPress={() => {
            SheetManager.show(SHEETS.SendGiftSheet);
          }}>
          <Image source={require('../../../../assets/logo/sendGift.png')} />
        </TouchableOpacity>
      </View>
      <ChatForm />
    </SafeAreaView>
  );
};

export default MessageScreen;
const styles = StyleSheet.create({
  gift: {
    height: 40,
    alignItems: 'flex-end',
    paddingRight: 30,
  },
});
