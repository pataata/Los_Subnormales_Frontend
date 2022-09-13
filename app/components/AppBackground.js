import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { View } from 'react-native';

import colors from '../config/colors';

function AppBackground({title, onPress, color = "primary"}) {
    return (
        <View style={styles.background}>
        </View>
    );
}

const styles = StyleSheet.create({
    background:{
        backgroundColor: colors.primary,
        flex:1,
        justifyContent: "flex-end",
        alignItems: "center"
    }
})
export default AppBackground;