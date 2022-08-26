import React from 'react';
import { Text, View } from 'react-native';

export const Title = () => {
    return (
        <View style={{textAlign: 'center', marginVertical: 30}}>
            <Text style={{fontWeight: 700, fontSize: 28}}>Todo App</Text>
        </View>
    )
}