import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 48,
        backgroundColor: '#261C2C',
        borderRadius: 50,
        width: '100%',
        borderWidth: 2,
        borderBottomColor: 'black',
        alignItems: 'center',
    },
    progress: {
        height: 2,
        backgroundColor: '#bcbcbc',
        borderRadius: 50,
    },
    row:{
        flexDirection: 'row',
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 50,
        marginRight: 10
    },
    rightContainer: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    nameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 70,
        justifyContent: 'space-between',
        marginRight: 20
    },
    title: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
        margin: 5
    },
    artist: {
        color:'#9D9D9D',
        fontSize: 14,
        margin: 5
    }
})

export default styles;