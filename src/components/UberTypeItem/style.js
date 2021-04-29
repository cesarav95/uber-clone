import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding:10
    },
    image: {
        height: 50,
        width: 70,
        resizeMode: 'contain'
    },
    descriptionContainer: {
        flex: 1,
        marginHorizontal: 10
    },
    time: {
        color: '#5d5d5f',
        fontWeight: 'bold'
    },
    nameType: {
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 0
    },
    priceContainer: {
        width: 100,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        fontWeight: 'bold',
    }
});
export default styles;