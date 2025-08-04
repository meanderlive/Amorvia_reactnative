import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import {
  MediumText,
  RegularText,
  RegularTextG,
  SmallText,
  SmallTextG,
  Text12,
} from '../../../components/MyText';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import {COLORS} from '../../../styles';
import {useNavigation} from '@react-navigation/native';
import SecondaryBtn from '../../../components/SecondaryBtn';

const DressDetailScreen = () => {
  const navigation = useNavigation();
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
      <View style={styles.imgView}>
        <Image
          style={{height: '100%', width: '100%', resizeMode: 'stretch'}}
          source={require('../../../../assets/images/Dress/DressDetail.png')}
        />
      </View>

      <View style={{paddingHorizontal: 20}}>
        {/* {DETAILS} */}
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          {/* {Details} */}
          <View style={{gap: 5}}>
            <MediumText bold>Designer Dress</MediumText>
            <SmallText>Vado Odeele Dress</SmallText>
            <View
              style={{
                flexDirection: 'row',
                gap: 4,
                alignItems: 'center',
              }}>
              <FontAwesome name="star" size={13} color="#F1C40F" />
              <FontAwesome name="star" size={13} color="#F1C40F" />
              <FontAwesome name="star" size={13} color="#F1C40F" />
              <FontAwesome name="star" size={13} color="#F1C40F" />
              <FontAwesome name="star" size={13} color="#F1C40F" />
              <Text style={{fontSize: 10, color: 'black'}}>4.5</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <RegularTextG style={{textDecorationLine: 'line-through'}}>
                $230.00
              </RegularTextG>
              <MediumText bold style={{marginLeft: 5, color: COLORS.primary}}>
                $220.00
              </MediumText>
            </View>
          </View>
          {/* {btnView} */}
          <View style={styles.btnView}>
            <TouchableOpacity
              style={{paddingHorizontal: 10}}
              onPress={decrement}>
              <RegularText style={{marginBottom: 10}}>_</RegularText>
            </TouchableOpacity>
            <RegularText>{count}</RegularText>
            <TouchableOpacity
              style={{paddingHorizontal: 10}}
              onPress={increment}>
              <RegularText>+</RegularText>
            </TouchableOpacity>
          </View>
          {/* {} */}
        </View>
        {/* {} */}
        <SmallText style={{fontSize: 12, paddingRight: 30, marginTop: 10}}>
          There are many variations of passages of Lorem Ipsum and available,
          but the majority have suffered alteration in somey form, by injected
          humour, or randomised words which don't look even slightly believable.
        </SmallText>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Entypo name="dot-single" size={24} color="gray" />
          <SmallText>
            Going through the cites of the word in classical.
          </SmallText>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Entypo name="dot-single" size={24} color="gray" />
          <SmallText>There are many variations of passages.</SmallText>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 15,
          }}>
          <Entypo name="dot-single" size={24} color="gray" />
          <SmallText>
            Making it look like readable and spoken English.
          </SmallText>
        </View>

        <Text12>
          Categories: <SmallTextG>Ornaments</SmallTextG>
        </Text12>
        <Text12>
          Tags: <SmallTextG>Jewellery, events, wedding</SmallTextG>
        </Text12>

        <SecondaryBtn
          onPress={() => navigation.goBack()}
          containerStyle={{marginVertical: 30}}
          text="Buy Now"
        />
        {/* {} */}
      </View>
    </ScrollView>
  );
};

export default DressDetailScreen;
const styles = StyleSheet.create({
  imgView: {
    height: 400,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    backgroundColor: 'red',
  },
  btnView: {
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    borderRadius: 40,
    backgroundColor: 'lightgray',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
});
