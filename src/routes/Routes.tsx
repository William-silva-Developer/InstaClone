import React from 'react';


import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/home/Home';
import Feed from '../pages/feed/Feed';




export default function Routes() {

  const { Navigator, Screen } = createNativeStackNavigator();

  return (
      <Navigator>
      
        <Screen
        name='Home'
        component={Home}
        options={{headerShown: false}}
        />
        
        
        <Screen 
        name='Feed'
        component={Feed}
        options={{headerShown: false}}
        />

      </Navigator>
  )
}