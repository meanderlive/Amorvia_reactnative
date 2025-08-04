import {Text, FlatList, TouchableOpacity, Share} from 'react-native';
import React from 'react';
import ActionSheet, {
  ScrollView,
  SheetManager,
} from 'react-native-actions-sheet';

import {SHEETS} from './sheets';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {View} from 'react-native';
import {COLORS} from '../styles';
import {RegularText, SmallText} from '../components/MyText';
import {useNavigation} from '@react-navigation/native';

const UserProfileSheet = (props: any) => {
  //   const close = () => {
  //     SheetManager.hide(SHEETS.GenderSelectSheet);
  //   };

  return (
    <ActionSheet
      containerStyle={{
        height: '50%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
      }}
      id={props.sheetId}>
      <ScrollView>
        <View
          style={{
            backgroundColor: '#FAFAFA',
            borderColor: '#E0E0E0',
            borderRadius: 15,
            height: 60,
            borderWidth: 1,
            width: '95%',
            alignSelf: 'center',
          }}>
          <SmallText
            style={{
              fontSize: 12,
              textAlign: 'center',
              paddingHorizontal: 25,
              marginTop: 5,
            }}>
            I’m a photographer, yoga enthusiast, love to relax but very
            adventuros and lover of superhero movies.
          </SmallText>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
            marginHorizontal: 10,
            marginTop: 10,
          }}>
          <View style={{flexDirection: 'row', width: 100}}>
            <RegularText>Gender:</RegularText>
            <RegularText style={{color: COLORS.primary}}> Female</RegularText>
          </View>
          <View style={{flexDirection: 'row', width: 100}}>
            <RegularText>From:</RegularText>
            <RegularText style={{color: COLORS.primary}}>
              {' '}
              California
            </RegularText>
          </View>
        </View>
        <RegularText>Interest</RegularText>
        <SmallText style={{fontSize: 13, opacity: 0.5, marginBottom: 10}}>
          Computer Programming, Archery, Drawing, Chess, Poetry
        </SmallText>
        <RegularText>Other Photos</RegularText>
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
          numColumns={3}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  margin: 5,
                  flex: 1 / 3,
                  height: 100,
                  backgroundColor: 'gray',
                  borderRadius: 15,
                }}></View>
            );
          }}
        />
      </ScrollView>
    </ActionSheet>
  );
};

export default UserProfileSheet;
