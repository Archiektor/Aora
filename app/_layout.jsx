import React, {useEffect} from 'react';
import {SplashScreen, Stack} from 'expo-router';
import {useFonts} from 'expo-font';

SplashScreen.preventAutoHideAsync(); // Allow to control when the splash screen is hidden,
// typically after fonts are loaded or other asynchronous tasks are completed.

// In the context of the expo-router, the Slot component is used as a placeholder for nested routes.
// The Slot component acts similarly to the Outlet component in other routing libraries like
// react-router-dom. It allows you to define a layout that can render child routes within it.

const RootLayout = () => {
    const [fontsLoaded, error] = useFonts({
        "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
        "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
        "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
        "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
        "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
        "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
        "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
        "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
        "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
    });

    useEffect(() => {
        if (error) throw error;

        if (fontsLoaded) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded, error]);

    if (!fontsLoaded && !error) {
        return null;
    }

    return (
        //This component acts as the navigator for the app. It defines the navigation structure and the screens that are part of the navigation stack.
        <Stack>
            <Stack.Screen name={'index'} options={{headerShown: false}}/>
            <Stack.Screen name={'(auth)'} options={{headerShown: false}}/>
            <Stack.Screen name={'(tabs)'} options={{headerShown: false}}/>
            {/*<Stack.Screen name={'/search/[query]'} options={{headerShown: false}}/>*/}
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

// const styles = StyleSheet.create({
//     container: {
//         flexDirection: 'column',
//         justifyContent: 'space-around',
//         height: '100%',
//         paddingVertical: 22,
//     },
//     header: {
//         backgroundColor: '#a8e1da',
//         minHeight: 45
//     },
//     footer: {
//         backgroundColor: '#b097c5',
//         minHeight: 45
//     }
// })
