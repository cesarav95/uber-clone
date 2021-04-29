import React from 'react'
import { View, Text, Pressable, SafeAreaView } from 'react-native'

import UberTypeItem from '../../components/UberTypeItem';
import CarsData from '../../assets/data/cars';
import styles from './style';

const Save = () =>{
    console.warn("Save selection");
};

const TypesTripUber = (props) => {
    return (
        
        <View>
            {CarsData.map(car => <UberTypeItem car={car} key={car.id}/>)}
            <Pressable 
                onPress={Save}
                style={styles.saveBtn}
            >
                <Text style={{color:'white', fontWeight:'bold', fontSize: 16}}> Confirmar </Text>
            </Pressable>
        </View>
    )
}
export default TypesTripUber;
