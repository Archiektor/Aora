import {useState} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomButton from '../../components/CustomButton';
import {router} from 'expo-router';

import {images} from '../../constants'
import FormField from '../../components/FormField';

const SignIn = () => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    })


    const submitForm = () => {
        alert('Try to submit form');
    }

    return (
        <SafeAreaView className={'bg-primary h-full'}>
            <ScrollView contentContainerStyle={{height: '100%'}}>
                <View className="w-full h-full justify-center items-start px-4 my-3">
                    <View className="w-full items-start">
                        <Image source={images.logo} className="w-[115px] h-[35px]" resizeMode="contain"/>
                    </View>
                    <View className={'w-full'}>
                        <Text className={'text-2xl text-white mt-5 font-psemibold'}>Sign In</Text>
                        <FormField title={'Email'} value={form.email} placeholder={'email'} handleChangeText={(e) => setForm({...form, email: e})} otherStyles={'mt-3'}
                                   keyboardType={'email-address'}/>
                        <FormField title={'Password'} value={form.password} placeholder={'password'} handleChangeText={(e) => setForm({...form, password: e})}
                                   otherStyles={'mt-3'}/>
                        <Text className={`text-[14px] text-gray-100 leading-[20.3px] text-right mt-3`}>Forgot password</Text>
                        <CustomButton handlePress={submitForm} containerStyles={'bg-secondary mt-7 align-center justify-center w-full rounded-2xl'}
                                      title={'Log In'}/>
                    </View>
                    <View className="w-full justify-center items-center">
                        <Text className={`font-pregular text-[14px] mt-2 leading-[20.3px] text-center text-white`}>Don’t have an account?<Text
                            className={'text-secondary'} onPress={() => router.push('/sign-up')}> Signup</Text></Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default SignIn
