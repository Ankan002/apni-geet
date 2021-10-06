import React from 'react'
import { Albums } from '../../types'
import {FlatList, Text, View } from 'react-native'
import styles from './styles'
import AlbumComponent from '../Album'

export type AlbumCategoryProps = {
    title: string,
    albums: [Albums]
}

const AlbumCategory = (props: AlbumCategoryProps) => {
    return(
        <View style={styles.container}>
            {/* Title */}
            <Text style={styles.title}>{props.title}</Text>
            {/* List Of Albums */}
            <FlatList
                data = {props.albums}
                renderItem = {({item}) => <AlbumComponent album={item} />}
                keyExtractor = {(item) => item.id}
                horizontal = {true}
                showsHorizontalScrollIndicator = {false}
            />
        </View>
    )
}

export default AlbumCategory