import { View, Text,TextInput, Image } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { styles } from '../../assets/css/Styles';

const HeaderWithSearch = (props) => {
    return (
        <View style={{ backgroundColor: 'black', borderBottomLeftRadius: 20, }}>

            {/* <ImageBackground source={require('../../assets/images/clientHeader.png')} resizeMode={'cover'}   > */}
            <View style={{ flexDirection: 'row', alignItems: 'center', }}>

                <Icon style={[styles.backIcon, styles.caseBackIcon]} name={'arrow-alt-circle-left'} color={'white'} size={30} />
                <Text style={[styles.SignInTitle, styles.casesTitle]}> {props.title} </Text>
            </View>
            <View style={styles.searchContainer}>

                <View style={styles.searchInnerContainer}>
                    <TextInput style={styles.searchInput}
                        placeholder="Search" />
                    <Icon style={[styles.eyeIcon, styles.searchIcon]} name={'search'} color={'#474747'} size={26} />

                </View>

                <View style={styles.settingIcon}>
                    <Image source={require('../../assets/images/set.png')}
                        style={{
                            width: 68,
                            height: 68,
                        }} />
                </View>
            </View>
            {/* </ImageBackground> */}
        </View>
    )
}

export default HeaderWithSearch