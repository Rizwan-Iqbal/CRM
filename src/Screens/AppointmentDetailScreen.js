import { View, Text, ScrollView, TouchableOpacity, Platform } from 'react-native';
import React, { useState } from 'react';
import { styles } from '../../assets/css/Styles';
import { MultiDateSelectionCalendar, DefaultTheme, Theme } from 'react-native-easy-calendar'
import HeaderWithOption from '../components/HeaderWithOption';

const AppointmentDetailScreen = () => {
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = currentMode => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    return (

        <View style={{ height: '100%'}}>
            <HeaderWithOption title = 'Appointment Details' />

            <ScrollView>

                <View style={{ marginHorizontal: 5, marginVertical: 0, }}>
                    <View style={[styles.AppDetailCon]}>
                        <View style={{ width: '100%' }}>

                            <Text style={styles.AppTitle}>Appointment Title:</Text>
                            <Text style={[styles.AppTxt]}>John Smith</Text>

                            <Text style={styles.AppTitle}>Appointment Number:</Text>
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
                    <View style = {{marginBottom: 20,}}>
                        <TouchableOpacity style={{ width: '45%', marginLeft: '25%', marginTop: 20, }} disabled={'true'}>
                            <Text style={styles.forgetBtn} >Send</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </ScrollView>

        </View>

    )
}

const CustomTheme: Theme = {
    ...DefaultTheme,
    selectedDayContainer: {
        backgroundColor: '#6F6F6F',
        width: 28,
        height: 28,
        borderRadius: 50,
        paddingRight: 5,
        paddingTop: 2,
        marginTop: 5,
        marginLeft: 13,
    },

    selectedDayText: {
        color: 'white',
    },

    titleText: {
        fontFamily: 'Poppins-semibold',
    },

    normalDayText: {
        fontFamily: 'Poppins-regular',
    },

    normalArrowImage: {
        color: 'black',

    },
    selectedMonthText: {
        color: 'black',
    },

};


export default AppointmentDetailScreen