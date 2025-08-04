import {Text, FlatList, TouchableOpacity, ScrollView, View} from 'react-native';
import React from 'react';
import ActionSheet, {SheetManager} from 'react-native-actions-sheet';

import {SHEETS} from './sheets';

const options = [
  {name: '160 cm', value: '160 cm'},
  {name: '161 cm', value: '160 cm'},
  {name: '162 cm', value: '160 cm'},
  {name: '163 cm', value: '160 cm'},
  {name: '164 cm', value: '160 cm'},
  {name: '165 cm', value: '160 cm'},
  {name: '166 cm', value: '160 cm'},
  {name: '167 cm', value: '160 cm'},
  {name: '168 cm', value: '160 cm'},
  {name: '169 cm', value: '160 cm'},
  {name: '170 cm', value: '160 cm'},
  {name: '171 cm', value: '160 cm'},
  {name: '172 cm', value: '160 cm'},
  {name: '173 cm', value: '160 cm'},
  {name: '174 cm', value: '160 cm'},
  {name: '175 cm', value: '160 cm'},
  {name: '176 cm', value: '160 cm'},
  {name: '177 cm', value: '160 cm'},
  {name: '178 cm', value: '160 cm'},
  {name: '179 cm', value: '160 cm'},
  {name: '180 cm', value: '160 cm'},
  {name: '181 cm', value: '160 cm'},
  {name: '182 cm', value: '182 cm'},
  {name: '183 cm', value: '183 cm'},
  {name: '184 cm', value: '184 cm'},
  {name: '185 cm', value: '185 cm'},
];

const HeightSelectSheet = (props: any) => {
  const close = () => {
    SheetManager.hide(SHEETS.HeightSelectSheet);
  };

  return (
    <ActionSheet id={props.sheetId} gestureEnabled={false}>
      <View style={{height: 600}}>
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

export default HeightSelectSheet;
