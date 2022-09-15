import React from 'react';
import {Button, Text, StyleSheet, View, Dimensions, Animated} from "react-native";
import AppButton from '../components/AppButton';
import Screen from '../components/Screen';
import colors from '../config/colors';


function Results({navigation, route}) {
    var mensaje = 'Lo sentimos, parece que viajaras a otra dimension alterna fría y sin nadie.'

    if(route.params.resultado === '0'){
        mensaje = 'Felicidades, no viajas a nuestra dimension'
    }

    return (
        <Screen style={styles.background}>
            <Button title="< Regresar" onPress={() => navigation.navigate('MainScreen')}/>
            <View style={styles.space} />
            <View style = {styles.circle}>
              <Text style={styles.buttontext}> {mensaje} </Text>
            </View>
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
    circle: {
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height),
        width: 350,
        height: 350,
        backgroundColor: colors.text,
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