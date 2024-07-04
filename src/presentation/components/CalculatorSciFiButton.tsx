/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { globalStyles, colors } from '../../config/theme/globalStyles';
import { Pressable, Text } from 'react-native';

interface Props {
    label: string;
    color?: string;
    doubleSize?: boolean;
    blackText?: boolean;
    onPress: ()=> void | string | number;

}

export const CalculatorSciFiButton = ({
  label,
  color = colors.yellow,
  doubleSize = false,
  blackText = false,
  onPress,
 }:Props) => {
  return (
    <Pressable
      onPress={()=> onPress()}
      style={({pressed})=>({
      ...globalStyles.sciFiButton,
      width:(doubleSize) ? 140 : 70,
      backgroundColor:color,
      opacity: (pressed) ? 0.7 : 1,
    })}>
        <Text style={{
          ...globalStyles.sciFiButtonText,
          color: (blackText) ? 'black' : 'white',
        }}>{label}</Text>
    </Pressable>
  );
};
