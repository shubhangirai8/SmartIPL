import { VideoExportPreset } from 'expo-image-picker';
import React, {useRef, useState} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import Trimmer from 'react-native-trimmer';
import {Appbar} from 'react-native-paper';
import { Paragraph, Dialog, Portal , List, RadioButton} from 'react-native-paper';
import  {Provider as PaperProvider } from 'react-native-paper';
import FABButton from '../components/FABButton';
import StyledModal from '../components/Modal';
//import { createStackNavigator } from 'react-native-stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';


const LibraryScreen = ({navigation}) => {
     
    const [active , setActive]= useState('');
  
    const [visible, setVisible] = React.useState(false);
    const video = useRef(null);
    const [status, setStatus] = useState({});
    const external = navigation.getParam('external');
    const videoURL = navigation.getParam('videoURL');
    const [option, setOption] = useState({});

    const [showModal, setShowModal] = useState(false);
    const [showOption, setShowOption] = useState('');

    const [scaleOption, setScaleOption] = useState({optionName : "Show Scale", selected: "Horizontal", option1: "Horizontal", option2: "Vertical"});
    const [trackerOption, setTrackerOption] = useState({optionName : "Tracker Option", selected: "YTBF", option1: "YTBF", option2: "YTBF"});
    const [coordinateOption, setCoordinateOption] = useState({optionName : "Show Coordinate", selected: "True", option1: "True", option2: "False"});
    const [targetOption, setTargetOption] = useState({optionName : "Target Selection", selected: "Eliptical", option1: "Eliptical", option2: "Rectangular" });
    const [calibrationOption, setCalibrationOption] = useState({optionName : "Show Callibration", selected: "True", option1: "True", option2: "False"});
    
    const handleOption = (options, selected) => {
      if(options === 'scale') {setScaleOption(...scaleOption, {selected });}
      else if(options === 'tracker') {setTrackerOption(...trackerOption, {selected });}
      else if(options === 'coordinate') {setCoordinateOption(...coordinateOption, {selected });}
      else if(options === 'target') {setTargetOption(...targetOption, {selected });}
      else if(options === 'calibration') {setCalibrationOption(...calibrationOption, {selected });}
      else {console.log}
    }

    const handleOption1 = (options) => {
      if(options === 'scale') {setOption(scaleOption);}
      else if(options === 'tracker') {setOption(trackerOption);}
      else if(options === 'coordinate') {setOption(coordinateOption);}
      else if(options === 'target') {setOption(targetOption);}
      else if(options === 'calibration') {setOption(calibrationOption);}
      else {console.log}
    }

    
    
    const handleFabPress = (options) => {
      console.log("yo", options)
      setShowModal(true);
      setShowOption(options);
      handleOption1(options);
      
    }

    const handleModalVisibility = (visible) => {
      setShowModal(visible);
    }

    const handleRadioButton = (options) => {
      handleOption(showOption, options.selected)
    }
      
    return (

<>
      <View style={styles.container}>
      

      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: videoURL,
        }}
        useNativeControls
        resizeMode="cover"
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />   
      {showModal && <StyledModal option = {option} handleRadioButton = {handleRadioButton} handleModalVisibility = {handleModalVisibility()}/>}
      
    </View>
    <FABButton handleFabPress = {handleFabPress}/>
    </>
        
    );
    

}
const styles = StyleSheet.create({

container: {
  display: 'flex',
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',

},
container2: {
  display: 'flex',
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',

},
video: {
  flexGrow: 1,
    alignContent: 'center',
    height: 500,
},
fabbutton: {
marginTop: 10,
},
    
});

export default LibraryScreen;