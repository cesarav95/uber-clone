import React from 'react';
import { Image } from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions'

const origin = {latitude: -13.5166227, longitude: -71.9794432};
const destination = {latitude: -13.519207, longitude: -71.9798207};
const GOOGLE_MAPS_APIKEY = 'AIzaSyAIMvqH0dqYR2ASjVloEJq8apqZbwonoME';

const Route = (props) => {
    return (
            <MapView 
                style={{
                    height: '100%',
                    width: '100%'
                }}
                initialRegion={{
                latitude: -13.5166227,
                longitude: -71.9794432,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
                }}
            > 
                <MapViewDirections
                    origin={origin}
                    destination={destination}
                    apikey={GOOGLE_MAPS_APIKEY}
                    strokeWidth={3}
                    strokeColor="red"
                />    

                <Marker 
                    key={1}
                    title={'Origin'}
                    coordinate={origin}                    
                >
                    <Image
                        source={require('../../assets/images/pin_marker.png')}
                        style={{ width: 35, height:35, resizeMode:'contain' }}
                    />
                </Marker>       
                <Marker 
                    key={2}
                    title={'Destination'}
                    coordinate={destination}                    
                >
                    <Image
                        source={require('../../assets/images/pin_marker.png')}
                        style={{ width: 35, height:35, resizeMode:'contain' }}
                    />
                </Marker>     
            </MapView>
    );
}
export default Route;
