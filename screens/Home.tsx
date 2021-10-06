import * as React from 'react';
import { StyleSheet, View, ViewBase, Text } from 'react-native';

import {API, graphqlOperation} from "aws-amplify";
import {listAlbumCategories} from "../src/graphql/queries";

import EditScreenInfo from '../components/EditScreenInfo';
import { RootTabScreenProps } from '../types';
import AlbumCategory from '../components/AlbumCategory';
import albumCategories from '../data/albumCategories';
import { FlatList } from 'react-native-gesture-handler';
import {useEffect, useState} from "react";



export default function Home() {

  const [categories, setCategories] = useState([])

  const fetchAlbumCategories = async () => {
    try{
      const data= await API.graphql(graphqlOperation(listAlbumCategories))
      setCategories(data.data.listAlbumCategories.items)
    }
    catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    fetchAlbumCategories()
  }, [])

  return (
    <View style={styles.container}>
      <FlatList 
        data = {categories}
        renderItem = {({item}) => (
          <AlbumCategory 
            title={item.title}
            albums={item.albums.items}
            
          />
        )}
        keyExtractor = {(item) => item.id}
        showsVerticalScrollIndicator = {false}
        showsHorizontalScrollIndicator = {false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});


