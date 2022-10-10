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
        marginTop: 25,
        marginBottom: 25,
        // marginTop: 25,

        color: 'white',

    },
    backIcon: {
        marginLeft: 8,

    },
    signInImg: {
        width: 300,
        height: 300,


    },
    form: {

        marginHorizontal: 20,
        marginVertical: 10,

    },
    input: {

        margin: 9,
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
        paddingLeft: 30,
    },
    rememberTxt: {
        color: '#6F6F6F',
        fontSize: 10,
        fontWeight: '600',
        fontFamily: 'Segoe-ui',
        marginLeft: 4,
        marginTop: -2,
    },
    rememberContainer: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 3,
        marginLeft: 10,
    },
    checkbox: {
        borderColor: '#474747',
        borderWidth: 0.5,
        width: 11,
        height: 11,

    },
    forgetTxt: {
        color: '#6F6F6F',
        fontSize: 9,
        fontWeight: '600',
        fontFamily: 'Segoe-ui',
        marginRight: 10,
        marginTop: 3,
    },

    ResendOtpTxt: {
        color: '#474747',
        fontSize: 12,
        fontWeight: '700',
        fontFamily: 'Segoe-ui',
        textAlign: 'right',
        marginTop: -7,
        textDecorationLine: 'underline',

    },
    AfterFormContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    newUser: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,

    },

    newUserText: {
        fontSize: 10,
        color: '#6F6F6F',
    },

    signInBtnContainer: {

        width: '40%',
        height: 40,
        marginLeft: '31%',
        marginTop: 20,
        shadowColor: "#6F6F6F",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 6,
        backgroundColor: 'white',
        borderRadius: 10,

    },

    signInBtn: {
        color: 'black',
        fontSize: 12,
        fontWeight: '700',
        fontFamily: 'Segoe-ui',
        padding: 10,
        textAlign: 'center',

    },
    footerTxt: {
        textAlign: 'center',
        color: '#6F6F6F',
        fontFamily: 'Segoe-ui',
        fontSize: 10,
        marginTop: 25,
    },
    inputEmail: {
        position: 'relative',
    },
    emailIcon: {
        position: 'absolute',
        top: 23,
        left: 15,
    },

    eyeIcon: {
        position: 'absolute',
        top: 23,
        right: 20,
    },

    forgetBtn: {
        color: 'white',
        fontSize: 15,
        fontWeight: '700',
        fontFamily: 'Segoe-ui',
        padding: 12,
        textAlign: 'center',
        backgroundColor: '#6F6F6F',
        borderRadius: 15,
    },
    otpTxt: {
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'Segoe-ui-bold',
        color: '#474747'

    },
    otpInsideTxt: {
        fontSize: 12,
        color: '#474747',
        textAlign: 'center',
    },
    underlineStyleHighLighted: {


    },
    underlineStyleBase: {
        color: 'black',

        shadowColor: "#6F6F6F",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 6,
        backgroundColor: 'white',
        borderRadius: 8,
    },
    otpInput: {
        textAlign: 'center',
    }


});

export { styles }
