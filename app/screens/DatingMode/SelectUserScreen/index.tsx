import {View, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../../../styles';
import {RegularText, SmallText} from '../../../components/MyText';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {Image} from 'react-native';
import MainLayout from '../../../components/MainLayout';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {EventStackParams} from '../../../navigation/types';

const data = [
  {id: 1, img: require('../../../components/SwipeCard/assets/img2.jpg')},
  {id: 2, img: require('../../../components/SwipeCard/assets/img1.jpg')},
  {id: 3, img: require('../../../components/SwipeCard/assets/img4.jpg')},
  {id: 4, img: require('../../../components/SwipeCard/assets/img3.jpg')},
];

const Item = ({name, img}: {name: string; img: {uri: string}}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<EventStackParams>>();
  const params = useRoute<RouteProp<EventStackParams>>().params;

  return (
    <View
      style={{
        flex: 1 / 2,
        height: 225,
        margin: 7,
        borderRadius: 20,
        marginVertical: 10,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }}>
      <View
        style={{
          height: 130,
          borderRadius: 20,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          backgroundColor: 'lightgray',
        }}>
        <Image
          style={{
            height: '100%',
            width: '100%',
            borderRadius: 20,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            resizeMode: 'cover',
          }}
          source={require('../../../components/SwipeCard/assets/img2.jpg')}
        />
        {/*  */}
      </View>
      <View
        style={{
          flex: 1,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          marginLeft: 10,
        }}>
        <SmallText style={{marginTop: 8}}>29 yrs, 6'0 English</SmallText>
        <SmallText>California United States</SmallText>
        <TouchableOpacity
          //@ts-ignore
          onPress={() =>
            navigation.navigate('ScheduleDate', {isReSchedule: false})
          }
          style={styles.btn}>
          <AntDesign name="check" size={15} color="white" />
          <SmallText style={{color: 'white'}}>Connect</SmallText>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const SelectUserScreen = () => {
  const params = useRoute<RouteProp<EventStackParams>>().params;

  const navigation =
    useNavigation<NativeStackNavigationProp<EventStackParams>>();
  return (
    <MainLayout title="Events" onBack={navigation.goBack}>
      <View style={{paddingHorizontal: 15, backgroundColor: 'white'}}>
        <FlatList
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
          style={{marginTop: 20, marginBottom: 50}}
          data={data}
          numColumns={2}
          renderItem={({item}: any) => {
            return <Item name={item.name} img={item.img} />;
          }}
        />
      </View>
    </MainLayout>
  );
};

export default SelectUserScreen;

const styles = StyleSheet.create({
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 6,
    paddingHorizontal: 20,
    backgroundColor: COLORS.primary,
    borderRadius: 30,
    marginTop: 10,
    gap: 5,
  },
});
