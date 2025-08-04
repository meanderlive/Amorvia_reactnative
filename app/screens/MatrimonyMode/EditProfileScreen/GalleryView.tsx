import {View, Image, FlatList} from 'react-native';
import React from 'react';

const data = [
  {
    img: require('../../../components/SwipeCard/assets/img2.jpg'),
  },
  {
    img: require('../../../components/SwipeCard/assets/img1.jpg'),
  },
  {
    img: require('../../../components/SwipeCard/assets/img4.jpg'),
  },
  {
    img: require('../../../components/SwipeCard/assets/img3.jpg'),
  },
  {
    img: require('../../../components/SwipeCard/assets/img2.jpg'),
  },
  {
    img: require('../../../components/SwipeCard/assets/img1.jpg'),
  },
  {
    img: require('../../../components/SwipeCard/assets/img4.jpg'),
  },
  {
    img: require('../../../components/SwipeCard/assets/img3.jpg'),
  },
];

const GalleryView = () => {
  return (
    <View style={{marginTop: 20}}>
      <FlatList
        style={{
          paddingHorizontal: 20,
        }}
        data={data}
        numColumns={3}
        renderItem={({item}) => {
          return (
            <View
              style={{
                margin: 5,
                flex: 1 / 3,
                height: 125,
                backgroundColor: 'gray',
                borderRadius: 15,
              }}>
              <Image
                style={{height: '100%', width: '100%', borderRadius: 15}}
                source={item.img}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

export default GalleryView;
