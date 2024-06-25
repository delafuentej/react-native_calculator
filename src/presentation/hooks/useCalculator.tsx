/* eslint-disable no-trailing-spaces */
/* eslint-disable curly */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import { useRef, useState } from 'react';

enum Operator {
    add,
    subtract,
    multiply,
    divide,
}


export const useCalculator = ()=>{

    const[ number, setNumber ] = useState('0');
    console.log('number', number);
    const [ prevNumber, setPrevNumber ] = useState('0');
    console.log('prevNumber', prevNumber);
    //useRef => to avoid having to change the status when not necessary//
    const lastOperation = useRef<Operator>();
    console.log('lastOperation', lastOperation);

    //  console.log('number.length',number.length);
    const resetToNull = () =>{
        setNumber('0');
        setPrevNumber('0');
    };
    const deleteLastDigit = ()=>{
        // console.log('number.slice', number.slice(0, -1));
       return ((number.length === 1) || ( number.length === 2 && number.includes('-'))) ? setNumber('0') :  (number.length > 1) ?  setNumber(number.slice(0, -1)) :  '';
    };
    const toggleSign = () =>{
        return (Number(number) > 0) ? setNumber(`${-number}`) :  (Number(number) < 0) ? setNumber(`${-(number)}`) : '';
    };

    const buildNumber = (numberString: string) =>{
        //so that no more than one decimal point can be marked on the display when it has already been marked once.
        if( number.includes('.') && numberString === '.') return;
        //to avoid displaying the number 0 oder -0 to the left of a number
        if( number.startsWith('0') || number.startsWith('-0')){
            if( numberString === '.'){
                return setNumber( number + numberString);
            }
            //to evaluate if it is another zero and there is no decimal point
            if( numberString === '0' && number.includes('.')){
                return setNumber( number + numberString);
            }
            // to evaluate if the number !== 0, there is no decimal point, & it is the first number
            if( numberString !== '0' && !number.includes('.')){
                return setNumber( numberString);
            }
            // to avoid concatenated 0 followed on the left
            if( numberString === '0' && !number.includes('.')){
                return;
            }
            return setNumber( number + numberString);
        }

        setNumber( number + numberString);
    };

    const setLastNumber = () =>{
         (number.endsWith('.')) ? setPrevNumber(number.slice(0, -1)) : setPrevNumber(number);
          setNumber('0');
        // return (number.endsWith('.')) ? setPrevNumber(number.slice(0, -1)) : (!number.endsWith('.')) ? setPrevNumber(number) : '';
    }; 
    console.log('setLastNumber',setLastNumber);

    const addOp = () => {
        setLastNumber();
        lastOperation.current = Operator.add;
    };
    const subtractOp = () => {
        setLastNumber();
        lastOperation.current = Operator.subtract;
    };
    const multiplyOp = () => {
        setLastNumber();
        lastOperation.current = Operator.multiply;
    };
    const divideOp = () => {
        setLastNumber();
        lastOperation.current = Operator.divide;
    };

    const calculateResult = () =>{
        const number1 = Number(number);
        const number2 = Number(prevNumber);

        switch( lastOperation.current){
            case Operator.add:
                setNumber(`${ number1 + number2}`);
                break;
            case Operator.subtract:
                setNumber(`${ number2 - number1}`);
                break;
            case Operator.multiply:
                setNumber(`${ number1 * number2}`);
                break;
            case Operator.divide:
                setNumber(`${ number2 / number1}`);
                break;
            default:
                throw new Error('Operation not implemented')
        }
        setPrevNumber('0');
    };


    return{
        //properties:
        number,
        prevNumber,

        //methods:
        buildNumber,
        resetToNull,
        deleteLastDigit,
        toggleSign,
        addOp,
        subtractOp,
        multiplyOp,
        divideOp,
        calculateResult,
       

    };
};