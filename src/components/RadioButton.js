import React, {useReducer, useState} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { RadioButton, Provider, Divider } from 'react-native-paper';

const StyledRadioButton = (props) => {
    console.log("Propsi",props)
    const {props:{option}, handleRadioButton} = props;
//   const [value, setValue] = useReducer((state, newState) => ({ ...state, ...newState }),
//   {
//     name: props.props.option.optionName,
//     selected: props.props.option.selected,
//     option1: props.props.option.option1,
//     option2: props.props.option.option2,
//   }
// );

const [value1, setValue1] = useReducer((state, newState) => ({ ...state, ...newState }),
{
  state: props.props.option
});

  

const [value,setValue] = useState(value1.state.selected)
// const handlePress = (choice) => {
//     setOption(...option, {selected: choice})
//     props.props.handleRadioButton(option);
// } 

const handleChange = (value) => {
  let optio = {optionName : value1.state.optionName, selected: value, option1: value1.state.option1, option2: value1.state.option2}
  props.handleRadio(optio);
  setValue(value);
  
}

  return (
    <>
    <Text>{value1.state.optionName}</Text>
    <Divider/>
    <View>
      <RadioButton.Group onValueChange={value => handleChange(value)} value={value}>
      <RadioButton.Item label={value1.state.option1} value={value1.state.option1} />
      <RadioButton.Item label={value1.state.option2} value={value1.state.option2} />
      {value1?.state?.optionName === "Show Scale" &&
      <RadioButton.Item label={"Both"} value={"both"} /> }
    </RadioButton.Group>
    </View>
    </>
  );
};



export default StyledRadioButton;