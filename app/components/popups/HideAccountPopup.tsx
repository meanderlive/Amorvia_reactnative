import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import MainLayout from '../MainLayout';
import {COLORS} from '../../styles';
import {RegularText, SmallText} from '../MyText';
import {useDispatch} from 'react-redux';
import {logOut} from '../../redux/feature/auth/authSlice';

const HideAccountPopup = ({
  onCancel,
  onConfirm,
  visible,
}: {
  onConfirm?: () => void;
  onCancel: () => void;
  visible: boolean;
}) => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    onCancel();
    setTimeout(() => {
      dispatch(logOut(null));
    }, 100);
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
              Hide you account
            </RegularText>
            <RegularText
              style={{fontSize: 14, textAlign: 'center', color: COLORS.grey}}>
              Are you sure you want to Hide the Account ?
            </RegularText>
          </View>

          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={onCancel}
              style={{
                padding: 20,
                flex: 1,
                borderBottomLeftRadius: 20,
                borderColor: 'rgba(0,0,0,0.2)',
                borderTopWidth: 0.6,
                borderRightWidth: 0.3,
              }}>
              <RegularText style={{textAlign: 'center'}}> Cancel</RegularText>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleLogout}
              style={{
                padding: 20,
                flex: 1,
                borderBottomRightRadius: 20,
                borderColor: 'rgba(0,0,0,0.2)',
                borderTopWidth: 0.6,
                borderLeftWidth: 0.3,
              }}>
              <RegularText style={{color: COLORS.primary, textAlign: 'center'}}>
                Confirm
              </RegularText>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default HideAccountPopup;

const styles = StyleSheet.create({});
