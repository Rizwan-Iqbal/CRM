import { View, Text, KeyboardAvoidingView, Switch, ScrollView, } from 'react-native';
import React, { useState } from 'react';
import { styles } from '../../assets/css/Styles';
import Header from '../components/Header';

const NotificationSettingScreen = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"} >
            <ScrollView>

                <View style={styles.container}>
                <Header title = 'Notification' />
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

