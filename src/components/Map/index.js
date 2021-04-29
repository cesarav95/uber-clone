import React from 'react';
import { Image } from 'react-native';
import MapView, {Marker} from 'react-native-maps';

import CarsType from '../../assets/data/cars';


const Map = (props) => {
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
                {
                    CarsType.map(car => 
                        <Marker 
                            key={car.id}
                            title={car.type}
                            coordinate={{latitude: car.latitude, longitude: car.longitude}}                    
                        >
                            <Image
                                source={car.image}
                                style={{ 
                                    width: 35, 
                                    height: 35, 
                                    resizeMode:'contain',
                                    transform: [
                                        {
                                            rotate: `${car.heading}deg`
                                        }
                                    ]
                                }}
                            />
                        </Marker>
                    )
                }
            </MapView>
    );
}
export default Map;
