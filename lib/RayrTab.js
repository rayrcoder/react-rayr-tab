'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames5 = require('classnames');

var _classnames6 = _interopRequireDefault(_classnames5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RayrTab = function (_React$Component) {
    _inherits(RayrTab, _React$Component);

    function RayrTab(props) {
        _classCallCheck(this, RayrTab);

        var _this = _possibleConstructorReturn(this, (RayrTab.__proto__ || Object.getPrototypeOf(RayrTab)).call(this, props));

        _this.handleTabClick = _this.handleTabClick.bind(_this);

        var currProps = _this.props;

        var activeIndex = void 0;

        if ('activeIndex' in currProps) {
            // 如果外部参数中有activeIndex，则使用外部传入的参数
            activeIndex = currProps.activeIndex;
        } else if ('defaultActiveIndex' in currProps) {
            // 当activeIndex不存在与外部传入参数的时候，使用默认的内部参数
            activeIndex = currProps.defaultActiveIndex;
        }

        _this.state = {
            activeIndex: activeIndex,
            prevIndex: activeIndex
        };
        return _this;
    }

    _createClass(RayrTab, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if ('activeIndex' in nextProps) {
                this.setState({
                    activeIndex: nextProps.activeIndex
                });
            }
        }
    }, {
        key: 'handleTabClick',
        value: function handleTabClick(activeIndex) {
            //...
            var prevIndex = this.state.activeIndex;

            if (this.state.activeIndex !== activeIndex && 'defaultActiveIndex' in this.props) {
                this.setState({
                    activeIndex: activeIndex,
                    prevIndex: prevIndex
                });
            }

            this.props.onChange({ activeIndex: activeIndex, prevIndex: prevIndex });
        }
    }, {
        key: 'renderTabNav',
        value: function renderTabNav() {
            var _props = this.props,
                classPrefix = _props.classPrefix,
                children = _props.children;


            return _react2.default.createElement(TabNav, {
                key: 'tabBar',
                classPrefix: classPrefix,
                onTabClick: this.handleTabClick,
                panels: children,
                activeIndex: this.state.activeIndex
            });
        }
    }, {
        key: 'renderTabContent',
        value: function renderTabContent() {
            var _props2 = this.props,
                classPrefix = _props2.classPrefix,
                children = _props2.children;


            return _react2.default.createElement(TabContent, {
                key: "tabcontent",
                classPrefix: classPrefix,
                panels: children,
                activeIndex: this.state.activeIndex
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var className = this.props.className;


            var classes = (0, _classnames6.default)(className, 'ui-tabs');

            return _react2.default.createElement(
                'div',
                { className: classes },
                this.renderTabNav(),
                this.renderTabContent()
            );
        }
    }]);

    return RayrTab;
}(_react2.default.Component);

RayrTab.propTypes = {
    classPrefix: _propTypes2.default.string,
    className: _propTypes2.default.string,
    defaultActiveIndex: _propTypes2.default.number, // 默认激活index，组件内更新
    activeIndex: _propTypes2.default.number, // 默认激活index，组件外更新
    onChange: _propTypes2.default.func,
    children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node])
};
RayrTab.defaultProps = {
    classPrefix: 'tabs',
    onChange: function onChange() {}
};

var TabNav = function (_React$Component2) {
    _inherits(TabNav, _React$Component2);

    function TabNav() {
        _classCallCheck(this, TabNav);

        return _possibleConstructorReturn(this, (TabNav.__proto__ || Object.getPrototypeOf(TabNav)).apply(this, arguments));
    }

    _createClass(TabNav, [{
        key: 'getTabs',
        value: function getTabs() {
            var _this3 = this;

            var _props3 = this.props,
                classPrefix = _props3.classPrefix,
                activeIndex = _props3.activeIndex,
                panels = _props3.panels;


            return _react2.default.Children.map(panels, function (child) {
                var _classnames;

                if (!child) {
                    return;
                }

                var order = parseInt(child.props.order, 10);

                var classes = (0, _classnames6.default)((_classnames = {}, _defineProperty(_classnames, classPrefix + '-tab', true), _defineProperty(_classnames, classPrefix + '-active', activeIndex === order), _defineProperty(_classnames, classPrefix + '-disabled', child.props.disbled), _classnames));

                var events = {};

                if (!child.props.disabled) {
                    events = {
                        onClick: _this3.props.onTabClick.bind(_this3, order)
                    };
                }

                var ref = {};
                if (activeIndex === order) {
                    ref.ref = 'activeTab';
                }

                return _react2.default.createElement(
                    'li',
                    _extends({
                        role: "tab",
                        'aria-disabled': child.props.disabled ? 'true' : 'false',
                        'aria-selected': activeIndex === order ? 'true' : 'false'
                    }, events, {
                        className: classes,
                        key: order
                    }),
                    child.props.tab
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var classPrefix = this.props.classPrefix;

            var rootClasses = (0, _classnames6.default)(_defineProperty({}, classPrefix + '-bar', true));

            var classes = (0, _classnames6.default)(_defineProperty({}, classPrefix + '-nav', true));

            return _react2.default.createElement(
                'div',
                { className: rootClasses, role: "tablist" },
                _react2.default.createElement(
                    'ul',
                    { className: classes },
                    this.getTabs()
                )
            );
        }
    }]);

    return TabNav;
}(_react2.default.Component);

TabNav.propTypes = {
    classPrefix: _propTypes2.default.string,
    panels: _propTypes2.default.node,
    activeIndex: _propTypes2.default.number
};

var TabContent = function (_React$Component3) {
    _inherits(TabContent, _React$Component3);

    function TabContent() {
        _classCallCheck(this, TabContent);

        return _possibleConstructorReturn(this, (TabContent.__proto__ || Object.getPrototypeOf(TabContent)).apply(this, arguments));
    }

    _createClass(TabContent, [{
        key: 'getTabPanes',
        value: function getTabPanes() {
            var _props4 = this.props,
                classPrefix = _props4.classPrefix,
                activeIndex = _props4.activeIndex,
                panels = _props4.panels;


            return _react2.default.Children.map(panels, function (child) {
                if (!child) {
                    return;
                }

                var order = parseInt(child.props.order, 10);
                var isActive = activeIndex === order;

                return _react2.default.cloneElement(child, {
                    classPrefix: classPrefix,
                    isActive: isActive,
                    children: child.props.children,
                    key: 'tabpane-' + order
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var classPrefix = this.props.classPrefix;

            var classes = (0, _classnames6.default)(_defineProperty({}, classPrefix + '-content', true));

            return _react2.default.createElement(
                'div',
                _extends({ className: classes }, this.props.className),
                this.getTabPanes()
            );
        }
    }]);

    return TabContent;
}(_react2.default.Component);

TabContent.propTypes = {
    classPrefix: _propTypes2.default.string,
    panels: _propTypes2.default.node,
    activeIndex: _propTypes2.default.number
};
exports.default = RayrTab;
module.exports = exports['default'];