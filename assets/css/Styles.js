import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({

    // Intro Screen Styling

    IntroContainer: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',

    },

    introTitle: {
        fontSize: 65,
        fontFamily: 'Segoe-ui-bold',
        color: 'white',
    },

    // Signin Screen Styling
    SignInTitle: {
        fontSize: 30,
        fontFamily: 'Segoe-ui-bold',
        textAlign: 'center',
        margin: 25,
        color: 'white',

    },
    backIcon: {
        marginLeft: 10,
    },
    SignInScreenImage: {

    },
    signInImg: {
        marginTop: 20,

    },
    form: {

        marginHorizontal: 20,
        marginVertical: 20,

    },
    input: {
        margin: 10,
        height: 50,
        paddingLeft: 10,
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: "#6F6F6F",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 16,
    },
    rememberTxt: {
        color: '#6F6F6F',
        fontSize: 10,
        fontWeight: '600',
        fontFamily: 'Segoe-ui',
        marginLeft: 6,
    },
    rememberContainer: {
        flex: 1,
      flexDirection: 'row',
      margin: 10,
    },
    checkbox: {
        borderColor: '#474747',
        borderWidth: 0.5,
        width: 11,
        height: 11,
        
    }

});

export { styles }
