import { View, Text, TextInput, KeyboardAvoidingView, Button, Pressable } from 'react-native';
import React, { useState , useCallback } from 'react';
import { styles } from '../../assets/css/Styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import DocumentPicker, { types } from 'react-native-document-picker';
import Header from '../components/Header';

const CaseFormScreen = () => {
    const [selectedLocation, setSelectedLocation] = useState();
    const [selectedClient, setSelectedClient] = useState();
    const [selectedStage, setSelectedStage] = useState();
    const [selectedAct, setSelectedAct] = useState();
    const [selectedCategory, setSelectedCategory] = useState();
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [fileResponse, setFileResponse] = useState([]);
    const handleDocumentSelection = useCallback(async () => {
        try {
            const response = await DocumentPicker.pick({
                presentationStyle: 'fullScreen',
            });
            setFileResponse(response);
        } catch (err) {
            console.warn(err);
        }
    }, []);
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
    const buttonTextStyle = {
        color: '#393939'
    };
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"} >


            <View style={styles.container}>
               
            <Header title = 'Case Form' />


                <View style={{ flex: 1, }}>
                    <ProgressSteps
                        activeStepIconBorderColor={'#6F6F6F'}
                        borderWidth={2}
                        completedStepIconColor={'#6F6F6F'}
                        topOffset={20}
                        completedProgressBarColor={'#6F6F6F'}
                        nextBtnStyle={{
                            backgroundColor: 'red',

                        }}>
                        <ProgressStep nextBtnTextStyle={buttonTextStyle} previousBtnTextStyle={buttonTextStyle}>

                            <View style={{ flex: 1, }}>
                                <View style={styles.form}>
                                    <View>
                                        <Text style={styles.supportTopTxt}>Basic Information</Text>
                                    </View>
                                    <View style={styles.inputEmail}>
                                        <Text style={styles.inputLabel}>Case Title</Text>
                                        <TextInput style={[styles.input, styles.inputUpdate, styles.inputFont]}
                                            placeholder="Case Title" />
                                    </View>
                                    <View style={styles.inputEmail}>
                                        <Text style={styles.inputLabel}>Case Number</Text>
                                        <TextInput style={[styles.input, styles.inputUpdate, styles.inputFont]}
                                            placeholder="Case Number"
                                            keyboardType='numeric' />
                                    </View>
                                    <Text style={styles.inputLabel}>Client</Text>

                                    <View style={[styles.drop, styles.dropUpdate]}>
                                        <Picker
                                            selectedValue={selectedClient}

                                            onValueChange={(itemValue, itemIndex) =>
                                                setSelectedClient(itemValue)
                                            }       >
                                            <Picker.Item
                                                value=""
                                                label="Select An Option"
                                                enabled={false}
                                                color='#6f6f6fb3'
                                                style={styles.inputFont}
                                            />
                                            <Picker.Item label="Client Name etc" value="Client Name etc"
                                                color='black'
                                                style={styles.inputFont}
                                            />

                                        </Picker>
                                    </View>
                                    <Text style={{ marginTop: -12, }}></Text>
                                    <Text style={[styles.inputLabel]}>Location</Text>

                                    <View style={[styles.drop, styles.dropUpdate]}>
                                        <Picker
                                            selectedValue={selectedLocation}

                                            onValueChange={(itemValue, itemIndex) =>
                                                setSelectedLocation(itemValue)
                                            }       >
                                            <Picker.Item
                                                value=""
                                                label="Select An Option"
                                                enabled={false}
                                                color='#6f6f6fb3'
                                                style={styles.inputFont}


                                            />
                                            <Picker.Item label="abc" value="abc"
                                                color='black'
                                                style={styles.inputFont}
                                            />

                                        </Picker>
                                    </View>

                                    <Text style={{ marginTop: -12, }}></Text>
                                    <Text style={[styles.inputLabel]}>Case Category</Text>

                                    <View style={[styles.drop, styles.dropUpdate]}>
                                        <Picker
                                            selectedValue={selectedCategory}

                                            onValueChange={(itemValue, itemIndex) =>
                                                setSelectedCategory(itemValue)
                                            }       >
                                            <Picker.Item
                                                value=""
                                                label="Select An Option"
                                                enabled={false}
                                                color='#6f6f6fb3'
                                                style={styles.inputFont}
                                            />
                                            <Picker.Item label="Category Name etc" value="Category Name etc"
                                                color='black'
                                                style={styles.inputFont}
                                            />

                                        </Picker>
                                    </View>

                                    <Text style={{ marginTop: -12, }}></Text>
                                    <Text style={[styles.inputLabel]}>Case Stage</Text>

                                    <View style={[styles.drop, styles.dropUpdate]}>
                                        <Picker
                                            selectedValue={selectedStage}

                                            onValueChange={(itemValue, itemIndex) =>
                                                setSelectedStage(itemValue)
                                            }       >
                                            <Picker.Item
                                                value=""
                                                label="Select An Option"
                                                enabled={false}
                                                color='#6f6f6fb3'
                                                style={styles.inputFont}
                                            />
                                            <Picker.Item label="Stage Name etc" value="Stage Name etc"
                                                color='black'
                                                style={styles.inputFont}
                                            />

                                        </Picker>
                                    </View>

                                    <Text style={{ marginTop: -12, }}></Text>
                                    <Text style={[styles.inputLabel]}>Act</Text>

                                    <View style={[styles.drop, styles.dropUpdate]}>
                                        <Picker
                                            selectedValue={selectedAct}

                                            onValueChange={(itemValue, itemIndex) =>
                                                setSelectedAct(itemValue)
                                            }       >
                                            <Picker.Item
                                                value=""
                                                label="Select An Option"
                                                enabled={false}
                                                color='#6f6f6fb3'
                                                style={styles.inputFont}
                                            />
                                            <Picker.Item label="Act Name etc" value="Act Name etc"
                                                color='black'
                                                style={styles.inputFont}
                                            />

                                        </Picker>
                                    </View>
                                </View>

                            </View>

                        </ProgressStep>
                        <ProgressStep nextBtnTextStyle={buttonTextStyle} previousBtnTextStyle={buttonTextStyle}>
                            <View style={styles.form}>
                                <View>
                                    <Text style={styles.supportTopTxt}>Hearing Information</Text>
                                </View>

                                <View style={{ marginTop: 3, marginBottom: 10, }}>
                                    <View>
                                        <Text style={styles.inputLabel}>Filling Date</Text>

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
                                <View style={{ marginTop: 3, marginBottom: 10, }}>
                                    <View>
                                        <Text style={styles.inputLabel}>First Hearing Date</Text>

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
                                <View style={{ marginTop: 3, marginBottom: 10, }}>
                                    <View>
                                        <Text style={styles.inputLabel}>Next Hearing Date</Text>

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
                                <View style={styles.inputEmail}>
                                    <Text style={styles.inputLabel}>Opposite Lawyer</Text>
                                    <TextInput style={[styles.input, styles.inputUpdate, styles.inputFont]}
                                        placeholder="Opposite Lawyer" />

                                </View>

                                <View style={styles.inputEmail}>
                                    <Text style={styles.inputLabel}>Total Fees</Text>
                                    <TextInput style={[styles.input, styles.inputUpdate, styles.inputFont]}
                                        placeholder="$" keyboardType='numeric' />
                                </View>

                                <View style={{ marginTop: 0, }}>
                                    <Text style={styles.inputLabel}>Respondent</Text>
                                    <TextInput style={[styles.input, styles.inputUpdate, styles.inputFont]}
                                        placeholder="Respondent" />

                                </View>

                            </View>
                        </ProgressStep>

                        <ProgressStep nextBtnTextStyle={buttonTextStyle} previousBtnTextStyle={buttonTextStyle}>
                            <View style={styles.form}>
                                <View>
                                    <Text style={styles.supportTopTxt}>FIR Information</Text>
                                </View>
                                <View style={styles.inputEmail}>
                                    <Text style={styles.inputLabel}>CNR Number</Text>
                                    <TextInput style={[styles.input, styles.inputUpdate, styles.inputFont]}
                                        placeholder="CNR Number" keyboardType='numeric' />

                                </View>

                                <View style={{ marginTop: 0, }}>
                                    <Text style={styles.inputLabel}>Police Station</Text>
                                    <TextInput style={[styles.input, styles.inputUpdate, styles.inputFont]}
                                        placeholder="Police Station" />

                                </View>

                                <View style={styles.inputEmail}>
                                    <Text style={styles.inputLabel}>FIR Number</Text>
                                    <TextInput style={[styles.input, styles.inputUpdate, styles.inputFont]}
                                        placeholder="FIR Number" keyboardType='numeric' />

                                </View>

                                <View style={{ marginTop: 3, marginBottom: 10, }}>
                                    <View>
                                        <Text style={styles.inputLabel}>FIR Date</Text>

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
                                <View>
                                    <Text style={styles.inputLabel}>FIR Documents</Text>
                                    {fileResponse.map((file, index) => (
                                        <Text
                                            key={index.toString()}
                                            style={styles.uri}
                                            numberOfLines={1}
                                            ellipsizeMode={'middle'}>
                                            {file?.uri}
                                        </Text>
                                    ))}
                                    <Button title="Select 📑" onPress={handleDocumentSelection} />
                                </View>
                            </View>
                        </ProgressStep>

                        <ProgressStep nextBtnTextStyle={buttonTextStyle} previousBtnTextStyle={buttonTextStyle}>
                            <View style={styles.form}>
                                <View>
                                    <Text style={styles.supportTopTxt}>Court/Judge Information</Text>
                                </View>

                                <Text style={{ marginTop: -12, }}></Text>
                                <Text style={[styles.inputLabel]}>Court Category</Text>

                                <View style={[styles.drop, styles.dropUpdate]}>
                                    <Picker
                                        selectedValue={selectedCategory}

                                        onValueChange={(itemValue, itemIndex) =>
                                            setSelectedCategory(itemValue)
                                        }       >
                                        <Picker.Item
                                            value=""
                                            label="Select An Option"
                                            enabled={false}
                                            color='#6f6f6fb3'
                                            style={styles.inputFont}
                                        />
                                        <Picker.Item label="Civil Court" value="Civil Court"
                                            color='black'
                                            style={styles.inputFont}
                                        />

                                    </Picker>
                                </View>
                                <Text style={{ marginTop: -12, }}></Text>
                                <Text style={styles.inputLabel}>Court</Text>

                                <View style={[styles.drop, styles.dropUpdate]}>
                                    <Picker
                                        selectedValue={selectedClient}

                                        onValueChange={(itemValue, itemIndex) =>
                                            setSelectedClient(itemValue)
                                        }       >
                                        <Picker.Item
                                            value=""
                                            label="Select An Option"
                                            enabled={false}
                                            color='#6f6f6fb3'
                                            style={styles.inputFont}
                                        />
                                        <Picker.Item label="High Court" value="High Court"
                                            color='black'
                                            style={styles.inputFont}
                                        />

                                    </Picker>
                                </View>

                                <Text style={{ marginTop: -12, }}></Text>
                                <Text style={styles.inputLabel}>Judge Type</Text>

                                <View style={[styles.drop, styles.dropUpdate]}>
                                    <Picker
                                        selectedValue={selectedClient}

                                        onValueChange={(itemValue, itemIndex) =>
                                            setSelectedClient(itemValue)
                                        }       >
                                        <Picker.Item
                                            value=""
                                            label="Select An Option"
                                            enabled={false}
                                            color='#6f6f6fb3'
                                            style={styles.inputFont}
                                        />
                                        <Picker.Item label="Civil Judge" value="Civil Judge"
                                            color='black'
                                            style={styles.inputFont}
                                        />

                                    </Picker>
                                </View>

                                <Text style={{ marginTop: -12, }}></Text>
                                <Text style={styles.inputLabel}>Judge Name</Text>

                                <View style={[styles.drop, styles.dropUpdate]}>
                                    <Picker
                                        selectedValue={selectedClient}

                                        onValueChange={(itemValue, itemIndex) =>
                                            setSelectedClient(itemValue)
                                        }       >
                                        <Picker.Item
                                            value=""
                                            label="Select An Option"
                                            enabled={false}
                                            color='#6f6f6fb3'
                                            style={styles.inputFont}
                                        />
                                        <Picker.Item label="Abc" value="Abc"
                                            color='black'
                                            style={styles.inputFont}
                                        />

                                    </Picker>
                                </View>
                                <View style={{ marginTop: 10, }}>
                                    <View>
                                        <Text style={styles.inputLabel}>Description</Text>
                                    </View>
                                    <TextInput
                                        multiline={true}
                                        numberOfLines={6}
                                        placeholder={'Enter Description'}
                                        style={[styles.input, styles.textArea]} />
                                </View>

                                <View style={{ marginVertical: 10, }}>
                                    <View>
                                        <Text style={styles.inputLabel}>Remarks</Text>
                                    </View>
                                    <TextInput
                                        multiline={true}
                                        numberOfLines={6}
                                        placeholder={'Enter Remarks'}
                                        style={[styles.input, styles.textArea]} />
                                </View>
                            </View>
                        </ProgressStep>

                    </ProgressSteps>
                </View>

            </View>

        </KeyboardAvoidingView >
    )
}

export default CaseFormScreen