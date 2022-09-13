import React from 'react';
import Colors from '../config/colors';
import { View, StyleSheet } from 'react-native';

function ListItemSeparator() {
    return (
        <View style={styles.separator} />
    );
}

const styles = StyleSheet.create({
    separator:{
        width:"100%", 
        height: 1, 
        backgroundColor: Colors.light,
    },
})

export default ListItemSeparator;