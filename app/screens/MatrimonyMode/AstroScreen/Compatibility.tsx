import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {COLORS} from '../../../styles';
import {RegularText, SmallText} from '../../../components/MyText';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import DestinySvg from '../../../../assets/logo/destiny.svg';
import CompatibilitySvg from '../../../../assets/logo/conjungtion.svg';

const Compatibility = () => {
  return (
    <View>
      <Text>Astro Compatibility</Text>
      {/* {ROW1} */}
      <View style={styles.row}>
        <View style={{alignItems: 'center'}}>
          <View>
            <View style={styles.iconView}>
              <SimpleLineIcons
                name="briefcase"
                size={24}
                color={COLORS.primary}
              />
            </View>
            <AnimatedCircularProgress
              size={70}
              width={3}
              fill={25}
              tintColor={COLORS.primary}
              rotation={0}
              onAnimationComplete={() => console.log('onAnimationComplete')}
              backgroundColor="lightgray"
            />
          </View>
          <SmallText style={{color: 'gray', marginTop: 10}}>Work</SmallText>
          <RegularText>0/1</RegularText>
        </View>

        <View style={{alignItems: 'center'}}>
          <View>
            <View style={styles.iconView}>
              <FontAwesome name="flash" size={24} color={'#FFB21D'} />
            </View>
            <AnimatedCircularProgress
              size={70}
              width={3}
              fill={45}
              rotation={0}
              tintColor="#FFB21D"
              onAnimationComplete={() => console.log('onAnimationComplete')}
              backgroundColor="lightgray"
            />
          </View>
          <SmallText style={{color: 'gray', marginTop: 10}}>
            Influence
          </SmallText>
          <RegularText>1/2</RegularText>
        </View>

        <View style={{alignItems: 'center'}}>
          <View>
            <View style={styles.iconView}>
              <DestinySvg />
            </View>
            <AnimatedCircularProgress
              size={70}
              width={3}
              fill={55}
              rotation={320}
              tintColor="#AF6AF3"
              onAnimationComplete={() => console.log('onAnimationComplete')}
              backgroundColor="lightgray"
            />
          </View>
          <SmallText style={{color: 'gray', marginTop: 10}}>Destiny</SmallText>
          <RegularText>1.5/3</RegularText>
        </View>
      </View>
      {/* {ROW2} */}
      <View style={styles.row}>
        <View style={{alignItems: 'center'}}>
          <View>
            <View style={styles.iconView}>
              <SimpleLineIcons name="briefcase" size={24} color={'#02BC49'} />
            </View>
            <AnimatedCircularProgress
              size={70}
              width={3}
              fill={50}
              tintColor={'#02BC49'}
              rotation={270}
              onAnimationComplete={() => console.log('onAnimationComplete')}
              backgroundColor="lightgray"
            />
          </View>
          <SmallText style={{color: 'gray', marginTop: 10}}>
            Mentality
          </SmallText>
          <RegularText>0/1</RegularText>
        </View>

        <View style={{alignItems: 'center'}}>
          <View>
            <View style={styles.iconView}>
              <CompatibilitySvg />
            </View>
            <AnimatedCircularProgress
              size={70}
              width={3}
              fill={45}
              rotation={125}
              tintColor="#5C6DFF"
              onAnimationComplete={() => console.log('onAnimationComplete')}
              backgroundColor="lightgray"
            />
          </View>
          <SmallText style={{color: 'gray', marginTop: 10}}>
            Compatibiltiy
          </SmallText>
          <RegularText>0.5/5</RegularText>
        </View>

        <View style={{alignItems: 'center'}}>
          <View>
            <View style={styles.iconView}>
              <Fontisto name="pie-chart-1" size={24} color={'#FFB21D'} />
            </View>
            <AnimatedCircularProgress
              size={70}
              width={3}
              fill={100}
              rotation={0}
              tintColor="#FFB21D"
              onAnimationComplete={() => console.log('onAnimationComplete')}
              backgroundColor="lightgray"
            />
          </View>
          <SmallText style={{color: 'gray', marginTop: 10}}>Destiny</SmallText>
          <RegularText>6/6</RegularText>
        </View>
      </View>
      {/* {ROW3} */}
      <View style={styles.row}>
        <View style={{alignItems: 'center'}}>
          <View>
            <View style={styles.iconView}>
              <AntDesign name="heart" size={22} color={COLORS.primary} />
            </View>
            <AnimatedCircularProgress
              size={70}
              width={3}
              fill={100}
              tintColor={COLORS.primary}
              rotation={0}
              onAnimationComplete={() => console.log('onAnimationComplete')}
              backgroundColor="lightgray"
            />
          </View>
          <SmallText style={{color: 'gray', marginTop: 10}}>Love</SmallText>
          <RegularText>7/7</RegularText>
        </View>

        <View style={{alignItems: 'center'}}>
          <View>
            <View style={styles.iconView}>
              <FontAwesome5
                name="briefcase-medical"
                size={22}
                color="#2CB3FF"
              />
            </View>
            <AnimatedCircularProgress
              size={70}
              width={3}
              fill={100}
              rotation={0}
              tintColor="#2CB3FF"
              onAnimationComplete={() => console.log('onAnimationComplete')}
              backgroundColor="lightgray"
            />
          </View>
          <SmallText style={{color: 'gray', marginTop: 10}}>Health</SmallText>
          <RegularText>8/8</RegularText>
        </View>

        <AnimatedCircularProgress
          size={70}
          width={0}
          fill={25}
          tintColor={COLORS.primary}
          rotation={0}
          onAnimationComplete={() => console.log('onAnimationComplete')}
          backgroundColor="lightgray"
        />
      </View>

      {/* {} */}
    </View>
  );
};

export default Compatibility;

const styles = StyleSheet.create({
  iconView: {
    position: 'absolute',
    zIndex: 1,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
    paddingHorizontal: 15,
  },
});
