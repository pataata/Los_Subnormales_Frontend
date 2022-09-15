import React from 'react';
import {Button, Text, StyleSheet, View, Dimensions, TouchableHighlight} from "react-native";
import AppButton from '../components/AppButton';
import Screen from '../components/Screen';
import colors from '../config/colors';


function Results({navigation}) {
    return (
        <Screen style={styles.background}>
            <Button title="< Regresar" onPress={() => navigation.navigate('MainScreen')}/>
            <TouchableHighlight 
            style = {{
                borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
                width: Dimensions.get('window').width * 0.7,
                height: Dimensions.get('window').width * 0.7,
                backgroundColor: colors.text,
                justifyContent: 'center',
                alignItems: 'center'
              }}
              underlayColor = '#ccc'
              onPress = { () => alert('Yaay!') }
            >
              <Text>Mom, look, I am a circle!</Text>
              {/*<Text> title="Todo parece estar bien con tu vuelo", style={styles.item} </Text>*/}
            </TouchableHighlight>
        </Screen>
    );
}

const styles = StyleSheet.create({
    background:{
        padding: 10,
		backgroundColor: colors.background
    },
    circle: {
        width: 44,
        height: 44,
        borderRadius: 44/2
    },
    item: {
		color: colors.background3
    }
});

export default Results;