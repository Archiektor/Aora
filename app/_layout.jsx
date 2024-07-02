import {Text} from 'react-native';
import {Slot} from 'expo-router';

const RootLayout = () => {
    return (
        <>
            <Text>Header</Text>
            {/*here comes index.jsx*/}
            <Slot/>
            <Text>Footer</Text>
        </>
    )
}

export default RootLayout
