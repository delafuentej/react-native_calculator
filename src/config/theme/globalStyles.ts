/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import { StyleSheet } from "react-native";

export const colors = {
    darkGray: '#2d2d2d',
    lightGray: '#9b9b9b',
    orange:'#ff9427',
    yellow:'#fff633',
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
    sciFiContainer:{
        // height: '30%',
    },
    mathOpContainer:{
        marginTop:5,
        // height: '50%',
    },
    background: {
        flex:1,
        backgroundColor:colors.background,
    },
    operationsDialer: {
        paddingHorizontal:30,
        paddingBottom:20,
        height:'20%',
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
    },
    rowButtons: {
       flexDirection:'row',
       justifyContent:'center',
       flexWrap:'wrap',
       marginTop:10,
       gap:10,
    },
    button: {
        height:70,
        width:70,
        backgroundColor:colors.darkGray,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20,
    },
    buttonText: {
        color:colors.textPrimary,
        fontWeight:'500',
        fontSize:30,
    },
    sciFiButton: {
        height:30,
        width:40,
        backgroundColor: colors.yellow,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        padding:3,
    },
    sciFiButtonText: {
        color: colors.darkGray,
        fontSize:15,
    },
});