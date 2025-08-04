import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import MainLayout from '../../../components/MainLayout';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ProfileStackParams} from '../../../navigation/types';
import {TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {RegularText, RegularTextG} from '../../../components/MyText';
import {COLORS} from '../../../styles';
import TravelModal from '../../../modals/TravelModal';
import {onShare} from '../../../utils/helper';
import ProfileBoostModal from '../../../modals/ProfileBoostModal';

const SettingsScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<ProfileStackParams>>();
  const [isTravelModalOpen, setIsTravelModalOpen] = React.useState(false);
  const [isBoostModalOpen, setIsBoostModalOpen] = React.useState(false);
  return (
    <MainLayout onBack={navigation.goBack} title="Settings">
      <ScrollView style={{marginHorizontal: 20}}>
        {isTravelModalOpen && (
          <TravelModal onHide={() => setIsTravelModalOpen(false)} />
        )}
        <View style={{marginTop: 20}}></View>

        {/* {ACCOUNT SETTINGS} */}
        <TouchableOpacity
          onPress={() => navigation.navigate('AccountSetting')}
          // onPress={() => navigation.navigate('Task')}
          style={styles.row}>
          <AntDesign name="setting" size={20} color="gray" />
          <RegularTextG style={{flex: 1}}>Account Setting</RegularTextG>
          <AntDesign name="right" size={15} color="gray" />
        </TouchableOpacity>

        {/* {MANAGE SUBSCRIPTION} */}
        <TouchableOpacity
          //@ts-ignore
          onPress={() => navigation.navigate('PremiumTab')}
          style={styles.row}>
          <Entypo name="back-in-time" size={20} color="gray" />
          <RegularTextG style={{flex: 1}}>Manage Subscription</RegularTextG>
          <AntDesign name="right" size={15} color="gray" />
        </TouchableOpacity>

        {/* {FAVOURITES} */}
        <TouchableOpacity
          onPress={() => navigation.navigate('Favorites')}
          style={styles.row}>
          <AntDesign name="hearto" size={20} color="gray" />
          <RegularTextG style={{flex: 1}}>Favourites</RegularTextG>
          <AntDesign name="right" size={15} color="gray" />
        </TouchableOpacity>

        {/* {Notification} */}
        <TouchableOpacity
          onPress={() => navigation.navigate('Notification')}
          style={styles.row}>
          <Feather name="bell" size={20} color="gray" />
          <RegularTextG style={{flex: 1}}>Notification</RegularTextG>
          <AntDesign name="right" size={15} color="gray" />
        </TouchableOpacity>

        {/* {Activity History} */}
        <TouchableOpacity
          onPress={() => navigation.navigate('ActivityHistory')}
          style={styles.row}>
          <MaterialCommunityIcons
            name="clock-time-three-outline"
            size={20}
            color="gray"
          />
          <RegularTextG style={{flex: 1}}>Activity History</RegularTextG>
          <AntDesign name="right" size={15} color="gray" />
        </TouchableOpacity>

        {/* {Recent Passes} */}
        <TouchableOpacity
          onPress={() => navigation.navigate('RecentPasses')}
          style={styles.row}>
          <Entypo name="back-in-time" size={20} color="gray" />
          <RegularTextG style={{flex: 1}}>Recent Passes</RegularTextG>
          <AntDesign name="right" size={15} color="gray" />
        </TouchableOpacity>

        {/* {Travel Mode} */}
        <TouchableOpacity
          onPress={() => setIsTravelModalOpen(true)}
          style={styles.row}>
          <SimpleLineIcons name="location-pin" size={20} color="gray" />
          <RegularTextG style={{flex: 1}}>Travel Mode</RegularTextG>
          <AntDesign name="right" size={15} color="gray" />
        </TouchableOpacity>

        {/* {Refer Friend} */}
        <TouchableOpacity onPress={onShare} style={styles.row}>
          <MaterialIcons name="person-add-alt" size={22} color="gray" />
          <RegularTextG style={{flex: 1}}>Refer Friend</RegularTextG>
          <AntDesign name="right" size={15} color="gray" />
        </TouchableOpacity>

        {isBoostModalOpen && (
          <ProfileBoostModal onHide={() => setIsBoostModalOpen(false)} />
        )}
        <TouchableOpacity
          onPress={() => setIsBoostModalOpen(true)}
          // onPress={() => navigation.navigate('ComingSoon')}
          style={{
            height: 45,
            backgroundColor: COLORS.primary,
            alignItems: 'center',
            justifyContent: 'center',
            width: '50%',
            borderRadius: 50,
            flexDirection: 'row',
            alignSelf: 'center',
            gap: 5,
          }}>
          <Octicons name="zap" size={18} color={COLORS.white} />
          <Text style={{color: 'white'}}>Get Profile Boost</Text>
        </TouchableOpacity>
      </ScrollView>
    </MainLayout>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    paddingBottom: 20,
    marginBottom: 30,
  },
});
