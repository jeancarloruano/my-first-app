import React from 'react';
import { ImageBackground, StyleSheet, View, Text, Image, StatusBar, TouchableHighlight } from 'react-native';

import colors from '../config/colors';

function Welcome(props) {
    const onPressLogin = () => {
        alert("This function hasn't been built yet");
    }

    const onPressRegister = () => {
        alert("This function hasn't been built yet");
    }

    return ( 
        <ImageBackground style={styles.background} source={require('../assets/background.jpg')}>
            <StatusBar hidden={true} /> 
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo-red.png')}/>
                <Text style={styles.headerText}>Shopping Made Fun</Text>
            </View>
            <TouchableHighlight onPress={onPressLogin} style={styles.loginButton} underlayColor='gray'>
                <View>
                    <Text style={styles.buttonText}>Login</Text>
                </View>
            </TouchableHighlight>
            
            <TouchableHighlight onPress={onPressRegister} style={styles.registerButton} underlayColor='gray'>
                <View>
                    <Text style={styles.buttonText}>Register</Text>
                </View>
            </TouchableHighlight>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    logoContainer: {
        alignItems: 'center',
        position: 'absolute',
        top: 70,
    },

    logo: {
        width: 100,
        height: 100,
    },

    headerText: {
        top: 45,
        fontSize: 25,
    },

    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },

    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: colors.secondary,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonText: {
        color: 'white',
        fontSize: 25,
    }
})

export default Welcome;