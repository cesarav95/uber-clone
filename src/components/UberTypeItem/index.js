import React from 'react';
import { View, Text, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './style';
const URL_IMG_ROOT = '../../assets/images/';
const UberTypeItem = (props) => {
    const {car} = props;

    return (
        
        <View style={styles.container}>
            {/* Image */}
            <Image 
                style={styles.image} 
                source={car.image}
            />
            <View style={styles.descriptionContainer}>
                <Text style={styles.nameType}>
                    {car.type}
                    
                </Text>
                <Text style={styles.time}>
                    9:00am drop off
                </Text>                
            </View>
            <View style={styles.priceContainer}>               
                
                <Text><Ionicons name={'person'} size={12}/>8</Text>
                <Ionicons name={'pricetag'} size={25} color={'orange'}/>
                <Text>  S/ {car.price}</Text>
            </View>
        </View>
    );
}
export default UberTypeItem;