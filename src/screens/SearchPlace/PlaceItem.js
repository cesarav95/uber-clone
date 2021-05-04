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
                {
                    data.description === 'Home' ? <Entypo name='home' size={20} color={'#0080ff'} />:
                    data.description === 'Work'? <Entypo name='bucket' size={20} color={'#000708'} /> :
                    <Image
                source={require('../../assets/images/cube.png')}
                style={{ height:25, width: 25, resizeMode: 'contain'}} 
                />
                }
                
            </View>
            <Text style={styles.placeText}> {data.description || data.vicinity} </Text>

        </View>
    );
}
export default PlaceItem;