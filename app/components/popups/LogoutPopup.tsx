import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import MainLayout from '../MainLayout';
import {COLORS} from '../../styles';
import {RegularText, SmallText} from '../MyText';
import {useDispatch} from 'react-redux';
import {logOut} from '../../redux/feature/auth/authSlice';
import {resetReduxStore} from '../../utils/helper';
import { useNavigation } from '@react-navigation/native';

const LogoutPopup = ({
  onCancel,
  onConfirm,
  visible,
}: {
  onConfirm?: () => void;
  onCancel: () => void;
  visible: boolean;
}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  
  const handleLogout = async () => {
    try {
      onCancel();
      // Reset Redux store
      resetReduxStore(dispatch);
      navigation.navigate('ModeSelect')
      
      // Call any additional onConfirm callback if provided
      if (onConfirm) {
        onConfirm();
      }
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.5)',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: '80%',
            backgroundColor: COLORS.white,
            borderRadius: 20,
          }}>
          <View style={{padding: 20}}>
            <RegularText
              style={{fontSize: 18, marginBottom: 15, textAlign: 'center'}}>
              Logout ?
            </RegularText>
            <RegularText
              style={{fontSize: 14, textAlign: 'center', color: COLORS.grey}}>
              Are you sure you want to logout ?
            </RegularText>
          </View>
          <View
            style={{
              flexDirection: 'row',
              borderTopWidth: 1,
              borderTopColor: COLORS.lightGrey,
            }}>
            <TouchableOpacity
              onPress={onCancel}
              style={{
                flex: 1,
                padding: 15,
                alignItems: 'center',
                borderRightWidth: 1,
                borderRightColor: COLORS.lightGrey,
              }}>
              <RegularText style={{color: COLORS.grey}}>Cancel</RegularText>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleLogout}
              style={{
                flex: 1,
                padding: 15,
                alignItems: 'center',
              }}>
              <RegularText style={{color: COLORS.primary}}>Logout</RegularText>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default LogoutPopup;

const styles = StyleSheet.create({});
