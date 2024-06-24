/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { Pressable, Text, View } from 'react-native';
import { globalStyles } from '../../config/theme/globalStyles';

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
            <Pressable style={globalStyles.button}>
                <Text style={globalStyles.buttonText}>1</Text>
            </Pressable>
            <Pressable style={globalStyles.button}>
                <Text style={globalStyles.buttonText}>2</Text>
            </Pressable>
            <Pressable style={globalStyles.button}>
                <Text style={globalStyles.buttonText}>3</Text>
            </Pressable>
            <Pressable style={globalStyles.button}>
                <Text style={globalStyles.buttonText}>4</Text>
            </Pressable>
            <Pressable style={globalStyles.button}>
                <Text style={globalStyles.buttonText}>5</Text>
            </Pressable>
            <Pressable style={globalStyles.button}>
                <Text style={globalStyles.buttonText}>6</Text>
            </Pressable>
            <Pressable style={globalStyles.button}>
                <Text style={globalStyles.buttonText}>7</Text>
            </Pressable>
            <Pressable style={globalStyles.button}>
                <Text style={globalStyles.buttonText}>8</Text>
            </Pressable>
            <Pressable style={globalStyles.button}>
                <Text style={globalStyles.buttonText}>9</Text>
            </Pressable>
        </View>
    </View>
  );
};
