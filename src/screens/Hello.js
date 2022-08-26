import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { ImageBackground } from 'react-native';
import { auth } from '../config/firebase';


const image = {uri: 'https://media.istockphoto.com/vectors/young-woman-filling-long-paper-note-with-to-do-list-and-giant-pencil-vector-id1160018579?k=20&m=1160018579&s=612x612&w=0&h=UD7Kd4o6cgUo2XxWk_rlwaK8LjKwcHNYMJipblBurKU='}

export const Hello = ({ navigation, route }) => {
    return (
        <View style={{flex: 1}}>
            <ImageBackground source={image} resizeMode='contain' style={styles.home}>
                <Text style={[styles.text, {fontWeight: 800}]}>Todo List</Text>
                <Text style={[styles.text, {color: '#370617', fontSize: 16}]}>Welcome {auth.currentUser?.email}</Text>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    home: {
        flex: 1,
        display:'flex',
        backgroundColor: 'rgba(255, 160, 160, 1)',
        justifyContent:'flex-end',
        alignItems: 'flex-end',
        paddingBottom: 20
    },
    text: {
        fontWeight: 700, 
        fontSize: 24, 
        alignSelf: 'center',
    }
})