import {
  View,
  FlatList,
  Dimensions,
  NativeSyntheticEvent,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useState} from 'react';
import BoardOne from './BoardOne';
import BoardTwo from './BoardTwo';
import BoardThree from './BoardThree';
import {NativeScrollEvent} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../../styles';
import EllipseSvg from '../../../assets/images/svg/Ellipse.svg';
import {MediumText, RegularText} from '../../components/MyText';
import AntDesign from 'react-native-vector-icons/AntDesign';
const {width} = Dimensions.get('window');

const {width: WIDTH, height: HEIGHT} = Dimensions.get('window');
const OnBoardingScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  let listRef = useRef<any>(null);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = event.nativeEvent.contentOffset.x / slideSize;
    const roundIndex = Math.round(index);
    setActiveIndex(roundIndex);
  };

  const handleNext = () => {
    if (activeIndex >= 2) return;
    listRef?.current?.scrollToIndex({index: activeIndex + 1}, 3000);
  };

  const handlePrev = () => {
    if (activeIndex <= 0) return;
    listRef?.current?.scrollToIndex({index: activeIndex - 1}, 3000);
  };

  const handleScrollToIndex = (index: number) => {
    listRef?.current?.scrollToIndex({index}, 3000);
  };
  const handleSkip = () => {
    listRef?.current?.scrollToIndex({index: 2}, 3000);
  };
  const navigation = useNavigation<any>();

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.bgContainer}>
        <EllipseSvg width={480} height={420} />
      </View>
      <FlatList
        contentContainerStyle={{}}
        ref={listRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        initialScrollIndex={0}
        pagingEnabled
        onScroll={handleScroll}
        data={['one', 'two', 'three']}
        renderItem={({item}) => {
          return (
            <View style={{flex: 1}}>
              {item === 'one' && (
                <BoardOne handleSkip={handleSkip} handleNext={handleNext} />
              )}
              {item === 'two' && (
                <BoardTwo handleSkip={handleSkip} handleNext={handleNext} />
              )}
              {item === 'three' && (
                <BoardThree handleNext={handleNext} handleSkip={() => {}} />
              )}
            </View>
          );
        }}
      />
      {activeIndex === 2 ? null : (
        <TouchableOpacity
          onPress={() => navigation.navigate('ModeSelect')}
          style={{
            backgroundColor: COLORS.primary,
            marginBottom: 60,
            alignItems: 'center',
            height: 50,
            width: 100,
            borderRadius: 50,
            justifyContent: 'center',
            alignSelf: 'flex-end',
            marginRight: 20,
            flexDirection: 'row',
          }}>
          <RegularText bold style={{color: 'white', marginBottom: 2}}>
            Skip
          </RegularText>
          <AntDesign name="arrowright" size={22} color="white" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default OnBoardingScreen;
const styles = StyleSheet.create({
  bgContainer: {
    position: 'absolute',
    top: -30,
    right: -5,
  },
  svgContainer: {
    alignItems: 'center',
  },
});
