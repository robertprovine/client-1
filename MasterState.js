const MasterState = {

  /* MIDI control states */
  lastSelectKnobValue: 0,

  CSSPropertyIdx: 0,
  CSSPropertyParamsIdx: 0,
  lastNavigateNodesValue: 0,

  /* content editing */
  isBeingEdited: false,

  /* styles */

  /* DOM elements and access */
  DOMroot: document.getElementById('root'),
  DOMCurrentNode: null,

  /* virtual DOM */
  nodes: [],
  nodeIdx: -1,

};

export default MasterState;

