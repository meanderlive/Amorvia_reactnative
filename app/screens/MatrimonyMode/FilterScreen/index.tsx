import {View, TouchableOpacity, ScrollView, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import MainLayout from '../../../components/MainLayout';
import {
  BigText,
  MediumText,
  RegularText,
  SmallText,
} from '../../../components/MyText';
import {useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {HomeStackParams, RootStackParams} from '../../../navigation/types';
import {COLORS} from '../../../styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
//@ts-ignore
import RangeSlider from '../../../components/RangeSlider';
import RangeSliderH from '../../../components/RangeSliderH';
import PrimaryBtn from '../../../components/PrimaryBtn';

const FilterScreen = () => {
  const [ageMin, setAgeMin] = React.useState(18);
  const [ageMax, setAgeMax] = React.useState(70);
  const [heightMin, setHeightMin] = React.useState(150);
  const [heightMax, setHeightMax] = React.useState(190);

  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParams>>();

  return (
    <MainLayout title="Filters" onBack={navigation.goBack}>
      <ScrollView style={{padding: 15}}>
        {/* {Location} */}

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

        {/* {Marital Status} */}
        <View style={{marginBottom: 15, marginHorizontal: 10}}>
          <MediumText style={{fontSize: 17}}>Marital Status</MediumText>
          <TouchableOpacity style={styles.container2}>
            <RegularText style={{color: 'gray'}}>Never Married</RegularText>
            <AntDesign name="down" size={15} color={'gray'} />
          </TouchableOpacity>
        </View>
        {/* {Religion} */}
        <View style={{marginBottom: 15, marginHorizontal: 10}}>
          <MediumText style={{fontSize: 17}}>Religion</MediumText>
          <TouchableOpacity style={styles.container2}>
            <RegularText style={{color: 'gray'}}>Hindu</RegularText>
            <AntDesign name="down" size={15} color={'gray'} />
          </TouchableOpacity>
        </View>
        {/* {Community} */}
        <View style={{marginBottom: 15, marginHorizontal: 10}}>
          <MediumText style={{fontSize: 17}}>Community</MediumText>
          <TouchableOpacity style={styles.container2}>
            <RegularText style={{color: 'gray'}}>Open to all</RegularText>
            <AntDesign name="down" size={15} color={'gray'} />
          </TouchableOpacity>
        </View>

        {/* {Community} */}
        <View style={{marginBottom: 15, marginHorizontal: 10}}>
          <MediumText style={{fontSize: 17}}>Mother Tongue</MediumText>
          <TouchableOpacity style={styles.container2}>
            <RegularText style={{color: 'gray'}}>Open to all</RegularText>
            <AntDesign name="down" size={15} color={'gray'} />
          </TouchableOpacity>
        </View>
        {/* {} */}
        <View style={{marginBottom: 15, marginHorizontal: 10}}>
          <MediumText style={{fontSize: 17}}>Country</MediumText>
          <TouchableOpacity style={styles.container2}>
            <RegularText style={{color: 'gray'}}>Open to all</RegularText>
            <AntDesign name="down" size={15} color={'gray'} />
          </TouchableOpacity>
        </View>
        {/* {} */}
        <PrimaryBtn containerStyle={{marginVertical: 30}} text="Search" />
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
  container2: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 45,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});
