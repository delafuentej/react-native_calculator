/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {StatusBar, View } from 'react-native';
import { CalculatorScreen } from './presentation/screens/CalculatorScreen';



function App() {

  return (
    <View>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'black'}
      />
      <CalculatorScreen />
    </View>
  );
}


export default App;
