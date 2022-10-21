import { View, Text, Image, TextInput, KeyboardAvoidingView, ScrollView, Button, Pressable, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { styles } from '../../assets/css/Styles';
import { ImageBackground } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Checkbox from 'expo-checkbox';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';

const CaseFormScreen = () => {
    const [isSelected, setSelection] = useState(false);
    const buttonTextStyle = {
        color: '#393939'
    };

    // const email = <FontAwesome5 name={'email'} />;

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"} >
            <ScrollView>

                <View style={styles.container}>
                    <View style={{ backgroundColor: 'black', borderBottomLeftRadius: 20, }}>

                        {/* <ImageBackground source={require('../../assets/images/headerBack.png')} resizeMode={'cover'} style={styles.SignInScreenImage}> */}
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            {/* <Image source={require('../../assets/images/back.png')} style={styles.backIcon} /> */}
                            <Icon style={styles.backIcon} name={'arrow-alt-circle-left'} color={'white'} size={30} />
                            <Text style={styles.SignInTitle}> Case Form </Text>
                        </View>
                        {/* </ImageBackground> */}
                    </View>

                    <View style={{ flex: 1 ,}}>
                        <ProgressSteps 
                        activeStepIconBorderColor= {'#6F6F6F'}
                        borderWidth= {2} 
                        completedStepIconColor= {'#6F6F6F'}
                        topOffset= {20}
                        labelFontSize= {1}>
                            <ProgressStep  nextBtnTextStyle={buttonTextStyle} previousBtnTextStyle={buttonTextStyle}>
                                <View style={{ alignItems: 'center' }}>
                                    <Text>This is the content within step 1!</Text>
                                </View>
                            </ProgressStep>
                            <ProgressStep  nextBtnTextStyle={buttonTextStyle} previousBtnTextStyle={buttonTextStyle}>
                                <View style={{ alignItems: 'center' }}>
                                    <Text>This is the content within step 2!</Text>
                                </View>
                            </ProgressStep>

                            <ProgressStep  nextBtnTextStyle={buttonTextStyle} previousBtnTextStyle={buttonTextStyle}>
                                <View style={{ alignItems: 'center' }}>
                                    <Text>This is the content within step 3!</Text>
                                </View>
                            </ProgressStep>

                            <ProgressStep  nextBtnTextStyle={buttonTextStyle} previousBtnTextStyle={buttonTextStyle}>
                                <View style={{ alignItems: 'center' }}>
                                    <Text>This is the content within step 4!</Text>
                                </View>
                            </ProgressStep>

                        </ProgressSteps>
                    </View>

                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default CaseFormScreen