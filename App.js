import { useEffect, useCallback } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, } from 'react-native';
import { useFonts } from 'expo-font';
import { createStackNavigator } from '@react-navigation/stack';
import Navigation from './src/components/Navigation';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/Screens/HomeScreen';
import ClientScreen from './src/Screens/ClientScreen';
import BookingScreen from './src/Screens/BookingScreen';
import CasesScreen from './src/Screens/CasesScreen';
import SupportScreen from './src/Screens/SupportScreen';
import AddAppointmentScreen from './src/Screens/AddAppointmentScreen';
import CaseDetailScreen from './src/Screens/CaseDetailScreen';
import AppointmentDetailScreen from './src/Screens/AppointmentDetailScreen'; 
import CaseFormScreen from './src/Screens/CaseFormScreen';
import ComingSoonScreen from './src/Screens/ComingSoonScreen';
import CompanyDetailScreen from './src/Screens/CompanyDetailScreen';
import CompanyRegScreen from './src/Screens/CompanyRegScreen';
import EditProfileScreen from './src/Screens/EditProfileScreen';
import EmptySearchScreen from './src/Screens/EmptySearchScreen'; 
import ForgetPasswordScreen from './src/Screens/ForgetPasswordScreen'; 
import NoNotificationScreen from './src/Screens/NoNotificationScreen'; 
import NotificationScreen from './src/Screens/NotificationScreen'; 
import NotificationSettingScreen from './src/Screens/NotificationSettingScreen'; 
import OtpVarification from './src/Screens/OtpVarification'; 
import PersonalDetailScreen from './src/Screens/PersonalDetailScreen'; 
import PersonalRegScreen from './src/Screens/PersonalRegScreen'; 
import ResetPasswordScreen from './src/Screens/ResetPasswordScreen'; 
import SearchScreen from './src/Screens/SearchScreen'; 
import SettingScreen from './src/Screens/SettingScreen'; 
import SignInScreen from './src/Screens/SignInScreen'; 
import SignUpScreen from './src/Screens/SignUpScreen'; 
const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Poppins-semibold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Thin': require('./assets/fonts/Poppins-Thin.ttf'),
    'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
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

    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <View style={{ height: '100%' }} onLayout={onLayoutRootView}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerShown: false,
          }}>
            <Stack.Screen name="Navigation" component={Navigation} />
            <Stack.Screen name="Clients" component={ClientScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Cases" component={CasesScreen} />
            <Stack.Screen name="Add Appointment" component={AddAppointmentScreen} />
            <Stack.Screen name="Appointment Detail" component={AppointmentDetailScreen} />
            <Stack.Screen name="Appointment" component={BookingScreen} />
            <Stack.Screen name="Case Detail" component={CaseDetailScreen} />
            <Stack.Screen name="Add Case" component={CaseFormScreen} />
            <Stack.Screen name="Coming Soon" component={ComingSoonScreen} />
            <Stack.Screen name="Company Detail" component={CompanyDetailScreen} />
            <Stack.Screen name="Company Registration" component={CompanyRegScreen} />
            <Stack.Screen name="Edit Profile" component={EditProfileScreen} />
            <Stack.Screen name="Empty Search" component={EmptySearchScreen} />
            <Stack.Screen name="Forget Password" component={ForgetPasswordScreen} />
            <Stack.Screen name="No Notification" component={NoNotificationScreen} />
            <Stack.Screen name="Notification" component={NotificationScreen} />
            <Stack.Screen name="Notification Setting" component={NotificationSettingScreen} />
            <Stack.Screen name="OTP Varification" component={OtpVarification} />
            <Stack.Screen name="Personal Detail" component={PersonalDetailScreen} />
            <Stack.Screen name="Personal Registration" component={PersonalRegScreen} />
            <Stack.Screen name="Reset Password" component={ResetPasswordScreen} />
            <Stack.Screen name="Search" component={SearchScreen} />
            <Stack.Screen name="Setting" component={SettingScreen} />
            <Stack.Screen name="Sign Up" component={SignUpScreen} />
            <Stack.Screen name="Support" component={SupportScreen} />

          </Stack.Navigator>
        </NavigationContainer>
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
