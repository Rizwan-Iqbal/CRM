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



const AddOppointmentScreen = () => {
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

                <View>
                    <Text style={[styles.topTxt, styles.topTxtUp]}>Add Details</Text>
                </View>
                <View style={styles.form}>
                    <View style={styles.inputEmail}>
                        <Text style={styles.inputLabel}>Title</Text>
                        <TextInput style={[styles.input, styles.inputUpdate]}
                            placeholder="Full Name" />

                    </View>
                    <Text style={styles.inputLabel}>Client</Text>

                    <View style={[styles.drop, styles.dropUpdate]}>
                        <Picker
                            selectedValue={selectedLanguage}

                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedLanguage(itemValue)
                            }       >
                            <Picker.Item
                                value=""
                                label="Select An Option"
                                enabled={false}
                                color='#6f6f6fb3'
                                style={{ fontSize: 14.5, fontFamily: 'Poppins-semibold' }}


                            />
                            <Picker.Item label="Payment issues" value="Payment issues"
                                color='#6F6F6F'
                            />
                            <Picker.Item label="App is not working properly" value="App is not working properly" color='#6F6F6F' />
                            <Picker.Item label="Spam" value="Spam" color='#6F6F6F' />
                            <Picker.Item label="Login Error" value="Login Error"
                                color='#6F6F6F'

                            />

                        </Picker>
                    </View>

                    <View style={{ marginTop: 10, }}>
                        <Text style={styles.inputLabel}>Case Type</Text>
                        <TextInput style={[styles.input, styles.inputUpdate]}
                            placeholder="Divorce Case" />

                    </View>
                   
                    <View style = {{marginTop: 3 , marginBottom: 10,}}>
                        <View>
                        <Text style={styles.inputLabel}>Date</Text>

                            <Pressable onPress={showDatepicker}  style = {styles.date} > 
                                <Text style = {{color: '#6f6f6fb3', margin: 10, fontSize: 14,  fontFamily: 'Poppins-regular', marginTop: 13,}}>MM/DD/YYYY</Text>
                            </Pressable>
                            <Icon style={[styles.dateIcon]} name={'calendar-alt'} color={'#6f6f6fb3'} size={25} onPress={showDatepicker} />

                        </View>
                        {/* <View>
                            <Button onPress={showTimepicker} title="Show time picker!" />
                        </View> */}
                        {show && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                timeZoneOffsetInMinutes={0}
                                value={date}
                                mode={mode}
                                is24Hour={true}
                                display="default"
                                onChange={onChange}
                            />
                        )}
                    </View>

                    <View style = {{marginTop: 3 , marginBottom: 10,}}>
                        <View>
                        <Text style={styles.inputLabel}>Time</Text>

                            <Pressable onPress={showTimepicker}  style = {styles.date} > 
                                <Text style = {{color: '#6f6f6fb3', margin: 10, fontSize: 14, marginLeft: 4, fontFamily: 'Poppins-regular', marginTop: 13,}}>	HH:MM</Text>
                            </Pressable>
                            <Icon style={[styles.dateIcon]} name={'clock'} color={'#6f6f6fb3'} size={25} onPress={showTimepicker} />

                        </View>
                        {/* <View>
                            <Button onPress={showTimepicker} title="Show time picker!" />
                        </View> */}
                        {show && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                timeZoneOffsetInMinutes={0}
                                value={date}
                                mode={mode}
                                is24Hour={true}
                                display="default"
                                onChange={onChange}
                            />
                        )}
                    </View>

                    <Text style={styles.inputLabel}>Meeting Agenda</Text>

                    <TextInput
                        multiline={true}
                        numberOfLines={6}
                        // onChangeText={(text) => setState({ text })}
                        // value={this.state.text}
                        placeholder={'Meeting Agenda'}
                        style={[styles.input, styles.textArea]} />

                    <Text style={[styles.inputLabel, styles.inputLabelUpdate]}>Notes</Text>

                    <TextInput
                        multiline={true}
                        numberOfLines={6}
                        placeholder={'Notes'}
                        style={[styles.input, styles.textArea]} />



                    <View>
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


export default AddOppointmentScreen