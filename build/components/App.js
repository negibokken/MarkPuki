"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Editor = require("./Editor.js");

var _Editor2 = _interopRequireDefault(_Editor);

var _Preview = require("./Preview.js");

var _Preview2 = _interopRequireDefault(_Preview);

var _reactBootstrap = require("react-bootstrap");

var _AppCSS = require("./AppCSS.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      value: ''
    };
    _this._edit = _this._edit.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: "_edit",
    value: function _edit(text) {
      this.setState({
        value: text
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          _reactBootstrap.Grid,
          null,
          _react2.default.createElement(
            _reactBootstrap.Row,
            null,
            _react2.default.createElement(
              _reactBootstrap.Col,
              { xs: 6, sm: 6, md: 6, lg: 6, style: _AppCSS.styles.editor },
              _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(_Editor2.default, { edit: this._edit, value: this.state.value })
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.Col,
              { xs: 6, sm: 6, md: 6, lg: 6, style: _AppCSS.styles.preview },
              _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(_Preview2.default, { data: this.state.value })
              )
            )
          )
        )
      );
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = App;