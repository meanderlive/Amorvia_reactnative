import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Line from '../../../components/Line';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MatProfileStackParams} from '../../../navigation/types';

type RowProps = {
  text: string;
  icon: () => React.ReactNode;
  onPress?: () => void;
};

const Row = ({text, icon, onPress}: RowProps) => {
  return (
    <React.Fragment>
      <TouchableOpacity
        onPress={onPress}
        style={{
          width: '90%',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
          marginTop: 5,
        }}>
        <View style={{width: 30}}>{icon && icon()}</View>
        <Text style={{flex: 1}}>{text}</Text>
        <Entypo name="chevron-small-right" color="gray" size={30} />
      </TouchableOpacity>
      <Line />
    </React.Fragment>
  );
};

const Options = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<MatProfileStackParams>>();
  return (
    <View style={{alignItems: 'center', marginTop: 20}}>
      <Row
        onPress={() => navigation.navigate('EditProfile')}
        icon={() => <FontAwesome5 name="user-alt" size={20} color="gray" />}
        text="Edit Profile"
      />
      <Row
        onPress={() => navigation.navigate('PartnerPref')}
        icon={() => <FontAwesome5 name="users" size={20} color="gray" />}
        text="Partner Preference"
      />
      <Row
        onPress={() => navigation.navigate('AccountSetting')}
        icon={() => <MaterialIcons name="settings" size={24} color="gray" />}
        text="Account Settings"
      />
      <Row
        icon={() => (
          <MaterialIcons name="family-restroom" size={22} color="gray" />
        )}
        text="My Family Members"
      />
      <Row
        //@ts-ignore
        onPress={() => navigation.navigate('PremiumTab')}
        icon={() => <Entypo name="back-in-time" size={22} color="gray" />}
        text="Subscription"
      />
      <Row
        onPress={() => navigation.navigate('Notification')}
        icon={() => <FontAwesome name="bell" size={22} color="gray" />}
        text="Notifications"
      />
      <Row
        onPress={() => navigation.navigate('AstroServices')}
        icon={() => (
          <MaterialCommunityIcons name="ship-wheel" size={24} color="gray" />
        )}
        text="Astro Services"
      />
      <Row
        onPress={() => navigation.navigate('WeddingResource')}
        icon={() => (
          <MaterialCommunityIcons name="ring" size={24} color="gray" />
        )}
        text="Wedding Resources"
      />
      <Row
        onPress={() => navigation.navigate('RecentPasses')}
        icon={() => <Entypo name="back-in-time" size={22} color="gray" />}
        text="Recent Passes"
      />
    </View>
  );
};

export default Options;
