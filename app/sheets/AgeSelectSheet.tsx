import {Text, FlatList, TouchableOpacity, Share} from 'react-native';
import React from 'react';
import ActionSheet, {SheetManager} from 'react-native-actions-sheet';
import {SHEETS} from './sheets';
import {View} from 'react-native';

const options = [
  {name: '18 years'},
  {name: '19 years'},
  {name: '20 years'},
  {name: '21 years'},
  {name: '22 years'},
  {name: '23 years'},
  {name: '24 years'},
  {name: '25 years'},
  {name: '26 years'},
  {name: '27 years'},
  {name: '28 years'},
  {name: '29 years'},
  {name: '30 years'},
  {name: '31 years'},
  {name: '32 years'},
  {name: '33 years'},
  {name: '34 years'},
  {name: '35 years'},
  {name: '36 years'},
  {name: '37 years'},
  {name: '38 years'},
  {name: '39 years'},
  {name: '40 years'},
  {name: '41 years'},
  {name: '42 years'},
  {name: '43 years'},
  {name: '44 years'},
  {name: '45 years'},
];

const AgeSelectSheet = (props: any) => {
  const close = () => {
    SheetManager.hide(SHEETS.AgeSelectSheet);
  };

  return (
    <ActionSheet id={props.sheetId} gestureEnabled={false}>
      <View style={{height: 500}}>
        <FlatList
          style={{padding: 20}}
          data={options}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  props?.payload?.onSelect(item.name);
                  close();
                }}>
                <Text
                  style={{
                    fontSize: 17,
                    color: 'black',
                    padding: 5,
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

export default AgeSelectSheet;
