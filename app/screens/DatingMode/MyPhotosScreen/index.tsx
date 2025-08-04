import {View, FlatList} from 'react-native';
import React from 'react';
import {RegularText} from '../../../components/MyText';
import MainLayout from '../../../components/MainLayout';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../../../styles';

const MyPhotosScreen = () => {
  const navigation = useNavigation();
  return (
    <MainLayout title="My Photos" onBack={navigation.goBack}>
      <RegularText style={{textAlign: 'center', color: COLORS.grey}}>
        Use Drag'n' Drop to sort the photos!
      </RegularText>

      <View style={{marginHorizontal: 20, marginTop: 15}}>
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
          numColumns={3}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  margin: 5,
                  flex: 1 / 3,
                  height: 100,
                  backgroundColor: 'lightgray',
                  borderRadius: 15,
                }}></View>
            );
          }}
        />
      </View>
    </MainLayout>
  );
};

export default MyPhotosScreen;
