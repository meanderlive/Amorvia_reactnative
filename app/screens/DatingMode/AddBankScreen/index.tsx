import {View, TextInput} from 'react-native';
import React from 'react';
import MainLayout from '../../../components/MainLayout';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../navigation/types';
import {StyleSheet} from 'react-native';
import PrimaryBtn from '../../../components/PrimaryBtn';

const AddBankScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const [isDatePickerOpen, setIsDatePickerOpen] = React.useState(false);
  const [dob, setDob] = React.useState<any>('');
  return (
    <MainLayout title="Add New Card" onBack={navigation.goBack}>
      <View style={{flex: 1}}>
        <View
          style={{
            flex: 1,
            paddingTop: 35,
          }}>
          <View style={{marginHorizontal: 20, marginTop: 5}}>
            <TextInput style={styles.input} placeholder="Select Bank" />
            <TextInput style={styles.input} placeholder="Account Holder Name" />
            <TextInput style={styles.input} placeholder="Account Number" />
            <TextInput
              style={styles.input}
              placeholder="Confirm Account Number"
            />
            <TextInput style={styles.input} placeholder="IFSC Number" />
          </View>
        </View>

        <PrimaryBtn
          onPress={() => navigation.goBack()}
          containerStyle={{marginHorizontal: 20, marginBottom: 30}}
          text="Add Bank"
        />
      </View>
    </MainLayout>
  );
};

export default AddBankScreen;

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: 'lightgray',
    borderRadius: 10,
    paddingLeft: 15,
    marginBottom: 15,
    paddingVertical: 15,
  },
});
