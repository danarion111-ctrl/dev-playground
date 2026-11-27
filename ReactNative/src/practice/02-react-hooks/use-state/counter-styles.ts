import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'space-between',
        padding:20
    },
        title:{
        textAlign:"center",
        fontSize: 40,
        letterSpacing: 15,
    },
    count:{
      textAlign:"center",
      fontSize: 20,
      fontWeight: 'bold',
    },
    simpleButton:{
        width:150,
        height:50,
        borderRadius:20,
        justifyContent:"center",
    },
    resetButton:{
        width:'100%',
        height:50,
        borderRadius:20,
        justifyContent:'center',
    },
    buttonsContainer:{
        alignItems: 'center',
        flexDirection: 'column',
        gap:15,
    },
    simpleButtonContainer:{
        gap:20,
        flexDirection: 'row',
    },
    buttonText:{
        fontSize: 15,
        textAlign: 'center',
        color: 'white',
    },
    countContainer:{
    alignItems: 'center',
    },
    textCount:{
        fontSize: 15,
    }
})