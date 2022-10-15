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

const SearchScreen = () => {
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
                    <View style={[styles.searchContainer , styles.searchContainerUpdate]}>
                        
                            <TextInput style={[styles.searchInput ,styles.searchInputUpdate]}
                                placeholder="Search" />
                            <Icon style={[styles.eyeIcon, styles.searchIconUpdate]} name={'search'} color={'#474747'} size={26} />

                    </View>
                </ImageBackground>
            </View>

            <View style={{ flex: 1, }}>
                <ScrollView>
                            <View style={[styles.notiContainer, styles.clientContainer]}>
                                <View style={[styles.containerInside, styles.clientMainContainer]} >

                                    <View style={styles.notiDetail}>
                                        <Text style={styles.clientID}>ID: 78651293</Text>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                            <Icon style={styles.clientIcon} name={'user'} color={'#474747'} size={16} />
                                            <Text style={[styles.notiTxt, styles.clientDetail]}>John Smith</Text>

                                        </View>

                                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                            <Icon style={styles.clientIcon} name={'envelope'} color={'#474747'} size={16} />
                                            <Text style={[styles.notiTxt, styles.clientDetail]}>info@lloyds.com</Text>

                                        </View>

                                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                            <Icon style={styles.clientIcon} name={'globe'} color={'#474747'} size={16} />
                                            <Text style={[styles.notiTxt, styles.clientDetail]}>www.lloyds.com</Text>

                                        </View>

                                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                            <Icon style={styles.clientIcon} name={'phone-alt'} color={'#474747'} size={16} />
                                            <Text style={[styles.notiTxt, styles.clientDetail]}>78125643</Text>

                                        </View>

                                    </View>
                                    <View>
                                        <Image style={styles.clentProfile}
                                            source={require('../../assets/images/clientProf.png')} />
                                    </View>
                                </View>

                            </View>

                        </ScrollView>
                    

            </View>

          

        </View>

    )
}

export default SearchScreen