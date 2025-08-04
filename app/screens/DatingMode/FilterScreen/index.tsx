import {View, TouchableOpacity, ScrollView, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import MainLayout from '../../../components/MainLayout';
import {BigText, RegularText, SmallText} from '../../../components/MyText';
import {useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../navigation/types';
import {COLORS} from '../../../styles';
import Entypo from 'react-native-vector-icons/Entypo';
import {useDispatch, useSelector} from 'react-redux';
import {api_getSexualOrientations} from '../../../api/sexualOrientations';
import Slider from '@react-native-community/slider';
//@ts-ignore

import RadioBtn from '../../../components/RadioBtn';
import RangeSlider from '../../../components/RangeSlider';
import RangeSliderH from '../../../components/RangeSliderH';

const GENDER_LIST = [
  'Female',
  'Male',
  'Non-Binary',
  'Transgender Female',
  'Transgender Male',
  'Transgender',
];

const SEXUALITY_LIST = [
  'Straight',
  'Gay',
  'Lesbian',
  'Bisexual',
  'Pansexual',
  'Transgender',
];
const FilterScreen = () => {
  const [gender, setGender] = useState('');
  const [sexualOrientation, setSexualOrientation] = useState('');
  const [ageMin, setAgeMin] = React.useState(18);
  const [ageMax, setAgeMax] = React.useState(70);
  const [heightMin, setHeightMin] = React.useState(150);
  const [heightMax, setHeightMax] = React.useState(190);
  const [distance, setDistance] = useState(5);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    <MainLayout title="Filters" onBack={navigation.goBack}>
      <ScrollView style={{padding: 15}}>
        {/* {Location} */}
        <RegularText
          bold
          style={{marginLeft: 15, marginTop: 10, color: 'black'}}>
          Location
        </RegularText>
        <View
          style={{
            backgroundColor: '#FAFAFA',
            borderColor: '#E0E0E0',
            borderWidth: 1,
            height: 50,
            marginHorizontal: 10,
            borderRadius: 15,
            marginVertical: 15,
            paddingHorizontal: 10,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Entypo name="location-pin" size={25} color={COLORS.primary} />
          <RegularText style={{color: 'black', marginLeft: 10}}>
            Current location
          </RegularText>
          <RegularText style={{marginLeft: 20, color: COLORS.grey}}>
            (San Fransisco)
          </RegularText>
        </View>

        {/* {AGE} */}

        <View style={styles.container}>
          <View style={styles.row}>
            <BigText style={{fontSize: 16}}>Age</BigText>
            <SmallText style={{fontSize: 12, color: COLORS.grey}}>
              {ageMin}-{ageMax}
            </SmallText>
          </View>

          <RangeSlider
            values={[ageMin, ageMax]}
            onChange={[setAgeMin, setAgeMax]}
          />
        </View>

        {/* {Height} */}

        <View style={styles.container}>
          <View style={styles.row}>
            <BigText style={{fontSize: 16}}>Height</BigText>
            <SmallText style={{fontSize: 12, color: COLORS.grey}}>
              {heightMin}cm -{heightMax}cm
            </SmallText>
          </View>

          <RangeSliderH
            values={[heightMin, heightMax]}
            onChange={[setHeightMin, setHeightMax]}
          />
        </View>

        {/* {DISTANCE} */}

        <View style={styles.container}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <BigText style={{fontSize: 16}}>Distance</BigText>
            <SmallText style={{fontSize: 12, color: COLORS.grey}}>
              {distance} miles
            </SmallText>
          </View>
          <Slider
            style={{flex: 1, height: 50, padding: 10}}
            minimumValue={3}
            maximumValue={100}
            value={distance}
            onValueChange={v => setDistance(v)}
            step={1}
            minimumTrackTintColor={COLORS.primary}
            thumbTintColor={COLORS.primary}
          />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <SmallText style={{fontSize: 12, color: COLORS.grey}}>
              3miles
            </SmallText>
            <SmallText style={{fontSize: 12, color: COLORS.grey}}>
              100miles
            </SmallText>
          </View>
        </View>

        {/* {GENDER} */}

        <View
          style={{
            backgroundColor: '#FAFAFA',
            borderColor: '#E0E0E0',
            borderWidth: 1,
            marginHorizontal: 10,
            borderRadius: 15,
            marginVertical: 15,
            padding: 10,
          }}>
          <BigText style={{textAlign: 'center', fontSize: 20}}>Gender</BigText>

          <View>
            {GENDER_LIST.map((item, idx) => {
              return (
                <TouchableOpacity
                  onPress={() => setGender(item)}
                  key={idx}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: 20,
                  }}>
                  <RegularText style={{color: COLORS.grey}}>{item}</RegularText>
                  <RadioBtn bool={gender === item} />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* {SEXUALITY} */}
        <View
          style={{
            backgroundColor: '#FAFAFA',
            borderColor: '#E0E0E0',
            borderWidth: 1,
            marginHorizontal: 10,
            borderRadius: 15,
            marginVertical: 15,
            padding: 10,
          }}>
          <BigText style={{textAlign: 'center', fontSize: 20}}>
            Sexuality
          </BigText>

          <View>
            {SEXUALITY_LIST.map((item, idx) => {
              return (
                <TouchableOpacity
                  onPress={() => setSexualOrientation(item)}
                  key={idx}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: 20,
                  }}>
                  <RegularText style={{color: COLORS.grey}}>{item}</RegularText>
                  <RadioBtn bool={sexualOrientation === item} />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </MainLayout>
  );
};

export default FilterScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAFAFA',
    borderColor: '#E0E0E0',
    borderWidth: 1,
    height: 100,
    marginHorizontal: 10,
    borderRadius: 15,
    marginVertical: 15,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
});
