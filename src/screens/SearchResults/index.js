import React from 'react';
import { View, Text, Dimensions } from 'react-native';

import Route from '../../components/Route';
import TypesTripUber from '../../components/TypesTripUber';

const SearchResults = (prop) => {
    return (
        <View style={{display: 'flex', justifyContent:'space-between'}}>
            <View style={{height: Dimensions.get('window').height - 300}}>
                <Route/>
            </View>
            <View style={{height:400}}>
                <TypesTripUber></TypesTripUber>
            </View>
            
            
        </View>
    );
}
export default SearchResults;