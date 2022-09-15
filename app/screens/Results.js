import React from 'react';
import {Button, Text, StyleSheet, View, Dimensions, TouchableHighlight} from "react-native";
import AppButton from '../components/AppButton';
import Screen from '../components/Screen';
import colors from '../config/colors';


function Results({navigation}) {
    return (
        <Screen style={styles.background}>
            <Button title="< Regresar" onPress={() => navigation.navigate('MainScreen')}/>
            <View style = {styles.circle}>
              <Text style={styles.item}> Todo parece estar en orden </Text>
            </View>
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
        padding : 10
    },
    item: {
        fontSize: 28,
		color: colors.background3
    }
});

export default Results;