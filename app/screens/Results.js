import React from 'react';
import {Button, Text, StyleSheet, View, Dimensions, Animated} from "react-native";
import AppButton from '../components/AppButton';
import Screen from '../components/Screen';
import colors from '../config/colors';
import * as Animatable from 'react-native-animatable';


function Results({navigation, route}) {
    var mensaje = 'Lo sentimos, parece que viajarás a otra dimensión alterna.'
    var colorcirculo = styles.circulorojo

    if(route.params.resultado === '0'){
        mensaje = 'Felicidades, viajas seguro'
        colorcirculo = styles.circuloverde
    }

    return (
        <Screen style={styles.background}>
            <Button title="< Regresar" onPress={() => navigation.navigate('MainScreen')}/>
            <View style={styles.space} />
            <Animatable.View animation='bounceIn' style={styles.container} duration={3000}>
                <View style = {colorcirculo}>
                <Text style={styles.buttontext}> {mensaje} </Text>
                </View>
            </Animatable.View>
            <View style={styles.space} />
        </Screen>
    );
}

const styles = StyleSheet.create({
    background:{
        padding: 10,
		backgroundColor: colors.background,
        justifyContent: "center",
        alignItems: 'center', 
        flex: 1
    },
    circuloverde: {
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height),
        width: 350,
        height: 350,
        backgroundColor: colors.background3,
        justifyContent: "center",
        alignSelf: 'center',
        padding : 15
    },
    circulorojo: {
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height),
        width: 350,
        height: 350,
        backgroundColor: colors.danger,
        justifyContent: "center",
        alignSelf: 'center',
        padding : 15
    },
    buttontext: {
        fontSize: 28,
		color: colors.black,
        fontWeight: 'bold',
        alignSelf: "center",
        textAlign: 'center'
    },
    space: {
        flex: 2
    }
});

export default Results;