import React from 'react';
import { View, Text, Pressable, Image} from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const CustomDrawerContainer = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            {/* Header container */}
            <View style={{backgroundColor: 'black', padding:15, borderColor: 'white'}}>

                <View style={{
                    flexDirection: 'row',

                }}>
                    <View style={{
                        flexDirection:'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'white',
                        width:60,
                        height:60,
                        borderRadius: 30,
                        marginRight:5
                    }}>
                        <Image style={{ resizeMode: 'cover', width: 50, height:50, borderRadius:50/2,  }} source={require('../assets/images/avatar_user.png')} />
                    </View>
                    <View>
                        <Text style={{ color: 'white', fontSize: 24 }}>User Name</Text>
                        <Text style={{ color: 'gray' }}>5.00 *</Text>
                    </View>
                </View>    

                <View style={{
                    borderBottomWidth:1, 
                    borderBottomColor:'white',
                    borderTopColor: 'white',
                    borderTopWidth:1,
                    paddingVertical:5 ,
                    marginVertical:10
                }}>
                    <Pressable onPress={()=>{console.warn("Message")}}>
                        <Text style={{color: 'white', paddingVertical: 10}}>Messages</Text>
                    </Pressable>
                </View>

                <Pressable onPress={()=>{console.warn("Do more with your account")}}>
                    <Text style={{color: 'white', paddingVertical:5}}>Do more with your account</Text>
                </Pressable>
                <Pressable onPress={()=>{console.warn("Make money driving")}}>
                    <Text style={{color: 'white', paddingVertical: 5}}>Make money driving</Text>
                </Pressable>
            </View>
            <DrawerItemList {...props}/>
        </DrawerContentScrollView>
    )
}
export default CustomDrawerContainer;
