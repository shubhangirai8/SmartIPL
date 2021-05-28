import React, {useReducer} from 'react';
import { Modal, Portal, Text, Button, Provider } from 'react-native-paper';
import StyledRadioButton from './RadioButton';

const StyledModal = (props) => {
console.log("pro",props)




const [option, setOption] = useReducer((state, newState) => ({ ...state, ...newState }),
  {
    showModal: props.showModal,
    name: props.optionName,
    selected: props.selected,
    option1: props.option1,
    option2: props.option2,
  }
);

const handleVisibility = () => {
    props.handleModalVisibility(false);

}

const handleChange1 = (options) => {
  props.handleRadioButton(options)
}

//    const hideModal = () => setVisible({showModal : false});
  const containerStyle = {backgroundColor: 'white', padding: 20};

  return (
    <Provider>
      <Portal>
        {option.showModal && <Modal visible={true} onDismiss={handleVisibility} contentContainerStyle={containerStyle} >
        

          <StyledRadioButton props={props} handleRadio={handleChange1}/>
        </Modal>
}
      </Portal>
    </Provider>
  );
};

export default StyledModal;