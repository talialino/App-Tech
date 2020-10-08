import 'react-native-gesture-handler';
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import User from './pages/User';

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: { backgroundColor: '#E79F23' },
                    headerTintColor: '#FFF',
                    headerTitleAlign: 'center',
                }}
            >
                <Stack.Screen
                    name="Main"
                    component={Main}
                    options={{ title: 'Busca' }}
                />
                <Stack.Screen name="User" component={User} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
