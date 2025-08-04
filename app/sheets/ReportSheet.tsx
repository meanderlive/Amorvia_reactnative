import React from 'react';
import ActionSheet, {SheetManager} from 'react-native-actions-sheet';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {
  BigText,
  MediumText,
  RegularText,
  RegularTextG,
  SmallText,
} from '../components/MyText';
import {COLORS} from '../styles';
import {SHEETS} from './sheets';

const data = [
  {id: 1, title: 'Harassment & Abuse'},
  {id: 2, title: 'Fake or Suspicious Profiles'},
  {id: 3, title: 'Scams & Fraudulent Activities'},
  {id: 4, title: 'Review Process & Action'},
];

const Item = ({
  title,
  onSelect,
  isSelected,
}: {
  title: string;
  onSelect: () => void;
  isSelected: boolean;
}) => {
  return (
    <>
      <TouchableOpacity
        onPress={onSelect}
        style={[
          styles.container2,
          {borderColor: isSelected ? COLORS.primary : 'gray'},
        ]}>
        <RegularTextG style={{flex: 1}}>{title}</RegularTextG>
        <MaterialIcons
          name={isSelected ? 'radio-button-on' : 'radio-button-off'}
          size={22}
          color={isSelected ? COLORS.primary : '#BBBBBB'}
        />
      </TouchableOpacity>
    </>
  );
};

const ReportSheet = (props: any) => {
  const [selectedId, setSelectedId] = React.useState<null | number>(1);
  const close = () => {
    SheetManager.hide(SHEETS.ReportSheet);
  };
  return (
    <ActionSheet
      containerStyle={{
        height: '45%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
      }}
      id={props.sheetId}
      gestureEnabled>
      <View>
        <View style={{alignItems: 'center', marginBottom: 15}}>
          <BigText style={{fontSize: 23, marginVertical: 10}}>Report </BigText>
          <RegularTextG>Why are you reporting this profile?</RegularTextG>
        </View>
        {data.map(i => {
          return (
            <Item
              onSelect={() => setSelectedId(i.id)}
              title={i.title}
              isSelected={i.id === selectedId}
            />
          );
        })}

        <TouchableOpacity
          onPress={close}
          style={{
            alignItems: 'center',
            marginTop: 30,
          }}>
          <MediumText style={{color: COLORS.primary}}>Done</MediumText>
        </TouchableOpacity>
      </View>
    </ActionSheet>
  );
};

export default ReportSheet;

const styles = StyleSheet.create({
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 25,
  },
});
