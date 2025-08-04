import React from 'react';
import ActionSheet, {SheetManager} from 'react-native-actions-sheet';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {
  BigText,
  MediumText,
  RegularText,
  RegularTextG,
} from '../components/MyText';
import {SHEETS} from './sheets';
import AntDesign from 'react-native-vector-icons/AntDesign';
import PrimaryBtn from '../components/PrimaryBtn';
import {COLORS} from '../styles';

const data = [
  {id: 1, star: '45', price: '$0.99'},
  {id: 2, star: '140', price: '$2.99'},
  {id: 3, star: '300', price: '$5.99'},
];

const Item = ({
  onSelect,
  isSelected,
  star,
  price,
}: {
  star: string;
  price: string;
  onSelect: () => void;
  isSelected: boolean;
}) => {
  return (
    <>
      <TouchableOpacity
        onPress={onSelect}
        style={[
          styles.container2,
          {borderColor: isSelected ? COLORS.primary : '#EFEFEF'},
        ]}>
        <View style={[styles.balance, {gap: 5}]}>
          <AntDesign name="star" size={20} color="#F9A000" />
          <RegularText>{star}</RegularText>
        </View>
        <RegularText>{price}</RegularText>
      </TouchableOpacity>
    </>
  );
};

const AddBalanceSheet = (props: any) => {
  const close = () => {
    SheetManager.hide(SHEETS.AddBalanceSheet);
  };
  const [selectedId, setSelectedId] = React.useState<null | number>(1);

  return (
    <ActionSheet
      containerStyle={{
        height: '50%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
      }}
      id={props.sheetId}
      gestureEnabled>
      <View>
        <View style={styles.header}>
          <MediumText bold>Add to balance</MediumText>
        </View>
        <View style={styles.balance}>
          <AntDesign name="star" size={30} color="#F9A000" />
          <BigText>600</BigText>
        </View>
        {data.map(i => {
          return (
            <Item
              onSelect={() => setSelectedId(i.id)}
              star={i.star}
              price={i.price}
              isSelected={i.id === selectedId}
            />
          );
        })}
        <PrimaryBtn
          onPress={() => {
            SheetManager.hide(SHEETS.SendGiftSheet), close;
          }}
          containerStyle={{marginHorizontal: 30, marginTop: 20}}
          text="Pay Now"
        />
      </View>
    </ActionSheet>
  );
};

export default AddBalanceSheet;

const styles = StyleSheet.create({
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
    paddingHorizontal: 20,
    backgroundColor: '#EFEFEF',
    borderRadius: 15,
    marginHorizontal: 20,
    paddingVertical: 15,
    borderWidth: 2,
  },
  header: {
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    paddingBottom: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  balance: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    gap: 10,
  },
});
