import { View, Text, Image, TextInput, KeyboardAvoidingView, ScrollView, Button, Pressable, TouchableOpacity, Platform } from 'react-native';
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
import { MultiDateSelectionCalendar, DefaultTheme, Theme } from 'react-native-easy-calendar'
import englishLocale from 'dayjs/locale/en';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';



const AppointmentDetailScreen = () => {
    const [isSelected, setSelection] = useState(false);
    const [index, setIndex] = useState(0);
    const [visible, setVisible] = React.useState(true);
    const [selectedDates, setSelectedDates] = React.useState([]);
    const [selectedLanguage, setSelectedLanguage] = useState();
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);


    // const setMaxNumberOfSelectedDates = React.useCallback((_selectedDates) => {
    //     const MAX_DATES = 10;
    //     if (_selectedDates.length <= MAX_DATES) {
    //         setSelectedDates(_selectedDates)
    //     }
    // })

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
            <View style={{ backgroundColor: 'black', borderBottomLeftRadius: 20, }}>
                {/* <ImageBackground source={require('../../assets/images/clientHeader.png')} resizeMode={'cover'}   > */}
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>

                    <Icon style={[styles.backIcon, styles.AppointBackIcon]} name={'arrow-alt-circle-left'} color={'white'} size={30} />
                    <Text style={[styles.appointmentTxt]}>Appointment Details </Text>
                    <Icon style={[styles.backIcon, styles.AppointBackIcon]} name={'ellipsis-v'} color={'white'} size={20} />

                </View>

                {/* </ImageBackground> */}
            </View>

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
        // fontFamily: 'Poppins-regular',
    },

    titleText: {
        fontFamily: 'Poppins-semibold',
    },

    normalDayText: {
        fontFamily: 'Poppins-regular',
    },

    // normalMonthText: {
    //     fontFamily: 'Poppins-semibold',
    //     marginLeft: '35%',
    // },

    normalArrowImage: {
        color: 'black',

    },
    selectedMonthText: {
        color: 'black',
    },

    // calendarContainer: {
    //     backgroundColor: 'white',
    //     shadowColor: "#6F6F6F",
    //     shadowOffset: {
    //         width: 0,
    //         height: 12,
    //     },
    //     shadowOpacity: 0.58,
    //     shadowRadius: 16.00,
    //     elevation: 16,
    //     height: 400,
    //     // marginHorizontal: 10,
    // },



};


export default AppointmentDetailScreen