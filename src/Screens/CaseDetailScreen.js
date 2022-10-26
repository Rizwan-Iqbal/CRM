import { View, Text, Image, TextInput, KeyboardAvoidingView, ScrollView, Button, Pressable, TouchableOpacity, Platform } from 'react-native';
import React, { useState } from 'react';
import { styles } from '../../assets/css/Styles';
import HeaderWithOption from '../components/HeaderWithOption';

const CaseDetailScreen = () => {

    return (

        <View style={{ height: '100%' }}>
            <HeaderWithOption title='Case Details' />
            <View style={styles.menuContainer}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                    <Text style={styles.scrollItem}>Case Title</Text>
                    <Text style={[styles.scrollItem, styles.LineColor]}>|</Text>
                    <Text style={styles.scrollItem}>Basic Information</Text>
                    <Text style={[styles.scrollItem, styles.LineColor]}>|</Text>
                    <Text style={styles.scrollItem}>Hearing Information</Text>
                    <Text style={[styles.scrollItem, styles.LineColor]}>|</Text>
                    <Text style={styles.scrollItem}>FIR Information</Text>
                    <Text style={[styles.scrollItem, styles.LineColor]}>|</Text>
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
                            <Text style={[styles.AppTitle, styles.AppTitleUpdate, styles.AppMainTitle]}>Basic Information</Text>

                            <Text style={[styles.AppTitle, styles.AppTitleUpdate]}>Client:</Text>
                            <Text style={[styles.AppTxt, styles.AppTxtUpdate]}>John Smith</Text>
                            <Text style={[styles.AppTitle, styles.AppTitleUpdate]}>Location:</Text>
                            <Text style={[styles.AppTxt, styles.AppTxtUpdate]}>xyz</Text>
                            <Text style={[styles.AppTitle, styles.AppTitleUpdate]}>Case Category:</Text>
                            <Text style={[styles.AppTxt, styles.AppTxtUpdate]}>Divorce</Text>
                            <Text style={[styles.AppTitle, styles.AppTitleUpdate]}>Case Stage:</Text>
                            <Text style={[styles.AppTxt, styles.AppTxtUpdate]}>Decision Stage</Text>
                            <Text style={[styles.AppTitle, styles.AppTitleUpdate]}>Act:</Text>
                            <Text style={[styles.AppTxt, styles.AppTxtUpdate]}>abc</Text>

                        </View>
                    </View>

                    <View style={[styles.AppDetailCon, styles.AppDetailConUpdate]}>
                        <View style={{ width: '100%' }}>
                            <Text style={[styles.AppTitle, styles.AppTitleUpdate, styles.AppMainTitle]}>Hearing Information</Text>

                            <Text style={[styles.AppTitle, styles.AppTitleUpdate]}>Filling Date:</Text>
                            <Text style={[styles.AppTxt, styles.AppTxtUpdate]}>12 Aug 2022</Text>
                            <Text style={[styles.AppTitle, styles.AppTitleUpdate]}>First Hearing Date:</Text>
                            <Text style={[styles.AppTxt, styles.AppTxtUpdate]}>12 Aug 2022</Text>
                            <Text style={[styles.AppTitle, styles.AppTitleUpdate]}>Next Hearing Date:</Text>
                            <Text style={[styles.AppTxt, styles.AppTxtUpdate]}>22 Aug 2022</Text>
                            <Text style={[styles.AppTitle, styles.AppTitleUpdate]}>Opposite Laywer:</Text>
                            <Text style={[styles.AppTxt, styles.AppTxtUpdate]}>Moeen Khan</Text>
                            <Text style={[styles.AppTitle, styles.AppTitleUpdate]}>Total Fees:</Text>
                            <Text style={[styles.AppTxt, styles.AppTxtUpdate]}>122</Text>
                            <Text style={[styles.AppTitle, styles.AppTitleUpdate]}>Respondent:</Text>
                            <Text style={[styles.AppTxt, styles.AppTxtUpdate]}>Moenn Khan</Text>

                        </View>
                    </View>

                    <View style={[styles.AppDetailCon, styles.AppDetailConUpdate]}>
                        <View style={{ width: '100%' }}>
                            <Text style={[styles.AppTitle, styles.AppTitleUpdate, styles.AppMainTitle]}>FIR Information</Text>

                            <Text style={[styles.AppTitle, styles.AppTitleUpdate]}>CNR Number:</Text>
                            <Text style={[styles.AppTxt, styles.AppTxtUpdate]}>45452022</Text>
                            <Text style={[styles.AppTitle, styles.AppTitleUpdate]}>Police Station:</Text>
                            <Text style={[styles.AppTxt, styles.AppTxtUpdate]}>HajiPira</Text>
                            <Text style={[styles.AppTitle, styles.AppTitleUpdate]}>FIR Number:</Text>
                            <Text style={[styles.AppTxt, styles.AppTxtUpdate]}>2444</Text>
                            <Text style={[styles.AppTitle, styles.AppTitleUpdate]}>FIR Date:</Text>
                            <Text style={[styles.AppTxt, styles.AppTxtUpdate]}>12 Aug 2022</Text>
                            <Text style={[styles.AppTitle, styles.AppTitleUpdate]}>FIR Documents:</Text>
                            <Text style={[styles.AppTxt, styles.AppTxtUpdate]}>Choosed file </Text>
                        </View>
                    </View>

                    <View style={[styles.AppDetailCon, styles.AppDetailConUpdate]}>
                        <View style={{ width: '100%' }}>
                            <Text style={[styles.AppTitle, styles.AppTitleUpdate, styles.AppMainTitle]}>Court/ Judge Information</Text>

                            <Text style={[styles.AppTitle, styles.AppTitleUpdate]}>Court Category:</Text>
                            <Text style={[styles.AppTxt, styles.AppTxtUpdate]}>Civil Court</Text>
                            <Text style={[styles.AppTitle, styles.AppTitleUpdate]}>Court:</Text>
                            <Text style={[styles.AppTxt, styles.AppTxtUpdate]}>High Court</Text>
                            <Text style={[styles.AppTitle, styles.AppTitleUpdate]}>Judge Type:</Text>
                            <Text style={[styles.AppTxt, styles.AppTxtUpdate]}>Civil</Text>
                            <Text style={[styles.AppTitle, styles.AppTitleUpdate]}>Judge Name:</Text>
                            <Text style={[styles.AppTxt, styles.AppTxtUpdate]}>John</Text>
                            <Text style={[styles.AppTitle, styles.AppTitleUpdate]}>Description</Text>
                            <Text style={[styles.AppTxt, styles.AppTxtUpdate]}>Descriptive text is a text that explains what a person, place, or thing is like.</Text>
                            <Text style={[styles.AppTitle, styles.AppTitleUpdate]}>Remarks:</Text>
                            <Text style={[styles.AppTxt, styles.AppTxtUpdate]}>Descriptive text is a text that explains what a person, place, or thing is like.</Text>

                        </View>
                    </View>
                    <View style={{ marginBottom: 20, }}>
                        <TouchableOpacity style={{ width: '45%', marginLeft: '25%', marginTop: 20, }} >
                            <Text style={styles.forgetBtn} >Save</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </ScrollView>

        </View>
    )
}

export default CaseDetailScreen