import { View, Text, Image, TextInput, KeyboardAvoidingView, Switch, ScrollView, Button, Pressable, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { styles } from '../../assets/css/Styles';
import { ImageBackground } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Checkbox from 'expo-checkbox';
import Icon from 'react-native-vector-icons/FontAwesome5';
const NotificationSettingScreen = () => {
    const [isSelected, setSelection] = useState(false);
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"} >
            <ScrollView>

                <View style={styles.container}>
                    <View>
                        <ImageBackground source={require('../../assets/images/headerBack.png')} resizeMode={'cover'} style={styles.SignInScreenImage}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', }}>
                                {/* <Image source={require('../../assets/images/back.png')} style={styles.backIcon} /> */}
                                <Icon style={styles.backIcon} name={'arrow-alt-circle-left'} color={'white'} size={30} />
                                <Text style={styles.SignInTitle}> Notification </Text>
                            </View>
                        </ImageBackground>
                    </View>


                    <View style={styles.homeContainer}>
                        <View>
                            <Text style={styles.topTxt}>Notifications</Text>
                        </View>
                        <View style={styles.line} />

                    </View>

                    <View style={styles.switchContainer}>
                        <View style={styles.switchContainerInside} >
                            <Text style= { styles.switchTxt}>E-mail</Text>

                        </View>

                        <View> 
                            <Switch
                                trackColor={{ false: "#767577", true: "black" }}
                                thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled} />
                        </View>
                    </View>

                    <View style={styles.switchContainer}>
                        <View style={styles.switchContainerInside} >
                            <Text style= { styles.switchTxt}>Mobile Application</Text>

                        </View>

                        <View> 
                            <Switch
                                trackColor={{ false: "#767577", true: "black" }}
                                thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled} />
                        </View>
                    </View>

                    <View style={styles.switchContainer}>
                        <View style={styles.switchContainerInside} >
                            <Text style= { styles.switchTxt}>SMS</Text>

                        </View>

                        <View> 
                            <Switch
                                trackColor={{ false: "#767577", true: "black" }}
                                thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled} />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default NotificationSettingScreen
