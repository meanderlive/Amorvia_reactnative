import {View, TouchableOpacity, FlatList, Image} from 'react-native';
import React from 'react';
import {COLORS} from '../../../styles';
import {RegularText} from '../../../components/MyText';
import MainLayout from '../../../components/MainLayout';

const list = [
  {
    name: '',
    isActive: true,
    uri: 'https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    name: '',
    uri: 'https://images.unsplash.com/photo-1628015081036-0747ec8f077a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    isActive: true,
  },
  {
    name: '',
    uri: 'https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGdpcmx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
    isActive: false,
  },
  {
    name: '',
    uri: 'https://plus.unsplash.com/premium_photo-1673792686302-7555a74de717?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z2lybHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    isActive: true,
  },
];

const ActivityScreen = () => {
  return (
    <MainLayout>
      <View
        style={{
          width: '100%',
          alignSelf: 'center',
          height: 50,
          flexDirection: 'row',
          borderRadius: 30,
          marginBottom: 40,
          marginTop: 10,
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          style={{
            width: '40%',
            borderColor: COLORS.primary,
            borderWidth: 1,
            backgroundColor: COLORS.primary,
            borderTopLeftRadius: 30,
            borderBottomLeftRadius: 30,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <RegularText style={{color: 'white'}}>Likes</RegularText>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '40%',
            borderTopEndRadius: 30,
            borderColor: COLORS.grey,
            borderLeftWidth: 0,
            borderWidth: 1,
            borderBottomRightRadius: 30,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <RegularText style={{color: COLORS.grey}}>Disliked</RegularText>
        </TouchableOpacity>
      </View>

      <FlatList
        data={list}
        numColumns={2}
        contentContainerStyle={{padding: 10}}
        renderItem={({item}) => {
          return (
            <View
              style={{
                flex: 1 / 2,
                height: 200,
                backgroundColor: 'white',
                margin: 7,
                borderRadius: 20,
                marginVertical: 10,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.23,
                shadowRadius: 2.62,
                elevation: 4,
              }}>
              <View
                style={{
                  height: '80%',
                  backgroundColor: 'lightgray',
                  borderTopRightRadius: 20,
                  borderTopLeftRadius: 20,
                  overflow: 'hidden',
                }}>
                <Image
                  source={{uri: item.uri}}
                  style={{
                    resizeMode: 'cover',
                    width: '100%',
                    borderTopRightRadius: 20,
                    borderTopLeftRadius: 20,
                    height: '100%',
                  }}
                />
              </View>
              <View
                style={{flexDirection: 'row', flex: 1, alignItems: 'center'}}>
                <View
                  style={{
                    height: 8,
                    width: 8,
                    borderRadius: 5,
                    backgroundColor: item.isActive ? 'lightgreen' : 'tomato',
                    marginHorizontal: 10,
                  }}></View>
                <RegularText style={{fontSize: 13}}>
                  Recently Active
                </RegularText>
              </View>
            </View>
          );
        }}
      />
    </MainLayout>
  );
};

export default ActivityScreen;
