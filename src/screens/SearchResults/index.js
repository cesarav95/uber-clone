import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { useRoute } from '@react-navigation/native';

import Route from '../../components/Route';
import TypesTripUber from '../../components/TypesTripUber';
import { createIconSetFromFontello } from 'react-native-vector-icons';

const SearchResults = (props) => {

    const route = useRoute();
    const { originPlace, destinationPlace } = route.params;

    return (
        <View style={{display: 'flex', justifyContent:'space-between'}}>
            <View style={{height: Dimensions.get('window').height - 300}}>
                <Route origin={originPlace} destination={destinationPlace} />
            </View>
            <View style={{height:400}}>
                <TypesTripUber></TypesTripUber>
            </View>
            
            
        </View>
    );
}
export default SearchResults;