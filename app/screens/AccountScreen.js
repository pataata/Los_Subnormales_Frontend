import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Icon from '../components/Icon';

import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';
import colors from '../config/colors';

const menuItems = [
    {
        title: 'My listings',
        icon: {
            name: 'format-list-bulleted',
            background: colors.primary
        },
    },
    {
        title: 'My messages',
        icon: {
            name: 'email',
            background: colors.secondary
        },
    },
]

function AccountScreen(props) {
    return (
        <Screen style ={styles.screen}>
            <View style={styles.container}>
            <ListItem 
                title= 'Mosh Hamedani'
                subTitle = 'programmingwithmoch@gmail.com'
                image={require('../assets/mosh.jpg')}
            />
            </View>

            <View style={styles.container}>
                <FlatList 
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    ItemSeparatorComponent={ListItemSeparator}
                    renderItem={({item}) => 
                        <ListItem
                            title={item.title}
                            IconComponent={
                                <Icon 
                                name={item.icon.name}
                                backgroundColor={item.icon.background} />
                            } />
                    }
                 />
            </View>
            <ListItem 
                title='Log Out'
                IconComponent={
                    <Icon name='logout' backgroundColor='#ffe66d'
                    />
                }
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    container:{
        marginVertical: 20
    },
    screen :{
        backgroundColor: colors.light
    }
})

export default AccountScreen;