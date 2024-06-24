/* eslint-disable prettier/prettier */
import { StyleSheet } from "react-native";

export const colors = {
    darkGray: '#2d2d2d',
    lightGray: '#9b9b9b',
    orange:'#ff9427',
    lightBlue:'#48dbcc',
    textPrimary: 'white',
    textSecondary: '#666666',
    background:'#000000',
};

export const globalStyles = StyleSheet.create({
    mainContainer: {
        flex:1,
        padding: 20,
        justifyContent:'flex-end',

    },
    background: {
        flex:1,
        backgroundColor:colors.background,
    },
    operationsDialer: {
        paddingHorizontal:30,
        paddingBottom:20,
    },
    mainResult: {
        color: colors.textPrimary,
        fontSize:75,
        textAlign:'right',
        marginBottom:10,
        fontWeight:'500',
    },
    subResult: {
        color: colors.textSecondary,
        fontSize:40,
        textAlign:'right',
        fontWeight:'500',

    }
})