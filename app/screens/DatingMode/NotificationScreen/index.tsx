import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
import React from 'react';
import MainLayout from '../../../components/MainLayout';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ProfileStackParams} from '../../../navigation/types';
import {TouchableOpacity} from 'react-native';
import {MediumText, RegularText} from '../../../components/MyText';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const NotificationScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<ProfileStackParams>>();
  return (
    <MainLayout onBack={navigation.goBack} title="Notification">
      <ScrollView
        style={{marginHorizontal: 20}}
        showsVerticalScrollIndicator={false}>
        <View style={{marginTop: 20}}></View>
        <MediumText bold>Today</MediumText>
        <View style={{marginTop: 20}}></View>

        {/* {ACCOUNT SETTINGS} */}
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7]}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={styles.row}>
                <View style={styles.circle}>
                  <Image
                    style={{height: 60, width: 60, borderRadius: 40}}
                    source={require('../../../components/SwipeCard/assets/img3.jpg')}
                  />
                </View>
                <View style={{gap: 10, flex: 1}}>
                  <RegularText style={{fontSize: 16, paddingRight: 5}}>
                    Sarah Williams has sent you an invitation to Connect
                  </RegularText>
                  <View
                    style={{
                      flexDirection: 'row',
                      gap: 10,
                      alignItems: 'center',
                    }}>
                    {/* <MaterialIcons name="access-time" size={20} color="gray" /> */}
                    <MaterialCommunityIcons
                      name="clock-time-nine-outline"
                      size={20}
                      color="gray"
                    />
                    <Text>Few minutes ago</Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </ScrollView>
    </MainLayout>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    // borderBottomColor: 'black',
    borderBottomColor: 'rgba(0,0,0,0.06)',
    paddingBottom: 10,
    marginBottom: 20,
  },
  circle: {
    height: 60,
    width: 60,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ED588D',
  },
});
