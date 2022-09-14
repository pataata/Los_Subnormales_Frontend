import React, { Component} from 'react';
import {
  StyleSheet, Text, View, Dimensions, TouchableOpacity, Image
} from 'react-native';
import colors from '../config/colors';

//Screen One
const ScreenOne = props => {
  //onPress To Navigate
  const onPress = () => {
    props.navigation.navigate("Prediction Model");
  };

  return (
    <View style={styles.background}>
        <Image style={styles.logo} source={require("../assets/titanic-espacial.png")} />
        <Text style={styles.tagline}>Titanic Espacial</Text>
        <View style={styles.logoContainer}></View>

      <TouchableOpacity onPress={onPress}>
        <Text style={styles.texto}> Conoce tu destino</Text>
      </TouchableOpacity>
    </View>
  );
}

//Screen Two
const ScreenTwo = () => {
  return (
    <View style={styles.background}>
      <Text>Screen Two</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    background:{
        backgroundColor: colors.background,
        flex:1,
        justifyContent: "top",
        alignItems: "center"
    },
    buttonsContainer: {
        padding:40,
        paddingBottom: 100,
        width: "100%",
    },
    logo:{
        width:100,
        height:100,
        
    },
    logoContainer:{
        position: "top",
        top:70,
        alignItems:"top",
    },
    tagline: {
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 20,
        color: colors.white,
        justifyContent: "top",
        alignItems: "top"
    },
    texto: {
        color: colors.espacial,
        justifyContent: "center",
        alignItems: "center"
    }
})
;


export default ScreenOne;


