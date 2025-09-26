import { Text, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import ActionSheet, { SheetManager } from 'react-native-actions-sheet';

import { SHEETS } from './sheets';

const experienceOptions = [
  { name: 'Fresher' },
  { name: '1 - 2 Years' },
  { name: '3 - 5 Years' },
  { name: '6 - 10 Years' },
  { name: '10+ Years' },
];

const ExperienceSheet = (props: any) => {
  const close = () => {
    SheetManager.hide(SHEETS.ExperienceSheet);
  };

  return (
    <ActionSheet id={props.sheetId} gestureEnabled>
      <FlatList
        style={{ height: 280, padding: 20 }}
        data={experienceOptions}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              props?.payload?.onSelect(item.name);
              SheetManager.hide(SHEETS.ExperienceSheet);
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
        )}
      />
    </ActionSheet>
  );
};

export default ExperienceSheet;
