import React from 'react';
import { View, Text } from 'react-native';

import style from './style';

const Message = (props) => {
    return (
        <View style={style.container}>
           <Text style={style.title}>Title</Text>
           <Text style={style.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dignissim venenatis odio. .</Text>
           <Text style={style.moreInformation}>Learn more</Text>
        </View>
    );
}

export default Message;