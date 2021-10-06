import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 10
    },
    image: {
        width: 60,
        height: 60
    },
    rightContainer: {
        justifyContent: 'space-around',
        marginLeft: 15
    },
    title: {
        color: 'white',
        fontSize: 19,
    },
    artist: {
        color:'#9D9D9D',
        fontSize: 15
    }
})

export default styles;