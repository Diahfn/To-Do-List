import React from 'react';
import { StyleSheet, Text, TouchableOpacity} from 'react-native'

export default function Button({ onPress }) {
    return (
        <TouchableOpacity onPress={onPress} >
            <Text style={{fontSize: '16', fontWeight: '700'}}>
                Add
            </Text>
        </TouchableOpacity>
    )
}