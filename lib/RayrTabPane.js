"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames2 = require("classnames");

var _classnames3 = _interopRequireDefault(_classnames2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TabPane = function (_React$Component) {
    _inherits(TabPane, _React$Component);

    function TabPane() {
        _classCallCheck(this, TabPane);

        return _possibleConstructorReturn(this, (TabPane.__proto__ || Object.getPrototypeOf(TabPane)).apply(this, arguments));
    }

    _createClass(TabPane, [{
        key: "render",
        value: function render() {
            var _classnames;

            var _props = this.props,
                classPrefix = _props.classPrefix,
                className = _props.className,
                isActive = _props.isActive,
                children = _props.children;


            var classes = (0, _classnames3.default)((_classnames = {}, _defineProperty(_classnames, className, className), _defineProperty(_classnames, classPrefix + "-panel", true), _defineProperty(_classnames, classPrefix + "-active", isActive), _classnames));

            return _react2.default.createElement(
                "div",
                _extends({
                    role: "tabpanel",
                    className: classes
                }, this.props.className, {
                    "aria-hidden": !isActive }),
                children
            );
        }
    }]);

    return TabPane;
}(_react2.default.Component);

TabPane.propTypes = {
    tab: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]).isRequired,
    order: _propTypes2.default.string.isRequired,
    disable: _propTypes2.default.bool,
    isActive: _propTypes2.default.bool,
    className: _propTypes2.default.string
};
exports.default = TabPane;
module.exports = exports["default"];