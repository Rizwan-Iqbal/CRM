import { View, Text, Image, KeyboardAvoidingView, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { styles } from '../../assets/css/Styles';
import Header from '../components/Header';
const ComingSoonScreen = () => {

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"} >
            <ScrollView>

                <View style={styles.container}>
                <Header title = 'Comming Soon' />

                    <View style={{ alignItems: 'center', }}>
                        <Image source={require('../../assets/images/coming.png')} heigh style={styles.notiImg}></Image>
                    </View>

                    <View>
                        <View style={styles.form}>
                            <View style={styles.newUser}>
                                <Text style={styles.noNotiTxt}>Coming Soon {'\n'}Stay Connected!</Text>

                            </View>
                            <View>
                                <TouchableOpacity style = {{ width: '45%', marginLeft: '25%',}} disabled = {'true'}>
                                    <Text style={styles.forgetBtn} >Back</Text>
                                </TouchableOpacity>
                            </View>

                        </View>

                    </View>

                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default ComingSoonScreen