import { View, Text, Image, TextInput, KeyboardAvoidingView, ScrollView, Button, Pressable, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Link } from '@react-navigation/native';
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
import AddAppointmentScreen from './AddAppointmentScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const BookingScreen = ({navigation}) => {
    const [isSelected, setSelection] = useState(false);
    const [index, setIndex] = useState(0);
    const [visible, setVisible] = React.useState(true);
    const [selectedDates, setSelectedDates] = React.useState([]);


    // const setMaxNumberOfSelectedDates = React.useCallback((_selectedDates) => {
    //     const MAX_DATES = 10;
    //     if (_selectedDates.length <= MAX_DATES) {
    //         setSelectedDates(_selectedDates)
    //     }
    // })

    return (

        <View style={{ height: '100%' }}>
            <View style={{ backgroundColor: 'black', borderBottomLeftRadius: 20, }}>
                {/* <ImageBackground source={require('../../assets/images/clientHeader.png')} resizeMode={'cover'} style = {{height: 200,}}  > */}
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>

                    <Icon style={[styles.backIcon, styles.caseBackIcon]} name={'arrow-alt-circle-left'} color={'white'} size={30} />
                    <Text style={[styles.SignInTitle, styles.casesTitle]}> Appointments </Text>
                </View>
                <View style={[styles.searchContainer, styles.searchContainerUpdate]}>

                    <TextInput style={[styles.searchInput, styles.searchInputUpdate]}
                        placeholder="Search" />
                    <Icon style={[styles.eyeIcon, styles.searchIconUpdate]} name={'search'} color={'#474747'} size={26} />

                </View>

                {/* </ImageBackground> */}
            </View>
            <ScrollView>

                <View>

                    <View>
                        <Text style={[styles.topTxt, styles.topTxtAppointment]}>Appointment Book</Text>
                    </View>
                    <View style={{ height: '45%' }}>
                        <MultiDateSelectionCalendar
                            // disabledDates={['2020-01-01', '2020-03-04']}
                            initVisibleDate={'2022-10-17'} // defaults to current date
                            minDate={'2022-10-17'}
                            maxDate={'2050-04-10'}
                            allowYearView={true}
                            showExtraDates={true}
                            testID={'my-calendar-component'}
                            locale={englishLocale} // defaults to en-CA
                            theme={CustomTheme}
                            onSelectDates={setSelectedDates}
                            selectedDates={selectedDates} />

                    </View>

                </View>

                <View>
                    <Text style={[styles.topTxt, styles.topTxtAppointment, styles.bottomAppointTxt]}>October,17,2022 (Monday)</Text>
                </View>


                <View style={styles.appContainer}>
                    <View style={styles.timeCon}>
                        <Text style={styles.timeTxt}>2:45pm</Text>
                    </View>
                    <View>
                        <Text style={styles.verticalLine}></Text>
                    </View>
                    <View style={styles.detailCon}>
                        <Text style={[styles.timeTxt, styles.titleTxt,]}>Divorce Case</Text>
                        <Text style={[styles.timeTxt, styles.subTxt]}>John Smith</Text>

                    </View>

                </View>

                <View style={styles.appContainer}>
                    <View style={styles.timeCon}>
                        <Text style={styles.timeTxt}>2:45pm</Text>
                    </View>
                    <View>
                        <Text style={styles.verticalLine}></Text>
                    </View>
                    <View style={styles.detailCon}>
                        <Text style={[styles.timeTxt, styles.titleTxt,]}>Divorce Case</Text>
                        <Text style={[styles.timeTxt, styles.subTxt]}>John Smith</Text>

                    </View>

                </View>


                <View style={styles.appContainer}>
                    <View style={styles.timeCon}>
                        <Text style={styles.timeTxt}>2:45pm</Text>
                    </View>
                    <View>
                        <Text style={styles.verticalLine}></Text>
                    </View>
                    <View style={styles.detailCon}>
                        <Text style={[styles.timeTxt, styles.titleTxt,]}>Divorce Case</Text>
                        <Text style={[styles.timeTxt, styles.subTxt]}>John Smith</Text>

                    </View>

                </View>


                <View style={[styles.appContainer]}>
                    <View style={styles.timeCon}>
                        <Text style={styles.timeTxt}>2:45pm</Text>
                    </View>
                    <View>
                        <Text style={styles.verticalLine}></Text>
                    </View>
                    <View style={styles.detailCon}>
                        <Text style={[styles.timeTxt, styles.titleTxt,]}>Divorce Case</Text>
                        <Text style={[styles.timeTxt, styles.subTxt]}>John Smith</Text>

                    </View>

                </View>

            </ScrollView>

            <View style={styles.addAppointment}>
                <FAB
                    visible={visible}
                    icon={{ name: 'add', color: 'white' }}
                    color="#6F6F6F"
                    onPress={() => navigation.navigate('AddAppionments')} 
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


export default BookingScreen