import { View, Text, Image, TextInput, ScrollView, Button, Pressable, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { styles } from '../../assets/css/Styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Tab, TabView } from '@rneui/themed';
import { FAB } from '@rneui/themed';
import HeaderWithSearch from '../components/HeaderWithSearch';
import { useNavigation } from '@react-navigation/native';


const CasesScreen = () => {
    const navigation = useNavigation();
    const [index, setIndex] = useState(0);
    const [visible, setVisible] = React.useState(true);

    return (

        <View style={{ height: '100%' }}>
            <HeaderWithSearch title='Cases' />

            <View style={styles.homeContainer}>
                <View>
                    <Text style={[styles.topTxt, styles.clientTopTxt]}>Case Book</Text>
                </View>
            </View>
            <View style={{ flex: 1, }}>

                <Tab
                    value={index}
                    onChange={(e) => setIndex(e)}
                    indicatorStyle={{
                    }}
                    disableIndicator={true}
                    containerStyle={{
                        borderColor: '#6F6F6F',
                        borderWidth: .5,
                        backgroundColor: 'white'
                    }}
                    variant="primary" >
                    <Tab.Item

                        title="On-Going"

                        titleStyle={(active) => ({
                            color: active ? 'white' : "#474747",
                        })}
                        containerStyle={(active) => ({
                            backgroundColor: active ? '#474747' : 'white',
                            borderTopLeftRadius: active ? 0 : undefined,
                            borderRadius: active ? 0 : undefined,
                            borderBottomRightRadius: active ? 15 : undefined,
                        })}
                    />
                    <Tab.Item
                        title="Completed"

                        titleStyle={(active) => ({
                            color: active ? 'white' : '#474747',
                        })}
                   
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

                    <TabView.Item style={{ width: '100%', marginTop: 8, }}>
                        <ScrollView>
                            <View style={[styles.notiContainer, styles.clientContainer]}>
                                <View style={[styles.containerInside, styles.clientMainContainer]} >

                                    <View style={styles.notiDetail}>
                                        <Text style={styles.clientID}>CASE ID: 462</Text>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                            <Icon style={styles.clientIcon} name={'user'} color={'#474747'} size={16} />
                                            <Text style={[styles.notiTxt, styles.clientDetail]}>Lloyds pr</Text>

                                        </View>

                                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                            <Icon style={styles.clientIcon} name={'file-alt'} color={'#474747'} size={16} />
                                            <Text style={[styles.notiTxt, styles.clientDetail]}>Divorce case</Text>
                                        </View>

                                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                            <Icon style={styles.clientIcon} name={'envelope'} color={'#474747'} size={16} />
                                            <Text style={[styles.notiTxt, styles.clientDetail]}>info@lloyds.com</Text>
                                        </View>

                                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                            <Icon style={styles.clientIcon} name={'phone-alt'} color={'#474747'} size={16} />
                                            <Text style={[styles.notiTxt, styles.clientDetail]}>78125643</Text>
                                        </View>
                                    </View>
                                    <View>
                                        <Image style={styles.clentProfile}
                                            source={require('../../assets/images/clientProf.png')} />
                                        <Icon style={[styles.options]} name={'ellipsis-v'} color={'black'} size={20} />
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
                                        <Text style={styles.clientID}>CASE ID: 462</Text>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                            <Icon style={styles.clientIcon} name={'user'} color={'#474747'} size={16} />
                                            <Text style={[styles.notiTxt, styles.clientDetail]}>Lloyds pr</Text>

                                        </View>

                                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                            <Icon style={styles.clientIcon} name={'file-alt'} color={'#474747'} size={16} />
                                            <Text style={[styles.notiTxt, styles.clientDetail]}>Divorce case</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                            <Icon style={styles.clientIcon} name={'envelope'} color={'#474747'} size={16} />
                                            <Text style={[styles.notiTxt, styles.clientDetail]}>info@lloyds.com</Text>

                                        </View>

                                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                            <Icon style={styles.clientIcon} name={'phone-alt'} color={'#474747'} size={16} />
                                            <Text style={[styles.notiTxt, styles.clientDetail]}>78125643</Text>
                                        </View>
                                    </View>
                                    <View>
                                        <Image style={styles.clentProfile}
                                            source={require('../../assets/images/clientProf.png')} />
                                        <Icon style={[styles.options]} name={'ellipsis-v'} color={'black'} size={20} />
                                    </View>
                                </View>

                            </View>
                        </ScrollView>
                    </TabView.Item>

                </TabView>

            </View>
            <View style={styles.addItem}>
                <FAB
                    visible={visible}
                    icon={{ name: 'add', color: 'white' }}
                    color="#6F6F6F"
                    onPress={()=> navigation.navigate('Add Case')}/>
            </View>

        </View>

    )
}

export default CasesScreen