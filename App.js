import * as React from 'react';
import { Text, View, StyleSheet,Pressable,TextInput} from 'react-native';
import {RadioButton} from 'react-native-paper';
import Constants from 'expo-constants';
import Operacao from './components/Operacao';
import MyCheckBox from './components/MyCheckBox';
import Escolha from './components/Escolha';
import { Image } from "react-native";


export default function App() {

  return (
    
    
    
    <View style={styles.container}>
    <TextInput
    placeholder = " bem vindo ao SPACELAB, este é seu primeiro acesso" 
    />
     <TextInput 
       placeholder = "             Um Aplicativo voltado ao gerenciamento e"
       />
     <TextInput 
       placeholder = "                        reservas de espaço fisico"
       />
    <Image
    source={require('./assets/logo.jpeg')}
    />
       <Operacao nome="Prosseguir"/>

    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },
  input: {
    height: 30,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }

});