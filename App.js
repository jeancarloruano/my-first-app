import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, Button, Alert } from 'react-native';
import {useDimensions, useDeviceOrientation} from '@react-native-community/hooks';
import Welcome from './components/screens/Welcome';


export default function App() {
  return (
    <Welcome/>
  );
}
