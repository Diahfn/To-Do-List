import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { db } from '../config/firebase';
import { collection, addDoc } from 'firebase/firestore';
import Button from './Button';

export default function AddTodo() {

    const [title, setTitle] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (title !== '') {
            await addDoc(collection(db, 'Task'), {
                title,
                completed: false
            })
            setTitle('')
        }
        
    }
    
    return (
        <View style={styles.container}>
            <View>
                <TextInput
                    placeholder='Enter Todo...'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    style={[styles.input, {outline: 'none'}]}
                    underlineColorAndroid='transparent'
                    selectionColor='transparent'
                />
            </View>
            <View style={styles.btn}>
                <Button onPress={handleSubmit}>Add</Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginBottom: 20,
        width: '90%'
    },
    btn: {
        textAlign: 'center',
        marginBottom: 10,
        backgroundColor: '#f72585',
        height: 30,
        borderRadius: 5,
        justifyContent: 'center'
    },
    input: {
        fontSize: 21,
        marginBottom: 10,
        borderBottomColor: 'light-grey',
        borderBottomWidth: 0.5,
        color: 'black',
        height: 30,
        padding: 7,
        fontWeight: '600'
    }
})