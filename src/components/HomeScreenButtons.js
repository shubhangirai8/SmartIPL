import React from 'react';
import { View, StyleSheet, TouchableOpacity, Button } from 'react-native';

const HomeScreenButtons = (props) => {
const handlePress = (e) => {
    e.preventDefault();
    props.handlePress();
}
  return (
    <View style={styles.item}>
        <Button 
            style={styles.itemText}
            onPress={handlePress}
            title={props.text}
            color="#841584"
            accessibilityLabel="Chose an option!"
        />
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});

export default HomeScreenButtons;