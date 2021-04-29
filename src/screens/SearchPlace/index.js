import React, { useEffect, useState } from 'react';
import { View, TextInput, SafeAreaView } from 'react-native';
import { GooglePlacesAutocomplete }  from 'react-native-google-places-autocomplete';

import styles from './styles';
import PlaceItem from './PlaceItem';

const API_KEY = 'AIzaSyAIMvqH0dqYR2ASjVloEJq8apqZbwonoME';
const SearchPlace = (props) => {
    const [originPlace, setOriginPlace] = useState(null);
    const [destinationPlace, setDestinationPlace] = useState(null);


    useEffect( () =>{
        console.log("llamando a useEffect");
        if (originPlace && destinationPlace){
            console.warn("Redirecciona a otro screen");
        }
    });

    return (
        <SafeAreaView style={{height:'100%'}} >
            <View style={styles.container}>
                <GooglePlacesAutocomplete 
                    placeholder='Where From?'
                    fetchDetails={true} 
                    onPress={(data, details = null) =>{
                        setOriginPlace({data, details})
                    }}
                    enablePoweredByContainer={false}
                    suppressDefaultStyles
                    styles={{
                        textInput: styles.textInput,
                        container: styles.autocompleteContainer,
                        listView: styles.listView,
                        separator: styles.separator
                    }}
                    renderRow={(data) => <PlaceItem data={data}/>}
                    onFail={(error) => {console.error(error)}}
                    query={{
                        key: API_KEY,
                        language:'es'
                    }}
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
            <View styles={styles.circle}/>

            <View style={styles.line}/>

            {/*Circle for destination place */}
            <View styles={styles.square} />

        </SafeAreaView>
        
    )
}
export default SearchPlace