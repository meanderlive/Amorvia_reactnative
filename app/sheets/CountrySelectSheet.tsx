import {Text, FlatList, TouchableOpacity, ScrollView, View} from 'react-native';
import React, {useState} from 'react';
import ActionSheet, {SheetManager} from 'react-native-actions-sheet';
import {SHEETS} from './sheets';
import {countries} from '../utils/country';

const CounytrySelectSheet = (props: any) => {
  return (
    <ActionSheet containerStyle={{height: '50%'}} id={props.sheetId}>
      <View>
        <FlatList
          style={{padding: 20}}
          data={countries}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  props?.payload?.onSelect(item.name);
                  SheetManager.hide(SHEETS.CounytrySelectSheet);
                }}>
                <Text
                  style={{
                    fontSize: 17,
                    color: 'black',
                    paddingBottom: 15,
                    margin: 5,
                    fontWeight: 'bold',
                  }}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </ActionSheet>
  );
};

export default CounytrySelectSheet;
