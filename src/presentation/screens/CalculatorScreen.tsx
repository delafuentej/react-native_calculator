/* eslint-disable jsx-quotes */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { Pressable, Text, View } from 'react-native';
import { globalStyles, colors } from '../../config/theme/globalStyles';
import { CalculatorButton } from '../components/CalculatorButton';
import { useCalculator } from '../hooks/useCalculator';

export const CalculatorScreen = () => {
    const {number, buildNumber, resetToNull, deleteLastDigit, toggleSign} = useCalculator();
  return (
    <View style={globalStyles.mainContainer}>
        {/* math operations dialer */}
        <View style={globalStyles.operationsDialer}>
            <Text
                adjustsFontSizeToFit // to fit the fontsize of the number to the screen size
                numberOfLines={1}
                style={globalStyles.mainResult}
                >{number}
            </Text>
            <Text style={globalStyles.subResult}>15 x 100</Text>
        </View>
        {/* math operations buttons */}
        <View style={globalStyles.rowButtons}>
            {/* Pressable => to be able to click on the buttons for numbers and mathematical operations*/}
            <CalculatorButton
                onPress={resetToNull}
                label='C'
                color = {colors.lightBlue}
                blackText
            />
            <CalculatorButton
                onPress={toggleSign}
                // onPress={(number:any) =>toggleSign(number)}
                label='+/−'
                color = {colors.lightBlue}
                blackText
                />
            <CalculatorButton
                onPress={(num:string):void=>deleteLastDigit(num)}
                //  onPress={(number:any) :string => deleteLastDigit(number)}
                label='DEL'
                color = {colors.lightBlue}
                blackText
                />
            <CalculatorButton
                 onPress={()=>console.log('÷')}
                label ='÷'
                color = {colors.orange}
            />
        <View/>
        <View style={globalStyles.rowButtons}>

            <CalculatorButton
                onPress={()=> buildNumber('7')}
                label='7'
                color = {colors.darkGray}
            />
            <CalculatorButton
                onPress={()=> buildNumber('8')}
                label='8'
                color = {colors.darkGray}
                />
            <CalculatorButton
                onPress={()=> buildNumber('9')}
                label='9'
                color = {colors.darkGray}
                />
            <CalculatorButton
                onPress={()=> console.log('×')}
                label ='×'
                color = {colors.orange}
            />
        </View>
        <View style={globalStyles.rowButtons}>
            <CalculatorButton
                onPress={()=> buildNumber('4')}
                label='4'
                color = {colors.darkGray}
            />
            <CalculatorButton
                onPress={()=> buildNumber('5')}
                label='5'
                color = {colors.darkGray}
                />
            <CalculatorButton
                onPress={()=> buildNumber('6')}
                label='6'
                color = {colors.darkGray}
                />
            <CalculatorButton
                onPress={()=> console.log('-')}
                label ='−'
                color = {colors.orange}
            />
        </View>
        <View style={globalStyles.rowButtons}>
            <CalculatorButton
                onPress={()=> buildNumber('1')}
                label='1'
                color = {colors.darkGray}
            />
            <CalculatorButton
                onPress={()=> buildNumber('2')}
                label='2'
                color = {colors.darkGray}
                />
            <CalculatorButton
                onPress={()=> buildNumber('3')}
                label='3'
                color = {colors.darkGray}
                />
            <CalculatorButton
                onPress={()=> console.log('+')}
                label ='+'
                color = {colors.orange}
            />
        </View>
        <View style={globalStyles.rowButtons}>
            <CalculatorButton
                onPress={()=> buildNumber('0')}
                doubleSize
                label='0'
                color = {colors.darkGray}
            />

            <CalculatorButton
                onPress={()=> buildNumber('.')}
                label='.'
                color = {colors.darkGray}
                />
            <CalculatorButton
                 onPress={()=> console.log('=')}
                label ='='
                color = {colors.orange}
            />
        </View>

        </View>
    </View>
  );
};
