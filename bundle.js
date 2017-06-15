/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var MasterState = {

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
  nodeIdx: -1

};

exports.default = MasterState;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MasterState = __webpack_require__(0);

var _MasterState2 = _interopRequireDefault(_MasterState);

var _DefaultContent = __webpack_require__(5);

var _DefaultContent2 = _interopRequireDefault(_DefaultContent);

var _defaultStyles = __webpack_require__(8);

var _defaultStyles2 = _interopRequireDefault(_defaultStyles);

var _Helpers = __webpack_require__(6);

var _Helpers2 = _interopRequireDefault(_Helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ControlFunctions = {

  append: function append(nodeType) {

    var node = {
      type: nodeType,
      content: _DefaultContent2.default[nodeType],
      style: (0, _defaultStyles2.default)(nodeType)
    };

    var nodeView = document.createElement(nodeType);
    nodeView.innerHTML = _DefaultContent2.default[nodeType];
    for (var CSSProperty in node.style) {
      console.log(node.style[CSSProperty]);
      nodeView.style[CSSProperty] = node.style[CSSProperty].convert(node.style[CSSProperty].data);
    }

    _MasterState2.default.nodes = _MasterState2.default.nodes.concat(node);
    _MasterState2.default.nodeIdx++;
    _MasterState2.default.DOMroot.appendChild(nodeView);
    _MasterState2.default.DOMCurrentNode = nodeView;
  },

  navigate: function navigate(direction) {

    console.log('nodeIdx before: ' + _MasterState2.default.nodeIdx);
    console.log(_MasterState2.default.nodes[_MasterState2.default.nodeIdx]);
    if (_MasterState2.default.DOMCurrentNode !== null) {
      if (_MasterState2.default.isBeingEdited === true) {
        _MasterState2.default.DOMCurrentNode.blur();
      }
      var sibling = direction === -1 ? _MasterState2.default.DOMCurrentNode.previousSibling : _MasterState2.default.DOMCurrentNode.nextSibling;
      if (sibling !== null) {
        sibling.style.backgroundColor = 'green';
        sibling.focus();
        _MasterState2.default.DOMCurrentNode.style.backgroundColor = _MasterState2.default.nodes[_MasterState2.default.nodeIdx].style.backgroundColor.convert(_MasterState2.default.nodes[_MasterState2.default.nodeIdx].style.backgroundColor.data);
        _MasterState2.default.nodeIdx += direction;
        _MasterState2.default.DOMCurrentNode = sibling;
        _MasterState2.default.DOMCurrentNode.scrollIntoView();
      }
    }
    console.log('nodeIdx after: ' + _MasterState2.default.nodeIdx);
  },

  editContent: function editContent() {

    if (_MasterState2.default.nodes.length === 0) {
      return;
    }

    _MasterState2.default.DOMCurrentNode.focus();
    _Helpers2.default.selectElementContents(_MasterState2.default.DOMCurrentNode);
    _MasterState2.default.DOMCurrentNode.setAttribute('contenteditable', true);
  },

  changeStyle: function changeStyle(CSSProperty, idx, value) {},

  saveProject: function saveProject() {}

};

exports.default = ControlFunctions;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MasterState = __webpack_require__(0);

var _MasterState2 = _interopRequireDefault(_MasterState);

var _MIDI = __webpack_require__(7);

var _MIDI2 = _interopRequireDefault(_MIDI);

var _ControlFunctions = __webpack_require__(1);

var _ControlFunctions2 = _interopRequireDefault(_ControlFunctions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MIDIProgramFlow = {

  append: _ControlFunctions2.default.append,
  changeStyle: _ControlFunctions2.default.changeStyle,
  saveProject: _ControlFunctions2.default.saveProject,
  navigate: _ControlFunctions2.default.navigate,

  onMIDIMessage: function onMIDIMessage(message) {

    var data = message.data;
    var type = data[0] & 0xf0;
    var num = data[1];
    var val = data[2];

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
          if (val > _MasterState2.default.lastKnobSelectValue) {
            this.navigate(1);
          } else if (val < _MasterState2.default.lastKnobSelectValue) {
            this.navigate(-1);
          } else if (val === _MasterState2.default.lastKnobSelectValue && val === 0) {
            this.navigate(-1);
          } else {
            this.navigate(1);
          }
          _MasterState2.default.lastKnobSelectValue = val;
          break;
      }
    }

    // console.log(message);
    console.log('type: ' + type);
    console.log('num: ' + num);
    console.log('val: ' + val);
  },

  start: function start() {
    var onMIDIMessage = this.onMIDIMessage.bind(this);
    _MIDI2.default.initialize(onMIDIMessage);
  }

};

