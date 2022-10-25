import { View, Text, Image, TextInput, KeyboardAvoidingView, ScrollView, Button, Pressable, TouchableOpacity, ViewBase } from 'react-native';
import React, { useState } from 'react';
import { styles } from '../../assets/css/Styles';
import { ImageBackground } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Checkbox from 'expo-checkbox';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Tab, TabView } from '@rneui/themed';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import Header from '../components/Header';


const CompanyRegScreen = () => {
    const [isSelected, setSelection] = useState(false);
    const [index, setIndex] = useState(0);
    const [selectedCountry, setSelectedCountry] = useState();
    const [selectedPracticeArea, setSelectedPracticeArea] = useState();
    const [selectedCity, setSelectedCity] = useState();
    const [selectedAttornyes, setSelectedAttornyes] = useState();
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
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"} >


            <View style={{ height: '100%', backgroundColor: 'white', }}>
                <Header title='Company Registration' />


                <View style={{ flex: 1, marginVertical: 7, }}>
                    <ScrollView>
                        <View style={styles.form}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={[styles.supportTopTxt, styles.underlineTxt]}>General Information</Text>
                                {/* <View style= {{flexDirection:'row', justifyContent: 'flex-start'}}>
                                    <Text style={{ textAlignVertical: 'top', marginTop: -5, }}>_________________</Text>
                                    <Icon style={styles.backIcon} name={'user'} color={'black'} size={20} />
                                </View> */}
                            </View>
                            <View style={styles.inputEmail}>
                                <Text style={styles.inputLabel}>Company Name</Text>
                                <TextInput style={[styles.input, styles.inputUpdate, styles.inputFont]}
                                    placeholder="First Name" />
                            </View>
                            <View style={{ marginTop: 5, }}>
                                <Text style={[styles.supportTopTxt, styles.underlineTxt]}>Contact Information</Text>
                            </View>

                            <View style={{ marginTop: 0, }}>
                                <Text style={styles.inputLabel}>Email Address</Text>
                                <TextInput style={[styles.input, styles.inputUpdate, styles.inputFont]}
                                    placeholder="Email Address" />
                            </View>
                            <View style={{ marginTop: 0, }}>
                                <Text style={styles.inputLabel}>Phone Number</Text>
                                <TextInput style={[styles.input, styles.inputUpdate, styles.inputFont]}
                                    placeholder="Phone Number" keyboardType='numeric' />
                            </View>

                            <View style={{ marginTop: 0, }}>
                                <Text style={styles.inputLabel}>Website</Text>
                                <TextInput style={[styles.input, styles.inputUpdate, styles.inputFont]}
                                    placeholder="https://" />
                            </View>

                            <View style={{ marginTop: 10, }}>
                                <Text style={styles.inputLabel}>Address </Text>
                                <TextInput style={[styles.input, styles.inputUpdate, styles.inputFont]}
                                    placeholder="Address " />

                            </View>
                            <View style={{ marginTop: 0, }}>
                                <Text style={styles.inputLabel}>City</Text>
                                <TextInput style={[styles.input, styles.inputUpdate, styles.inputFont]}
                                    placeholder="City" />
                            </View>
                            <View style={{ marginTop: 0, }}>
                                <Text style={styles.inputLabel}>Province</Text>
                                <TextInput style={[styles.input, styles.inputUpdate, styles.inputFont]}
                                    placeholder="Province" />
                            </View>

                            <View style={{ marginTop: 0, }}>
                                <Text style={styles.inputLabel}>Zip/Postal Code</Text>
                                <TextInput style={[styles.input, styles.inputUpdate, styles.inputFont]}
                                    placeholder="5544" />
                            </View>

                            <View style={{ marginTop: 0, }}>
                                <Text style={styles.inputLabel}>Country</Text>
                                <TextInput style={[styles.input, styles.inputUpdate, styles.inputFont]}
                                    placeholder="Country" />
                            </View>

                            <View style={{ marginTop: 5, }}>
                                <Text style={[styles.supportTopTxt, styles.underlineTxt]}>Contact Person Information</Text>
                            </View>
                            <View style={{ marginTop: 0, }}>
                                <Text style={styles.inputLabel}>Name</Text>
                                <TextInput style={[styles.input, styles.inputUpdate, styles.inputFont]}
                                    placeholder="Name" />
                            </View>
                            <View style={{ marginTop: 0, }}>
                                <Text style={styles.inputLabel}>Email Address</Text>
                                <TextInput style={[styles.input, styles.inputUpdate, styles.inputFont]}
                                    placeholder="Email Address" />
                            </View>
                            <View style={{ marginTop: 0, }}>
                                <Text style={styles.inputLabel}>Phone Number</Text>
                                <TextInput style={[styles.input, styles.inputUpdate, styles.inputFont]}
                                    placeholder="Phone Number" keyboardType='numeric' />
                            </View>

                            <View>
                                <TouchableOpacity style={{ width: '45%', marginLeft: '25%', marginTop: 20, }} disabled={'true'}>
                                    <Text style={styles.forgetBtn}> Save </Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </ScrollView>
                </View>



            </View>

        </KeyboardAvoidingView>
    )
}

export default CompanyRegScreen