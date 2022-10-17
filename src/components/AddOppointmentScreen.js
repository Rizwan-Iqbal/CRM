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
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { FAB } from '@rneui/themed';
import { MultiDateSelectionCalendar, DefaultTheme, Theme } from 'react-native-easy-calendar'
import englishLocale from 'dayjs/locale/en';
import { Picker } from '@react-native-picker/picker';


const AddOppointmentScreen = () => {
    const [isSelected, setSelection] = useState(false);
    const [index, setIndex] = useState(0);
    const [visible, setVisible] = React.useState(true);
    const [selectedDates, setSelectedDates] = React.useState([]);
    const [selectedLanguage, setSelectedLanguage] = useState();


    // const setMaxNumberOfSelectedDates = React.useCallback((_selectedDates) => {
    //     const MAX_DATES = 10;
    //     if (_selectedDates.length <= MAX_DATES) {
    //         setSelectedDates(_selectedDates)
    //     }
    // })

    return (

        <View style={{ height: '100%' }}>
            <View>
                <ImageBackground source={require('../../assets/images/clientHeader.png')} resizeMode={'cover'}   >
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>

                        <Icon style={[styles.backIcon, styles.AppointBackIcon]} name={'arrow-alt-circle-left'} color={'white'} size={30} />
                        <Text style={[styles.appointmentTxt]}> Add Appointment </Text>
                    </View>

                </ImageBackground>
            </View>

            <ScrollView>

                <View style={styles.form}>
                    <View style={styles.inputEmail}>
                        <Text style={styles.inputLabel}>Title</Text>
                        <TextInput style={[styles.input, styles.inputUpdate]}
                            placeholder="Full Name" />

                    </View>

                    <View style={[styles.drop , styles.dropUpdate]}>
                        <Picker
                            selectedValue={selectedLanguage}

                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedLanguage(itemValue)
                            }>
                            <Picker.Item
                                value=""
                                label="Select An Option"
                                enabled={false}
                                color='#6F6F6F'
                            />
                            <Picker.Item label="Payment issues" value="Payment issues"
                                color='#6F6F6F' />
                            <Picker.Item label="App is not working properly" value="App is not working properly" color='#6F6F6F' />
                            <Picker.Item label="Spam" value="Spam" color='#6F6F6F' />
                            <Picker.Item label="Login Error" value="Login Error"
                                color='#6F6F6F'
                            />

                        </Picker>
                    </View>
                    <View style={styles.inputEmail}>
                        <TextInput style={styles.input}
                            placeholder="Email"
                        />
                        <Icon style={styles.emailIcon} name={'envelope'} solid size={20} />
                    </View>
                    <View style={styles.inputEmail}>
                        <TextInput style={styles.input}
                            placeholder="Password" />
                        <Icon style={styles.emailIcon} name={'lock'} solid size={20} />
                        <Icon style={styles.eyeIcon} name={'eye-slash'} solid size={18} />
                    </View>
                    <View style={styles.inputEmail}>
                        <TextInput style={styles.input}
                            placeholder="Confirm Password" />
                        <Icon style={styles.emailIcon} name={'lock'} solid size={20} />
                        <Icon style={styles.eyeIcon} name={'eye-slash'} solid size={18} />

                    </View>

                    <View style={styles.inputEmail}>
                        <TextInput style={styles.input}
                            placeholder="+44" />
                        <Icon style={styles.emailIcon} name={'mobile'} solid size={20} />
                    </View>

                    <View style={styles.newUser}>
                        <Text style={styles.newUserText}>Already have an account?<Text style={{ color: 'black' }}> Sign In </Text></Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.signInBtnContainer}>
                            <Text style={styles.signInBtn}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </ScrollView>

            <View style={styles.addAppointment}>
                <FAB
                    visible={visible}
                    icon={{ name: 'add', color: 'white' }}
                    color="#6F6F6F"
                />
            </View>

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


export default AddOppointmentScreen