import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';
import AppButton from '../components/AppButton';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
            style={styles.background}
            source={require('../assets/background.jpg')}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require('../assets/logo-red.png')} />
                </View>
                <View style={styles.buttonsContainer}>
                    <AppButton title="Login"/>
                    <AppButton title="Register" color="secondary" />
                </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    logo: {
        width: 100,
        height: 100,
        position: 'absolute',
        top: 70,
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: "center",
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: "#fc5c65",
    },
    buttonsContainer: {
        padding: 20,
        width: '100%',
    }
    
})

export default WelcomeScreen;