import firebase from 'firebase';
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';




export default class App extends Component{
  
  componentWillMount(){
      
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyC2i6lIavat_ooZXZYCERCsBtD9Hx-RmNk",
      authDomain: "eactnativefirebase.firebaseapp.com",
      databaseURL: "https://eactnativefirebase.firebaseio.com",
      projectId: "eactnativefirebase",
      storageBucket: "",
      messagingSenderId: "1024397413193"
    };
    firebase.initializeApp(config);
    
    }

  salvarDados(){
    var funcionarios  = firebase.database().ref("funcionarios");
    funcionarios.push().child("nome").set("Antonio")
    //database.ref("pontuacao").set("888");

  }
  removeDados(){
    var database = firebase.database();
    database.ref("funcionarios").remove();
  }

  render() {
    return (
      <View>
        <View style={styles.botao}>
          <Button 
            onPress={ () => {this.salvarDados(); }}
            title="Salvar Dados"
            color='red'
            accessibilityLabel="Salvar Dados"
          />
        </View>
        <View style={styles.botao}>
          <Button 
            onPress={ () => {this.removeDados(); }}
            title="remover"
            color='red'
            accessibilityLabel="Remover Dadooos"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  botao: {
    margin: 30
  }
})