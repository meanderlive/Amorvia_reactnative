import React from 'react';
import {View, ScrollView, TextInput} from 'react-native';
import MainLayout from '../../../components/MainLayout';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../navigation/types';
import {BigText, SmallText} from '../../../components/MyText';
import {COLORS} from '../../../styles';
import {Rating} from 'react-native-ratings';
import PrimaryBtn from '../../../components/PrimaryBtn';
import SecondaryBtn from '../../../components/SecondaryBtn';

const RateUsScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const [isLike, setIsLike] = React.useState(true);
  return (
    <MainLayout onBack={navigation.goBack}>
      <ScrollView style={{marginHorizontal: 15}}>
        <BigText bold style={{textAlign: 'center', marginTop: 25}}>
          Rate us
        </BigText>
        <SmallText
          style={{
            marginVertical: 10,
            textAlign: 'center',
            fontSize: 12,
          }}>
          What you feel about our service
        </SmallText>

        <View style={{alignItems: 'center', marginVertical: 15}}>
          <Rating
            jumpValue={1}
            ratingCount={5}
            imageSize={30}
            tintColor={COLORS.white}
            minValue={1}
            ratingBackgroundColor={'red'}
            ratingColor={'#000'}
            startingValue={5}
          />
        </View>
        <View
          style={{
            height: 160,
            backgroundColor: '#F0F0F0',
            borderRadius: 10,
            padding: 10,
            marginHorizontal: 10,
          }}>
          <TextInput
            style={{flex: 1, textAlignVertical: 'top'}}
            placeholder="Say something..."
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'space-between',
            marginTop: 50,
          }}>
          <View style={{width: '48%'}}>
            <SecondaryBtn onPress={() => navigation.goBack()} text="Cancel" />
          </View>
          <View style={{width: '48%'}}>
            <PrimaryBtn onPress={() => navigation.goBack()} text="Submit" />
          </View>
        </View>
      </ScrollView>
    </MainLayout>
  );
};

export default RateUsScreen;
