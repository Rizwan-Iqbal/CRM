import { View, Text, Image, TextInput, KeyboardAvoidingView, ScrollView, Button, Pressable, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { styles } from '../../assets/css/Styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Header from '../components/Header';
const ForgetPasswordScreen = () => {
    const [isSelected, setSelection] = useState(false);

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"} >
            <ScrollView>

                <View style={styles.container}>
                   <Header title = 'Forget Password' />

                    <View style={{ alignItems: 'center', }}>
                        <Image source={require('../../assets/images/forget.png')} style={styles.signInImg}></Image>
                    </View>

                    <View>
                        <View style={styles.form}>
                           
                            <View style={styles.inputEmail}>
                                <TextInput style={styles.input}
                                    placeholder="Email"
                                />
                                <Icon style={styles.emailIcon} name={'envelope'} solid size={20} />
                            </View>
                            
                            <View style={styles.newUser}>
                                <Text style={{ fontSize: 15, color: '#474747'}}>Submit the email you signed up with to reset your password</Text>
                            </View>
                            <View>
                                <TouchableOpacity style = {{ width: '45%', marginLeft: '25%', marginTop: 20,}} disabled = {'true'}>
                                    <Text style={styles.forgetBtn} >Submit</Text>
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

export default ForgetPasswordScreen