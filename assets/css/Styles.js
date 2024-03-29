import { StyleSheet } from 'react-native';
// import { white } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
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
        fontFamily: 'Poppins-semibold',
        color: 'white',
    },

    // Signin Screen Styling
    SignInTitle: {
        fontSize: 24,
        fontFamily: 'Poppins-semibold',
        marginTop: 40,
        marginBottom: 25,
        color: 'white',
        textAlign: "center",
        flex: 1,


    },
    backIcon: {
        marginLeft: 12,
        // width: '10%',
        marginTop: 10,
        // paddingRight: 60
    },

    signInImg: {
        width: 300,
        height: 300,
    },
    form: {

        marginHorizontal: 20,
        marginVertical: 10,

    },
    AppointBackIcon: {
        right: 8,
    },
    menuContainer: {
        height: 50,
        marginHorizontal: 15,
        marginVertical: 10,
        backgroundColor: 'white',
        shadowColor: "#6F6F6F",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 16,
        borderRadius: 10,
        paddingHorizontal: 2,

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
        fontFamily: 'Poppins-regular',

    },
    rememberTxt: {
        color: '#6F6F6F',
        fontSize: 10,
        fontWeight: '600',
        fontFamily: 'Poppins-regular',
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
        fontFamily: 'Poppins-regular',
        marginRight: 10,
        marginTop: 3,
    },

    ResendOtpTxt: {
        color: '#474747',
        fontSize: 12,
        fontWeight: '700',
        fontFamily: 'Poppins-regular',
        textAlign: 'right',
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
        fontFamily: 'Poppins-regular',
        padding: 10,
        textAlign: 'center',

    },
    footerTxt: {
        textAlign: 'center',
        color: '#6F6F6F',
        fontFamily: 'Poppins-regular',
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
        fontFamily: 'Poppins-regular',
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
        // marginTop: 5,
    },

    profileContainer: {
        flexDirection: 'row',
        margin: 10,
        // marginBottom: -3,
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
        // marginTop: -5,
        marginTop: 17,

    },

    homeCont: {
        marginVertical: 10,
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

    hr: {
        borderBottomColor: '#707070',
        borderTopWidth: 0.5,
        width: '50%',
        marginTop: 12,


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
        marginBottom: 10,

    },
    container: { height: '100%' },

    searchContainerUpdate: {
        justifyContent: 'center',

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
    searchInputUpdate: {

        width: '90%',
    },
    searchInnerContainer: {
        width: '75%',
        flexDirection: 'row',
    },

    sContainer: {
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',


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
    searchIconUpdate: {
        right: 37,
        top: 20,

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
        marginBottom: 5,

    },

    underlineTxt: {
        textDecorationLine: 'underline',
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
        paddingTop: 10,
        margin: 0,
        textAlignVertical: 'top',
        fontFamily: 'Poppins-regular',

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

    },

    pickerItems: {
        // color: '#6F6F6F', 
        fontFamily: 'Poppins-regular',

    },

    itemsContainer: {
        backgroundColor: 'red',
    },
    emptySearchContainer: {
        justifyContent: 'center',
    },

    emptyImages: {
        marginHorizontal: 25,
    },
    notFound: {
        textAlign: 'center',
        marginVertical: 30,
        fontSize: 18,
    },

    topTxtAppointment: {
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
    },

    selectedDay: {
        backgroundColor: 'red',
    },
    bottomAppointTxt: {
        textAlign: 'center',
        marginTop: -4,
    },

    appContainer: {
        shadowColor: "#6F6F6F",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 16,
        backgroundColor: 'white',
        height: 'auto',
        flexDirection: 'row',
        padding: 15,
        marginVertical: 3,
    },

    Test: {
        shadowColor: "#6F6F6F",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 16,
        backgroundColor: 'white',
        margin: 6,
        borderTopEndRadius: 20,
    },
    timeTxt: {
        color: '#6F6F6F',
        fontFamily: 'Poppins-semibold',
        fontSize: 14,
        marginRight: 20,
    },

    titleTxt: {
        marginLeft: 20,
        color: 'black',
    },
    subTxt: {
        fontSize: 12,
        marginLeft: 20,

    },
    verticalLine: {
        height: 50,
        width: 2,
        backgroundColor: '#6F6F6F',
        textAlignVertical: 'center'
    },
    addAppointment: {
        position: 'absolute',
        right: 40,
        bottom: 50,
    },
    appointmentTxt: {
        textAlign: "center",
        flex: 1,
        fontSize: 24,
        fontFamily: 'Poppins-semibold',
        marginTop: 40,
        marginBottom: 25,
        color: 'white',
    },

    inputLabel: {

        fontFamily: 'Poppins-regular',
        fontSize: 13,
        color: '#6F6F6F',
        marginLeft: 2,
    },

    inputUpdate: {
        paddingLeft: 10,
        marginTop: 0,
        marginHorizontal: 0,
        marginVertical: 10,


    },

    inputFont: {
        fontSize: 13,
        fontFamily: 'Poppins-regular',

    },

    inputLabelUpdate: {
        marginTop: 12,
    },

    topTxtUp: {
        textAlign: 'center',
        marginTop: 15,
    },

    date: {
        shadowColor: "#6F6F6F",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 16,
        backgroundColor: 'white',
        width: '100%',
        height: 50,
        borderRadius: 10,
        position: 'relative',

    },
    dateIcon: {
        position: 'absolute',
        right: 20,
        top: 35,
    },

    AppInnCon: {
        shadowColor: "#6F6F6F",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 16,
        backgroundColor: 'white',
        height: 'auto',
    },

    AppTopCon: {
        width: '100%',
        shadowColor: "#6F6F6F",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 16,
        backgroundColor: '#6F6F6F',
        height: 'auto',
        borderRadius: 15,
    },

    AppDetailCon: {
        backgroundColor: '#6F6F6F',
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 16,
        marginVertical: 3,
        marginHorizontal: 10,
        padding: 15,
        borderRadius: 10,
    },

    AppTitle: {
        fontFamily: 'Poppins-semibold',
        fontSize: 12,
        color: 'white',
        lineHeight: 20,
    },

    AppMainTitle: {
        fontSize: 14,
    },

    AppTxt: {
        fontFamily: 'Poppins-regular',
        fontSize: 12,
        color: 'white',

    },

    AppDetailConUpdate: {
        backgroundColor: 'white',
    },

    AppTitleUpdate: {
        color: 'black',
    },


    AppTxtUpdate: {
        color: '#6F6F6F',
    },
    welcome: {

        color: '#474747',
        fontFamily: 'Poppins-Medium',
        fontSize: 12,
        lineHeight: 20,

    },

    welcomeTitle: {
        fontSize: 15,

    },

    name: {
        color: 'black',
        fontFamily: 'Poppins-Bold',
        fontSize: 22,
        lineHeight: 25,
    },

    SettingTopTxt: {
        color: 'black',
        fontFamily: 'Poppins-Bold',
        fontSize: 16,
        margin: 10,
        marginVertical: 3,
        marginLeft: 15,
    },

    settingInnerCon: {
        flexDirection: 'row',
        backgroundColor: 'white',
        shadowColor: "#6F6F6F",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 16,
        marginHorizontal: 15,
        borderRadius: 10,
        padding: 12,
        marginVertical: 5,
        marginTop: 0,

    },
    settingItems: {
        fontFamily: 'Poppins-semibold',
        fontSize: 14,
        color: '#6F6F6F',
        marginLeft: 10,
    },

    cameraIcon: {
        position: 'absolute',

        bottom: 0,
        left: 60,
    },

    formContainer: {
        marginHorizontal: 15,
    },

    scrollItem: {
        marginHorizontal: 2,
        fontFamily: 'Poppins-semibold',
        fontSize: 14,
        textAlignVertical: 'center',
    },
    LineColor: {
        color: '#6f6f6fc4'
    },
    options: {
        position: 'absolute',
        right: -8,
        top: -7
    },



});

export { styles }
