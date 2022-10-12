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


const ClientScreen = () => {
    const [isSelected, setSelection] = useState(false);
    const [index, setIndex] = useState(false);


    // const email = <FontAwesome5 name={'email'} />;

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"} >
            <ScrollView>

                <View>
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
                            <Text style={styles.topTxt}>Case Book</Text>
                        </View>
                        <View style={styles.line} />

                    </View>
                    <View style = {{margin: 30,}}>

                        <Tab
                            value={index}
                            onChange={(e) => setIndex(e)}
                            indicatorStyle={{
                                backgroundColor: 'white',
                                height: 3,
                            }}
                            variant="primary">
                            <Tab.Item
                                title="Recent"
                                titleStyle={{ fontSize: 12 }}
                                icon={{ name: 'timer', type: 'ionicon', color: 'white' }}
                            />
                            <Tab.Item
                                title="favorite"
                                titleStyle={{ fontSize: 12 }}
                                icon={{ name: 'heart', type: 'ionicon', color: 'white' }}
                            />

                        </Tab>

                        <TabView value={index} onChange={setIndex} animationType="spring">
                            <TabView.Item style={{ backgroundColor: 'red', width: '100%' }}>
                                <Text style = {{color: 'black',}}>Recent</Text>
                                <Text style = {{color: 'black',}}>Recent</Text>
                                <Text style = {{color: 'black',}}>Recent</Text>
                                <Text style = {{color: 'black',}}>Recent</Text>
                                <Text style = {{color: 'black',}}>Recent</Text>
                                
                            </TabView.Item>
                            <TabView.Item style={{ backgroundColor: 'blue', width: '100%' }}>
                                <Text style = {{color: 'red', backgroundColor: 'green',}} >Favorite</Text>
                                <Text style = {{color: 'red',}} >Favorite</Text>

                                <Text style = {{color: 'red',}} >Favorite</Text>

                                <Text style = {{color: 'red',}} >Favorite</Text>

                            </TabView.Item>

                        </TabView>

                    </View>

                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default ClientScreen