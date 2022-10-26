import { View, Text } from 'react-native'
import React from 'react'

export default function Fonts () {
    const [fontsLoaded] = useFonts({
        'Poppins-semibold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
        'Poppins-regular': require('../../assets/fonts/Poppins-Regular.ttf'),
        'Poppins-Thin': require('../../assets/fonts/Poppins-Thin.ttf'),
        'Poppins-Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
        'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
        'Poppins-semibold': require('../../assets/fonts/Poppins-SemiBold.ttf'),

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
        <View onLayout={onLayoutRootView}>
            {/* <Text>Fonts</Text> */}
        </View>
    )
}
