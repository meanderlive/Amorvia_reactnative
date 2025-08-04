import React from 'react';
import {COLORS} from '../styles';
import {View, SafeAreaView, Text} from 'react-native';
import {TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type Props = {
  children: React.ReactNode;
  title?: string;
  onBack?: () => void;
  onBackTitle?: string;
  rightSideIcon?: () => React.ReactNode;
};

const MainLayout = ({children, title, onBack, rightSideIcon}: Props) => {
  const extraStyle = {
    marginVertical: 15,
    marginHorizontal: 15,
    marginTop: 0,
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: 15,
        position: 'absolute',
        zIndex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
      }}>
      <View
        style={[
          {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: 15,
            marginLeft: 10,
          },
          onBack ? extraStyle : {},
        ]}>
        {onBack && (
          <TouchableOpacity
            style={{
              height: 35,
              width: 35,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={onBack}>
            <MaterialIcons name="arrow-back" size={30} color={COLORS.black} />
          </TouchableOpacity>
        )}
        <Text
          style={{
            color: COLORS.black,
            fontSize: 18,
            fontWeight: '600',
          }}>
          {title}
        </Text>

        {rightSideIcon ? rightSideIcon() : <View style={{width: 1}} />}
      </View>
      {children}
    </SafeAreaView>
  );
};

export default MainLayout;
