import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {Link} from 'expo-router';

export default function App() {
    return (
        <View style={styles.container}>
            <Text>Aora !</Text>
            <StatusBar style="auto"/>
            <Link href={'/profile'} style={{color: 'blue'}}>Go to profile</Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})