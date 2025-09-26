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

const About = ({ user }: { user: any }) => {
  const navigation = useNavigation<NativeStackNavigationProp<MatProfileStackParams>>();
  return (
    <View style={{marginHorizontal: 20}}>
      {/* About Section */}
      <View style={styles.row}>
        <RegularText bold>About</RegularText>
        <Octicons onPress={() => navigation.navigate('EditProfile')} name="pencil" size={20} color="gray" />
      </View>
      <RegularTextG style={{marginRight: 22, marginBottom: 10}}>
        {user?.bio || user?.description || user?.aboutMe || 'No bio available.'}
      </RegularTextG>

      {/* Basic Details Section */}
      <View style={styles.row}>
        <RegularText bold>Basic Details</RegularText>
        <Octicons onPress={() => navigation.navigate('EditBasicDetails')} name="pencil" size={20} color="gray" />
      </View>
      <View>
        <Row title="Name" text={user?.name || user?.userName || user?.fullName || 'N/A'} />
        <Row title="Date of Birth" text={user?.dob || user?.dateOfBirth || 'N/A'} />
        <Row title="Gender" text={user?.gender || user?.iAm || 'N/A'} />
        <Row title="Marital Status" text={user?.marital || user?.maritalStatus || 'N/A'} />
        <Row title="Age" text={user?.age ? String(user.age) : 'N/A'} />
      </View>

      {/* Contact Details Section */}
      <View style={styles.row}>
        <RegularText bold>Contact Details</RegularText>
        <Octicons onPress={() => navigation.navigate('EditContactDetails')} name="pencil" size={20} color="gray" />
      </View>
      <View>
        <Row title="Email" text={user?.email || 'N/A'} />
        <Row title="Mobile" text={user?.phoneNumber || user?.phone || 'N/A'} />
        <Row title="Address" text={user?.address || user?.Country || 'N/A'} />
      </View>

      {/* Personal Details Section */}
      <View style={styles.row}>
        <RegularText bold>Personal Details</RegularText>
        <Octicons onPress={() => navigation.navigate('EditPersonalDetail')} name="pencil" size={20} color="gray" />
      </View>
      <View>
        <Row title="Religion" text={user?.Religion || user?.religion || 'N/A'} />
        <Row title="Caste" text={user?.Caste || user?.caste || 'N/A'} />
        <Row title="Height" text={user?.Height || user?.height || 'N/A'} />
        <Row title="Birth Place" text={user?.birthPlace || 'N/A'} />
        <Row title="Diet" text={user?.DietPreferences || user?.diet || 'N/A'} />
        <Row title="Mother Tongue" text={user?.motherTongue || 'N/A'} />
        <Row title="Horoscope" text={user?.horoscopes || user?.horoscope || 'N/A'} />
      </View>

      {/* Interests and Hobbies Section */}
      <View style={styles.row}>
        <RegularText bold>Interests and Hobbies</RegularText>
      </View>
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        {user?.interest && user.interest.length > 0 ? (
          user.interest.map((item: any, index: number) => (
            <View key={index} style={{margin: 5, borderRadius: 20, paddingHorizontal: 15, borderWidth: 2, borderColor: 'lightgray'}}>
              <Text style={{opacity: 1, fontSize: 15, color: 'rgba(0,0,0,0.7)', padding: 2, margin: 3}}>
                {item}
              </Text>
            </View>
          ))
        ) : (
          <Text>No interests added.</Text>
        )}
      </View>
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
