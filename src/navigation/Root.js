import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeNavigator from './Home';
import CustomDrawerContainer from './CustomDrawerContainer';

const Drawer = createDrawerNavigator();

const ItemDrawer = (props) => (
    <View style={{ flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>{props.name}</Text>
    </View>
)
const RootNavigator = (props) => {
    return (
        <NavigationContainer>
            <Drawer.Navigator drawerContent={(props) => (<CustomDrawerContainer {...props}/>)}>
                <Drawer.Screen name={"Home"} component={HomeNavigator}/>
                <Drawer.Screen name={"Previous Trips"}>
                    {() => <ItemDrawer name={"Previous Trips"}/>}
                </Drawer.Screen>
                <Drawer.Screen name={"Help"}>
                    {() => <ItemDrawer name={"Help"}/>}
                </Drawer.Screen>
                <Drawer.Screen name={"Invoice"}>
                    {() => <ItemDrawer name={"Invoice"}/>}
                </Drawer.Screen>
                <Drawer.Screen name={"Settings"}>
                    {() => <ItemDrawer name={"Settings"}/>}
                </Drawer.Screen>
            </Drawer.Navigator>
        </NavigationContainer>
    )
}
export default RootNavigator;
