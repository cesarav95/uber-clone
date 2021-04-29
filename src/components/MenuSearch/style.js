import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    inputBox: {
        backgroundColor: '#b0b0b0',
        margin: 5,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    inputText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#6e6e6e'
    },

    timeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 100,
        padding: 5,
        backgroundColor: '#fff',
        borderRadius: 50
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        borderBottomWidth:1,
        borderColor: '#dbdbdb'
    },
    iconContainer:{
        backgroundColor: '#b3b3b3',
        padding: 10,
        borderRadius: 25,
        
    },
    destionationText: {
        marginLeft: 10,
        fontWeight: '500',
        fontSize: 10

    }


});
export default styles;