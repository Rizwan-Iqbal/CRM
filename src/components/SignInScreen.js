import { View, Text, Image, TextInput } from 'react-native';
import React from 'react';
import { styles } from '../../assets/css/Styles';
import { ImageBackground } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const SignInScreen = () => {


    return (
        <View>
            <View>
                <ImageBackground source={require('../../assets/images/signInBg.png')} resizeMode={'contain'} style={styles.SignInScreenImage}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <Image source={require('../../assets/images/back.png')} style={styles.backIcon} />
                        <Text style={styles.SignInTitle}> Welcome Back! </Text>
                    </View>
                </ImageBackground>
            </View>

            <View style={{ alignItems: 'center', }}>
                <Image source={require('../../assets/images/signInImg.png')} style={styles.signInImg}></Image>
            </View>

            <View>


            </View>

        </View>
    )
}

export default SignInScreen