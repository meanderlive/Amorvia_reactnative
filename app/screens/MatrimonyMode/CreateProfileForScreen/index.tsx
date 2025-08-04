import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {MediumText} from '../../../components/MyText';
import SelfSvg from '../../../../assets/images/ProfileOptionSvg/Self.svg';
import RelativeSvg from '../../../../assets/images/ProfileOptionSvg/Relative.svg';
import SonSvg from '../../../../assets/images/ProfileOptionSvg/Son.svg';
import DaughterSvg from '../../../../assets/images/ProfileOptionSvg/Daughter.svg';
import BrotherSvg from '../../../../assets/images/ProfileOptionSvg/Brother.svg';
import SisterSvg from '../../../../assets/images/ProfileOptionSvg/Sister.svg';
import ClientSvg from '../../../../assets/images/ProfileOptionSvg/Client.svg';
import FriendSvg from '../../../../assets/images/ProfileOptionSvg/Friend.svg';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../navigation/types';

const data = [
  {icon: <SelfSvg />},
  {icon: <RelativeSvg />},
  {icon: <SonSvg />},
  {icon: <DaughterSvg />},
  {icon: <BrotherSvg />},
  {icon: <SisterSvg />},
  {icon: <ClientSvg />},
  {icon: <FriendSvg />},
];

const CreateProfileForScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <View style={{flex: 1, padding: 20}}>
      <ScrollView contentContainerStyle={{flex: 1}}>
        <MediumText bold style={{textAlign: 'center', marginVertical: 30}}>
          Create Profile For
        </MediumText>
        <FlatList
          numColumns={2}
          data={data}
          renderItem={({item}: any) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate('CreateAccountMat')}
                style={styles.container}>
                {item.icon}
              </TouchableOpacity>
            );
          }}
        />
      </ScrollView>
    </View>
  );
};

export default CreateProfileForScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
    flex: 1 / 2,
    height: 110,
    margin: 7,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
