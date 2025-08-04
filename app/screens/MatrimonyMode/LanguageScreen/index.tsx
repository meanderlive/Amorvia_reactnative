import {View, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import MainLayout from '../../../components/MainLayout';
import {COLORS} from '../../../styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {MediumText, RegularTextG} from '../../../components/MyText';

const data = [
  {id: 1, title: 'English (US)'},
  {id: 2, title: 'English (UK)'},
  {id: 3, title: 'Mandarin'},
  {id: 4, title: 'Hindi'},
  {id: 5, title: 'French'},
  {id: 6, title: 'Arabic'},
  {id: 7, title: 'Bengali'},
  {id: 8, title: 'Russian'},
  {id: 9, title: 'Indonesia'},
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

const LanguageScreen = () => {
  const navigation = useNavigation();
  const [selectedId, setSelectedId] = React.useState<null | number>(null);
  return (
    <MainLayout title="Language" onBack={navigation.goBack}>
      <View style={{flex: 1, marginHorizontal: 15}}>
        <MediumText bold>Language</MediumText>
        {data.map(i => {
          return (
            <Item
              onSelect={() => setSelectedId(i.id)}
              title={i.title}
              isSelected={i.id === selectedId}
            />
          );
        })}
      </View>
    </MainLayout>
  );
};

export default LanguageScreen;

const styles = StyleSheet.create({
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
  },
});
