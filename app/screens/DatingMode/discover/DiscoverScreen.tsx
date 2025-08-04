import {View, StyleSheet, Dimensions, Image} from 'react-native';
import React, {useState} from 'react';
import SwipeCards from '../../../components/SwipeCard/Main';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {MediumText} from '../../../components/MyText';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {COLORS} from '../../../styles';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {DiscoverStackParams} from '../../../navigation/types';
import MainLayout from '../../../components/MainLayout';
import ListView from './ListView';

const {width} = Dimensions.get('screen');
const DiscoverScreen = () => {
  React.useEffect(() => {}, []);
  const navigation =
    useNavigation<NativeStackNavigationProp<DiscoverStackParams>>();

  const [view, setView] = useState(1);
  const [isMatchedModalOpen, setIsMatchedModalOpen] = useState(false);
  return (
    <MainLayout>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: -10,
          marginHorizontal: 20,
        }}>
        <MaterialCommunityIcons
          onPress={() => navigation.navigate('Error')}
          name="reload"
          size={30}
          color={COLORS.black}
        />

        <MediumText bold style={{marginLeft: 20}}>
          Discover
        </MediumText>

        <View style={{flexDirection: 'row', alignItems: 'center', gap: 20}}>
          {view === 1 ? (
            <SimpleLineIcons
              onPress={() => setView(2)}
              name="grid"
              size={24}
              color="black"
            />
          ) : null}

          {view === 2 ? (
            <MaterialIcons
              onPress={() => setView(1)}
              name="filter-list"
              size={24}
              color="black"
            />
          ) : null}

          <Entypo
            onPress={() => navigation.navigate('Filter')}
            name="sound-mix"
            size={24}
            color="black"
          />
        </View>
      </View>

      {/* {view === 1 ? <CardView /> : null} */}
      {view === 2 ? <ListView /> : null}

      {view === 1 ? <SwipeCards /> : null}

      {view === 1 ? (
        <View style={styles.downBgContainer}>
          <Image
            source={require('../../../../assets/images/DownBg.png')}
            style={{height: 500, width: '100%'}}
          />
        </View>
      ) : null}
    </MainLayout>
  );
};

export default DiscoverScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  text: {
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: 'transparent',
  },
  downBgContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: width,
    // zIndex: -1,
  },
});
