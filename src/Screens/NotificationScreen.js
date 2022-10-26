import { View, Text, Image, KeyboardAvoidingView, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { styles } from '../../assets/css/Styles';
import Header from '../components/Header';
const NotificationScreen = () => {

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"} >
            <ScrollView>

                <View style={styles.container}>
                   <Header title = 'Notification' />

                    <View style={styles.notiContainer}>
                        <View style ={ styles.containerInside} >
                            <View>
                                <Image style={styles.notiProfile}
                                    source={require('../../assets/images/profile.png')} />
                            </View>
                            <View style={styles.notiDetail}>
                                <Text style={styles.notiName}>John Smith</Text>
                                <Text style={styles.notiTxt}>It is a long established fact that a reader
                                </Text>
                            </View>
                        </View>

                        <View>
                            <Text style = {styles.notiDate}>11 Sep 2022</Text>
                        </View>
                    </View>

                    <View style={styles.notiContainer}>
                        <View style ={ styles.containerInside} >
                            <View>
                                <Image style={styles.notiProfile}
                                    source={require('../../assets/images/profile.png')} />
                            </View>
                            <View style={styles.notiDetail}>
                                <Text style={styles.notiName}>John Smith</Text>
                                <Text style={styles.notiTxt}>It is a long established fact that a reader
                                </Text>
                            </View>
                        </View>

                        <View>
                            <Text style = {styles.notiDate}>11 Sep 2022</Text>
                        </View>
                    </View>

                    <View style={styles.notiContainer}>
                        <View style ={ styles.containerInside} >
                            <View>
                                <Image style={styles.notiProfile}
                                    source={require('../../assets/images/profile.png')} />
                            </View>
                            <View style={styles.notiDetail}>
                                <Text style={styles.notiName}>John Smith</Text>
                                <Text style={styles.notiTxt}>It is a long established fact that a reader
                                </Text>
                            </View>
                        </View>

                        <View>
                            <Text style = {styles.notiDate}>11 Sep 2022</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default NotificationScreen