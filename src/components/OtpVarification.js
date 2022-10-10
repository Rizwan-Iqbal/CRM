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

const OtpVarification = () => {
    const [isSelected, setSelection] = useState(false);


    // const email = <FontAwesome5 name={'email'} />;

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"} >
            <ScrollView>

                <View style={styles.container}>
                    <View>
                        <ImageBackground source={require('../../assets/images/headerBack.png')} resizeMode={'contain'} >
                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                <Icon style={styles.backIcon} name={'arrow-alt-circle-left'} color={'white'} size={35} />
                                <Text style={styles.SignInTitle}> OTP Verification</Text>
                            </View>
                        </ImageBackground>
                    </View>

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
                                    // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                                    // onCodeChanged = {code => { this.setState({code})}}
                                    autoFocusOnLoad
                                    codeInputFieldStyle={styles.underlineStyleBase}
                                    codeInputHighlightStyle={styles.underlineStyleHighLighted}
                                // onCodeFilled={(code => {
                                //     console.log(`Code is ${code}, you are good to go!`)
                                // })}
                                />
                                {/* <Text style={styles.ResendOtpTxt}>Resend OTP</Text> */}
                                <RnOtpTimer
                                    minutes={0}
                                    seconds={10}
                                     resendButtonStyle={styles.ResendOtpTxt}
                                     resendButtonTextStyle={styles.ResendOtpTxt}
                                     text = {'Resend OTP'}
                                    // resendButtonAction={() => {
                                    //     console.log('otp resent!');
                                    // }}
                                />
                            </View>

                            <View>
                                <TouchableOpacity style = {{ width: '45%', marginLeft: '25%', marginTop: 20,}} disabled = {'true'}>
                                    <Text style={styles.forgetBtn} >Confirm</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                        {/* <View style={styles.footerContainer}>

                            <Text style={styles.footerTxt}> Law case All rights reserve 2022 {'\n'}
                                Product of Fission Monster {'\n'}
                                App version V1</Text>
                        </View> */}
                    </View>

                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default OtpVarification