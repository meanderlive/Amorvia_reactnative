import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {HomeStackParams} from '../../../navigation/types';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import {COLORS} from '../../../styles';

const Input = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParams>>();
  return (
    <View
      style={{
        marginHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <View style={styles.input}>
        <FontAwesome name="search" size={24} color="gray" />
        <TextInput placeholder="Search your location..." />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Filter')}
        style={{
          backgroundColor: COLORS.primary,
          borderRadius: 10,
          height: 60,
          width: 60,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Entypo name="sound-mix" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    flexDirection: 'row',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.84,
    elevation: 1,
    padding: 8,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
    gap: 10,
    paddingLeft: 15,
    marginVertical: 15,
    paddingVertical: 15,
  },
});
