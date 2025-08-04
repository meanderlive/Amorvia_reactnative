import {Text, FlatList, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import ActionSheet, {SheetManager} from 'react-native-actions-sheet';
import {SHEETS} from './sheets';
import {venueList} from '../utils/venue';

const VenueListSheet = (props: any) => {
  return (
    <ActionSheet containerStyle={{height: '50%'}} id={props.sheetId}>
      <ScrollView>
        <FlatList
          style={{padding: 20}}
          data={venueList}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  props?.payload?.onSelect(item.address);
                  SheetManager.hide(SHEETS.VenueListSheet);
                }}>
                <Text
                  style={{
                    color: 'black',
                    padding: 6,
                    margin: 5,
                    width: '90%',
                  }}>
                  {item.address}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </ScrollView>
    </ActionSheet>
  );
};

export default VenueListSheet;
