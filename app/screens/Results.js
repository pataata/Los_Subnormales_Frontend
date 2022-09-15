import React from 'react';
import {Button, Text} from "react-native";


function Results({navigation}) {
    return (
        <Button title="< Regresar" onPress={() => navigation.navigate('MainScreen')}/>
    );
}

export default Results;