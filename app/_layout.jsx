import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Slot, Stack} from 'expo-router';

// In the context of the expo-router, the Slot component is used as a placeholder for nested routes.
// The Slot component acts similarly to the Outlet component in other routing libraries like
// react-router-dom. It allows you to define a layout that can render child routes within it.

const RootLayout = () => {
    return (
        <Stack>
            <Stack.Screen name={'index'} options={{headerShown: false}}/>
        </Stack>
    )

    // return (
    //     <View style={styles.container}>
    //         <Text style={styles.header}>Header</Text>
    //         <Slot/>
    //         <Text style={styles.footer}>Footer</Text>
    //     </View>
    // )
}

export default RootLayout

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: '100%',
        paddingVertical: 22,
    },
    header: {
        backgroundColor: '#a8e1da',
        minHeight: 45
    },
    footer: {
        backgroundColor: '#b097c5',
        minHeight: 45
    }
})
