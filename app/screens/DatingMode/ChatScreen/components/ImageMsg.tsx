import React from 'react';
import {Text, View} from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import {COLORS} from '../../../../styles';
import {Image} from 'react-native';
import {chatUserList} from '../../../../utils/dummy';
import {SmallText} from '../../../../components/MyText';
const ImageMsg = ({isSideLeft, item}: any) => {
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
          backgroundColor: isSideLeft ? '#FAFAFA' : COLORS.primary,
          alignSelf: isSideLeft ? 'flex-start' : 'flex-end',
          padding: 5,
          width: '60%',
          maxWidth: 200,
          height: 200,
          marginVertical: 10,
          marginTop: 15,
          borderRadius: 10,
          marginLeft: isSideLeft ? 40 : 0,
          marginRight: isSideLeft ? 0 : 40,
        }}>
        <Image
          style={{
            width: 190,
            height: 190,
            resizeMode: 'cover',
            borderRadius: 10,
          }}
          source={{uri: item?.url}}
        />
        <View
          style={{
            alignSelf: isSideLeft ? 'flex-start' : 'flex-end',
          }}>
          <SmallText style={{color: COLORS.grey, marginTop: 10}}>
            9:27 AM
          </SmallText>
        </View>
      </View>
    </View>
  );
};

export default ImageMsg;
