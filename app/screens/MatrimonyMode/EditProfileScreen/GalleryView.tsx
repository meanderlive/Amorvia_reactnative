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

const GalleryView = ({ user }: { user: any }) => {
  // If user.gallery is an array of image URLs, use it. Otherwise, fallback to default images.
  const galleryData = user?.gallery && user.gallery.length > 0
    ? user.gallery.map((img: string) => ({ img }))
    : [
        { img: require('../../../components/SwipeCard/assets/img2.jpg') },
        { img: require('../../../components/SwipeCard/assets/img1.jpg') },
        { img: require('../../../components/SwipeCard/assets/img4.jpg') },
        { img: require('../../../components/SwipeCard/assets/img3.jpg') },
      ];
  return (
    <View style={{marginTop: 20}}>
      <FlatList
        style={{ paddingHorizontal: 20 }}
        data={galleryData}
        numColumns={3}
        renderItem={({item}) => (
          <View style={{ margin: 5, flex: 1 / 3, height: 125, backgroundColor: 'gray', borderRadius: 15 }}>
            <Image
              style={{height: '100%', width: '100%', borderRadius: 15}}
              source={typeof item.img === 'string' ? { uri: item.img } : item.img}
            />
          </View>
        )}
      />
    </View>
  );
};

export default GalleryView;
