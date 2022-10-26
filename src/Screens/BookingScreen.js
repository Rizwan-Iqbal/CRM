import { View, Text, ScrollView} from 'react-native';
import React, { useState } from 'react';
import { styles } from '../../assets/css/Styles';
import { FAB } from '@rneui/themed';
import { MultiDateSelectionCalendar, DefaultTheme, Theme } from 'react-native-easy-calendar'
import englishLocale from 'dayjs/locale/en';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';


const BookingScreen = () => {
    const navigation = useNavigation();
    const [visible, setVisible] = React.useState(true);
    const [selectedDates, setSelectedDates] = React.useState([]);

    return (

        <View style={{ height: '100%' }}>

            <Header title = 'Appointment' />
           
            <ScrollView>

                <View>

                    <View>
                        <Text style={[styles.topTxt, styles.topTxtAppointment]}>Appointment Book</Text>
                    </View>
                    <View style={{ height: '45%' }}>
                        <MultiDateSelectionCalendar
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
                    onPress={()=> navigation.navigate('Add Appointment')} 
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

export default BookingScreen