'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = (0, _reactcss2.default)({
  'default': {
    main: {
      fontSize: "18px"
    },
    editor: {
      height: "1000px",
      width: "50%"
    },
    preview: {
      width: "50%",
      paddingLeft: "25",
      paddingTop: "15",
      height: "1000px",
      fontSize: "18px",
      lineHeight: "1.5",
      borderLeft: "1px dashed #ddd"
    }
  }
});