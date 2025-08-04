import {View, Text} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {RegularText, RegularTextG, SmallText} from '../../../components/MyText';
import Octicons from 'react-native-vector-icons/Octicons';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MatProfileStackParams} from '../../../navigation/types';
import {useNavigation} from '@react-navigation/native';

type RowProps = {
  text: string;
  title: string;
};

const Row = ({text, title}: RowProps) => {
  return (
    <React.Fragment>
      <View style={styles.row2}>
        <RegularTextG style={{width: 140}}>{title}</RegularTextG>
        <RegularText>{text}</RegularText>
      </View>
    </React.Fragment>
  );
};

const interest = [
  {type: 'Painting'},
  {type: 'Dancing'},
  {type: 'Travelling'},
  {type: 'Sports'},
  {type: 'Running'},
];
const About = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<MatProfileStackParams>>();
  return (
    <View style={{marginHorizontal: 20}}>
      {/* {ABOUT} */}
      <View style={styles.row}>
        <RegularText bold>About</RegularText>
        <Octicons
          onPress={() => navigation.navigate('EditProfile')}
          name="pencil"
          size={20}
          color="gray"
        />
      </View>
      <RegularTextG style={{marginRight: 22, marginBottom: 10}}>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here',
      </RegularTextG>

      {/* {BD} */}
      <View style={styles.row}>
        <RegularText bold>Basic Details</RegularText>
        <Octicons
          onPress={() => navigation.navigate('EditBasicDetails')}
          name="pencil"
          size={20}
          color="gray"
        />
      </View>
      <View>
        <Row title="Name" text="John Doe" />
        <Row title="Date of Birth" text="August 19, 1999" />
        <Row title="Gender" text="Male" />
        <Row title="Marital Status" text="Single" />
      </View>
      {/* {CD} */}
      <View style={styles.row}>
        <RegularText bold>Contact Details</RegularText>
        <Octicons
          onPress={() => navigation.navigate('EditContactDetails')}
          name="pencil"
          size={20}
          color="gray"
        />
      </View>
      <View>
        <Row title="Email" text="johnsmith@gmail.com" />
        <Row title="Mobile" text="+123 456 7890" />
      </View>
      {/* {PD} */}
      <View style={styles.row}>
        <RegularText bold>Personal Details</RegularText>
        <Octicons
          onPress={() => navigation.navigate('EditPersonalDetail')}
          name="pencil"
          size={20}
          color="gray"
        />
      </View>
      <View>
        <Row title="Religion" text="Hindu" />
        <Row title="Caste" text="Not Mentioned" />
        <Row title="Height" text="5' 6/167cm" />
        <Row title="Birth Place" text="United States" />
        <Row title="Diet" text="Veg" />
      </View>
      {/* {} */}
      <View style={styles.row}>
        <RegularText bold>Interests and Hobbies</RegularText>
      </View>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
        {interest.map((item: any, index: any) => {
          return (
            <View
              style={{
                margin: 5,
                borderRadius: 20,
                paddingHorizontal: 15,
                borderWidth: 2,
                borderColor: 'lightgray',
              }}>
              <Text
                style={{
                  opacity: 1,
                  fontSize: 15,
                  color: 'rgba(0,0,0,0.3)',
                  padding: 2,
                  margin: 3,
                }}>
                {item?.type}
              </Text>
            </View>
          );
        })}
      </View>
      {/* {END} */}
    </View>
  );
};

export default About;
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: 'rgba(0,0,0,0.04)',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  row2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
});
