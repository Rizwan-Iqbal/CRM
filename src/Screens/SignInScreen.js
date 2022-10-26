import { View, Text, Image, TextInput, KeyboardAvoidingView, ScrollView, Button, Pressable, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { styles } from '../../assets/css/Styles';
import Checkbox from 'expo-checkbox';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
    
    const navigation = useNavigation();
    const [isSelected, setSelection] = useState(false);
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"} >
            <ScrollView>

                <View style={styles.container}>
                    <Header title='Welcome Back!' />


                    <View style={{ alignItems: 'center', }}>
                        <Image source={require('../../assets/images/Sign-In-Img.png')} heigh style={styles.signInImg}></Image>
                    </View>

                    <View>
                        <View style={styles.form}>
                            <View style={styles.inputEmail}>
                                <TextInput style={styles.input}
                                    placeholder="Email"
                                />
                                <Icon style={styles.emailIcon} name={'envelope'} solid size={20} />
                            </View>
                            <View style={styles.inputEmail}>
                                <TextInput style={styles.input}
                                    placeholder="Password" />
                                <Icon style={styles.emailIcon} name={'lock'} solid size={20} />
                            </View>
                            <View style={styles.AfterFormContainer}>
                                <View style={styles.rememberContainer}>
                                    <Checkbox
                                        value={isSelected}
                                        onValueChange={setSelection}
                                        style={styles.checkbox}
                                    />
                                    <Text style={styles.rememberTxt}>Remember me</Text>

                                </View>
                                <View>
                                    <TouchableOpacity onPress={()=> navigation.navigate('Forget Password')}>
                                        <Text style={styles.forgetTxt}>Forgot Password?</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.newUser}>
                                <Text style={styles.newUserText}>New User?<Text style={{ color: 'black' }} onPress={()=> navigation.navigate('Sign Up')}> Sign Up </Text></Text>

                            </View>
                            <View>
                                <TouchableOpacity style={styles.signInBtnContainer} onPress={()=> navigation.navigate('Home')}>
                                    <Text style={styles.signInBtn}>Sign In</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                        <View style={styles.footerContainer}>

                            <Text style={styles.footerTxt}> Law case All rights reserve 2022 {'\n'}
                                Product of Fission Monster {'\n'}
                                App version V1</Text>
                        </View>
                    </View>

                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default SignInScreen