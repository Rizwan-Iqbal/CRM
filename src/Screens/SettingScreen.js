import { View, Text, Image, KeyboardAvoidingView, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { styles } from '../../assets/css/Styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

const SettingScreen = () => {
    const navigation = useNavigation();
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"} >
            <ScrollView>

                <View style={styles.container}>
                    <View>
                        <View style={{ marginTop: 20, }}>
                            <Icon style={styles.backIcon} name={'arrow-alt-circle-left'} color={'#6F6F6F'} size={30} onPress={()=> navigation.goBack()} />
                            <View style={{ alignItems: 'center' }}>
                                <Image source={require('../../assets/images/account.png')}

                                    style={{
                                        width: 100,
                                        height: 100,

                                    }}
                                />
                                <View style={{ marginTop: 10, alignItems: 'center' }}>
                                    <Text style={[styles.welcome, styles.welcomeTitle]}>welcome</Text>
                                    <Text style={styles.name}>John Smith</Text>

                                    <Text style={styles.welcome}>Johnsmith@gmail.com</Text>
                                </View>

                            </View>
                        </View>
                    </View>

                    <View style={styles.settingContainer}>
                        <Text style={styles.SettingTopTxt}>General</Text>

                        <View style={styles.settingInnerCon}>
                            <Image source={require('../../assets/images/profile1.png')}

                                style={{
                                    width: 23,
                                    height: 23,

                                }}
                            />
                            <Text style={styles.settingItems} onPress={()=> navigation.navigate('Edit Profile')} >Profile Setting</Text>
                        </View>
                        <View style={styles.settingInnerCon}>
                            <Image source={require('../../assets/images/password.png')}

                                style={{
                                    width: 22,
                                    height: 22,
                                }}
                            />
                            <Text style={styles.settingItems} onPress={()=> navigation.navigate('Reset Password')} >Change Password</Text>

                        </View>

                        <View style={styles.settingInnerCon}>
                            <Image source={require('../../assets/images/notifications-active.png')}

                                style={{
                                    width: 22,
                                    height: 22,
                                }}
                            />

                            <Text style={styles.settingItems} onPress={()=> navigation.navigate('Notification')}>Notifications</Text>

                        </View>
                        <View style={styles.settingInnerCon}>
                            <Icon style={{ marginRight: 7, }} name={'dollar-sign'} color={'#6F6F6F'} size={25}
                            />
                            <Text style={styles.settingItems}>Payments</Text>

                        </View>

                        <View style={styles.settingInnerCon}>
                            <Image source={require('../../assets/images/help.png')}

                                style={{
                                    width: 22,
                                    height: 22,
                                }}
                            />
                            <Text style={styles.settingItems} onPress={()=> navigation.navigate('Support')}>Support</Text>

                        </View>
                        <View style={styles.settingInnerCon}>
                            <Icon style={{}} name={'sign-out-alt'} color={'#6F6F6F'} size={25} />
                            <Text style={styles.settingItems}>Sign Out</Text>

                        </View>

                    </View>

                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default SettingScreen