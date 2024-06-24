/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { Text, View } from 'react-native';
import { globalStyles } from '../../config/theme/globalStyles';

export const CalculatorScreen = () => {
  return (
    <View style={globalStyles.mainContainer}>
        <View style={globalStyles.operationsDialer}>
            <Text style={globalStyles.mainResult}>1500</Text>
            <Text style={globalStyles.subResult}>15 x 100</Text>
        </View>
    </View>
  );
};
