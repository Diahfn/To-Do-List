import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default function Todo({ todo, toggleComplete, handleDelete, handleEdit }) {
    
    const [newTitle, setNewTitle] = useState(todo.title)

    const handleChange = (event) => {
        
        if (todo.complete === true) {
            setNewTitle(todo.title)
        } else {
            todo.title = ''
            setNewTitle(event.target.value)
        }
    }

    return (
        <View style={styles.todo}>
            <View>
                <TextInput
                    style={[styles.list, {textDecorationLine: todo.completed && 'line-through'}]}
                    keyboardType='default'
                    value={todo.title === '' ? newTitle: todo.title}
                    onPressIn={handleChange}
                />
            </View>
            <View style={{display: 'flex', flexDirection: 'row'}}>
                <TouchableOpacity style={[styles.btnComplete, {visibility: todo.completed && 'hidden'}]} onPress={() => toggleComplete(todo)}>
                    <FontAwesome name='check-circle' size={25} color='#38b000' />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleEdit(todo, newTitle)}>
                    <MaterialIcons name='edit' size={25} color='#0077b6' />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnDelete} onPress={() => handleDelete(todo.id)}>
                    <MaterialIcons name='delete' size={25} color='#e71d36'/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    todo: {
        width: '100%',
        marginTop: 20,
        backgroundColor: '#fcd5ce',
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 10,
        justifyContent: 'space-between',
        boxShadow: '1px 2px 10px #ddd'
    },
    list: {
        borderColor: 'transparent',
        backgroundColor: 'transparent',
        fontSize: 20,
        fontWeight: '500'
    },
    btnComplete: {
        marginHorizontal: 7
    },
    btnDelete: {
        marginHorizontal: 7,
    }
})