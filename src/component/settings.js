import React from 'react';
import { View } from 'react-native';
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { auth } from '../config/firebase';

export default function Settings({navigation}) {

    const handleSignOut = () => {
        auth
          .signOut()
          .then(() => {
            navigation.navigate("Login")
        })
        .catch(error => alert(error.message))
    }

    return (
        <View style={styles.home}>
                <TouchableOpacity style={styles.button} onPress={handleSignOut}>
                    <Text style={styles.text}>Logout</Text>
                </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    home: {
        backgroundColor: 'rgba(255, 160, 160, 1)',
        flex: 1,
        justifyContent: 'center'
    },
    button: {
        justifyContent: "center",
        alignItems: "center",
    },
    text: { color: '#14213d', fontSize: 40, fontWeight: 800 }
    
})