import { View, Text } from 'react-native';
import React from 'react';
import { styles } from '../../assets/css/Styles';
const IntroScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.IntroContainer}>

                <Text style={styles.introTitle}>Law CRM</Text>
            </View>
        </View>
    )
}

export default IntroScreen