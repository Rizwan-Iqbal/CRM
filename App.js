import { useEffect, useCallback } from 'react';
import { Text, View, StyleSheet, KeyboardAvoidingView, Image } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import HomeScreen from './src/components/HomeScreen';
import ClientScreen from './src/components/ClientScreen';
import BookingScreen from './src/components/BookingScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import CasesScreen from './src/components/CasesScreen';
import AppointmentDetailScreen from './src/components/AppointmentDetailScreen';
import SettingScreen from './src/components/SettingScreen';
import EditProfileScreen from './src/components/EditProfileScreen';
import CaseFormScreen from './src/components/CaseFormScreen';
import PersonalRegScreen from './src/components/PersonalRegScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Segoe-ui-bold': require('./assets/fonts/Segoe-UI-Bold.ttf'),
    'Segoe-ui': require('./assets/fonts/Segoe-UI.ttf'),
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
    // <View style = {styles.container} onLayout={onLayoutRootView}>
    //   <IntroScreen />
    // </View>

    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}>

      <View style={{ height: '100%' }} onLayout={onLayoutRootView}>
        {/* <AddOppointmentScreen /> */}

        <NavigationContainer>
          <Tab.Navigator screenOptions={{
            tabBarShowLabel: true,
            headerShown: false,
            tabBarStyle: { backgroundColor: '#000000', borderTopEndRadius: 20, borderTopStartRadius: 20, height: 55, },
            tabBarInactiveTintColor: "#A9A9A9",
            // tabBarInactiveBackgroundColor: '',
            tabBarActiveTintColor: "white",
            // tabBarActiveBackgroundColor: 'black',
            tabBarHideOnKeyboard: true,
            showIcon: true,


          }}
          >
            <Tab.Screen name="Home" component={HomeScreen} options={{
              tabBarIcon: ({ size, color }) => (
                <Image source={require('./assets/images/home.png')}

                  style={{
                    color: 'red',
                    width: 30,
                    height: 24,
                    color: color
                  }}
                  color={color}

                />
              ),
            }} />
            <Tab.Screen name="Clients" component={ClientScreen} options={{
              tabBarIcon: ({ size, color }) => (
                <Image source={require('./assets/images/client.png')}
                  style={{
                    width: 35,
                    height: 24,
                    color: { color }
                  }} />
              )
            }} />

            <Tab.Screen name="Cases" component={CasesScreen} options={{
              tabBarIcon: ({ size, color }) => (
                <Image source={require('./assets/images/casesicon.png')}
                  style={{
                    width: 34,
                    height: 31,
                    color: { color }
                  }} />
              )
            }} />

            <Tab.Screen name="Appointnments" component={BookingScreen} options={{
              tabBarIcon: ({ size, color }) => (
                <Image source={require('./assets/images/app.png')}
                  style={{
                    width: 28,
                    height: 28,

                    color: { color }
                  }} />
              )
            }} />

            <Tab.Screen name="Registration" component={PersonalRegScreen} options={{
              tabBarIcon: ({ size, color }) => (
                <Image source={require('./assets/images/app.png')}
                  style={{
                    width: 28,
                    height: 28,

                    color: { color }
                  }} />
              )
            }} />

          </Tab.Navigator>
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
