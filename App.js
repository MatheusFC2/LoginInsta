import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar 
        backgroundColor="#FFF" 
        translucent={false} 
      />

      <Image 
        source={require('./src/assets/logo.png')} 
        style={styles.logo} 
      />
    
      <TextInput
        placeholder="Celular, username ou email"
        style={styles.input}
      />

      <TextInput
        placeholder="Senha"
        style={styles.input}
      />

      <View style={styles.forgotContainer}>
        <TouchableOpacity>
          <Text style={styles.forgotText}>Esqueceu sua senhas?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>Entrar</Text>
      </TouchableOpacity>
    
      <TouchableOpacity style={styles.facebookButton}>
        <FontAwesome5 name="facebook" size={24} color="#399fff" />
        <Text style={styles.facebookText}>Continue com Matheus</Text>
      </TouchableOpacity>

      <View style={styles.divisor}>
        <View style={styles.divisorLine}></View>
        <Text style={{ marginHorizontal: '3%'}}>OU</Text>
        <View style={styles.divisorLine}></View>
      </View>
      
      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>Não possui uma conta?</Text>
        <TouchableOpacity>
          <Text style={styles.signUpButton}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    marginTop: Platform.OS === 'android' ? '13%' : '20%',
    marginBottom: Platform.OS === 'android' ? '13%' : '15%',
  },
  input: {
    width: '85%',
    height: 42,
    backgroundColor: '#F4F3F3',
    marginBottom: 20,
    padding: 8,
    borderRadius: 5,
    borderColor: '#E0E0E0'
  },
  forgotContainer: {
    width: '90%',
    alignItems: 'flex-end',
  },
  forgotText: {
    color: '#399fff',
  },
  loginButton: {
    marginTop: '5%',
    backgroundColor: '#399fff',
    width: '85%',
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  loginText: {
    color: '#FFF',
    fontSize: 16,
  },  
  facebookButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '15%',
  },
  facebookText: {
    color: '#399fff',
    padding: 8,
    fontSize: 15,
  },
  divisor: {
    marginTop: '10%',
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  divisorLine: {
    width: '45%',
    height: 2,
    backgroundColor: '#EFEDED',
    borderRadius: 5,
  },
  signUpContainer: {
    flexDirection: 'row',
    marginTop: '10%',
  },
  signUpText: {
    color: '#C4C4C4',
    paddingRight: 5,
  },
  signUpButton: {
    color: '#399fff',
    fontWeight: 'bold',
  },


});
