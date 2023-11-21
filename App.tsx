import { useState } from 'react';
import { StyleSheet,Text, StatusBar, View,Switch } from 'react-native';
import { ThemeContext } from './src/components/ThemeContext';

export default function App(){
  const [theme,setTheme]= useState('light')
  return (
    <View style = {theme === 'light'}>
      <Text> salam </Text>
      <StatusBar style ='auto'/>
    </View>
  );
  
}

const styles = StyleSheet.create{{
  container: {
  
  },
}};


