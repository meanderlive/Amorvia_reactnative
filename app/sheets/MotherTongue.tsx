import {Text, FlatList, TouchableOpacity, Share} from 'react-native';
import React from 'react';
import ActionSheet, {SheetManager} from 'react-native-actions-sheet';
import {SHEETS} from './sheets';

const options = [
  {name: 'English'},
  {name: 'Spanish'},
  {name: 'Hindi'},
  {name: 'French'},
  {name: 'Other'},
];

const MotherTongueSheet = (props: any) => {
  const close = () => {
    SheetManager.hide(SHEETS.MotherTongueSheet);
  };

  return (
    <ActionSheet id={props.sheetId} gestureEnabled>
      <FlatList
        style={{height: 300, padding: 20}}
        data={options}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                props?.payload?.onSelect(item.name);
                SheetManager.hide(SHEETS.MotherTongueSheet);
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

export default MotherTongueSheet;
