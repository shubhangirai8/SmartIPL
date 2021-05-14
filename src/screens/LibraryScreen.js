import { VideoExportPreset } from 'expo-image-picker';
import React, {useRef, useState} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import Trimmer from 'react-native-trimmer';
import {Appbar} from 'react-native-paper';
import { Paragraph, Dialog, Portal , List, RadioButton} from 'react-native-paper';
import  {Provider as PaperProvider } from 'react-native-paper';


const LibraryScreen = ({navigation}) => {
     
       
  
    const [visible, setVisible] = React.useState(false);
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

      // const _handleVideoRef = (component) => {

      //   console.log("component",status);
      //   const playbackObject = component;
      //   if(playbackObject!= null) {
      //     const aa = playbackObject.setStatusAsync({ shouldPlay: true, positionMillis: 6000 }).then({});
          
      //   }
        
      // }

      
      const hideDialog = () => setVisible(false);
      

      const _goBack = () => console.log('Went back');

      const _handleSearch = () => console.log('Searching');
    
      const _handleMore = (e) => {
        setVisible(true);
      };
      
      const [checked, setChecked] = React.useState('first');
      const [checked2, setChecked2] = React.useState('first');
      const [checked3, setChecked3] = React.useState('first');
      const [checked4, setChecked4] = React.useState('first');
      const [checked5, setChecked5] = React.useState('first');
    return (


      <PaperProvider>

      <Appbar.Header>
        <Appbar.BackAction onPress={_goBack} />
        <Appbar.Content title="Video Analysis"  />
        <Appbar.Action icon="magnify" onPress={_handleSearch} />
        <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
      </Appbar.Header>
      {visible && <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>Options</Dialog.Title>
            <Dialog.Content>
            <List.Section>
              <List.Subheader>Show Scales</List.Subheader>
              <List.Item>
              <RadioButton
        value="first"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}
      />
      <RadioButton
        value="second"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
      />
                </List.Item> 
  </List.Section>

  <List.Section>
              <List.Subheader>Show Callibration Stick</List.Subheader>
              <List.Item><RadioButton
        value="first"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}
      />
      <RadioButton
        value="second"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
      /></List.Item> 
  </List.Section>

  <List.Section>
              <List.Subheader>Show Coordinates</List.Subheader>
              <List.Item><RadioButton
        value="first"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}
      />
      <RadioButton
        value="second"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
      /></List.Item> 
  </List.Section>

  <List.Section>
              <List.Subheader>Tracker Selection</List.Subheader>
              <List.Item><RadioButton
        value="first"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}
      />
      <RadioButton
        value="second"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
      /></List.Item> 
  </List.Section>

  <List.Section>
              <List.Subheader>Target Selection Shape</List.Subheader>
              <List.Item><RadioButton
        value="first"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}
      />
      <RadioButton
        value="second"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
      /></List.Item> 
  </List.Section>

            </Dialog.Content>
            <Dialog.Actions>
              
            </Dialog.Actions>
          </Dialog>
        </Portal>}
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
        //ref={_handleVideoRef}
        style={styles.video}
        source={{
          uri: videoURL,
        }}
        useNativeControls
        resizeMode="cover"
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
    </View>
        
      </PaperProvider>
        
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