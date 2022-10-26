import { View, Text, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import ClientScreen from '../Screens/ClientScreen';
import CasesScreen from '../Screens/CasesScreen';
import BookingScreen from '../Screens/BookingScreen';
import SettingScreen from '../Screens/SettingScreen';
import SignInScreen from '../Screens/SignInScreen';

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (

        <View style={{ height: '100%' }} >
            <Tab.Navigator screenOptions={{
                tabBarShowLabel: true,
                headerShown: false,
                tabBarStyle: { backgroundColor: '#000000', borderTopEndRadius: 20, borderTopStartRadius: 20, height: 55, },
                tabBarInactiveTintColor: "#A9A9A9",
                tabBarActiveTintColor: "white",
                tabBarHideOnKeyboard: true,
                showIcon: true,
                initialRouteName: 'Login'
            }}>
                <Tab.Screen name="Home" component={HomeScreen} options={{
                    tabBarIcon: ({ size, color }) => (
                        <Image source={require('../../assets/images/home.png')}

                            style={{
                                color: 'red',
                                width: 30,
                                height: 24,
                                color: color
                            }}
                            color={color}

                        />
                    ),
                }} />
                <Tab.Screen name="Clients" component={ClientScreen} options={{
                    tabBarIcon: ({ size, color }) => (
                        <Image source={require('../../assets/images/client.png')}
                            style={{
                                width: 35,
                                height: 24,
                                color: { color }
                            }} />
                    )
                }} />

                <Tab.Screen name="Cases" component={CasesScreen} options={{
                    tabBarIcon: ({ size, color }) => (
                        <Image source={require('../../assets/images/casesicon.png')}
                            style={{
                                width: 34,
                                height: 31,
                                color: { color }
                            }} />
                    )
                }} />

                <Tab.Screen name="Appointnments" component={BookingScreen} options={{
                    tabBarIcon: ({ size, color }) => (
                        <Image source={require('../../assets/images/app.png')}
                            style={{
                                width: 28,
                                height: 28,

                                color: { color }
                            }} />
                    )
                }} />

                <Tab.Screen name="Settings" component={SettingScreen} options={{
                    tabBarIcon: ({ size, color }) => (
                        <Image source={require('../../assets/images/app.png')}
                            style={{
                                width: 28,
                                height: 28,

                                color: { color }
                            }} />
                    )
                }} />


            </Tab.Navigator>


        </View>
    )
}
