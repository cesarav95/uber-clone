import React from 'react';
import { View, Text } from 'react-native';
import AntDesign  from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'

import styles from './style';

const MenuSearch = (props) => {
    return (
        <View>
            <View style={styles.inputBox}>
                <Text style={styles.inputText}>Where To?</Text>
                <View style={styles.timeContainer}>
                    <AntDesign name={'clockcircle'} size={16} color={'#535353'}/>
                    <Text>Now</Text>
                    <MaterialIcons name={'keyboard-arrow-down'} size={16}/>
                </View>
            </View>

            <View style={styles.row}>
                <View style={styles.iconContainer}>
                    <AntDesign name={'clockcircle'} size={15} color={'#ffffff'}/>
                </View>
                <Text style={styles.destionationText}>Spin Home </Text>
            </View>

            <View style={styles.row}>
                <View style={[styles.iconContainer, {backgroundColor:'#0088ff'}]}>
                    <Entypo name={'home'} size={15} color={'#ffffff'}/>
                </View>
                <Text style={styles.destionationText}>Spin Home </Text>
            </View>
        </View>
    );
}

export default MenuSearch;