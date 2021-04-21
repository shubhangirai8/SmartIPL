import { VideoExportPreset } from 'expo-image-picker';
import React, {useRef, useState} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import Trimmer from 'react-native-trimmer';


const LibraryScreen = ({navigation}) => {

    const video = useRef(null);
    const [status, setStatus] = useState({});
    const external = navigation.getParam('external');
    const videoURL = navigation.getParam('videoURL');

    const maxTrimDuration = 60000;
    const minimumTrimDuration = 1000;
    const totalDuration = 180000;
    const initialLeftHandlePosition = 0;
    const initialRightHandlePosition = 36000;
    const scrubInterval = 50;

    const [playing , setPlaying] = useState(false);
    const [trimmerLeftHandlePosition, setTrimmerLeftHandPosition] = useState(initialLeftHandlePosition);
    const [trimmerRightHandlePosition, setTrimmerRightHandPosition] = useState(initialRightHandlePosition);
    const [scrubberPosition, setScrubberPosition] = useState(1000);

    const playScrubber = () => {
        setPlaying(true);
     
        scrubberInterval = setInterval(() => {
          setScrubberPosition(setScrubberPosition + scrubInterval )
        }, scrubInterval)
      };

      const pauseScrubber = () => {
        clearInterval(scrubberInterval)

        setPlaying(false);
        setScrubberPosition(trimmerLeftHandlePosition);
     };
     
      const onLeftHandleChange = (newLeftHandleValue) => {
        setTrimmerLeftHandPosition ( newLeftHandleValue )
      };
     
      const onRightHandleChange = (newRightHandleValue) => {
        setTrimmerRightHandPosition (newRightHandleValue )
      };
     
      const onScrubbingComplete = (newValue) => {
        setPlaying(false);
        setScrubberPosition(newValue);
        
      };




    return (

      <>
      <View>
        {
          playing
            ? <Button title="Pause" color="#f638dc" onPress={pauseScrubber}/>
            : <Button title="Play" color="#f638dc" onPress={playScrubber}/>
        }
        <Trimmer
          onLeftHandleChange={onLeftHandleChange}
          onRightHandleChange={onRightHandleChange}
          totalDuration={totalDuration}
          trimmerLeftHandlePosition={trimmerLeftHandlePosition}
          trimmerRightHandlePosition={trimmerRightHandlePosition}
          minimumTrimDuration={minimumTrimDuration}
          maxTrimDuration={maxTrimDuration}
          maximumZoomLevel={200}
          zoomMultiplier={20}
          initialZoomValue={2}
          scaleInOnInit={true}
          tintColor="#f638dc"
          markerColor="#5a3d5c"
          trackBackgroundColor="#382039"
          trackBorderColor="#5a3d5c"
          scrubberColor="#b7e778"
          scrubberPosition={scrubberPosition}
          onScrubbingComplete={onScrubbingComplete}
          onLeftHandlePressIn={() => console.log('onLeftHandlePressIn')}
          onRightHandlePressIn={() => console.log('onRightHandlePressIn')}
          onScrubberPressIn={() => console.log('onScrubberPressIn')}
        />
      </View>
      

        
        <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: videoURL,
        }}
        useNativeControls
        resizeMode="cover"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
    </View>
        
      </>
        
    );
    

}
const styles = StyleSheet.create({

container: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,

},
video: {
    flex: 1,
    alignContent: 'center',
    height: 500,
}
    
});

export default LibraryScreen;