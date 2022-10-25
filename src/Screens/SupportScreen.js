import { View, Text, Image, TextInput, KeyboardAvoidingView, ScrollView, Button, Pressable, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { styles } from '../../assets/css/Styles';
import { ImageBackground } from 'react-native';
import Checkbox from 'expo-checkbox';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Picker } from '@react-native-picker/picker';
import Header from '../components/Header';

const SupportScreen = () => {
    const [isSelected, setSelection] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState();
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"} >
            <ScrollView>

                <View style={styles.container}>
                <Header title = 'Support' />
                    

                    <View>
                        <View style={styles.form}>

                            <View >
                                <View>
                                    <Text style={[styles.otpTxt, styles.supportTopTxt]}>Topic</Text>
                                </View>
                                <View style={styles.drop}>
                                    <Picker
                                        selectedValue={selectedLanguage}

                                        onValueChange={(itemValue, itemIndex) =>
                                            setSelectedLanguage(itemValue)
                                        }>
                                        <Picker.Item
                                            value=""
                                            label="Select An Option"
                                            enabled={false}
                                            color='#6F6F6F'
                                        />
                                        <Picker.Item label="Payment issues" value="Payment issues"
                                            color='#6F6F6F' />
                                        <Picker.Item label="App is not working properly" value="App is not working properly" color='#6F6F6F' />
                                        <Picker.Item label="Spam" value="Spam" color='#6F6F6F' />
                                        <Picker.Item label="Login Error" value="Login Error"
                                            color='#6F6F6F'
                                        />

                                    </Picker>
                                </View>
                            </View>
                            <View style={{ marginVertical: 20, }}>
                                <View>
                                    <Text style={[styles.otpTxt, styles.supportTopTxt]}>How we can help you?</Text>
                                </View>
                                <TextInput
                                    multiline={true}
                                    numberOfLines={6}
                                    placeholder={'Enter Description'}
                                    style={[styles.input, styles.textArea]} />
                            </View>

                            <View>
                                <TouchableOpacity style={{ width: '45%', marginLeft: '25%', marginTop: 20, }} disabled={'true'}>
                                    <Text style={styles.forgetBtn} >Send</Text>
                                </TouchableOpacity>
                            </View>

                        </View>

                    </View>

                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default SupportScreen