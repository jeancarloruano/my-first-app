import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';

let x  = 1;

export default function App() {
  const handlePress = () => {
    console.log("Text clicked");
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('./assets/hello-world.png')} style={styles.logo} />
      <Text onPress={handlePress}>Hello World!</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    width: 150,
    height: 150,
  },
});
