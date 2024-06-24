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
    onPress: ()=> void;

}

export const CalculatorButton = ({
  label,
  color = colors.darkGray,
  doubleSize = false,
  blackText = false,
  onPress,
 }:Props) => {
  return (
    <Pressable
      onPress={()=> onPress()}
      style={({pressed})=>({
      ...globalStyles.button,
      width:(doubleSize) ? 140 : 70,
      backgroundColor:color,
      opacity: (pressed) ? 0.7 : 1,
    })}>
        <Text style={{
          ...globalStyles.buttonText,
          color: (blackText) ? 'black' : 'white',
        }}>{label}</Text>
    </Pressable>
  );
};
