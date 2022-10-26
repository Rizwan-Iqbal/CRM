import { View, Text, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { styles } from '../../assets/css/Styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Tab, TabView } from '@rneui/themed';
import { SpeedDial } from '@rneui/themed';
import HeaderWithSearch from '../components/HeaderWithSearch';
import { useNavigation } from '@react-navigation/native';


const ClientScreen = () => {
    const navigation = useNavigation();
    const [index, setIndex] = useState(0);
    const [open, setOpen] = React.useState(false);

    return (

        <View style={{ height: '100%' }}>
            <HeaderWithSearch title='Clients' />
            <View style={styles.homeContainer}>
                <View>
                    <Text style={[styles.topTxt, styles.clientTopTxt]}>Contact Book</Text>
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

                        title="Personal"

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
                        title="Company"

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
                                        <Icon style={[styles.options]} name={'ellipsis-v'} color={'black'} size={20} />

                                    </View>
                                </View>

                            </View>


                        </ScrollView>
                    </TabView.Item>

                </TabView>

            </View>

            <SpeedDial
                isOpen={open}
                icon={{ name: 'add', color: '#fff' }}
                openIcon={{ name: 'close', color: '#fff' }}
                onOpen={() => setOpen(!open)}
                onClose={() => setOpen(!open)}>

                <SpeedDial.Action
                    icon={{ name: 'person', color: '#fff' }}
                    title="Personal"
                    onPress={()=> navigation.navigate('Personal Registration')}
                    style={{
                        backgroundColor: 'red'
                    }} />
                <SpeedDial.Action
                    icon={{ name: 'business', color: '#fff' }}
                    title="Company"
                    onPress={()=> navigation.navigate('Company Registration')}
                />
            </SpeedDial>


        </View>

    )
}

export default ClientScreen