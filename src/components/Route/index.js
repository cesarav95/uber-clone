import React from 'react';
import { Image } from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions'


const GOOGLE_MAPS_APIKEY = 'YOUR_API_KEY';

const Route = ({origin, destination}) => {

    const originLocation = {
        latitude: origin.details.geometry.location.lat,
        longitude: origin.details.geometry.location.lng
    }; 
    const destinationLocation = {
        latitude: destination.details.geometry.location.lat,
        longitude: destination.details.geometry.location.lng
    };

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
                showsUserLocation={true}
            > 
                <MapViewDirections
                    origin={originLocation}
                    destination={destinationLocation}
                    apikey={GOOGLE_MAPS_APIKEY}
                    strokeWidth={3}
                    strokeColor="red"
                    
                />    

                <Marker 
                    key={1}
                    title={'Origin'}
                    coordinate={originLocation}                    
                >
                    <Image
                        source={require('../../assets/images/pin_marker.png')}
                        style={{ width: 35, height:35, resizeMode:'contain' }}
                    />
                </Marker>       
                <Marker 
                    key={2}
                    title={'Destination'}
                    coordinate={destinationLocation}                    
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
