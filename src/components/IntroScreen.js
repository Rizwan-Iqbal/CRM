import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const IntroScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.introTitle}>Law CRM</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
    },

    introTitle: {
        fontSize: 65,
        fontFamily: 'Segoe-ui-bold',
        color: 'white',
    }

});



export default IntroScreen