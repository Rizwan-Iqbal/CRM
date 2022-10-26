import { View, Text, Image, KeyboardAvoidingView, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { styles } from '../../assets/css/Styles';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import RnOtpTimer from 'rn-otp-timer';
import Header from '../components/Header';

const OtpVarification = () => {

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"} >
            <ScrollView>

                <View style={styles.container}>
                   <Header title = 'OTP Verification' />
                    <View style={{ alignItems: 'center', }}>
                        <Image source={require('../../assets/images/otp.png')} style={styles.signInImg}></Image>
                    </View>

                    <View>
                        <View style={styles.form}>
                            <View>
                                <Text style={styles.otpTxt}>Enter OTP</Text>

                                <Text style={styles.otpInsideTxt}> Verification Code Sent to Your {'\n'}
                                    Registered E-mail.</Text>
                            </View>

                            <View style={styles.otpInput}>
                                <OTPInputView
                                    style={{ width: '100%', height: 130 }}
                                    pinCount={4}
                                    autoFocusOnLoad
                                    codeInputFieldStyle={styles.underlineStyleBase}
                                    codeInputHighlightStyle={styles.underlineStyleHighLighted} />
                               
                                <RnOtpTimer
                                    minutes={0}
                                    seconds={10}
                                     resendButtonStyle={styles.ResendOtpTxt}
                                     resendButtonTextStyle={styles.ResendOtpTxt}
                                     text = {'Resend OTP'}
                                    
                                />
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

export default OtpVarification