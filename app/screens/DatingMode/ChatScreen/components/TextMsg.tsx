import React from 'react';
import {Text, View} from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import {COLORS} from '../../../../styles';
import {SmallText} from '../../../../components/MyText';
import {Image} from 'react-native';
import {chatUserList} from '../../../../utils/dummy';
const TextMsg = ({isSideLeft, item}: any) => {
  return (
    <View>
      {isSideLeft ? (
        <View
          style={{
            backgroundColor: 'lightgrey',
            width: 30,
            height: 30,
            borderRadius: 32,
            position: 'absolute',
            left: 2,
            top: 20,
            overflow: 'hidden',
          }}>
          <Image
            source={{uri: chatUserList[0].image}}
            style={{width: '100%', height: '100%', resizeMode: 'cover'}}
          />
        </View>
      ) : (
        <View
          style={{
            backgroundColor: 'lightgrey',
            width: 30,
            height: 30,
            borderRadius: 32,
            position: 'absolute',
            right: 2,
            top: 20,
            overflow: 'hidden',
          }}>
          <Image
            source={{uri: chatUserList[1].image}}
            style={{width: '100%', height: '100%', resizeMode: 'cover'}}
          />
        </View>
      )}
      <View
        style={{
          marginLeft: isSideLeft ? 40 : 0,
          marginRight: isSideLeft ? 0 : 40,
        }}>
        <View
          style={{
            backgroundColor: isSideLeft ? '#FAFAFA' : COLORS.primary,
            alignSelf: isSideLeft ? 'flex-start' : 'flex-end',
            padding: 5,
            maxWidth: '75%',
            marginVertical: 10,
            marginTop: 15,
            borderRadius: 10,
            paddingHorizontal: 10,
            borderBottomRightRadius: isSideLeft ? 10 : 0,
            borderBottomLeftRadius: isSideLeft ? 0 : 10,
            marginBottom: 5,
          }}>
          <Text
            style={{
              color: isSideLeft ? 'black' : COLORS.white,
              padding: 5,
              fontSize: 15,
            }}>
            {item?.item}
          </Text>
        </View>
        <View
          style={{
            alignSelf: isSideLeft ? 'flex-start' : 'flex-end',
          }}>
          <SmallText style={{color: COLORS.grey}}>9:27 AM</SmallText>
        </View>
      </View>
    </View>
  );
};

export default TextMsg;
