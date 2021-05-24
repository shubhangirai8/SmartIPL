import React, {useState} from 'react';
import { FAB, Portal, Provider } from 'react-native-paper';
import StyledModal from './Modal'

const FABButton = (props) => {
  const [state, setState] = useState({ open: false });
  const [showModal, setShowModal] = useState(false);

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;

  const _handlePress = (option) => {
    console.log("option",option)
    setShowModal(true);
    props.handleFabPress(option)
  }

  return (
    <Provider>
      <Portal>
        <FAB.Group
          open={open}
          icon={open ? 'calendar-today' : 'plus'}
          actions={[
            {
              icon: 'star',
              label: 'Show Scales',
              onPress: () => _handlePress('scale'),
            },
            {
              icon: 'star',
              label: 'Tracker Selection',
              onPress: () => _handlePress('tracker'),
            },
            {
              icon: 'star',
              label: 'Show Coordinates',
              onPress: () => _handlePress('coordinate'),
            },
            {
              icon: 'star',
              label: 'Target Selection Shape',
              onPress: () => _handlePress('target'),
            },
            {
              icon: 'star',
              label: ' Show Callibration Stick',
              onPress: () => _handlePress('callibration'),
            },
          ]}
          onStateChange={onStateChange}
          onPress={() => {
            if (open) {
              // do something if the speed dial is open
            }
          }}
        />
      </Portal>
      {showModal && <StyledModal/>}
    </Provider>
  );
};

export default FABButton;