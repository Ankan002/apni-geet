import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native'
import {Albums} from "../../types";
import styles from './styles';

export type AlbumHeaderProps = {
    album: Albums
}

const AlbumHeader = (props: AlbumHeaderProps) => {

    const {album} = props

    return(
        <View style={styles.container}>
            {/*Cover Image*/}
            <Image source={{uri: album.imageUri}} style={styles.image} />
            {/*Name*/}
            <Text style={styles.name}>{album.name}</Text>
            {/*Creator  Number Of Likes*/}
            <View style={styles.creatorContainer}>
                <Text style={styles.creator}>By {album.by}</Text>
                <Text style={styles.likes}>{album.numberOfLikes} Likes</Text>
            </View>
            {/*Play Button*/}
            <TouchableOpacity>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>PLAY</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default AlbumHeader;