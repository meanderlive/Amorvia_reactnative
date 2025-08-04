import {Text, FlatList, TouchableOpacity, Share} from 'react-native';
import React from 'react';
import ActionSheet, {SheetManager} from 'react-native-actions-sheet';
import {SHEETS} from './sheets';

const options = [
  {name: 'General / Unreserved'},
  {name: 'OBC (Other Backward Class)'},
  {name: 'SC (Scheduled Caste)'},
  {name: 'ST (Scheduled Tribe)'},
  {name: 'Prefer not to say'},
  {name: 'Does not matter'},
];

const CasteSheet = (props: any) => {
  const close = () => {
    SheetManager.hide(SHEETS.DietSelectSheet);
  };

  return (
    <ActionSheet id={props.sheetId} gestureEnabled>
      <FlatList
        style={{height: 350, padding: 20}}
        data={options}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                props?.payload?.onSelect(item.name);
                SheetManager.hide(SHEETS.CasteSheet);
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

export default CasteSheet;
