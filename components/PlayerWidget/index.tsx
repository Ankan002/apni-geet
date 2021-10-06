import React,{useEffect, useState, useContext} from 'react';
import {Text, Image, View, TouchableOpacity, Animated} from 'react-native';
import {Audio} from 'expo-av';
import styles from './styles';
import {Song} from "../../types";
import {AntDesign} from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import {Sound} from "expo-av/build/Audio/Sound";
import {loadAsync} from "expo-font";
import {AppContext} from "../../AppContext";
import {API, graphqlOperation} from "aws-amplify";
import {getSong} from "../../src/graphql/queries";

export type PlayerWidgetProps = {
    song: Song
}

// const song ={
//     id: '1',
//     //uri: 'https://drive.google.com/file/d/1u838jG7tFhnM8ZjA69uTrwFAMDd1i9A1/view?usp=sharing',
//     uri:'https://all-songs.s3.ap-south-1.amazonaws.com/Soothing+Playlist+Lofi.mp3',
//     imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
//     title: 'Bella Ciao',
//     artist: 'Me...',
// }

const PlayerWidget = () => {

    const [sound, setSound] = useState<Sound|null>(null);
    const[isPlaying, setIsPlaying]= useState<boolean>(true);
    const [duration, setDuration]= useState<number|null>(null);
    const [position, setPosition]= useState<number|null>(null);
    const [song,setSong] = useState(null);

    const fetchSong = async () => {
        try{
            const data = await API.graphql(graphqlOperation(getSong, {id: songId}))
            setSong((data.data.getSong))
        }
        catch(e){
            console.log(e)
        }
    }

    const {songId} = useContext(AppContext)

    useEffect(() => {
        fetchSong();
    }, [songId])

    const onPlayBackStatusUpdate = (status) => {
        setIsPlaying(status.isPlaying)
        setDuration(status.durationMillis)
        setPosition(status.positionMillis)
    }

    const playCurrentSong = async () => {
        if (sound) {
            await sound.unloadAsync();
        }

        const { sound: newSound } = await Audio.Sound.createAsync(
            { uri: song.uri },
            { shouldPlay: isPlaying },
            onPlayBackStatusUpdate,
        )

        setSound(newSound)

        try{
            await Audio.setAudioModeAsync({
                staysActiveInBackground: true,
            })
        }
        catch(e){
            console.log(e)
        }
    }

    useEffect( () => {
        //Play The Song
        if(song){
            playCurrentSong()
        }
    }, [song])

    const onPlayPausePress = async () => {
        if(!sound){
            return;
        }

        if(isPlaying){
            await sound.pauseAsync()
        }
        else{
            await sound.playAsync()
        }
    }

    const getProgress = () => {
        if(sound === null || duration === null || position===null){
            return 0;
        }

        return (position / duration) * 90;
    }

    if(!song){
        return null;
    }

    return(
        <View style={styles.container}>
            {/*Image Cover*/}
            <View style={[styles.progress, {width: `${getProgress()}%`}]} />
            <View style={styles.row}>
                <Image source={{uri: song.imageUri}} style={styles.image} />
                <View style={styles.rightContainer}>
                    <View style={styles.nameContainer}>
                        {/*Title*/}
                        <Text style={styles.title}>{song.title}</Text>
                    </View>
                    <View style={styles.iconsContainer}>
                        {/*Icons*/}
                        <AntDesign name="hearto" size={24} color="white" />
                        <TouchableOpacity onPress={onPlayPausePress}>
                            <FontAwesome name={isPlaying ? 'pause' : 'play'} size={24} color="white" />
                        </TouchableOpacity>

                    </View>
                </View>
            </View>


        </View>
    )
}

export default PlayerWidget;