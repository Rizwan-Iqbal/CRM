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


const PersonalRegScreen = () => {
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
                <View style={{ backgroundColor: 'black', borderBottomLeftRadius: 20, }}>

                    {/* <ImageBackground source={require('../../assets/images/headerBack.png')} resizeMode={'cover'} style={styles.SignInScreenImage}> */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        {/* <Image source={require('../../assets/images/back.png')} style={styles.backIcon} /> */}
                        <Icon style={styles.backIcon} name={'arrow-alt-circle-left'} color={'white'} size={30} />
                        <Text style={styles.SignInTitle}> Personal {'\n'} Registration </Text>
                    </View>
                    {/* </ImageBackground> */}
                </View>

                <View style={{ flex: 1, marginVertical: 7, }}>
                    <ScrollView>
                        <View style={styles.form}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.supportTopTxt}>General Information</Text>
                                <View style= {{flexDirection:'row', justifyContent: 'flex-start'}}>
                                    <Text style={{ textAlignVertical: 'top', marginTop: -5, }}>_________________</Text>
                                    <Icon style={styles.backIcon} name={'user'} color={'black'} size={20} />
                                </View>
                            </View>
                            <View style={styles.inputEmail}>
                                <Text style={styles.inputLabel}>First Name</Text>
                                <TextInput style={[styles.input, styles.inputUpdate, styles.inputFont]}
                                    placeholder="First Name" />

                            </View>
                            <View style={styles.inputEmail}>
                                <Text style={styles.inputLabel}>Middle Name</Text>
                                <TextInput style={[styles.input, styles.inputUpdate, styles.inputFont]}
                                    placeholder="Middle Name" />

                            </View>
                            <View style={styles.inputEmail}>
                                <Text style={styles.inputLabel}>Last Name</Text>
                                <TextInput style={[styles.input, styles.inputUpdate, styles.inputFont]}
                                    placeholder="Last Name" />

                            </View>

                            <View style={styles.inputEmail}>
                                <Text style={styles.inputLabel}>Title</Text>
                                <TextInput style={[styles.input, styles.inputUpdate, styles.inputFont]}
                                    placeholder="Title" />

                            </View>

                            <View style={{ marginTop: 3, marginBottom: 10, }}>
                                <View>
                                    <Text style={styles.inputLabel}>Date of Birth</Text>

                                    <Pressable onPress={showDatepicker} style={styles.date} >
                                        <Text style={{ color: '#6f6f6f80', margin: 10, fontSize: 12, fontFamily: 'Poppins-regular', marginTop: 13, }}>MM/DD/YYYY</Text>
                                    </Pressable>
                                    <Icon style={[styles.dateIcon]} name={'calendar-alt'} color={'#6f6f6fb3'} size={25} onPress={showDatepicker} />

                                </View>

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

                            <Text style={styles.inputLabel}>Gender</Text>

                            <View style={[styles.drop, styles.dropUpdate]}>
                                <Picker
                                    selectedValue={selectedCountry}

                                    onValueChange={(itemValue, itemIndex) =>
                                        setSelectedCountry(itemValue)
                                    }       >
                                    <Picker.Item
                                        value=""
                                        label="Select An Option"
                                        enabled={false}
                                        color='#6f6f6fb3'
                                        style={styles.inputFont}


                                    />
                                    <Picker.Item label="Male" value="Male"
                                        color='black'
                                        style={styles.inputFont}
                                    />
                                    <Picker.Item label="Female" value="Female" color='black'
                                        style={styles.inputFont} />


                                </Picker>
                            </View>
                            <Text style={{ marginTop: -12, }}></Text>
                            <Text style={[styles.inputLabel]}>City</Text>

                            <View style={[styles.drop, styles.dropUpdate]}>
                                <Picker
                                    selectedValue={selectedCity}

                                    onValueChange={(itemValue, itemIndex) =>
                                        setSelectedCity(itemValue)
                                    }       >
                                    <Picker.Item
                                        value=""
                                        label="Select An Option"
                                        enabled={false}
                                        color='#6f6f6fb3'
                                        style={styles.inputFont}


                                    />
                                    <Picker.Item label="Lahore" value="Lahore"
                                        color='black'
                                        style={styles.inputFont}
                                    />
                                    <Picker.Item label="Sialkot" value="Lahore"
                                        color='black'
                                        style={styles.inputFont}
                                    />

                                </Picker>
                            </View>

                            <View style={{ marginTop: 10, }}>
                                <Text style={styles.inputLabel}>Address 1</Text>
                                <TextInput style={[styles.input, styles.inputUpdate, styles.inputFont]}
                                    placeholder="Address 1" value='Address 1' />

                            </View>
                            <View style={{ marginTop: 0, }}>
                                <Text style={styles.inputLabel}>Address 2</Text>
                                <TextInput style={[styles.input, styles.inputUpdate, styles.inputFont]}
                                    placeholder="Address 2" value='Address 2' />
                            </View>

                            <View style={{ marginTop: 0, }}>
                                <Text style={styles.inputLabel}>Zip/Postal Code</Text>
                                <TextInput style={[styles.input, styles.inputUpdate, styles.inputFont]}
                                    placeholder="5544" value='4555' />
                            </View>
                            <View style={{ marginTop: 0, }}>
                                <Text style={styles.inputLabel}>Phone Number</Text>
                                <TextInput style={[styles.input, styles.inputUpdate, styles.inputFont]}
                                    placeholder="445454544" value='45444664' />
                            </View>
                            <View style={{ marginTop: 0, }}>
                                <Text style={styles.inputLabel}>Email Address</Text>
                                <TextInput style={[styles.input, styles.inputUpdate, styles.inputFont]}
                                    placeholder="Email Address" value='abc@gmail.com' />
                            </View>
                            <View style={{ marginTop: 0, }}>
                                <Text style={styles.inputLabel}>Website</Text>
                                <TextInput style={[styles.input, styles.inputUpdate, styles.inputFont]}
                                    placeholder="Website" value='www.google.com' />
                            </View>

                            <View style={{ marginTop: 0, }}>
                                <Text style={styles.inputLabel}>Tex ID / GST / LEDES ID</Text>
                                <TextInput style={[styles.input, styles.inputUpdate, styles.inputFont]}
                                    placeholder="Tex ID / GST / LEDES ID" value='54454' />
                            </View>

                            <View>
                                <TouchableOpacity style={{ width: '45%', marginLeft: '25%', marginTop: 20, }} disabled={'true'}>
                                    <Text style={styles.forgetBtn} >Update</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </ScrollView>
                </View>



            </View>

        </KeyboardAvoidingView>
    )
}

export default PersonalRegScreen