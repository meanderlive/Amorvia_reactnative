import {Dimensions, View, Image} from 'react-native';
import React from 'react';
// images

const {width} = Dimensions.get('screen');
const SplashScreen = () => {
  // const navigation =
  //   useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    <View style={{flex: 1}}>
      <View style={{height: '100%', width: '100%'}}>
        <Image
          style={{height: '100%', width: '100%'}}
          source={require('../../../assets/images/Splash.png')}
        />
      </View>
    </View>
  );
};

export default SplashScreen;
