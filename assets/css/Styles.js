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
        fontSize: 24,
        fontFamily: 'Poppins-semibold',
        textAlign: 'left',
        marginTop: 40,
        marginBottom: 25,
        color: 'white',
        width: '75%',


    },
    backIcon: {
        marginLeft: 12,
        width: '25%',
        marginTop: 12,
        // paddingRight: 60
    },
    clientIcon: {

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
        // marginTop: -7,
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
        fontFamily: 'Poppins-semibold',
        color: '#474747'

    },
    otpInsideTxt: {
        fontSize: 12,
        color: '#474747',
        textAlign: 'center',
    },

    underlineStyleBase: {
        width: 70,
        height: 80,
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
    },
    HomeTitle: {
        fontSize: 20,
        fontFamily: 'Poppins-semibold',
        color: 'white',
        textAlign: 'center',
        marginTop: 30,
        marginLeft: 10,
        color: 'white',

    },

    headerRight: {
        position: 'absolute',
        right: 15,
        flexDirection: 'row',
        marginTop: 30,

    },
    profile: {
        width: 60,
        height: 60,
    },

    profileContainer: {
        flexDirection: 'row',
        margin: 10,
        marginBottom: 15,
    },

    userWelcome: {
        color: 'white',
        fontSize: 15,
        fontFamily: 'Poppins-semibold',
        lineHeight: 20,
    },

    userDetail: {
        flexDirection: 'column',
        margin: 7,
    },

    userName: {
        color: 'white',
        fontSize: 12,
        fontFamily: 'Poppins-semibold',
    },

    homeContainer: {
        marginHorizontal: 15,
        marginTop: -5,

    },
    topTxt: {
        color: '#474747',
        fontWeight: '600',
        fontSize: 16,
        fontFamily: 'Poppins-semibold',
    },

    clientTopTxt: {

        textAlign: 'center',
        marginTop: -10,
        marginBottom: 10,
    },
    line: {
        borderBottomColor: '#707070',
        borderBottomWidth: 0.5,
        marginVertical: 2,
    },
    clientsIcon: {
        alignItems: 'center',
        // marginVertical: 30,
        marginBottom: 40,
    },

    casesIcon: {
        alignItems: 'center',
        marginVertical: 10,
    },

    clientsBackImg: {
        borderRadius: 15,
        width: 180,
        height: 213,
        paddingVertical: 30,
    },

    casesBackImg: {
        borderRadius: 15,
        width: 180,
        height: 112,
        marginTop: 5,
    },

    title: {
        fontSize: 16,
        fontFamily: 'Poppins-semibold',
        color: 'white',
        textAlign: 'left',
        position: 'absolute',
        left: 12,
    },
    ItemsContainer: {
        flexDirection: 'row',

    },
    singleItem: {
        height: 'auto',
    },
    left: {
        flexDirection: 'column',
        maxWidth: '50%',
    },

    right: {
        flexDirection: 'column',
        maxWidth: '50%',

    },

    notification: {
        width: 200,
        height: 300,
        backgroundColor: 'white',
        color: 'black',
    },

    notiImg: {
        width: 300,
        height: 360,
        marginTop: '10%',
    },

    noNotiTxt: {
        fontSize: 25,
        fontFamily: 'Poppins-semibold',
        color: '#474747',
        marginVertical: '10%',
    },
    notiContainer: {
        marginHorizontal: 15,
        marginVertical: 7,
        height: 'auto',
        // paddingLeft: 10,
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
        flexDirection: 'row',
    },

    clientContainer: {

        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.38,
        shadowRadius: 10.00,
        elevation: 10,
        marginVertical: 6,
        marginHorizontal: 10,
        padding: 15,

    },

    switchContainer: {
        marginHorizontal: 15,
        marginVertical: 7,
        height: 'auto',
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
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    containerInside: {
        flexDirection: 'row',
        width: '50%',
    },

    clientMainContainer: {
        width: '100%',
        justifyContent: 'space-between',

    },
    switchContainerInside: {
        flexDirection: 'row',
        width: '70%',
        alignItems: 'center',
        position: 'relative',
    },
    notiProfile: {
        width: 50,
        height: 50,
        margin: 10,
    },
    notiName: {
        fontFamily: 'Poppins-semibold',
        fontSize: 14,
    },

    clientID: {
        fontFamily: 'Poppins-semibold',
        fontSize: 12,
    },
    notiTxt: {
        fontFamily: 'Poppins-regular',
        fontSize: 10,
    },
    clientDetail: {
        fontSize: 12,
        color: '#474747',
        fontFamily: 'Poppins-regular',
        marginLeft: 7,
        marginTop: 3,
        lineHeight: 18,


    },

    notiDate: {

        fontFamily: 'Poppins-semibold',
        fontSize: 10,
        position: 'absolute',
        right: -150,
        bottom: 5,
    },

    switchTxt: {
        fontFamily: 'Poppins-semibold',
        fontSize: 12,
        color: '#6F6F6F',
    },
    searchContainer: {
        flexDirection: 'row',
        marginBottom: 40,
    },
    searchInput: {

        margin: 10,
        height: 50,
        // paddingLeft: 10,
        borderRadius: 25,
        backgroundColor: 'white',
        shadowColor: "#6F6F6F",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 16,
        paddingLeft: 15,
        width: '100%',

    },
    searchInnerContainer: {
        width: '75%',
        flexDirection: 'row',
    },
    casesTitle: {
        marginBottom: 0,

    },

    caseBackIcon: {
        marginTop: 30,
    },
    searchIcon: {
        right: 7,

    },
    settingIcon: {

        marginHorizontal: 12,
        marginTop: 5,
    },
    supportTopTxt: {
        textAlign: 'left',
        marginTop: 0,
        fontSize: 15,
        fontFamily: 'Poppins-semibold',

    },

    clentProfile: {
        position: 'absolute',
        right: 10,
        width: 113,
        height: 110,
    },
    addItem: {
        position: 'absolute',
        right: 20,
        bottom: 70,

    },
    textArea: {
        height: 'auto',
        paddingLeft: 10,
        margin: 0,
       

    },
    drop: {
        borderRadius: 10,
        // borderWidth: 1,
        // borderColor: '#bdc3c7',
        overflow: 'hidden',
        shadowColor: "#6F6F6F",

        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 6,
        backgroundColor: 'white',
      
    }



});

export { styles }
