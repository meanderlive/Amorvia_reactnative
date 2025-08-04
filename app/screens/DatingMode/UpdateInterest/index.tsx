import {ScrollView, Text, TouchableOpacity, View, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import MainLayout from '../../../components/MainLayout';
import PageHeader from '../../../components/PageHeader';
import PrimaryBtn from '../../../components/PrimaryBtn';
import {useNavigation} from '@react-navigation/native';
import {Touchable} from 'react-native';
import {RegularText} from '../../../components/MyText';
import {COLORS} from '../../../styles';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../navigation/types';
import {useDispatch, useSelector} from 'react-redux';
import {api_AddInterest, api_getAllInterests} from '../../../api/interest';
import {updateUser} from '../../../redux/feature/auth/authSlice';
import {intresetList} from '../../../utils/dummy';

const UpdateInterestScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const [selectedIntrest, setSelectedIntrest] = useState({});
  const [interest, setInterest] = useState(intresetList);
  const token = useSelector((s: any) => s.auth.accessToken);
  const dispatch = useDispatch();
  const {user, accessToken} = useSelector((s: any) => s.auth);
  const [loading, setLoading] = React.useState(false);

  return (
    <MainLayout title="Interest" onBack={navigation.goBack}>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
          {interest.map((item, index) => {
            // @ts-ignore
            const selected = !!selectedIntrest[item];
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  selected
                    ? setSelectedIntrest({...selectedIntrest, [item]: ''})
                    : setSelectedIntrest({
                        ...selectedIntrest,
                        [item]: item,
                      });
                }}>
                <RegularText
                  style={{
                    opacity: selected ? 1 : 0.5,
                    fontSize: 15,
                    color: selected ? COLORS.primary : 'grey',
                    borderRadius: 18,
                    borderWidth: 2,
                    borderColor: selected ? COLORS.primary : '#777',
                    margin: 5,
                    paddingHorizontal: 10,
                    paddingVertical: 8,
                  }}>
                  {item}
                </RegularText>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>

      <View style={{marginBottom: 50}}>
        <PrimaryBtn text={'Proceed'} />
      </View>
    </MainLayout>
  );
};

export default UpdateInterestScreen;
