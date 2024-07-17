import {useState} from 'react';
import {Alert, Image, ScrollView, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomButton from '../../components/CustomButton';
import {Link, router} from 'expo-router';

import {images} from '../../constants'
import FormField from '../../components/FormField';
import {createUser} from '../../lib/appwrite';

const SignUp = () => {
    const [form, setForm] = useState({
        username: '',
        email: '',
        password: ''
    })

    const [isSubmitting, setIsSubmitting] = useState(false);


    const submitSignUpForm = async () => {
        //alert('Try to submit form');
        if (!form.username || !form.email || !form.password) {
            Alert.alert('Error', 'Please fill all fields');
        }
        setIsSubmitting(true);

        try {
            const result = await createUser(form.email, form.password, form.username);

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
                        <Text className={'text-2xl text-white mt-5 font-psemibold'}>Sign Up</Text>
                        <FormField title={'Username'} value={form.username} placeholder={'Username'} handleChangeText={(e) => setForm({...form, username: e})}
                                   otherStyles={'mt-3'}/>
                        <FormField title={'Email'} value={form.email} placeholder={'Email'} handleChangeText={(e) => setForm({...form, email: e})} otherStyles={'mt-3'}
                                   keyboardType={'email-address'}/>
                        <FormField title={'Password'} value={form.password} placeholder={'Password'} handleChangeText={(e) => setForm({...form, password: e})}
                                   otherStyles={'mt-3'}/>
                        <CustomButton handlePress={submitSignUpForm} containerStyles={'bg-secondary mt-7 align-center justify-center w-full rounded-2xl'}
                                      title={'Sign Up'} isLoading={isSubmitting}/>
                    </View>
                    <View className="w-full justify-center items-center pt-5 flex-row gap-2">
                        <Text className={`font-pregular text-[14px] mt-2 leading-[20.3px] text-center text-gray-100`}>Already have an account?<Link
                            className={'text-secondary font-psemibold text-[14px]'} href={'/sign-in'}> Login</Link></Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default SignUp
