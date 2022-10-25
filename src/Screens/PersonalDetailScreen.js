import { View, Text, ScrollView, TouchableOpacity, Platform } from 'react-native';
import React, { useState } from 'react';
import { styles } from '../../assets/css/Styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import HeaderWithOption from '../components/HeaderWithOption';

const PersonalDetailScreen = () => {

    return (

        <View style={{ height: '100%' }}>
            <HeaderWithOption title='Personal Detail' />

            <ScrollView>

                <View style={{ marginHorizontal: 5, marginVertical: 0, }}>
                    <View style={[styles.AppDetailCon, styles.AppDetailConUpdate]}>
                        <View style={{ width: '100%' }}>
                            <Text style={[styles.AppTitle, styles.AppTitleUpdate, styles.AppMainTitle]}>General Information</Text>
                            <Text style={[styles.AppTitle, styles.AppTitleUpdate]}>Company Name:</Text>
                            <Text style={[styles.AppTxt, styles.AppTxtUpdate]}>Lloyds Pr Company</Text>
                        </View>
                    </View>
                    <View style={[styles.AppDetailCon, styles.AppDetailConUpdate]}>
                        <View style={{ width: '100%' }}>
                            <Text style={[styles.AppTitle, styles.AppTitleUpdate, styles.AppMainTitle]}>Contact Information</Text>
                            <Text style={[styles.AppTitle, styles.AppTitleUpdate]}>Name:</Text>
                            <Text style={[styles.AppTxt, styles.AppTxtUpdate]}>John Smith</Text>
                            <Text style={[styles.AppTitle, styles.AppTitleUpdate]}>Title:</Text>
                            <Text style={[styles.AppTxt, styles.AppTxtUpdate]}>John Smith</Text>
                            <Text style={[styles.AppTitle, styles.AppTitleUpdate]}>Date of Birth:</Text>
                            <Text style={[styles.AppTxt, styles.AppTxtUpdate]}>12 Aug 1999</Text>
                            <Text style={[styles.AppTitle, styles.AppTitleUpdate]}>Gender:</Text>
                            <Text style={[styles.AppTxt, styles.AppTxtUpdate]}>Male</Text>
                        </View>
                    </View>
                    
                    <View style={[styles.AppDetailCon, styles.AppDetailConUpdate]}>
                        <View style={{ width: '100%' }}>
                            <Text style={[styles.AppTitle, styles.AppTitleUpdate, styles.AppMainTitle]}>Contact Person Information</Text>
                            <Text style={[styles.AppTitle, styles.AppTitleUpdate]}>Phone Number:</Text>
                            <Text style={[styles.AppTxt, styles.AppTxtUpdate]}>2334567</Text>
                            <Text style={[styles.AppTitle, styles.AppTitleUpdate]}>Email:</Text>
                            <Text style={[styles.AppTxt, styles.AppTxtUpdate]}>info@fissionmonster.com</Text>
                            <Text style={[styles.AppTitle, styles.AppTitleUpdate]}>Website:</Text>
                            <Text style={[styles.AppTxt, styles.AppTxtUpdate]}>abc.com</Text>
                        </View>
                    </View>
                    
                    <View style={[styles.AppDetailCon, styles.AppDetailConUpdate]}>
                        <View style={{ width: '100%' }}>
                            <Text style={[styles.AppTitle, styles.AppTitleUpdate, styles.AppMainTitle]}>Address Information</Text>
                            <Text style={[styles.AppTitle, styles.AppTitleUpdate]}>Address:</Text>
                            <Text style={[styles.AppTxt, styles.AppTxtUpdate]}>address</Text>
                            <Text style={[styles.AppTitle, styles.AppTitleUpdate]}>City:</Text>
                            <Text style={[styles.AppTxt, styles.AppTxtUpdate]}>city</Text>
                            <Text style={[styles.AppTitle, styles.AppTitleUpdate]}>Province:</Text>
                            <Text style={[styles.AppTxt, styles.AppTxtUpdate]}>province</Text>
                            <Text style={[styles.AppTitle, styles.AppTitleUpdate]}>Postal Code:</Text>
                            <Text style={[styles.AppTxt, styles.AppTxtUpdate]}>445454</Text>
                            <Text style={[styles.AppTitle, styles.AppTitleUpdate]}>Country:</Text>
                            <Text style={[styles.AppTxt, styles.AppTxtUpdate]}>Pakistan</Text>

                        </View>
                    </View>
                
                    <View style={{ marginBottom: 20, }}>
                        <TouchableOpacity style={{ width: '45%', marginLeft: '25%', marginTop: 20, }} disabled={'true'}>
                            <Text style={styles.forgetBtn}>Save</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </ScrollView>

        </View>

    )
}


export default PersonalDetailScreen