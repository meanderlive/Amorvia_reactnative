import React from 'react';
import ActionSheet, {SheetManager} from 'react-native-actions-sheet';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {MediumText, RegularTextG} from '../components/MyText';
import {SHEETS} from './sheets';
import AntDesign from 'react-native-vector-icons/AntDesign';
import PrimaryBtn from '../components/PrimaryBtn';

const SendGiftSheet = (props: any) => {
  const close = () => {
    SheetManager.hide(SHEETS.SendGiftSheet);
  };
  const [active, setActive] = React.useState(1);

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
          <View style={{width: 50}} />
          <MediumText bold>Send a gift</MediumText>
          <TouchableOpacity
            onPress={() => {
              SheetManager.show(SHEETS.AddBalanceSheet);
            }}
            style={{flexDirection: 'row'}}>
            <AntDesign name="star" size={20} color="#F9A000" />
            <RegularTextG>600</RegularTextG>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 20,
          }}>
          <TouchableOpacity
            onPress={() => {
              setActive(1);
            }}
            style={[
              styles.giftView,
              {backgroundColor: active === 1 ? '#EFEFEF' : 'transparent'},
            ]}>
            <Image source={require('../../assets/images/gifts/gift1.png')} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setActive(2);
            }}
            style={[
              styles.giftView,
              {backgroundColor: active === 2 ? '#EFEFEF' : 'transparent'},
            ]}>
            <Image source={require('../../assets/images/gifts/gift2.png')} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setActive(3);
            }}
            style={[
              styles.giftView,
              {backgroundColor: active === 3 ? '#EFEFEF' : 'transparent'},
            ]}>
            <Image source={require('../../assets/images/gifts/gift3.png')} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setActive(4);
            }}
            style={[
              styles.giftView,
              {backgroundColor: active === 4 ? '#EFEFEF' : 'transparent'},
            ]}>
            <Image source={require('../../assets/images/gifts/gift4.png')} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 15,
            marginHorizontal: 20,
          }}>
          <TouchableOpacity
            onPress={() => {
              setActive(5);
            }}
            style={[
              styles.giftView,
              {backgroundColor: active === 5 ? '#EFEFEF' : 'transparent'},
            ]}>
            <Image source={require('../../assets/images/gifts/gift5.png')} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setActive(6);
            }}
            style={[
              styles.giftView,
              {backgroundColor: active === 6 ? '#EFEFEF' : 'transparent'},
            ]}>
            <Image source={require('../../assets/images/gifts/gift6.png')} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setActive(7);
            }}
            style={[
              styles.giftView,
              {backgroundColor: active === 7 ? '#EFEFEF' : 'transparent'},
            ]}>
            <Image source={require('../../assets/images/gifts/gift7.png')} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setActive(8);
            }}
            style={[
              styles.giftView,
              {backgroundColor: active === 8 ? '#EFEFEF' : 'transparent'},
            ]}>
            <Image source={require('../../assets/images/gifts/gift8.png')} />
          </TouchableOpacity>
        </View>
        <PrimaryBtn
          onPress={close}
          containerStyle={{marginHorizontal: 30, marginTop: 30}}
          text="Send"
        />
      </View>
    </ActionSheet>
  );
};

export default SendGiftSheet;

const styles = StyleSheet.create({
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 25,
    paddingHorizontal: 20,
  },
  header: {
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  giftView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '25%',

    paddingTop: 15,
    borderRadius: 15,
    height: 120,
  },
});
