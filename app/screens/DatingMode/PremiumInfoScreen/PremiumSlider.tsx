import {
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  View,
} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
import {FlatList} from 'react-native';
import {RegularText} from '../../../components/MyText';
import {COLORS} from '../../../styles';
import {SvgProps} from 'react-native-svg';
import ONESVG from '../../../../assets/images/preimum/ONE.svg';
import TWOSVG from '../../../../assets/images/preimum/TWO.svg';
import THREESVG from '../../../../assets/images/preimum/THREE.svg';
import FOURSVG from '../../../../assets/images/preimum/FOUR.svg';
import FIVESVG from '../../../../assets/images/svg/help.svg';
import SIXSVG from '../../../../assets/images/preimum/SIX.svg';

type CardType = {
  Component: React.FC<SvgProps>;
  title: string;
  des: string;
};
const data: CardType[] = [
  {
    Component: ONESVG,
    title: 'Swipe around the world!',
    des: 'passport to anywhere!',
  },
  {
    Component: TWOSVG,
    title: 'Get 1 free Boost every month.',
    des: 'Skip the queue & get more matches!',
  },
  {
    Component: THREESVG,
    title: 'Unlimeted Rewinds',
    des: 'Go back and swipe again!',
  },
  {
    Component: FOURSVG,
    title: 'Unlimeted Likes',
    des: 'Swipe right as much as you want',
  },
  {
    Component: FIVESVG,
    title: '5 Super Likes every day',
    des: "You're 3 times more likely to get a match!",
  },
  {
    Component: SIXSVG,
    title: 'Turn Off Ads',
    des: 'Skip the queue & get more matches!',
  },
];

const {width} = Dimensions.get('window');

const Dot = ({active}: {active?: boolean}) => (
  <View
    style={{
      width: active ? 10 : 8,
      height: active ? 10 : 8,
      borderRadius: active ? 10 : 8,
      backgroundColor: active ? COLORS.purple : 'lightgrey',
    }}
  />
);

const PremiumSlider = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const listRef = useRef<FlatList>(null);

  const onScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const slideSize = event.nativeEvent.layoutMeasurement.width;
      const index = event.nativeEvent.contentOffset.x / slideSize;
      const roundIndex = Math.abs(Math.round(index));
      if (activeIndex !== roundIndex) {
        setActiveIndex(roundIndex);
      }
    },
    [],
  );

  return (
    <View style={styles.container}>
      <FlatList
        ref={listRef}
        data={data}
        keyExtractor={(item: CardType) => item.title}
        horizontal
        pagingEnabled
        onScroll={onScroll}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}: {item: CardType}) => {
          return (
            <View style={{width: width}}>
              <View style={styles.imageContainer}>
                {<item.Component width={width} />}
              </View>
              <View style={styles.textContainer}>
                <RegularText style={styles.title}>{item.title}</RegularText>
                <RegularText style={styles.des}>{item.des}</RegularText>
              </View>
            </View>
          );
        }}
      />
      <View style={styles.dotContainer}>
        {data.map((_, idx) => (
          <Dot active={activeIndex === idx} />
        ))}
      </View>
    </View>
  );
};

export default PremiumSlider;

const styles = StyleSheet.create({
  container: {},
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  title: {
    fontSize: 20,
  },
  des: {
    color: COLORS.grey,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    gap: 20,
  },
  dotContainer: {
    flexDirection: 'row',
    gap: 5,
    alignSelf: 'center',
    alignItems: 'center',
  },
});
