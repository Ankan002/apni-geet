import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 20,
    },
    image: {
        width: 200,
        height: 200,
        margin: 15,
        borderRadius: 100
    },
    name: {
        color: 'white',
        fontSize: 25,
        fontWeight: "bold",
    },
    creatorContainer: {
        flexDirection: 'row',
        margin: 5
    },
    creator: {
        color: '#9D9D9D',
        margin: 5,
        fontSize: 14,
    },
    likes: {
        color: '#9D9D9D',
        margin: 5,
        fontSize: 14,
    },
    button:{
        backgroundColor: '#1CD05D',
        height: 50,
        width: 150,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    }
})

export default styles;