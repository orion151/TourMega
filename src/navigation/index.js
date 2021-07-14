import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import {
  LocationSearch,
  TourView
} from '../views'

const Stack = createStackNavigator()

const Navigation = () => {
  return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LocationSearch">
                <Stack.Screen
                    name="LocationSearch"
                    component={LocationSearch}
                    options={{
                      title: 'Location'
                    }}
                />
                <Stack.Screen
                    name="TourView"
                    component={TourView}
                    options={{
                      title: 'Details'
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
  )
}

export default Navigation
