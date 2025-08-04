import {View, Dimensions, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import {BigText, MediumText, Text30} from '../../components/MyText';
import {COLORS} from '../../styles';
import MainLayout from '../../components/MainLayout';
import OB3SVG from '../../../assets/images/svg/OB3.svg';
import EllipseSvg from '../../../assets/images/svg/Ellipse.svg';
import PrimaryBtn from '../../components/PrimaryBtn';
import {useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../../navigation/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
const {width} = Dimensions.get('window');

type Props = {
  handleSkip: () => void;
  handleNext: () => void;
};

const BoardOne = ({handleSkip, handleNext}: Props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <SafeAreaView>
      <Text30
        style={{
          textAlign: 'center',
          margin: 20,
          color: COLORS.white,
          marginBottom: 40,
        }}
        bold>
        Chat with them
      </Text30>
      <View style={styles.svgContainer}>
        <OB3SVG />
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
                backgroundColor: 'lightgray',
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
                backgroundColor: COLORS.secondary,
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
            Chat with your favourite people who you connected with
          </MediumText>
        </View>
        <PrimaryBtn
          onPress={() => navigation.navigate('ModeSelect')}
          text={'Done'}
          containerStyle={{
            position: 'absolute',
            bottom: -20,
            left: 0,
            right: 0,
            marginHorizontal: 20,
          }}
        />
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
