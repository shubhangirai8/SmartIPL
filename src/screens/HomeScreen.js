import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Alert } from 'react-native';
import HomeScreenButtons from "../components/HomeScreenButtons";
import * as VideoPicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';


const HomeScreen = ({navigation}) => {
  const items = ['Plotting and Fitting', 'Video Lab Instructions', 'Lab Manual', 'Resources'];
  const [show, setShow] = useState(false);
  const [data, setData] = useState({});
  const handlePress = (e) => {
    e.preventDefault();
    setShow(!show);
  }
  const handleSubsequentPress = () => {
    setShow(false);
  }

  const pickFromGallery = async() => {
      const {granted} = await Permissions.askAsync(Permissions.MEDIA_LIBRARY)
      if (granted){
          let data= await VideoPicker.launchImageLibraryAsync({
              mediaTypes:VideoPicker.MediaTypeOptions.Videos,
              allowsEditing:true,
              aspect:[1,1],
              quality:0.6
          })
          setData(data);
          return data;
          console.log(data);
      }else{
          Alert.alert("Permissions required")

      }

  };
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.sectionTitle}>Welcome to Object Tracker</Text>
        <View style={styles.items}>
          <View style={styles.item}>
            <Button 
                style={styles.itemText}
                onPress={handlePress}
                title={'Video Analysis'}
                color="#841584"
                accessibilityLabel="Chose an option!"
            />
            </View>

            
            { show &&
              <View style={styles.item1}>

                <TouchableOpacity
                  onPress = {() => pickFromGallery().then(data => 
                  navigation.navigate('Library', {external : false , videoURL: data.uri}))
                  }>
                      
                  <Text>Photo and Video Library</Text>
                  
                </TouchableOpacity>
              </View>
            }
          

          {items.map((item, index) => {
            return (
            <HomeScreenButtons key={index} text={item} handlePress={() => handleSubsequentPress}/>
            )
          })
          }
          
        </View>
      </View>

    </View>
  );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  wrapper:{
    paddingTop:100,
    paddingHorizontal:20,
  },
  sectionTitle:{
    fontSize: 24,
    fontWeight: 'bold',
  },
  items:{
    paddingTop:40,
  },
  item:{
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  item1:{
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginLeft: 100,
  },
});

export default HomeScreen;
