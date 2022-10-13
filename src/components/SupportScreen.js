import { View, Text, Image, TextInput, KeyboardAvoidingView, ScrollView, Button, Pressable, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { styles } from '../../assets/css/Styles';
import { ImageBackground } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Checkbox from 'expo-checkbox';
import Icon from 'react-native-vector-icons/FontAwesome5';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import RnOtpTimer from 'rn-otp-timer';

const SupportScreen = () => {
    const [isSelected, setSelection] = useState(false);


    // const email = <FontAwesome5 name={'email'} />;

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"} >
            <ScrollView>

                <View style={styles.container}>
                    <View>
                        <ImageBackground source={require('../../assets/images/headerBack.png')} resizeMode={'cover'} >
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                                <Icon style={styles.backIcon} name={'arrow-alt-circle-left'} color={'white'} size={30} />
                                <Text style={styles.SignInTitle}> Support</Text>
                            </View>
                        </ImageBackground>
                    </View>

                    

                    <View>
                        <View style={styles.form}>
                            <View>
                                <Text style= {[styles.otpTxt , styles.supportTopTxt]}>Topic</Text>

                               
                            </View>

                           

                            <View>
                                <TouchableOpacity style = {{ width: '45%', marginLeft: '25%', marginTop: 20,}} disabled = {'true'}>
                                    <Text style={styles.forgetBtn} >Confirm</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    
                    </View>

                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default SupportScreen