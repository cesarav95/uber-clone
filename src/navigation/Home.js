import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import SearchResults from '../screens/SearchResults/index';
import SearchPlace from '../screens/SearchPlace';

const Stack = createStackNavigator();

const HomeNavigator = (props) => {
    return (
        <Stack.Navigator
            screenOptions={{headerShown: false}}
            initialRouteName={"Home"}
        >
            <Stack.Screen name={"Home"} component={HomeScreen}/>
            <Stack.Screen name={"SearchPlace"} component={SearchPlace}/>
            <Stack.Screen name={"SearchResults"} component={SearchResults}/>
        </Stack.Navigator>
    )
}
export default HomeNavigator;