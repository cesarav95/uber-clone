import React from 'react'
import { View, Text, Image } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo';

import styles from './styles';

const PlaceItem = (props) => {
    const {data} = props;
    return(
        <View style={styles.itemContainer}>
            <View style={styles.iconContainer}>
                {/*<Entypo name='location-pin' size={20} color={'white'} />*/}
                <Image
                source={require('../../assets/images/cube.png')}
                style={{ height:25, width: 25, resizeMode: 'contain'}} 
                />
            </View>
            <Text style={styles.placeText}> {data.description} </Text>

        </View>
    );
}
export default PlaceItem;