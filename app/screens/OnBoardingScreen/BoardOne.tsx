import {View, Dimensions, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import {BigText, MediumText, Text30} from '../../components/MyText';
import {COLORS} from '../../styles';
import OB1SVG from '../../../assets/images/svg/OB1.svg';
const {width} = Dimensions.get('window');

type Props = {
  handleSkip: () => void;
  handleNext: () => void;
};

const BoardOne = ({handleSkip, handleNext}: Props) => {
  return (
    <SafeAreaView style={{width}}>
      <Text30
        style={{
          textAlign: 'center',
          margin: 20,
          color: COLORS.white,
          marginBottom: 40,
        }}
        bold>
        Discover People
      </Text30>
      <View style={styles.svgContainer}>
        <OB1SVG />
      </View>
      <View
        style={{
          width: width,
          marginTop: 20,
        }}>
        <View
          style={{
            justifyContent: 'flex-end',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 10,
            }}>
            <View
              style={{
                height: 9,
                width: 9,
                borderRadius: 10,
                backgroundColor: COLORS.secondary,
              }}></View>
            <View
              style={{
                height: 9,
                width: 9,
                borderRadius: 10,
                backgroundColor: 'lightgray',
              }}></View>
            <View
              style={{
                height: 9,
                width: 9,
                borderRadius: 10,
                backgroundColor: 'lightgray',
              }}></View>
          </View>
          <MediumText
            style={{
              textAlign: 'center',
              marginBottom: 50,
              fontSize: 20,
              color: 'gray',
              width: 250,
              alignSelf: 'center',
              marginTop: 20,
            }}>
            Find like minded people to connect with
          </MediumText>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BoardOne;

const styles = StyleSheet.create({
  bgContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  svgContainer: {
    alignItems: 'center',
  },
});
