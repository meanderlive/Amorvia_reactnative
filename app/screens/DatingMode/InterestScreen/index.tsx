import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import MainLayout from '../../../components/MainLayout';
import PrimaryBtn from '../../../components/PrimaryBtn';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../../../styles';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../navigation/types';
import {intresetList} from '../../../utils/dummy';

const InterestScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const [selectedIntrest, setSelectedIntrest] = useState({});

  return (
    <MainLayout title="Interests" onBack={navigation.goBack}>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginHorizontal: 20,
          }}>
          {intresetList.map(item => {
            // @ts-ignore
            const selected = !!selectedIntrest[item];
            return (
              <TouchableOpacity
                key={item}
                onPress={() => {
                  selected
                    ? setSelectedIntrest({...selectedIntrest, [item]: ''})
                    : setSelectedIntrest({
                        ...selectedIntrest,
                        [item]: item,
                      });
                }}>
                <Text
                  style={{
                    opacity: selected ? 1 : 0.5,
                    fontSize: 15,
                    color: selected ? COLORS.primary : 'grey',
                    paddingVertical: 3,
                    paddingHorizontal: 15,
                    borderRadius: 20,
                    borderWidth: 2,
                    borderColor: selected ? COLORS.primary : '#777',
                    margin: 5,
                  }}>
                  {item}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>

      <View style={{marginBottom: 50}}>
        <PrimaryBtn
          text={'Proceed'}
          // onPress={() =>
          //   navigation.navigate('AddPhoto', {user: null, accessToken: null})
          // }
          onPress={() => navigation.navigate('Welcome')}
          containerStyle={{marginHorizontal: 20}}
        />
      </View>
    </MainLayout>
  );
};

export default InterestScreen;
