import React from 'react';
import { View, Text, Dimensions } from 'react-native';

import Map from '../../components/Map/index';
import Message from '../../components/Message/index';
import MenuSearch from '../../components/MenuSearch/index';

const HomeScreen = (props) => {
    return (
        <View>
            <View style={{height: Dimensions.get('window').height - 300}}>
                <Map/>
            </View>
            
            <Message/>
            <MenuSearch/>
        </View>
    );
}

export default HomeScreen;