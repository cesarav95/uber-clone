import React, { useEffect, useState } from 'react';
import { View, TextInput, SafeAreaView } from 'react-native';
import { GooglePlacesAutocomplete }  from 'react-native-google-places-autocomplete';
import { useNavigation } from '@react-navigation/native'

import styles from './styles';
import PlaceItem from './PlaceItem';

const API_KEY = 'AIzaSyAIMvqH0dqYR2ASjVloEJq8apqZbwonoME';

const homePlace = {
    description: 'Home',
    geometry: { location: { lat: -13.5190737, lng: -71.9668622 } },
};
const workPlace = {
    description: 'Work',
    geometry: { location: { lat: -13.5190737, lng: -71.9668622 } },
};

const SearchPlace = (props) => {
    const [originPlace, setOriginPlace] = useState(null);
    const [destinationPlace, setDestinationPlace] = useState(null);

    const navigation = useNavigation();

    const checkDataCompleted = () => {
        if (originPlace && destinationPlace){
            navigation.navigate("SearchResults", {originPlace, destinationPlace});
        }
    }

    useEffect( () =>{
        checkDataCompleted();
    },[originPlace, destinationPlace]);

    return (
        <SafeAreaView style={{height:'100%'}} >
            <View style={styles.container}>
                <GooglePlacesAutocomplete 
                    placeholder='Where From?'
                    fetchDetails={true} 
                    onPress={(data, details = null) =>{
                        setOriginPlace({data, details})
                    }}
                    currentLocation={true}
                    currentLocationLabel='Current Location'
                    enablePoweredByContainer={false}
                    suppressDefaultStyles
                    styles={{
                        textInput: styles.textInput,
                        container: styles.autocompleteContainer,
                        listView: styles.listView,
                        separator: styles.separator
                    }}
                    renderRow={(data) => <PlaceItem data={data}/>}
                    renderDescription={(data) => data.description || data.vicinity}
                    onFail={(error) => {console.error(error)}}
                    query={{
                        key: API_KEY,
                        language:'es'
                    }}
                    predefinedPlaces={[homePlace, workPlace]}
                />  

                <GooglePlacesAutocomplete 
                    placeholder='Where To?'
                    fetchDetails={true} 
                    onPress={(data, details = null) =>{
                        setDestinationPlace({data, details})
                    }}
                    enablePoweredByContainer={false}
                    suppressDefaultStyles
                    styles={{
                        textInput: styles.textInput,
                        container: { ...styles.autocompleteContainer,
                            top: 52
                        },
                        separator: styles.separator
                        
                    }}
                    renderRow={(data) => <PlaceItem data={data}/>}
                    onFail={(error) => {console.error(error)}}
                    query={{
                        key: API_KEY,
                        language:'es'
                    }}
                />
            </View>
            {/* Circle for origin place */}
            <View style={styles.circle}/>

            <View style={styles.line}/>

            {/*Circle for destination place */}
            <View style={styles.square} />

        </SafeAreaView>
        
    )
}
export default SearchPlace