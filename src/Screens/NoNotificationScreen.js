import { View, Text, Image, KeyboardAvoidingView, ScrollView, Pressable, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { styles } from '../../assets/css/Styles';
import Header from '../components/Header';
const NoNotificationScreen = () => {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"} >
            <ScrollView>

                <View style={styles.container}>
                <Header title = 'Notification' />


                    <View style={{ alignItems: 'center', }}>
                        <Image source={require('../../assets/images/no.png')} heigh style={styles.notiImg}></Image>
                    </View>

                    <View>
                        <View style={styles.form}>
                            <View style={styles.newUser}>
                            <Text style={styles.noNotiTxt}>No Notifications</Text>

                            </View>
                        </View>
                        
                    </View>

                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default NoNotificationScreen