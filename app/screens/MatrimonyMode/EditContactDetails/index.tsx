import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {MatProfileStackParams} from '../../../navigation/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {COLORS} from '../../../styles';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import MainLayout from '../../../components/MainLayout';
import Input from '../../../components/Input';

const EditContactDetailsScreen = () => {
  const {user, accessToken} = useSelector((s: any) => s.auth);
  const [email, setEmail] = useState(user?.email || '');
  const [phone, setPhone] = useState(user?.phone || '');
  const [loading, setLoading] = React.useState(false);
  const dispatch = useDispatch();
  const navigation =
    useNavigation<NativeStackNavigationProp<MatProfileStackParams>>();

  return (
    <MainLayout
      title="Contact Details"
      onBack={navigation.goBack}
      rightSideIcon={() => {
        return (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{color: COLORS.primary}}>Save</Text>
          </TouchableOpacity>
        );
      }}>
      <View style={{marginHorizontal: 20, marginTop: 20}}>
        <Input label="Email" placeholder="johnsmith@gmail.com" />
        <Input label="Mobile" placeholder="+123 456 7890" />
      </View>
    </MainLayout>
  );
};

export default EditContactDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 45,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});
