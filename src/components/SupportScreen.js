import { View, Text, Image, TextInput, KeyboardAvoidingView, ScrollView, Button, Pressable, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { styles } from '../../assets/css/Styles';
import { ImageBackground } from 'react-native';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Checkbox from 'expo-checkbox';
import Icon from 'react-native-vector-icons/FontAwesome5';
// import OTPInputView from '@twotalltotems/react-native-otp-input';
// import RnOtpTimer from 'rn-otp-timer';
// import SelectDropdown from 'react-native-select-dropdown';
import { Picker } from '@react-native-picker/picker';
// import ImagePicker from 'react-native-image-crop-picker';




// const issues = ["Payment issues", "App is not working properly", "Spam", "Login Error"]


const SupportScreen = () => {
    const [isSelected, setSelection] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState();


    // const email = <FontAwesome5 name={'email'} />;

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"} >
            <ScrollView>

                <View style={styles.container}>
                    <View>
                        <ImageBackground source={require('../../assets/images/headerBack.png')} resizeMode={'cover'} >
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                                <Icon style={styles.backIcon} name={'arrow-alt-circle-left'} color={'white'} size={30} />
                                <Text style={styles.SignInTitle}> Support</Text>
                            </View>
                        </ImageBackground>
                    </View>



                    <View>
                        <View style={styles.form}>

                            <View>
                                <View>
                                    <Text style={[styles.otpTxt, styles.supportTopTxt]}>Topic</Text>
                                </View>
                                <View style = {styles.drop}>
                                <Picker
                                    selectedValue={selectedLanguage}
                                   
                                    onValueChange={(itemValue, itemIndex) =>
                                        setSelectedLanguage(itemValue)
                                    }>
                                    <Picker.Item label="Java" value="java" />
                                    <Picker.Item label="JavaScript" value="js" />
                                </Picker>
                                </View>
                            </View>
                            <View>
                                <View>
                                    <Text style={[styles.otpTxt, styles.supportTopTxt]}>How we can help you?</Text>
                                </View>
                                <TextInput
                                    multiline={true}
                                    numberOfLines={6}
                                    // onChangeText={(text) => setState({ text })}
                                    // value={this.state.text}
                                    style = {[styles.input , styles.textArea]} />
                            </View>

                            <View>
                                <TouchableOpacity style={{ width: '45%', marginLeft: '25%', marginTop: 20, }} disabled={'true'}>
                                    <Text style={styles.forgetBtn} >Confirm</Text>
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