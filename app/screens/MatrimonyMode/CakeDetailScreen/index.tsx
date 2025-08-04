import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
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
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../../../styles';
import {useNavigation} from '@react-navigation/native';
import SecondaryBtn from '../../../components/SecondaryBtn';

const CakeDetailScreen = () => {
  const navigation = useNavigation();
  const [view, setView] = useState(1);

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
          source={require('../../../../assets/images/Cake/CakeDetail.png')}
        />
      </View>

      <View style={{paddingHorizontal: 20}}>
        {/* {DETAILS} */}
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          {/* {Details} */}
          <View style={{gap: 5}}>
            <MediumText bold>Butterscotch Bliss Cake</MediumText>
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
        {/* {SIZE} */}
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
          <TouchableOpacity
            onPress={() => {
              setView(1);
            }}
            style={[
              styles.size,
              {
                borderColor: view === 1 ? COLORS.primary : 'black',
                backgroundColor: view === 1 ? COLORS.primary : 'transparent',
              },
            ]}>
            <RegularText style={{color: view === 1 ? 'white' : 'gray'}}>
              1/2 KG
            </RegularText>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setView(2);
            }}
            style={[
              styles.size,
              {
                borderColor: view === 2 ? COLORS.primary : 'gray',
                backgroundColor: view === 2 ? COLORS.primary : 'transparent',
              },
            ]}>
            <RegularText style={{color: view === 2 ? 'white' : 'black'}}>
              1 KG
            </RegularText>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setView(3);
            }}
            style={[
              styles.size,
              {
                borderColor: view === 3 ? COLORS.primary : 'gray',
                backgroundColor: view === 3 ? COLORS.primary : 'transparent',
              },
            ]}>
            <RegularText style={{color: view === 3 ? 'white' : 'black'}}>
              1.5 KG
            </RegularText>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setView(4);
            }}
            style={[
              styles.size,
              {
                borderColor: view === 4 ? COLORS.primary : 'gray',
                backgroundColor: view === 4 ? COLORS.primary : 'transparent',
              },
            ]}>
            <RegularText style={{color: view === 4 ? 'white' : 'black'}}>
              2 KG
            </RegularText>
          </TouchableOpacity>
        </View>
        {/* {} */}
        <View
          style={{
            flexDirection: 'row',
            gap: 10,
            marginVertical: 20,
          }}>
          <View style={styles.eggless}>
            <MaterialCommunityIcons
              name="egg-off-outline"
              size={20}
              color="white"
            />
            <Text style={{color: 'white'}}>Eggless</Text>
          </View>
          <View style={styles.input}>
            <TextInput placeholder="Message on cake" />
          </View>
        </View>

        <View style={styles.input}>
          <SimpleLineIcons name="location-pin" size={17} color="gray" />
          <TextInput
            style={{fontSize: 12}}
            placeholder="1356 Lowndes Hill Park Road, Califormnia, USA"
          />
        </View>
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

export default CakeDetailScreen;
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
  size: {
    borderRadius: 69,
    borderWidth: 1,
    padding: 10,
    marginTop: 10,
    width: '23%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  eggless: {
    borderRadius: 50,
    backgroundColor: '#4CB050',
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    width: '30%',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    height: 45,
    paddingHorizontal: 10,
    flexDirection: 'row',
    flex: 1,
    borderRadius: 50,
    alignItems: 'center',
  },
});
