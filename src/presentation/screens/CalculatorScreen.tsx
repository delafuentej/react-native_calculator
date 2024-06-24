/* eslint-disable jsx-quotes */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { Pressable, Text, View } from 'react-native';
import { globalStyles, colors } from '../../config/theme/globalStyles';
import { CalculatorButton } from '../components/CalculatorButton';

export const CalculatorScreen = () => {
  return (
    <View style={globalStyles.mainContainer}>
        {/* math operations dialer */}
        <View style={globalStyles.operationsDialer}>
            <Text style={globalStyles.mainResult}>1500</Text>
            <Text style={globalStyles.subResult}>15 x 100</Text>
        </View>
        {/* math operations buttons */}
        <View style={globalStyles.rowButtons}>
            {/* Pressable => to be able to click on the buttons for numbers and mathematical operations*/}
            <CalculatorButton
                onPress={()=>console.log('C')}
                label='C'
                color = {colors.lightBlue}
                blackText
            />
            <CalculatorButton
                onPress={()=>console.log('+/−')}
                label='+/−'
                color = {colors.lightBlue}
                blackText
                />
            <CalculatorButton
                onPress={()=>console.log('%')}
                label='%'
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
                onPress={()=> console.log('7')}
                label='7'
                color = {colors.darkGray}
            />
            <CalculatorButton
                onPress={()=> console.log('8')}
                label='8'
                color = {colors.darkGray}
                />
            <CalculatorButton
                onPress={()=> console.log('9')}
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
                onPress={()=> console.log('4')}
                label='4'
                color = {colors.darkGray}
            />
            <CalculatorButton
                onPress={()=> console.log('5')}
                label='5'
                color = {colors.darkGray}
                />
            <CalculatorButton
                onPress={()=> console.log('6')}
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
                onPress={()=> console.log('1')}
                label='1'
                color = {colors.darkGray}
            />
            <CalculatorButton
                onPress={()=> console.log('2')}
                label='2'
                color = {colors.darkGray}
                />
            <CalculatorButton
                onPress={()=> console.log('3')}
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
                onPress={()=> console.log('0')}
                doubleSize
                label='0'
                color = {colors.darkGray}
            />

            <CalculatorButton
                onPress={()=> console.log('.')}
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
