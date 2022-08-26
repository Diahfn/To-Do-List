import React from 'react'
//import navigation container
import { NavigationContainer } from '@react-navigation/native'
//import stack navigation
import { createStackNavigator } from '@react-navigation/stack'
//import bottom tab navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Ionicons } from '@expo/vector-icons'
import Calculator from './screens/calculator'
import TodoList from './screens/TodoList'
import {Hello} from './screens/Hello'
import LoginScreen from './screens/LoginScreen'
import Settings from './component/settings'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function MyNav() {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={({ route }) =>({
                headerMode: 'screen',
                headerTintColor: 'black',
                headerStyle: { backgroundColor: '#ffcfd2' },
                tabBarIcon: ({ focused, color }) => {
                    let iconName

                    if(route.name === 'Hello') {
                        iconName = focused ? 'home' : 'home-outline'
                    } else if (route.name === 'TodoList') {
                        iconName = focused ? 'list-circle' : 'list-circle-outline'
                    } else if(route.name === 'Calculator') {
                        iconName = focused ? 'calculator' : 'calculator-outline'
                    } else if(route.name === 'Logout') {
                        iconName = focused ? 'close-circle-outline' : 'close-circle-outline'
                    }

                    return <Ionicons name={iconName} size={27} color={color} />
                },
                tabBarActiveTintColor: '#892b64',
                tabBarInactiveTintColor: '#a5a58d'
            })}
        >
            <Tab.Screen name='Hello' component={Hello} options={{ headerShown: false }} />
            <Tab.Screen name='Calculator' component={Calculator} options={{ headerShown: false }} />
            <Tab.Screen name='TodoList' component={TodoList} options={{ headerShown: false }} />
            <Tab.Screen name='Logout' component={Settings} options={{headerShown: false}} />
        </Tab.Navigator>
    )
}

export default function Container() {
    
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='Login'
                    component={LoginScreen}
                    options={{headerShown: false}}
                /> 
                <Stack.Screen
                    name='Home'
                    component={MyNav}
                    options={{headerShown: false}}
                />
                
            </Stack.Navigator>
            
        </NavigationContainer>
    )
}