import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { styles } from '../../assets/css/Styles';
const IntroScreen = () => {
    return (
        <View style={styles.IntroContainer}>
            <Text style={styles.introTitle}>Law CRM</Text>
        </View>
    )
}

export default IntroScreen