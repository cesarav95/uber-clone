import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        padding: 10,
        height:'100%',
    },
    textInput: {
        backgroundColor: 'white',
        marginVertical:5,
        marginLeft: 20
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5
    },
    iconContainer: {
        backgroundColor: 'white',
        borderRadius: 50,
        padding: 5,
        marginRight: 10
    },
    placeText: {

    },
    separator: {
        backgroundColor: '#efefff',
        height: 1
    },
    listView: {
        position: 'absolute',
        top: 110
    },
    autocompleteContainer: {
        position: 'absolute',
        top: 0,
        left: 10,
        right: 10
    },
    square: {
        width: 5,
        height: 5,
        backgroundColor: 'black',
        position: 'absolute',
        top : 20,
        left: 0
    }
});
export default styles;