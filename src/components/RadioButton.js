import React, {useState} from 'react';
import { View, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';

const StyledRadioButton = (props) => {
    console.log("Props",props)
//   const [option, setOption] = useReducer((state, newState) => ({ ...state, ...newState }),
//   {
//     name: props.props.option.optionName,
//     selected: props.props.option.selected,
//     option1: props.props.option.option1,
//     option2: props.props.option.option2,
//   }
// );
const [checked1,setChecked] = useState("Horizontal");
// const handlePress = (choice) => {
//     setOption(...option, {selected: choice})
//     props.props.handleRadioButton(option);
// } 

  return (
    <View>
        <Text>Horizontal</Text>
      <RadioButton
        value="Horizontal"
        status={ checked1 === "Horizontal" ? 'checked' : 'unchecked' }
        onPress={() => setChecked("Horizontal")}
      />
      <Text>Vertical</Text>
      <RadioButton
        value="Vertical"
        status={ checked1 === "Vertical" ? 'checked' : 'unchecked' }
        onPress={() => setChecked("Vertical")}
      />
    </View>
  );
};

export default StyledRadioButton;