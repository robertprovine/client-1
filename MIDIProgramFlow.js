import MasterState from './MasterState';
import MIDI from './MIDI';
import ControlFunctions from './ControlFunctions';
import DatabaseFunctions from './DatabaseFunctions';

const MIDIProgramFlow = {

  append: ControlFunctions.append,
  changeStyle: ControlFunctions.changeStyle,
  saveProject: DatabaseFunctions.saveProject,
  navigate: ControlFunctions.navigate,
  editContent: ControlFunctions.editContent,

  onMIDIMessage: function (message) {

    const data = message.data;
    const type = data[0] & 0xf0;
    const num = data[1];
    const val = data[2];

    if (type === 128 && val === 0) {
      switch (num) {
        case 8:
          this.append('h1');
          break;
        case 9:
          this.append('p');
          break;
        case 10:
          this.append('div');
          break;
        case 15:
          this.editContent();
          break;
        case 23:
          this.saveProject();
          break;
      }
    }

    if (type === 176) {
      switch (num) {
        case 1:
          this.append('h1');
          break;
        case 2:
          this.append('p');
          break;
        case 3:
          this.append('div');
          break;
        case 4:
          this.append('div');
          break;
        case 8:
          if (val > MasterState.lastKnobSelectValue) {
            this.navigate(1);
          } else if (val < MasterState.lastKnobSelectValue) {
            this.navigate(-1);
          } else if (val === MasterState.lastKnobSelectValue && val === 0) {
            this.navigate(-1);
          } else {
            this.navigate(1);
          }
          MasterState.lastKnobSelectValue = val;
          break;
      }
    }

    // console.log(message);
    console.log('type: ' + type);
    console.log('num: ' + num);
    console.log('val: ' + val);
  },

  start: function () {
    const onMIDIMessage = this.onMIDIMessage.bind(this);
    MIDI.initialize(onMIDIMessage);
  },

};

export default MIDIProgramFlow;
