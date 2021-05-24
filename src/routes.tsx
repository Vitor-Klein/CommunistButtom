import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import ButtomPage from './pages/ButtomPage'

const AppStack = createStackNavigator()

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator 
        headerMode="none" 
        screenOptions={{
          cardStyle: {
            backgroundColor: '#f0f0f5'
          }
        }}
      >
        <AppStack.Screen name="Buttom" component={ButtomPage} />
      </AppStack.Navigator>
    </NavigationContainer>
  )
}

export default Routes