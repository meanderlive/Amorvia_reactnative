import React, {Dispatch, SetStateAction} from 'react';
import ToggleSwitch from 'toggle-switch-react-native';
import {COLORS} from '../styles';

const MyToggle = ({
  isOn,
  onToggle,
}: {
  isOn: boolean;
  onToggle: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <ToggleSwitch
      isOn={isOn}
      offColor={'white'}
      circleColor={isOn ? COLORS.primary : COLORS.white}
      onColor={COLORS.white}
      size="small"
      trackOffStyle={{backgroundColor: 'lightgrey'}}
      trackOnStyle={{borderColor: COLORS.primary, borderWidth: 1}}
      onToggle={onToggle}
    />
  );
};

export default MyToggle;
