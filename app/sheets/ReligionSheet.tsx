import {Text, FlatList, TouchableOpacity, Share} from 'react-native';
import React from 'react';
import ActionSheet, {SheetManager} from 'react-native-actions-sheet';
import {SHEETS} from './sheets';

const options = [
  {name: 'Hinduism'},
  {name: 'Islam'},
  {name: 'Chirstianity'},
  {name: 'Buddhism'},
  {name: 'Sikhism'},
  {name: 'Jainism'},
  {name: 'Judaism'},
  {name: 'Shinto'},
  {name: 'Taoism'},
  {name: 'Confucianism'},
];

const ReligionSheet = (props: any) => {
  return (
    <ActionSheet id={props.sheetId} gestureEnabled>
      <FlatList
        style={{height: 550, padding: 20}}
        data={options}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                props?.payload?.onSelect(item.name);
                SheetManager.hide(SHEETS.ReligionSheet);
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
    </ActionSheet>
  );
};

export default ReligionSheet;
