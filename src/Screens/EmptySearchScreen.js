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
import { Tab, TabView } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { FAB } from '@rneui/themed';
import Header from '../components/Header';

const EmptySearchScreen = () => {
    const [isSelected, setSelection] = useState(false);
    const [index, setIndex] = useState(0);
    const [visible, setVisible] = React.useState(true);


    // const email = <FontAwesome5 name={'email'} />;

    return (

        <View style={{ height: '100%' }}>
            <View>
                <ImageBackground source={require('../../assets/images/clientHeader.png')} resizeMode={'cover'}   >
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>

                        <Icon style={[styles.backIcon, styles.caseBackIcon]} name={'arrow-alt-circle-left'} color={'white'} size={30} />
                        <Text style={[styles.SignInTitle, styles.casesTitle]}> Search </Text>
                    </View>
                    <View style={[styles.searchContainer, styles.searchContainerUpdate]}>

                        <TextInput style={[styles.searchInput, styles.searchInputUpdate]}
                            placeholder="Search" />
                        <Icon style={[styles.eyeIcon, styles.searchIconUpdate]} name={'search'} color={'#474747'} size={26} />

                    </View>
                </ImageBackground>
            </View>

            <View>

                <View style= {styles.emptySearchContainer}>

                    <Image 
                        source={require('../../assets/images/empty.png')} 
                        style = {styles.emptyImages} />
                </View>

                <View>
                    <Text style = {[styles.topTxt , styles.notFound]}>Not Found!</Text>
                </View>




            </View>



        </View>

    )
}

export default EmptySearchScreen