exports.default = MIDIProgramFlow;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MasterState = __webpack_require__(0);

var _MasterState2 = _interopRequireDefault(_MasterState);

var _ControlFunctions = __webpack_require__(1);

var _ControlFunctions2 = _interopRequireDefault(_ControlFunctions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function keyInputs() {

  document.addEventListener('keyup', function (event) {
    switch (event.key) {
      case 'Enter':
        if (_MasterState2.default.isBeingEdited === false) {
          _ControlFunctions2.default.editContent();
          _MasterState2.default.isBeingEdited = true;
        } else {
          //MasterState.DOMCurrentNode.blur();
        }
        break;
    }
  });
}

exports.default = keyInputs;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Conversions = {

  data: 0,

  toRGBA: function toRGBA(rgba) {
    return "rgba(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ", " + rgba[3] + ")";
  }

};

exports.default = Conversions;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var DefaultContent = {

  h1: "Hypertext Control",

  p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

  div: "div master"

};

exports.default = DefaultContent;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Helpers = {

  // https://stackoverflow.com/questions/6139107/programmatically-select-text-in-a-contenteditable-html-element
  selectElementContents: function selectElementContents(el) {
    var range = document.createRange();
    range.selectNodeContents(el);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
  }

};

exports.default = Helpers;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/* MIDI access object */
var MIDI = {

  /* available MIDI devices */
  devices: [],

  /* callbacks for failure or success in browser MIDI access */
  onMIDISuccess: function onMIDISuccess(midiAccess) {
    console.log('midi success');
    var inputs = midiAccess.inputs.values();
    var outputs = midiAccess.outputs.values();
    for (var input = inputs.next(); input && !input.done; input = inputs.next()) {
      input.value.onmidimessage = MIDI.onMIDIMessage;
      console.log(input);
    }
    for (var output = outputs.next(); output && !output.done; output = outputs.next()) {
      MIDI.devices.push(output.value);
    }
  },

  /* check if browser supports MIDI */
  initialize: function initialize(onMIDIMessage) {
    MIDI.onMIDIMessage = onMIDIMessage;
    if (navigator.requestMIDIAccess) {
      navigator.requestMIDIAccess({
        sysex: false
      }).then(MIDI.onMIDISuccess, MIDI.onMIDIFailure);
    } else {
      alert("No MIDI support in your browser.");
    }
  },

  /* on failed response */
  onMIDIFailure: function onMIDIFailure(error) {
    alert('No access to MIDI devices or your browser doesn\'t support WebMIDI API. Please use WebMIDIAPIShim " + error');
  },

  /* main callback for when a midi message occurs */
  onMIDIMessage: null

};

exports.default = MIDI;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Conversions = __webpack_require__(4);

var _Conversions2 = _interopRequireDefault(_Conversions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function defaultStyles(nodeType) {

  var style = void 0;

  switch (nodeType) {
    case 'h1':
      style = {
        color: {
          data: [0, 0, 0, 1],
          convert: _Conversions2.default.toRGBA
        },
        backgroundColor: {
          data: [255, 255, 255, 1],
          convert: _Conversions2.default.toRGBA
        }
      };
      return style;
    case 'p':
      return {
        color: {
          data: [0, 100, 0, 1],
          convert: _Conversions2.default.toRGBA
        },
        backgroundColor: {
          data: [255, 255, 255, 1],
          convert: _Conversions2.default.toRGBA
        }
      };
    case 'div':
      return {
        color: {
          data: [0, 0, 0, 1],
          convert: _Conversions2.default.toRGBA
        },
        backgroundColor: {
          data: [255, 0, 255, 1],
          convert: _Conversions2.default.toRGBA
        }
      };
  }
}

exports.default = defaultStyles;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _MIDIProgramFlow = __webpack_require__(2);

var _MIDIProgramFlow2 = _interopRequireDefault(_MIDIProgramFlow);

var _keyInputs = __webpack_require__(3);

var _keyInputs2 = _interopRequireDefault(_keyInputs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.onload = function () {
  _MIDIProgramFlow2.default.start();
  (0, _keyInputs2.default)();
};

/***/ })
/******/ ]);