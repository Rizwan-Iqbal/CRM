import { useEffect, useCallback } from 'react';
import { Text, View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import IntroScreen from './src/components/IntroScreen';
import SignInScreen from './src/components/SignInScreen';
import SignUpScreen from './src/components/SignUpScreen';
import ForgetPasswordScreen from './src/components/ForgetPasswordScreen';
import ResetPasswordScreen from './src/components/ResetPasswordScreen';
import OtpVarification from './src/components/OtpVarification';
import HomeScreen from './src/components/HomeScreen';
import NoNotificationScreen from './src/components/NoNotificationScreen';
import NotificationScreen from './src/components/NotificationScreen';
import NotificationSettingScreen from './src/components/NotificationSettingScreen';
import ComingSoonScreen from './src/components/ComingSoonScreen';
import ClientScreen from './src/components/ClientScreen';
import SupportScreen from './src/components/SupportScreen';
import ImagePickerExample from './src/components/ImagePickerExample';
import SearchScreen from './src/components/SearchScreen';
import EmptySearchScreen from './src/components/EmptySearchScreen';
import BookingScreen from './src/components/BookingScreen';
import AddOppointmentScreen from './src/components/AddOppointmentScreen';




export default function App() {
  const [fontsLoaded] = useFonts({
    'Segoe-ui-bold': require('./assets/fonts/Segoe-UI-Bold.ttf'),
    'Segoe-ui': require('./assets/fonts/Segoe-UI.ttf'),
    'Poppins-semibold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Thin': require('./assets/fonts/Poppins-Thin.ttf'),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    // <View style = {styles.container} onLayout={onLayoutRootView}>
    //   <IntroScreen />
    // </View>

    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}>
      
      <View style ={{ height: '100%'}} onLayout={onLayoutRootView}>
        <AddOppointmentScreen />
      </View>

    </KeyboardAvoidingView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
    padding: 0,
    backgroundColor: 'black',

  },
});
