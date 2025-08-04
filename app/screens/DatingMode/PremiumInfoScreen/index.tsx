import {
  View,
  ScrollView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {PremiumStackParams, RootStackParams} from '../../../navigation/types';
import MainLayout from '../../../components/MainLayout';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  BigText,
  MediumText,
  RegularText,
  RegularTextG,
  SmallText,
} from '../../../components/MyText';
import {COLORS} from '../../../styles';

const data = [
  {
    price: '$70.80',
    duration: '3 months',
    title: 'Gold Plus',
    per_month: '$23 Per Month',
    des1: 'Send unlimited Messaegs',
    des2: 'View upto 150 Contacts',
    des3: 'Standout from other Profiles',
  },
  {
    price: '$70.80',
    duration: '3 months',
    title: 'Gold Plus',
    per_month: '$23 Per Month',
    des1: 'Send unlimited Messaegs',
    des2: 'View upto 150 Contacts',
    des3: 'Standout from other Profiles',
  },
  {
    price: '$70.80',
    duration: '3 months',
    title: 'Gold Plus',
    per_month: '$23 Per Month',
    des1: 'Send unlimited Messaegs',
    des2: 'View upto 150 Contacts',
    des3: 'Standout from other Profiles',
  },
];

const PremiumScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<PremiumStackParams>>();
  return (
    <MainLayout title="Upgrade to Premium" onBack={navigation.goBack}>
      <ScrollView style={{flex: 1}}>
        <View
          style={{alignItems: 'center', paddingHorizontal: 49, marginTop: 30}}>
          <BigText bold>Choose your plan</BigText>
          {/* <RegularTextG
            style={{
              textAlign: 'center',
              marginTop: 10,
            }}>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical
          </RegularTextG> */}
        </View>

        <FlatList
          showsHorizontalScrollIndicator={false}
          data={data}
          horizontal
          renderItem={({item}) => {
            return (
              <View style={styles.flatList}>
                <View style={styles.titleView}>
                  <SmallText bold style={{color: 'white'}}>
                    {item.title}
                  </SmallText>
                </View>
                <View style={{flexDirection: 'row', marginBottom: 10}}>
                  <BigText style={{color: 'white'}} bold>
                    {item.price}
                  </BigText>
                  <MediumText
                    style={{
                      color: 'white',
                      alignSelf: 'flex-end',
                      marginBottom: 3,
                    }}>
                    /{item.duration}
                  </MediumText>
                </View>
                <RegularText style={{color: 'white', textAlign: 'center'}}>
                  {item.per_month}
                </RegularText>

                <View
                  style={{
                    marginTop: 10,
                  }}>
                  <View style={styles.row}>
                    <MaterialCommunityIcons
                      name="check-all"
                      size={24}
                      color="white"
                    />

                    <RegularText style={{color: 'white'}}>
                      {item.des1}
                    </RegularText>
                  </View>

                  <View style={styles.row}>
                    <MaterialCommunityIcons
                      name="check-all"
                      size={24}
                      color="white"
                    />
                    <RegularText style={{color: 'white'}}>
                      {item.des2}
                    </RegularText>
                  </View>

                  <View style={styles.row}>
                    <MaterialCommunityIcons
                      name="check-all"
                      size={24}
                      color="white"
                    />
                    <RegularText style={{color: 'white'}}>
                      {item.des3}
                    </RegularText>
                  </View>

                  <View style={styles.row}>
                    <MaterialCommunityIcons
                      name="check-all"
                      size={24}
                      color={COLORS.primary}
                    />
                    <RegularText
                      style={{
                        color: 'white',
                        textDecorationLine: 'line-through',
                      }}>
                      {item.des3}
                    </RegularText>
                  </View>
                </View>

                <TouchableOpacity
                  onPress={() => navigation.navigate('Payment')}
                  style={styles.button}>
                  <RegularText style={{color: 'white'}} bold>
                    Choose Plan
                  </RegularText>
                </TouchableOpacity>
              </View>
            );
          }}
        />
        <View style={{height: 80}}></View>
      </ScrollView>
    </MainLayout>
  );
};

export default PremiumScreen;

const styles = StyleSheet.create({
  flatList: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 35,
    paddingHorizontal: 15,
    height: 520,
    marginLeft: 15,
    marginVertical: 20,
    paddingBottom: 40,
    backgroundColor: COLORS.primary,
    marginTop: 60,
  },
  row: {
    flexDirection: 'row',
    gap: 10,
    width: 290,
    paddingHorizontal: 20,
    marginTop: 15,
    paddingRight: 40,
  },
  button: {
    height: 60,
    borderWidth: 2,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    marginTop: 50,
  },
  titleView: {
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    backgroundColor: '#FCAE4D',
    width: 100,
    height: 45,
    marginLeft: 35,
    marginBottom: 30,
    marginTop: -1,
  },
});
