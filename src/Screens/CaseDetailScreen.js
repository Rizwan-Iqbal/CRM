import { View, Text, Image, TextInput, KeyboardAvoidingView, ScrollView, Button, Pressable, TouchableOpacity, Platform } from 'react-native';
import React, { useState } from 'react';
import { styles } from '../../assets/css/Styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import HeaderWithOption from '../components/HeaderWithOption';


const CaseDetailScreen = () => {

    return (

        <View style={{ height: '100%' }}>
            <HeaderWithOption title='Case Details' />
            <View style={styles.menuContainer}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity>
                    <Text style={styles.scrollItem}>Case Title</Text>
                    </TouchableOpacity>
                    <Text style={[styles.scrollItem , styles.LineColor]}>|</Text>
                    <TouchableOpacity>
                    <Text style={styles.scrollItem}>Basic Information</Text>
                    </TouchableOpacity>
                    <Text style={[styles.scrollItem , styles.LineColor]}>|</Text>
                    <TouchableOpacity>
                    <Text style={styles.scrollItem}>Hearing Information</Text>
                    </TouchableOpacity>
                    <Text style={[styles.scrollItem , styles.LineColor]}>|</Text>
                    <TouchableOpacity>
                    <Text style={styles.scrollItem}>FIR Information</Text>
                    </TouchableOpacity>
                    <Text style={[styles.scrollItem , styles.LineColor]}>|</Text>
                    <TouchableOpacity></TouchableOpacity>

                    <Text style={styles.scrollItem}>Court Judge Information</Text>
                </ScrollView>
            </View>

            <ScrollView>

                <View style={{ marginHorizontal: 5, marginVertical: 0, }}>
                    <View style={[styles.AppDetailCon]}>
                        <View style={{ width: '100%' }}>

                            <Text style={styles.AppTitle}>Case Title:</Text>
                            <Text style={[styles.AppTxt]}>John Smith</Text>

                            <Text style={styles.AppTitle}>Case Number:</Text>
                            <Text style={[styles.AppTxt]}>752</Text>
                        </View>

                    </View>
                </View>

                <View style={{ marginHorizontal: 5, marginVertical: 0, }}>
                    <View style={[styles.AppDetailCon, styles.AppDetailConUpdate]}>
                        <View style={{ width: '100%' }}>

                            <Text style={[styles.AppTitle, styles.AppTitleUpdate]}>Title:</Text>
                            <Text style={[styles.AppTxt, styles.AppTxtUpdate]}>John Smith</Text>
                            <Text style={[styles.AppTitle, styles.AppTitleUpdate]}>Client:</Text>
                            <Text style={[styles.AppTxt, styles.AppTxtUpdate]}>755644</Text>
                            <Text style={[styles.AppTitle, styles.AppTitleUpdate]}>Case Type:</Text>
                            <Text style={[styles.AppTxt, styles.AppTxtUpdate]}>Divorce</Text>
                            <Text style={[styles.AppTitle, styles.AppTitleUpdate]}>Date:</Text>
                            <Text style={[styles.AppTxt, styles.AppTxtUpdate]}>20 October 2022</Text>
                            <Text style={[styles.AppTitle, styles.AppTitleUpdate]}>Time:</Text>
                            <Text style={[styles.AppTxt, styles.AppTxtUpdate]}>12.00 PM</Text>
                            <Text style={[styles.AppTitle, styles.AppTitleUpdate]}>Motive:</Text>
                            <Text style={[styles.AppTxt, styles.AppTxtUpdate]}>Descriptive text is a text that
                                explains what a person, place,
                                or thing is like.</Text>

                            <Text style={[styles.AppTitle, styles.AppTitleUpdate]}>Notes:</Text>
                            <Text style={[styles.AppTxt, styles.AppTxtUpdate]}>Descriptive text is a text that
                                explains what a person, place,
                                or thing is like.</Text>
                        </View>


                    </View>
                    <View style={{ marginBottom: 20, }}>
                        <TouchableOpacity style={{ width: '45%', marginLeft: '25%', marginTop: 20, }} disabled={'true'}>
                            <Text style={styles.forgetBtn} >Send</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </ScrollView>

        </View>

    )
}


export default CaseDetailScreen