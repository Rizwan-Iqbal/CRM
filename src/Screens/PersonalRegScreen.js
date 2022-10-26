import { View, Text, TextInput, KeyboardAvoidingView, ScrollView, Pressable, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { styles } from '../../assets/css/Styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import Header from '../components/Header';


const PersonalRegScreen = () => {
    const [selectedCountry, setSelectedCountry] = useState();
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
                <Header title='Personal Registration' />


                <View style={{ flex: 1, marginVertical: 7, }}>
                    <ScrollView>
                        <View style={styles.form}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={[styles.supportTopTxt, styles.underlineTxt]}>General Information</Text>
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
                            <View style={{ marginTop: 15, }}>
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
                            <View style={{ marginTop: 5, }}>
                                <Text style={[styles.supportTopTxt, styles.underlineTxt]}>Address Information</Text>
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
                                    placeholder="5544"  />
                            </View>

                            <View style={{ marginTop: 0, }}>
                                <Text style={styles.inputLabel}>Country</Text>
                                <TextInput style={[styles.input, styles.inputUpdate, styles.inputFont]}
                                    placeholder="Country"  />
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

export default PersonalRegScreen