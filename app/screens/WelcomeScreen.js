import React from 'react';
import {Text, View, ImageBackground, StyleSheet, Image } from 'react-native';
import AppButton from '../components/AppButton';
import AppBackground from '../components/AppBackground';
import colors from '../config/colors';

function WelcomeScreen(props) {
    return (
        <View style={styles.background}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../assets/titanic-espacial.png")} />
                <Text style={styles.tagline}>Titanic Espacial</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <AppButton title="Conoce tu Destino" />
                
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    background:{
        backgroundColor: colors.background,
        flex:1,
        justifyContent: "flex-end",
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
        position: "absolute",
        top:70,
        alignItems:"center",
    },
    tagline: {
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 20,
        color: colors.text
    },
})

export default WelcomeScreen;
