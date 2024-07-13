import {Text, TouchableOpacity, View} from 'react-native';

const CustomButton = ({text, customClass}) => {
    return (
        <View className="flex items-center justify-center">
            <TouchableOpacity className={`w-[65vw] h-[7vh] p-2 ${customClass}`}>
                <Text className="text-center text-white text-lg font-bold">{text}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default CustomButton;