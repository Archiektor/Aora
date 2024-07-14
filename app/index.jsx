import {Image, ScrollView, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Redirect, router} from 'expo-router';
import {images} from '../constants';
import CustomButton from '../components/CustomButton';
import {StatusBar} from 'expo-status-bar';

export default function App() {
    return (
        <SafeAreaView className={'bg-primary h-full'}>
            <ScrollView contentContainerStyle={{height: '100%'}}>
                <View className="w-full flex-1 justify-center items-center px-4">
                    <Image source={images.logo} className="w-[130px] h-[84px]" resizeMode="contain"/>
                    <Image source={images.cards} className={'max-w-[380px] w-full h-[300px]'} resizeMode="contain"/>
                    <View className={'relative mt-5'}>
                        <Text className={'font-psemibold text-[30px] leading-[36px] tracking-[-1px] text-center text-white'}>Discover Endless Possibilities
                            with <Text className={`font-psemibold text-[30px] leading-[36px] tracking-[-1px] text-center text-secondary-200`}> Aora</Text>
                        </Text>
                        <Image source={images.path} className="absolute w-[136px] h-[15px] -right-5 bottom-[122px]" resizeMode="contain"/>
                        <Text className={'mt-3 text-[14px] font-pregular leading-[22.4px] text-center text-white'}>Where Creativity Meets Innovation: Embark on a Journey
                            of
                            Limitless Exploration with Aora</Text>
                        <CustomButton handlePress={() => router.push('/sign-in')} containerStyles={'bg-secondary mt-7 align-center justify-center'}
                                      title={'Continue With Email'}/>
                    </View>
                </View>
            </ScrollView>

            <StatusBar backgroundColor={'#161622'} style={'light'}/>

        </SafeAreaView>
    );
}