
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Platform, Pressable } from 'react-native'
import { auth, db } from '../config/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

export default function LoginScreen ({navigation}) {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.navigate('Home')
      }
    })

    return unsubscribe
  }, [])
  
  const handleSignUp = async () => {
    try {
      createUserWithEmailAndPassword(auth, email, password)
        .then(userCredentials => {
          const user = userCredentials.user;
          alert('Register with ' + user.email + ' Success')
          
          db().collection('Task').doc(user.uid)
        })
        .catch(error => alert(error.message))
    } catch (error) {
      console.log(error)
    } 
  }

  const handleLogin = async () => {
    try {
      signInWithEmailAndPassword(auth, email, password)
        .then(userCredentials => {
          const user = userCredentials.user;
          console.log('Logged in with:', user.email);
        })
        .catch(error => alert(error.message))
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <KeyboardAvoidingView
      style={styles.content}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.inputContainer}>
        <Text style={styles.subtitle}>Sign in to your account</Text>

        <Pressable>
          <View style={styles.form}>
            <TextInput
              placeholder="Email"
              value={email}
              autoCorrect={false}
              keyboardType='email-address'
              autoComplete='email'
              returnKeyType='next'
              onChangeText={text => setEmail(text)}
              style={[styles.textInput, {outline: 'none'}]}
            />
          </View>
        </Pressable>
        
        <Pressable>
          <View style={styles.form}>
            <TextInput
              placeholder="Password"
              value={password}
              autoCorrect={false}
              autoComplete='password'
              returnKeyType='done'
              onChangeText={text => setPassword(text)}
              style={[styles.textInput, {outline: 'none'}]}
              secureTextEntry
            />
          </View>
        </Pressable>
        
      </View>

      <View style={styles.buttonList}>
        <TouchableOpacity onPress={handleLogin}>
          <View style={[styles.button, {backgroundColor: '#4cc9f0'}]} >
            <Text style={styles.buttonTitle}>Login</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSignUp}>
          <View style={styles.button}>
            <Text style={[styles.buttonTitle, {color: '#6d6875'}]}>Sign In</Text>
          </View>
        </TouchableOpacity>
      </View>
      
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'rgba(255, 160, 160, 1)',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 32
  },
  form: {
    alignItems: 'center',
    backgroundColor: '#f8edeb',
    borderRadius: 8,
    flexDirection: 'row',
    height: 48,
    paddingHorizontal: 16,
    marginVertical: 5
  },
  subtitle: {
    color: '#6d6875',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 22,
    marginVertical: 15
  },
  textInput: {
    color: '#22223b',
    flex: 1,
    height: 27,
    fontSize: 20,
    paddingHorizontal: 11
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#fcd5ce',
    borderRadius: 8,
    height: 48,
    justifyContent: 'center',
    marginVertical: 9,
    width: '100%'
  },
  buttonTitle: {
      color: '#FFFFFF',
      fontSize: 20,
      fontWeight: '600',
      fontWeight: 'bold'
  },
  buttonList: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 15
  }
})
