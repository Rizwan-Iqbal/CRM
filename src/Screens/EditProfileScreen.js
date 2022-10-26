import { View, Text, Image, TextInput, KeyboardAvoidingView, ScrollView, Button, Pressable, TouchableOpacity, ViewBase } from 'react-native';
import React, { useState } from 'react';
import { styles } from '../../assets/css/Styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Tab, TabView } from '@rneui/themed';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';


const EditProfileScreen = () => {
    const navigation = useNavigation();
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
                <View>
                    <View style={{ marginTop: 20, }}>
                        <Icon style={styles.backIcon} name={'arrow-alt-circle-left'} color={'#6F6F6F'} size={30} onPress={()=> navigation.goBack()} />
                        <View style={{ alignItems: 'center' }}>
                            <View style={{ position: 'relative' }}>
                                <Image source={require('../../assets/images/account.png')}

                                    style={{
                                        width: 100,
                                        height: 100,
                                    }}
                                />
                                <View style={styles.cameraIcon}>
                                    <Icon name={'camera'}  color={'black'} size={13} />
                                </View>
                            </View>

                            <View style={{ marginTop: 10, alignItems: 'center' }}>
                                <Text style={[styles.welcome, styles.welcomeTitle]}>welcome</Text>
                                <Text style={styles.name}>John Smith</Text>

                                <Text style={styles.welcome}>Johnsmith@gmail.com</Text>
                            </View>

                        </View>
                    </View>
                </View>

                <View style={{ flex: 1, marginVertical: 7,}}>

                    <Tab
                        value={index}
                        onChange={(e) => setIndex(e)}
                        indicatorStyle={{
                            backgroundColor: '#6F6F6F',
                            height: 2,
                            width: 30,
                            marginLeft: 17,
                        }}

                        containerStyle={{
                           
                            width: '100%',
                            height: 50,

                        }}
                        variant="primary" >
                        <Tab.Item

                            title="Company Owner info"

                            titleStyle={(active) => ({
                                color: active ? '#6F6F6F' : "#B7B7B7",
                                fontSize: active ? 12 : 12,
                                paddingLeft: 0,
                            })}
                            containerStyle={(active) => ({
                                backgroundColor: active ? 'white' : 'white',
                            })}
                        />
                        <Tab.Item
                            title="Business Owner Info"

                            titleStyle={(active) => ({
                                color: active ? '#6F6F6F' : "#B7B7B7",
                                fontSize: active ? 12 : 12,
                                paddingLeft: 0,
                            })}
                            containerStyle={(active) => ({
                                backgroundColor: active ? 'white' : 'white',
                            })}
                        />

                    </Tab>

                    <TabView value={index} onChange={setIndex} animationType="spring">

                        <TabView.Item style={{ width: '100%', marginTop: 0, }}>
                            <ScrollView>
                                <View style={styles.form}>
                                    <View style={styles.inputEmail}>
                                        <Text style={styles.inputLabel}>Account Owner</Text>
                                        <TextInput style={[styles.input, styles.inputUpdate, styles.inputFont]}
                                            placeholder="Full Name" value='John Smith' />

                                    </View>

                                    <View style={styles.inputEmail}>
                                        <Text style={styles.inputLabel}>Legal Business Name</Text>
                                        <TextInput style={[styles.input, styles.inputUpdate, styles.inputFont]}
                                            placeholder="Full Name" value='Software Company' />

                                    </View>
                                    <Text style={styles.inputLabel}>Country</Text>

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
                                            <Picker.Item label="Pakistan" value="Pakistan"
                                                color='black'
                                                style={styles.inputFont}
                                            />
                                            <Picker.Item label="UK" value="UK" color='black'
                                                style={styles.inputFont} />
                                            <Picker.Item label="US" value="US" color='black'
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
                        </TabView.Item>
                        <TabView.Item style={{ width: '100%', marginTop: 8, }}>
                            <ScrollView>

                                <View style={styles.form}>
                                    <View style={styles.inputEmail}>
                                        <Text style={styles.inputLabel}>First Name</Text>
                                        <TextInput style={[styles.input, styles.inputUpdate, styles.inputFont]}
                                            placeholder="Full Name" value='John Smith' />

                                    </View>

                                    <View style={styles.inputEmail}>
                                        <Text style={styles.inputLabel}>Last Name</Text>
                                        <TextInput style={[styles.input, styles.inputUpdate, styles.inputFont]}
                                            placeholder="Full Name" value='John Smith' />
                                    </View>
                                    <View style={{ marginTop: 0, }}>
                                        <Text style={styles.inputLabel}>Phone Number</Text>
                                        <TextInput style={[styles.input, styles.inputUpdate, styles.inputFont]}
                                            placeholder="445454544" value='45444664' />
                                    </View>
                                    <Text style={styles.inputLabel}>Primary Practice Area</Text>

                                    <View style={[styles.drop, styles.dropUpdate]}>
                                        <Picker
                                            selectedValue={selectedPracticeArea}

                                            onValueChange={(itemValue, itemIndex) =>
                                                setSelectedPracticeArea(itemValue)
                                            }       >
                                            <Picker.Item
                                                value=""
                                                label="Select An Option"
                                                enabled={false}
                                                color='#6f6f6fb3'
                                                style={styles.inputFont}
                                            />
                                            <Picker.Item label="Law" value="Law"
                                                color='black'
                                                style={styles.inputFont}
                                            />

                                        </Picker>
                                    </View>
                                    <Text style={{ marginTop: -12, }}></Text>
                                    <Text style={[styles.inputLabel]}>Number of Attornyes</Text>

                                    <View style={[styles.drop, styles.dropUpdate]}>
                                        <Picker
                                            selectedValue={selectedAttornyes}

                                            onValueChange={(itemValue, itemIndex) =>
                                                setSelectedAttornyes(itemValue)
                                            }       >
                                            <Picker.Item
                                                value=""
                                                label="Select An Option"
                                                enabled={false}
                                                color='#6f6f6fb3'
                                                style={styles.inputFont}
                                            />
                                            <Picker.Item label="1" value="1"
                                                color='black'
                                                style={styles.inputFont}
                                            />
                                            <Picker.Item label="2" value="2"
                                                color='black'
                                                style={styles.inputFont}
                                            />

                                        </Picker>
                                    </View>

                                    <View style={{ marginTop: 10, }}>
                                        <Text style={styles.inputLabel}>Business Structure</Text>
                                        <TextInput style={[styles.input, styles.inputUpdate, styles.inputFont]}
                                            placeholder="Business Structure" value='Business Structure' />

                                    </View>
                                    <View style={{ marginTop: 3, marginBottom: 10, }}>
                                        <View>
                                            <Text style={styles.inputLabel}>Date</Text>

                                            <Pressable onPress={showDatepicker} style={styles.date} >
                                                <Text style={{ color: 'black', margin: 10, fontSize: 12, fontFamily: 'Poppins-regular', marginTop: 13, }}>MM/DD/YYYY</Text>
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

                                    <View style={{ marginTop: 0, }}>
                                        <Text style={styles.inputLabel}>Primary Owner Details</Text>
                                        <TextInput style={[styles.input, styles.inputUpdate, styles.inputFont]}
                                            placeholder="abc" value='abc' />
                                    </View>
                                    <View style={{ marginTop: 0, }}>
                                        <Text style={styles.inputLabel}>Bar Number</Text>
                                        <TextInput style={[styles.input, styles.inputUpdate, styles.inputFont]}
                                            placeholder="445454544" value='45444664' />
                                    </View>

                                    <View>
                                        <TouchableOpacity style={{ width: '45%', marginLeft: '25%', marginTop: 20, }} disabled={'true'}>
                                            <Text style={styles.forgetBtn} >Update</Text>
                                        </TouchableOpacity>
                                    </View>

                                </View>
                            </ScrollView>
                        </TabView.Item>

                    </TabView>

                </View>
            </View>

        </KeyboardAvoidingView>
    )
}

export default EditProfileScreen