import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import ActionSheet from 'react-native-actions-sheet';
import {BigText, RegularText, SmallText} from '../../components/MyText';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '../../styles';

const CameraAndGalleryOption = (props: any) => {
  return (
    <ActionSheet
      id={props.sheetId}
      gestureEnabled
      containerStyle={{
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
      }}>
      <View style={{height: 240}}>
        <TouchableOpacity
          onPress={props?.payload?.openCamera}
          style={{
            height: 50,
            width: '100%',
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: COLORS.white,
            borderBottomWidth: 1,
            borderBottomColor: 'rgba(0,0,0,0.1)',
          }}>
          <BigText style={{color: COLORS.grey, fontSize: 18}}>
            Take Photo
          </BigText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={props?.payload?.openGallery}
          style={{
            height: 60,
            width: '100%',
            backgroundColor: COLORS.white,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
            borderBottomWidth: 1,
            borderBottomColor: 'rgba(0,0,0,0.1)',
          }}>
          <BigText style={{color: COLORS.grey, fontSize: 18}}>
            Choose From Gallery
          </BigText>
        </TouchableOpacity>

        <TouchableOpacity
          // onPress={props?.payload?.openGallery}
          style={{
            height: 60,
            width: '100%',
            backgroundColor: COLORS.white,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
            borderBottomWidth: 1,
            borderBottomColor: 'rgba(0,0,0,0.1)',
          }}>
          <BigText style={{color: COLORS.grey, fontSize: 18}}>
            Choose from My Photos
          </BigText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={props?.payload?.closeSheet}
          style={{
            height: 65,
            width: '100%',
            backgroundColor: COLORS.white,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <BigText
            style={{color: COLORS.primary, fontSize: 18, marginBottom: 10}}>
            Cancel
          </BigText>
        </TouchableOpacity>
      </View>
    </ActionSheet>
  );
};

export default CameraAndGalleryOption;
