import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { styles } from '../../assets/css/Styles';
import HeaderWithOption from '../components/HeaderWithOption';

const CompanyDetailScreen = () => {

    return (

        <View style={{ height: '100%' }}>
            <HeaderWithOption title='Company Detail' />

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
                            <Text style={[styles.AppTitle, styles.AppTitleUpdate]}>Email:</Text>
                            <Text style={[styles.AppTxt, styles.AppTxtUpdate]}>abc@gmail.com</Text>
                            <Text style={[styles.AppTitle, styles.AppTitleUpdate]}>Phone Number:</Text>
                            <Text style={[styles.AppTxt, styles.AppTxtUpdate]}>5645646464</Text>
                            <Text style={[styles.AppTitle, styles.AppTitleUpdate]}>Website:</Text>
                            <Text style={[styles.AppTxt, styles.AppTxtUpdate]}>abc.com</Text>
                            <Text style={[styles.AppTitle, styles.AppTitleUpdate]}>Address:</Text>
                            <Text style={[styles.AppTxt, styles.AppTxtUpdate]}>dha</Text>
                            <Text style={[styles.AppTitle, styles.AppTitleUpdate]}>City:</Text>
                            <Text style={[styles.AppTxt, styles.AppTxtUpdate]}>Lahore</Text>
                            <Text style={[styles.AppTitle, styles.AppTitleUpdate]}>Province:</Text>
                            <Text style={[styles.AppTxt, styles.AppTxtUpdate]}>Punjab</Text>
                            <Text style={[styles.AppTitle, styles.AppTitleUpdate]}>Postal Code:</Text>
                            <Text style={[styles.AppTxt, styles.AppTxtUpdate]}>754544</Text>
                            <Text style={[styles.AppTitle, styles.AppTitleUpdate]}>County:</Text>
                            <Text style={[styles.AppTxt, styles.AppTxtUpdate]}>Pakistan
                            </Text>
                        </View>
                    </View>
                    
                    <View style={[styles.AppDetailCon, styles.AppDetailConUpdate]}>
                        <View style={{ width: '100%' }}>
                            <Text style={[styles.AppTitle, styles.AppTitleUpdate, styles.AppMainTitle]}>Contact Person Information</Text>
                            <Text style={[styles.AppTitle, styles.AppTitleUpdate]}>Name:</Text>
                            <Text style={[styles.AppTxt, styles.AppTxtUpdate]}>John</Text>
                            <Text style={[styles.AppTitle, styles.AppTitleUpdate]}>Email:</Text>
                            <Text style={[styles.AppTxt, styles.AppTxtUpdate]}>info@fissionmonster.com</Text>
                            <Text style={[styles.AppTitle, styles.AppTitleUpdate]}>Phone Number:</Text>
                            <Text style={[styles.AppTxt, styles.AppTxtUpdate]}>2334567</Text>
                            
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

export default CompanyDetailScreen