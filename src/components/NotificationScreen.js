import { View, Text, Image, TextInput, KeyboardAvoidingView, ScrollView, Button, Pressable, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { styles } from '../../assets/css/Styles';
import { ImageBackground } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Checkbox from 'expo-checkbox';
import Icon from 'react-native-vector-icons/FontAwesome5';
const NotificationScreen = () => {
    const [isSelected, setSelection] = useState(false);


    // const email = <FontAwesome5 name={'email'} />;

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"} >
            <ScrollView>

                <View style={styles.container}>
                    <View>
                        <ImageBackground source={require('../../assets/images/headerBack.png')} resizeMode={'contain'} style={styles.SignInScreenImage}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                {/* <Image source={require('../../assets/images/back.png')} style={styles.backIcon} /> */}
                                <Icon style={styles.backIcon} name={'arrow-alt-circle-left'} color={'white'} size={35} />
                                <Text style={styles.SignInTitle}> Notification </Text>
                            </View>
                        </ImageBackground>
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