import {View, ScrollView, StyleSheet, Image, Text} from 'react-native';
import React from 'react';
import {MediumText, RegularTextG} from '../../../components/MyText';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {DiscoverStackParams} from '../../../navigation/types';

const CompatibilityResultScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<DiscoverStackParams>>();

  return (
    <View style={{flex: 1}}>
      {/* {HEADER} */}
      <View
        style={{
          alignItems: 'flex-end',
          marginTop: 10,
          marginRight: 10,
        }}>
        <Entypo
          onPress={() => navigation.goBack()}
          name="cross"
          size={35}
          color="black"
        />
      </View>

      <ScrollView style={{flex: 1, padding: 15}}>
        {/* {} */}
        <View style={{paddingBottom: 30}}>
          <Image
            style={{
              alignSelf: 'center',
              height: 150,
              width: 150,
              marginBottom: 50,
            }}
            source={require('../../../../assets/images/circular.png')}
          />
          <MediumText bold style={{fontSize: 20}}>
            Things you have common
          </MediumText>

          <View style={{flexDirection: 'row', marginVertical: 20}}>
            <Text style={{fontSize: 18}}>1. </Text>
            <Text style={{fontSize: 18}}>
              You both agree that when it comes to love, it always requires hard
              work!
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginBottom: 50}}>
            <Text style={{fontSize: 18}}>2. </Text>
            <Text style={{fontSize: 18}}>
              You both value work-life balance over success!
            </Text>
          </View>

          <MediumText bold> Details</MediumText>
          <Text style={{fontSize: 18}}>
            Your score suggest that there is likely a low-moderate level of
            potential compatibility between you and this person when it comes to
            several important elements of successful relationships. It is a long
            established fact that a reader will be distracted by the readable
            content of a page when looking at its layout. The point of using
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content here', making it
            look like readable English.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default CompatibilityResultScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 15,
    marginTop: 35,
    marginHorizontal: 10,
  },
});

{
  /* 
        <View style={{justifyContent: 'center'}}>
          <CircularProgress
            value={25}
            activeStrokeColor={COLORS.black}
            radius={35}
            inActiveStrokeColor={COLORS.black}
            inActiveStrokeOpacity={0.2}
            progressValueColor={COLORS.black}
            valueSuffix={'%'}
            clockwise
          />
        </View> */
}
