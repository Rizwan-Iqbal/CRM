import { View, Text,TextInput, Image } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { styles } from '../../assets/css/Styles';
import { useNavigation } from '@react-navigation/native';

const Header = (props) => {
    const navigation = useNavigation();
    return (
        <View style={{ backgroundColor: 'black', borderBottomLeftRadius: 20, }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', }}>

                <Icon style={[styles.backIcon]} name={'arrow-alt-circle-left'} color={'white'} size={30} onPress={()=> navigation.goBack()} />
                <Text style={[styles.SignInTitle, ]}> {props.title} </Text>
            </View>
        </View>
    )
}

export default Header