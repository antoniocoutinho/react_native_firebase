import firebase from 'firebase';
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
//import { EALREADY } from 'constants';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {funcionario: ''}
  }
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
    funcionarios.set("10")
      /*{
        nome:"Antonio",
        idade: "29",
        peso: "89"
      }
    );*/

  }
  
  listarDados(){
    var funcionarios =  firebase.database().ref("funcionarios");
    funcionarios.on('value', (snapshot) => {
      var dado =  snapshot.val()
      this.setState({funcionario: dado}) 
      //alert( snapshot.val());
    } );
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

        
        <View style={styles.botao}>
          <Button 
            onPress={ () => {this.listarDados(); }}
            title="Listar Dados"
            color='red'
            accessibilityLabel="Listar Dados"
          />
        </View>

        <Text>{this.state.funcionario}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  botao: {
    marginTop: 30
  }
})