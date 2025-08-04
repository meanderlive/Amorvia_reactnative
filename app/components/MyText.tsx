import {StyleProp, TextStyle, Text} from 'react-native';
import React from 'react';
import {COLORS} from '../styles';

type Props = {
  children: string | React.ReactNode | any;
  style?: StyleProp<TextStyle>;
  bold?: boolean;
};

const FONT = 'Inter';

export const RegularText = ({children, style, bold}: Props) => {
  return (
    <Text
      style={[
        {
          color: COLORS.black,
          fontSize: 15,
          fontWeight: bold ? '700' : 'normal',
          fontFamily: FONT,
        },
        style,
      ]}>
      {children}
    </Text>
  );
};
export const RegularTextG = ({children, style, bold}: Props) => {
  return (
    <Text
      style={[
        {
          color: 'gray',
          fontSize: 14,
          fontWeight: bold ? '700' : 'normal',
          fontFamily: FONT,
        },
        style,
      ]}>
      {children}
    </Text>
  );
};

export const MediumText = ({children, style, bold}: Props) => {
  return (
    <Text
      style={[
        {
          color: COLORS.black,
          fontSize: 18,
          fontWeight: bold ? '700' : 'normal',
          fontFamily: FONT,
        },
        style,
      ]}>
      {children}
    </Text>
  );
};

export const Text12 = ({children, style, bold}: Props) => {
  return (
    <Text
      style={[
        {
          color: COLORS.black,
          fontSize: 12,
          fontWeight: bold ? '700' : 'normal',
          fontFamily: FONT,
        },
        style,
      ]}>
      {children}
    </Text>
  );
};

export const SmallText = ({children, style, bold}: Props) => {
  return (
    <Text
      style={[
        {
          // color: COLORS.black,
          fontSize: 11,
          fontWeight: bold ? '700' : 'normal',
          fontFamily: FONT,
        },
        style,
      ]}>
      {children}
    </Text>
  );
};
export const SmallTextG = ({children, style, bold}: Props) => {
  return (
    <Text
      style={[
        {
          color: COLORS.grey,
          fontSize: 11,
          fontWeight: bold ? '700' : 'normal',
          fontFamily: FONT,
        },
        style,
      ]}>
      {children}
    </Text>
  );
};

export const BigText = ({children, style, bold}: Props) => {
  return (
    <Text
      style={[
        {
          color: COLORS.black,
          fontSize: 25,
          fontWeight: bold ? '700' : 'normal',
          fontFamily: FONT,
        },
        style,
      ]}>
      {children}
    </Text>
  );
};
export const Text30 = ({children, style, bold}: Props) => {
  return (
    <Text
      style={[
        {
          color: COLORS.black,
          fontSize: 30,
          fontWeight: bold ? '700' : 'normal',
          fontFamily: FONT,
        },
        style,
      ]}>
      {children}
    </Text>
  );
};
