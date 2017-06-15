import MasterState from './MasterState';
import ControlFunctions from './ControlFunctions';

function keyInputs() {

/*
  document.addEventListener('keyup', event => {
    switch (event.key) {
      case 'Enter':
        if (MasterState.isBeingEdited === false) {
          ControlFunctions.editContent();
          MasterState.isBeingEdited = true;
        } else {
          MasterState.DOMCurrentNode.blur();
        }
        break;
    }
  });
*/

}

export default keyInputs;
