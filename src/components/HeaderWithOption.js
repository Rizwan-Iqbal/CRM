import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { styles } from '../../assets/css/Styles';


const HeaderWithOption = (props) => {
    return (
        <View style={{ backgroundColor: 'black', borderBottomLeftRadius: 20, }}>

            <View style={{ flexDirection: 'row', alignItems: 'center', }}>

                <Icon style={[styles.backIcon, styles.AppointBackIcon]} name={'arrow-alt-circle-left'} color={'white'} size={30} onPress={()=> navigation.goBack()} />
                <Text style={[styles.appointmentTxt]}>{props.title} </Text>
                <Icon style={[styles.backIcon, styles.AppointBackIcon]} name={'ellipsis-v'} color={'white'} size={20} />

            </View>

        </View>
    )
}

export default HeaderWithOption