import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        padding: 10,
        height:'100%',
    },
    textInput: {
        backgroundColor: 'white',
        marginVertical:5,
        marginLeft: 20,
        paddingHorizontal: 15
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
        width: 7,
        height: 7,
        backgroundColor: 'rgb(73, 73, 73)',
        position: 'absolute',
        top : 80,
        left: 15
    },
    circle: {
        width: 7,
        height: 7,
        backgroundColor: 'rgb(73, 73, 73)',
        position: 'absolute',
        borderRadius: 50,
        top : 25,
        left: 15
    },
    line: {
        width: 1,
        height: 50,
        backgroundColor: 'rgb(202, 42, 42)',
        position: 'absolute',
        borderRadius: 50,
        top : 30,
        left: 18
    }
});
export default styles;