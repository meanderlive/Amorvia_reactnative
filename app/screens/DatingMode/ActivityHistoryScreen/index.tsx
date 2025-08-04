import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
import React from 'react';
import MainLayout from '../../../components/MainLayout';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ProfileStackParams} from '../../../navigation/types';
import {TouchableOpacity} from 'react-native';
import {MediumText, RegularText} from '../../../components/MyText';
const data = [
  {
    text: 'You have started conversation with Eliza William',
  },
  {
    text: 'You’ve matched with Eliza Williams',
  },
  {
    text: 'Visited Eliza Williams’s profile',
  },
  {
    text: 'Visited Eliza Williams’s profile',
  },
  {
    text: 'Sent Message to Eliza Williams',
  },
  {
    text: 'Received Message from Eliza Williams',
  },
  {
    text: 'Scheduled date with Eliza Williams 20 Dec 2023 at 2:00  PM',
  },
];

const ActivityHistoryScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<ProfileStackParams>>();
  return (
    <MainLayout onBack={navigation.goBack} title="Activity History">
      <ScrollView style={{marginHorizontal: 20}}>
        <View style={{marginTop: 20}}></View>
        <MediumText bold>Today</MediumText>
        <View style={{marginTop: 20}}></View>

        {/* {ACCOUNT SETTINGS} */}
        <FlatList
          data={data}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={styles.row}>
                <View style={styles.circle}>
                  <Image source={require('../../../../assets/images/M.png')} />
                </View>
                <View style={{gap: 10, flex: 1}}>
                  <RegularText style={{}}>{item.text}</RegularText>
                  <Text>15/12/2023</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </ScrollView>
    </MainLayout>
  );
};

export default ActivityHistoryScreen;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    // borderBottomColor: 'black',
    borderBottomColor: 'rgba(0,0,0,0.06)',
    paddingBottom: 10,
    marginBottom: 20,
  },
  circle: {
    height: 50,
    width: 50,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ED588D',
  },
});
