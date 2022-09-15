import React from 'react';
import {Button, Text, StyleSheet} from "react-native";
import AppButton from '../components/AppButton';
import Screen from '../components/Screen';
import colors from '../config/colors';


function Results({navigation}) {
    return (
        <Screen style={styles.background}>
            <Button title="< Regresar" onPress={() => navigation.navigate('MainScreen')}/>
            <AppButton title="boton que no hace nada"></AppButton>
        </Screen>
    );
}

const styles = StyleSheet.create({
    background:{
        padding: 10,
		backgroundColor: colors.background
    }
})

export default Results;