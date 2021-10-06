import React from "react";
import { Image, Text, View, TouchableWithoutFeedback } from "react-native";
import styles from './styles';
import {Albums} from '../../types'
import { useNavigation } from "@react-navigation/native";

export type AlbumProps = {
    album: Albums
}

const AlbumComponent = (props: AlbumProps) => {

    const navigation = useNavigation()

    const onPress = () => {
        navigation.navigate('AlbumScreen', {id: props.album.id})
    }

    return(
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                {/* Image Of The Album */}
                <Image source={{ uri: props.album.imageUri}} style={styles.image} />
                {/* Artists HeadLine */}
                <Text style={styles.text}>{props.album.artistsHeadline}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default AlbumComponent