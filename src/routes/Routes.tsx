import React from 'react';

import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/home/Home';
import List from '../componets/list/List';
import Feed from '../pages/feed/Feed';




export default function Routes() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      
      <Stack.Navigator>
      
        <Stack.Screen
        name='Home'
        component={Home}
        options={{headerShown: false}}
        />
        
        <Stack.Screen 
        name='List'
        component={List}
        options={{headerShown: false}}
        />
        
        <Stack.Screen 
        name='Feed'
        component={Feed}
        options={{headerShown: false}}
        />

      </Stack.Navigator>

    </NavigationContainer>
  )
}