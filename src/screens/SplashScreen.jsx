import React, { useEffect, useState } from 'react';
import { StyleSheet, StatusBar, Image } from 'react-native';
import Animated, { FadeIn, FadeOut, runOnJS } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import logo from '../assets/images/Logo.png';

const SplashScreen = () => {
  const navigation = useNavigation();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    StatusBar.setBarStyle('dark-content');
    StatusBar.setBackgroundColor('#ffffff');

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return isVisible ? (
    <SafeAreaView style={styles.safeContainer}>
      <Animated.View
        style={styles.container}
        entering={FadeIn.duration(1000)}
        exiting={FadeOut.duration(1000).withCallback(() =>
          runOnJS(navigation.replace)('LoginScreen'),
        )}
      >
        <Image source={logo} style={styles.logo} resizeMode="contain" />
      </Animated.View>
    </SafeAreaView>
  ) : null;
};

export default SplashScreen;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200, // Adjust width as needed
    height: 100, // Adjust height as needed
  },
});
