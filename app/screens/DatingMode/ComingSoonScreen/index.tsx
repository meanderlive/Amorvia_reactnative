import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useHideBottomBar} from '../../../hook/useHideBottomBar';
import PrimaryBtn from '../../../components/PrimaryBtn';
import {COLORS} from '../../../styles';
import {BigText} from '../../../components/MyText';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const ComingSoonScreen = () => {
  //   useHideBottomBar();

  const navigation = useNavigation();

  return (
    <LinearGradient
      style={{flex: 1}}
      angle={90}
      useAngle={true}
      colors={['#D6B6F9', '#ED588D']}>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-evenly',
          alignItems: 'center',
          paddingVertical: '10%',
        }}>
        <BigText style={{color: COLORS.white, marginBottom: 20}} bold>
          Coming Soon
        </BigText>
        <Image
          style={{marginBottom: 40}}
          source={require('../../../../assets/images/rocket.png')}
        />
        <PrimaryBtn
          text="Back"
          onPress={navigation.goBack}
          textStyle={{color: COLORS.primary}}
          containerStyle={{width: 300, backgroundColor: COLORS.white}}
        />
      </View>
    </LinearGradient>
  );
};

export default ComingSoonScreen;

const styles = StyleSheet.create({});
