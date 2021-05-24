import React, {useReducer} from 'react';
import { Modal, Portal, Text, Button, Provider } from 'react-native-paper';
import StyledRadioButton from './RadioButton';

const StyledModal = (props) => {
console.log("pro",props)




// const [option, setOption] = useReducer((state, newState) => ({ ...state, ...newState }),
//   {
//     name: props.name,
//     selected: props.selected,
//     option1: props.option1,
//     option2: props.option2,
//   }
// );

const handleVisibility = () => {
    props.handleModalVisibility(false);

}

//    const hideModal = () => setVisible({showModal : false});
  const containerStyle = {backgroundColor: 'white', padding: 20};

  return (
    <Provider>
      <Portal>
        <Modal visible={true} onDismiss={handleVisibility} contentContainerStyle={containerStyle}>
        <Text>Orientation</Text>
          <StyledRadioButton props={props}/>
        </Modal>
      </Portal>
    </Provider>
  );
};

export default StyledModal;