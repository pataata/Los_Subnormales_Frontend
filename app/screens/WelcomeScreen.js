import React from 'react';
import {Text, View, ImageBackground, StyleSheet, Image } from 'react-native';
import AppButton from '../components/AppButton';
import colors from '../config/colors';

function WelcomeScreen({ navigation }) {
    return (
        <View style={styles.background}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../assets/titanic-espacial.png")} />
                <Text style={styles.tagline}>Titanic Espacial</Text>
                <View style={styles.background2}>
                    <Text style={styles.textbody}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus eros mi, quis sollicitudin mauris maximus ut. Nam velit justo, fringilla sed nisl at, accumsan tempor purus. Sed id turpis non lorem sodales molestie et at dolor. Etiam eleifend mi sollicitudin magna facilisis, a pellentesque nunc condimentum. Pellentesque luctus ipsum non arcu ultricies volutpat. Curabitur ultrices risus in sollicitudin consequat. Ut ornare porta ante in scelerisque. Duis vehicula ullamcorper odio, a tincidunt augue euismod vitae.

                    Duis velit libero, efficitur eu iaculis et, malesuada at nisl. Nunc hendrerit eu augue quis bibendum. Nunc vulputate orci non velit euismod, ut eleifend velit ultrices. Vestibulum sollicitudin scelerisque odio, at commodo ligula maximus at. Phasellus orci velit, euismod at sem.
                    </Text>
                </View>
            </View>
            <View style={styles.buttonsContainer}>
                <AppButton 
                    title="Conoce tu Destino"
                    onPress={() => navigation.navigate('MainScreen')}/>
                
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
    background2:{
        backgroundColor: colors.background2,
        borderRadius: 25,
        flex:1,
        justifyContent: "flex-end",
        alignItems: "center",
        padding: 13,
        marginHorizontal: 20,
    },
    buttonsContainer: {
        padding:40,
        paddingBottom: 80,
        width: "100%",
    },
    logo:{
        width:100,
        height:100,
        
    },
    logoContainer:{
        position: "absolute",
        top:60,
        alignItems:"center",
    },
    tagline: {
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 20,
        color: colors.text
    },
    textbody: {   
        fontSize: 15,
        fontWeight: "600",
        color: colors.text,
    },
})

export default WelcomeScreen;