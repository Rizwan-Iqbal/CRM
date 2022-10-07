import { View, Text, Image, TextInput, KeyboardAvoidingView, ScrollView, } from 'react-native';
import React from 'react';
import { styles } from '../../assets/css/Styles';
import { ImageBackground } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Checkbox from 'expo-checkbox';

const SignInScreen = () => {


    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"} >
            <ScrollView>

                <View style={styles.container}>
                    <View>
                        <ImageBackground source={require('../../assets/images/signInBg.png')} resizeMode={'contain'} style={styles.SignInScreenImage}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                <Image source={require('../../assets/images/back.png')} style={styles.backIcon} />
                                <Text style={styles.SignInTitle}> Welcome Back! </Text>
                            </View>
                        </ImageBackground>
                    </View>

                    <View style={{ alignItems: 'center', }}>
                        <Image source={require('../../assets/images/signInImg.png')} style={styles.signInImg}></Image>
                    </View>

                    <View>
                        <View style={styles.form}>
                            <TextInput style={styles.input}
                                placeholder="Email" />
                            <TextInput style={styles.input}
                                placeholder="Password" />

                            <View>
                                <View style = {styles.rememberContainer}>
                                    <Checkbox
                                        // value={isSelected}
                                        // onValueChange={setSelection}
                                        style={styles.checkbox}
                                    /> 
                                    <Text style={styles.rememberTxt}>Remember me</Text>

                                </View>
                            </View>
                        </View>
                    </View>

                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default SignInScreen