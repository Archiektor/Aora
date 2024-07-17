import {useState} from 'react';
import {Alert, Image, ScrollView, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomButton from '../../components/CustomButton';
import {Link, router} from 'expo-router';

import {images} from '../../constants'
import FormField from '../../components/FormField';
import {signIn} from '../../lib/appwrite';

const SignIn = () => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const [isSubmitting, setIsSubmitting] = useState(false);


    const submitSignInForm = async () => {
        //alert('Try to submit form');
        if (!form.email || !form.password) {
            Alert.alert('Error', 'Please fill all fields');
        }
        setIsSubmitting(true);

        try {
            await signIn(form.email, form.password);

            //set it to global state ...

            router.replace('/home');
        } catch (e) {
            Alert.alert('Error', e.message());
        } finally {
            setIsSubmitting(false);
            setForm(
                {
                    email: '',
                    password: ''
                }
            )
        }


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
                        <FormField title={'Email'} value={form.email} placeholder={'Email'} handleChangeText={(e) => setForm({...form, email: e})} otherStyles={'mt-3'}
                                   keyboardType={'email-address'}/>
                        <FormField title={'Password'} value={form.password} placeholder={'Password'} handleChangeText={(e) => setForm({...form, password: e})}
                                   otherStyles={'mt-3'}/>
                        <Text className={`text-[14px] text-gray-100 leading-[20.3px] text-right mt-3`}>Forgot password</Text>
                        <CustomButton handlePress={submitSignInForm} containerStyles={'bg-secondary mt-7 align-center justify-center w-full rounded-2xl'}
                                      title={'Log In'} isLoading={isSubmitting}/>
                    </View>
                    <View className="w-full justify-center items-center pt-5 flex-row gap-2">
                        <Text className={`font-pregular text-[14px] mt-2 leading-[20.3px] text-center text-gray-100`}>Don’t have an account?<Link
                            className={'text-secondary font-psemibold text-[14px]'} href={'/sign-up'}> Signup</Link></Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default SignIn
