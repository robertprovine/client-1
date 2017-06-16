import MasterState from './MasterState';
import DefaultContent from './DefaultContent';
import defaultStyles from './defaultStyles';
import Helpers from './Helpers';

const DatabaseFunctions = {

  saveProject: function () {
    console.log(MasterState.nodes);
    const project = MasterState.nodes.map(node => {
      const newNode = {};
      newNode.type = node.type;
      newNode.content = node.content;
      newNode.style = {};
      for (let CSSProperty in node.style) {
        newNode.style[CSSProperty] = node.style[CSSProperty];
      }
    });
  },

};

export default DatabaseFunctions;

