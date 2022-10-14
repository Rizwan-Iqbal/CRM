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

const ClientScreen = () => {
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
                        <Text style={[styles.SignInTitle, styles.casesTitle]}> Clients </Text>
                    </View>
                    <View style={styles.searchContainer}>

                        <View style={styles.searchInnerContainer}>
                            <TextInput style={styles.searchInput}
                                placeholder="Search" />
                            <Icon style={[styles.eyeIcon, styles.searchIcon]} name={'search'} color={'#474747'} size={26} />

                        </View>

                        <View style={styles.settingIcon}>
                            <Image source={require('../../assets/images/set.png')}
                                style={{
                                    width: 68,
                                    height: 68,
                                }} />
                        </View>
                    </View>
                </ImageBackground>
            </View>

            <View style={styles.homeContainer}>
                <View>
                    <Text style={[styles.topTxt, styles.clientTopTxt]}>Contact Book</Text>
                </View>
                {/* <View style={styles.line} /> */}

            </View>
            <View style={{ flex: 1, }}>

                <Tab
                    value={index}
                    onChange={(e) => setIndex(e)}
                    indicatorStyle={{
                        // backgroundColor: '#6F6F6F',
                        // height: 2,
                    }}
                    disableIndicator={true}
                    containerStyle={{
                        borderColor: '#6F6F6F',
                        borderWidth: .5,
                        backgroundColor: 'white'

                    }}
                    variant="primary" >
                    <Tab.Item

                        title="Personal"

                        titleStyle={(active) => ({
                            color: active ? 'white' : "#474747",
                        })}


                        // icon={{ name: 'timer', type: 'ionicon', color: 'white' }}
                        containerStyle={(active) => ({
                            backgroundColor: active ? '#474747' : 'white',
                            borderTopLeftRadius: active ? 0 : undefined,
                            borderRadius: active ? 0 : undefined,
                            borderBottomRightRadius: active ? 15 : undefined,

                        })}
                    />
                    <Tab.Item
                        title="Company"

                        titleStyle={(active) => ({
                            color: active ? 'white' : '#474747',
                        })}
                        // icon={{ name: 'heart', type: 'ionicon', color: 'white' }}
                        containerStyle={(active) => ({
                            backgroundColor: active ? '#474747' : 'white',
                            borderTopRightRadius: active ? 0
                                : undefined,
                            borderRadius: active ? 0 : undefined,
                            borderBottomLeftRadius: active ? 15 : undefined,

                        })}
                    />

                </Tab>

                <TabView value={index} onChange={setIndex} animationType="spring">

                    <TabView.Item style={{ width: '100%' , marginTop: 8,}}>
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
                    </TabView.Item>
                    <TabView.Item style={{ width: '100%', marginTop: 8, }}>
                        <ScrollView>

                            <View style={[styles.notiContainer, styles.clientContainer]}>
                                <View style={[styles.containerInside, styles.clientMainContainer]} >

                                    <View style={styles.notiDetail}>
                                        <Text style={styles.clientID}>ID: 78651293</Text>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                            <Icon style={styles.clientIcon} name={'user'} color={'#474747'} size={16} />
                                            <Text style={[styles.notiTxt, styles.clientDetail]}>LLOYDS PR</Text>

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
                    </TabView.Item>

                </TabView>

            </View>

            <View style = {styles.addItem}>
                <FAB
                    visible={visible}
                    icon={{ name: 'add', color: 'white' }}
                    color="#6F6F6F"
                />
            </View>

        </View>

    )
}

export default ClientScreen