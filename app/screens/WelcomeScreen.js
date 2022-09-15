import React from 'react';
import {Text, View, ImageBackground, StyleSheet, Image, SafeAreaView } from 'react-native';
import AppButton from '../components/AppButton';
import AppBackground from '../components/AppBackground';
import colors from '../config/colors';
import strings from '../config/strings';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

function WelcomeScreen({navigation}) {
    return (
        <SafeAreaView style={styles.background}>   
            <Image style={styles.logo} source={require("../assets/titanic-espacial.png")} />
            <Text style={styles.tagline}>Titanic Espacial</Text>
            <ScrollView style={styles.scrollview}>
                <Text style={styles.text}>{strings.description1}</Text>
                <Text style={styles.planets}>{strings.planets}</Text>
                <Text style={styles.text}>{strings.description2}</Text>
            </ScrollView>
            <View style={styles.buttonsContainer}>
                <AppButton 
                    title="Continuar" 
                    onPress={() => navigation.navigate('MainScreen')}
                />
                
            </View>

        </SafeAreaView>
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
        paddingBottom: 30,
        width: "100%",
        
    },
    logo:{
        marginTop:30,
        width:100,
        height:100,
        
    },
    logoContainer:{
        top:70,
        alignItems:"center",

    },
    tagline: {
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 20,
        color: colors.text,

    },

    scrollview:{
        backgroundColor: colors.background2,
        padding: 20,
        borderRadius: 25,
        marginHorizontal: 20
    },

    text:{
        fontSize: 17,
        color: colors.text
    },

    planets:{
        fontSize: 17,
        fontWeight: 'bold',
        color: '#FFC4C0'
    }
})

export default WelcomeScreen;
