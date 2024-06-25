/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */

import { useEffect, useRef, useState } from 'react';

enum Operator {
    add = '+',
    subtract = '−',
    multiply = '×',
    divide = '÷',
}


export const useCalculator = ()=>{

    const[ number, setNumber ] = useState('0');
    // console.log('number', number);
    const [ prevNumber, setPrevNumber ] = useState('0');
    // console.log('prevNumber', prevNumber);
    const [ formula , setFormula ] = useState('');

    //useRef => to avoid having to change the status when not necessary//
    const lastOperation = useRef<Operator>();

    useEffect(()=>{
        if( lastOperation.current){
            const firstPartFormula = formula.split(' ').at(0);
            setFormula(`${firstPartFormula} ${lastOperation.current} ${number}`);
        }else{
            setFormula(number);
        }
    },[ number]);

    //to display the result on the screen while typing
    useEffect(()=>{
        const subResult = calculateSubResult();
        setPrevNumber(`${subResult}`);
    }, [formula]);
    // console.log('lastOperation', lastOperation);

    //  console.log('number.length',number.length);
    const resetToNull = () =>{
        setNumber('0');
        setPrevNumber('0');
        lastOperation.current = undefined;
        setFormula('');
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
        calculateResult();
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
        const result = calculateSubResult();
        setFormula(`${result}`);

        lastOperation.current = undefined;
        setPrevNumber('0');
    };

    const calculateSubResult = ():number =>{
        // const number1 = Number(number);
        // const number2 = Number(prevNumber);
        const [firstValue, operation, secondValue] = formula.split(' ');
        const number1 = Number(firstValue);
        const number2 = Number(secondValue);

        if(isNaN(number2)) return number1;

        switch( operation){
            case Operator.add:
                return number1 + number2;
                // setNumber(`${ number1 + number2}`);
            case Operator.subtract:
                return number1 - number2;
                // setNumber(`${ number2 - number1}`);
            case Operator.multiply:
                return number1 * number2;
                // setNumber(`${ number1 * number2}`);
            case Operator.divide:
                return number1 / number2;
                // setNumber(`${ number2 / number1}`);
            default:
                throw new Error('Operation not implemented');
        }
    };


    return{
        //properties:
        number,
        prevNumber,
        formula,

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