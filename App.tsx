import React from 'react';
import RootNavigator from './app/navigation/RootNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {store} from './app/redux';
import {Provider, useDispatch} from 'react-redux';
import {SheetProvider} from 'react-native-actions-sheet';
import './app/sheets/sheets';
import {LOCAL_KEYS, getLocalUser} from './app/utils/helper';
import {setAuth} from './app/redux/feature/auth/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from './app/screens/SplashScreen';
import {View} from 'react-native';

const AppInit = () => {
  const [ready, setReady] = React.useState(false);
  const [isFirstTimeOpen, setIsFirstTimeOpen] = React.useState(false);
  const dispatch = useDispatch();
  const init = async () => {
    try {
      // const localAuthData = await getLocalUser();
      // const isFirstTimeOpenData = await AsyncStorage.getItem(
      //   LOCAL_KEYS.IS_FIRST_TIME_OPEN,
      // );
      // console.log({
      //   localAuthData,
      //   isFirstTimeOpenData: !Boolean(isFirstTimeOpenData),
      // });
      // if (localAuthData) {
      //   dispatch(setAuth(localAuthData));
      // }
      // setIsFirstTimeOpen(!Boolean(isFirstTimeOpenData));
    } catch (err) {
      console.log(err);
    } finally {
      setTimeout(() => {
        setReady(true);
      }, 500);
    }
  };

  React.useEffect(() => {
    init();
  }, []);
  return (
    <>{ready ? <RootNavigator isFirstTimeOpen={true} /> : <SplashScreen />}</>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        <NavigationContainer>
          <SheetProvider>
            <AppInit />
          </SheetProvider>
        </NavigationContainer>
      </View>
    </Provider>
  );
};

export default App;
