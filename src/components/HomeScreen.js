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

const HomeScreen = () => {
    const [isSelected, setSelection] = useState(false);


    // const email = <FontAwesome5 name={'email'} />;

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"} >
            <ScrollView>

                <View>
                    <View>
                        <ImageBackground source={require('../../assets/images/homeHeader.png')} resizeMode={'cover'} style={styles.image} >
                            <View style={{ flexDirection: 'row' }}>
                                <View>
                                    <Text style={styles.HomeTitle}> Law Case </Text>
                                </View>
                                <View style={styles.headerRight}>
                                    <Icon name={'question-circle'} color={'white'} size={25} />
                                    <Icon name={'bell'} color={'white'} size={25} style={{ paddingHorizontal: 15, }}   />
                                </View>
                            </View>
                            <View style={styles.profileContainer}>
                                <View>
                                    <Image style={styles.profile}
                                        source={require('../../assets/images/profile.png')} />
                                </View>
                                <View style={styles.userDetail}>
                                    <Text style={styles.userWelcome}>Welcome</Text>
                                    <Text style={styles.userName}>John Smith</Text>
                                </View>
                            </View>
                        </ImageBackground>
                    </View>

                    <View style={styles.homeContainer}>
                        <View>
                            <Text style={styles.topTxt}>Select the Option</Text>
                        </View>
                        <View style={styles.line} />

                    </View>
                    <View style={styles.ItemsContainer}>
                        <View style={styles.left}>
                            <TouchableOpacity>
                                <View style={styles.singleItem}>
                                    <ImageBackground source={require('../../assets/images/clients.png')} resizeMode={'cover'} style={styles.clientsBackImg} >
                                        <View style={styles.clientsIcon}>
                                        <Image source={require('../../assets/images/client.png')}
                                                style={{
                                                    width: 123,
                                                    height: 87,
                                                }} />
                                        </View>
                                        <View>
                                            <Text style={styles.title}>Clients</Text>
                                        </View>
                                    </ImageBackground>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <View style={styles.singleItem}>
                                    <ImageBackground source={require('../../assets/images/appointment.png')} resizeMode={'cover'} style={styles.clientsBackImg} >
                                        <View style={styles.clientsIcon}>
                                        <Image source={require('../../assets/images/oppIcon.png')}
                                                style={{
                                                    width: 75,
                                                    height: 75,
                                                }} />
                                        </View>
                                        <View>
                                            <Text style={styles.title}>Appointments</Text>
                                        </View>
                                    </ImageBackground>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <View>
                                    <ImageBackground source={require('../../assets/images/prof.png')} resizeMode={'cover'} style={styles.casesBackImg} >
                                        <View style={styles.casesIcon}>
                                        <Image source={require('../../assets/images/profile1.png')}
                                                style={{
                                                    width: 45,
                                                    height: 45,
                                                }} />
                                        </View>
                                        <View>
                                            <Text style={styles.title}>Profile</Text>
                                        </View>
                                    </ImageBackground>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.singleItem}>
                                    <ImageBackground source={require('../../assets/images/setting.png')} resizeMode={'cover'} style={styles.clientsBackImg} >
                                        <View style={styles.clientsIcon}>
                                        <Image source={require('../../assets/images/setIcon.png')}
                                                style={{
                                                    width: 80,
                                                    height: 80,
                                                }} />
                                        </View>
                                        <View>
                                            <Text style={styles.title}>Setting</Text>
                                        </View>
                                    </ImageBackground>
                                </View>
                            </TouchableOpacity>


                        </View>

                        <View style={styles.right} >
                            <TouchableOpacity>
                                <View>
                                    <ImageBackground source={require('../../assets/images/cases.png')} resizeMode={'cover'} style={styles.casesBackImg} >
                                        <View style={styles.casesIcon}>
                                            {/* <Icon name={'gavel'} color={'white'} size={40} /> */}
                                            <Image source={require('../../assets/images/casesicon.png')}
                                                style={{
                                                    width: 45,
                                                    height: 45,
                                                }} />
                                        </View>
                                        <View>
                                            <Text style={styles.title}>Cases</Text>
                                        </View>
                                    </ImageBackground>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.singleItem}>
                                    <ImageBackground source={require('../../assets/images/invoicing.png')} resizeMode={'cover'} style={styles.clientsBackImg} >
                                        <View style={styles.clientsIcon}>
                                            <Image source={require('../../assets/images/invoiceIcon.png')}
                                                style={{
                                                    width: 75,
                                                    height: 75,
                                                }} />
                                        </View>
                                        <View>
                                            <Text style={styles.title}>Invoicing</Text>
                                        </View>
                                    </ImageBackground>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <View style={styles.singleItem}>
                                    <ImageBackground source={require('../../assets/images/marketing.png')} resizeMode={'cover'} style={styles.clientsBackImg} >
                                        <View style={styles.clientsIcon}>
                                        <Image source={require('../../assets/images/markIcon.png')}
                                                style={{
                                                    width: 106,
                                                    height: 88,
                                                }} />
                                        </View>
                                        <View>
                                            <Text style={styles.title}>Marketing</Text>
                                        </View>
                                    </ImageBackground>
                                </View>
                            </TouchableOpacity>



                        </View>

                    </View>

                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default HomeScreen