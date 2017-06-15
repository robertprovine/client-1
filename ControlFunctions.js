import MasterState from './MasterState';
import DefaultContent from './DefaultContent';
import defaultStyles from './defaultStyles';
import Helpers from './Helpers';

const ControlFunctions = {

  append: function (nodeType) {

    const node = {
      type: nodeType,
      content: DefaultContent[nodeType],
      style: defaultStyles(nodeType),
    };

    const nodeView = document.createElement(nodeType);
    nodeView.setAttribute('spellcheck', 'false');
    nodeView.innerHTML = DefaultContent[nodeType];
    for (let CSSProperty in node.style) {
      console.log(node.style[CSSProperty]);
      nodeView.style[CSSProperty] = node.style[CSSProperty].convert(
        node.style[CSSProperty].data
      );
    }

    MasterState.nodes = MasterState.nodes.concat(node);
    MasterState.nodeIdx++;
    MasterState.DOMroot.appendChild(nodeView);
    MasterState.DOMCurrentNode = nodeView;

  },

  navigate: function (direction) {

    console.log('nodeIdx before: ' + MasterState.nodeIdx);
    console.log(MasterState.nodes[MasterState.nodeIdx]);
    //if (MasterState.isBeingEdited === true) {
   // }
    if (MasterState.DOMCurrentNode !== null) {
      if (MasterState.isBeingEdited === true) {
        Helpers.clearSelection();
        MasterState.DOMCurrentNode.blur();
      }
      const sibling = (direction === -1) ?
        MasterState.DOMCurrentNode.previousSibling :
        MasterState.DOMCurrentNode.nextSibling;
      if (sibling !== null) {
        sibling.style.backgroundColor = 'green';
        sibling.focus();
        MasterState.isBeingEdited = false;
        MasterState.DOMCurrentNode.style.backgroundColor =
          MasterState.nodes[MasterState.nodeIdx].style.backgroundColor.convert(
            MasterState.nodes[MasterState.nodeIdx].style.backgroundColor.data
          );
        MasterState.nodeIdx += direction;
        MasterState.DOMCurrentNode = sibling;
        MasterState.DOMCurrentNode.scrollIntoView();
      }
    }
    console.log('nodeIdx after: ' + MasterState.nodeIdx);

  },

  editContent: function () {

    if (MasterState.nodes.length === 0) {
      return;
    }

    if (MasterState.isBeingEdited === false) {
      MasterState.DOMCurrentNode.focus();
      Helpers.selectElementContents(MasterState.DOMCurrentNode);
      MasterState.DOMCurrentNode.setAttribute('contenteditable', true);
      MasterState.isBeingEdited = true;
    } else {
      MasterState.DOMCurrentNode.blur();
    }


  },

  changeStyle: function (CSSProperty, idx, value) {
  },

  saveProject: function () {
  },

};

export default ControlFunctions;
