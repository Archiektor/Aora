import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const CustomButton = ({title, containerStyles = '', handlePress, textStyles = '', isLoading = false}) => {
    return (
        <View className="flex items-center justify-center">
            <TouchableOpacity
                onPress={handlePress}
                className={`w-[65vw] h-[7vh] p-2 ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}
                activeOpacity={0.7}
                disabled={isLoading}
            >
                <Text className={`text-center text-primary text-lg font-psemibold ${textStyles}`}>
                    {title}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default CustomButton;
