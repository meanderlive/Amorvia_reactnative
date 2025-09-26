import AsyncStorage from '@react-native-async-storage/async-storage';
import {Share} from 'react-native';

export const LOCAL_KEYS = {
  AUTH: 'AUTH',
  IS_NEWLY_INSTALLED: 'IS_NEWLY_INSTALLED',
  REMEMBER_ME: 'REMEMBER_ME',
  IS_FIRST_TIME_OPEN: 'IS_FIRST_TIME_OPEN',
};

const setLocalUser = async (value: any) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(LOCAL_KEYS.AUTH, jsonValue);
    console.log('local user set');
  } catch (e: any) {
    throw new Error(e.message);
  }
};
const getLocalUser = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(LOCAL_KEYS.AUTH);
    if (jsonValue === null) return null;
    return JSON.parse(jsonValue);
  } catch (e: any) {
    throw new Error(e?.message);
  }
};
const destroyLocalStorage = async () => {
  try {
    // Get all keys
    const keys = await AsyncStorage.getAllKeys();
    // Filter out any keys you want to keep
    const keysToRemove = keys.filter(key => 
      key !== LOCAL_KEYS.IS_FIRST_TIME_OPEN // Keep first time open flag if needed
    );
    
    // Remove all keys except the ones we want to keep
    if (keysToRemove.length > 0) {
      await AsyncStorage.multiRemove(keysToRemove);
    }
  } catch (e: any) {
    throw new Error(e?.message);
  }
};

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export {setLocalUser, getLocalUser, destroyLocalStorage, getRandomColor};

export const onShare = async () => {
  try {
    const result = await Share.share({
      title: 'Marier 2.0',
      message: 'MARIER@2.0',
    });
    console.log('onShare', result);
  } catch (error: any) {
    console.log('onShare', error);
  }
};

export const resetReduxStore = (dispatch: any) => {
  // Instead of importing authSlice, we'll just clear the AsyncStorage
  // and let the app handle the state reset through navigation
  destroyLocalStorage();
  
  // You'll need to handle the navigation to the login screen in your LogoutPopup component
  // or wherever the logout is initiated from
};
