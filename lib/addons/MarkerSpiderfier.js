"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require("babel-runtime/helpers/defineProperty");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _flowRight2 = require("lodash/flowRight");

var _flowRight3 = _interopRequireDefault(_flowRight2);

var _childContextTypes;

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createReactClass = require("create-react-class");

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _constants = require("../constants");

var _enhanceElement = require("../enhanceElement");

var _enhanceElement2 = _interopRequireDefault(_enhanceElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require("./oms.min");

var controlledPropTypes = {
  // NOTICE!!!!!!
  //
  // Only expose those with getters & setters in the table as controlled props.
  //
  // https://github.com/jawj/OverlappingMarkerSpiderfier/blob/master/lib/oms.coffee
  keepSpiderfied: _propTypes2.default.bool,
  ignoreMapClick: _propTypes2.default.bool,
  markersWontHide: _propTypes2.default.bool,
  markersWontMove: _propTypes2.default.bool,
  basicFormatEvents: _propTypes2.default.bool,
  nearbyDistance: _propTypes2.default.number,
  circleSpiralSwitchover: _propTypes2.default.number,
  circleFootSeparation: _propTypes2.default.number,
  circleStartAngle: _propTypes2.default.number,
  spiralFootSeparation: _propTypes2.default.number,
  spiralLengthStart: _propTypes2.default.number,
  spiralLengthFactor: _propTypes2.default.number,
  spiderfiedZIndex: _propTypes2.default.number,
  highlightedLegZIndex: _propTypes2.default.number,
  usualLegZIndex: _propTypes2.default.number,
  legWeigth: _propTypes2.default.number,
  legColors: _propTypes2.default.object
};

var defaultUncontrolledPropTypes = (0, _enhanceElement.addDefaultPrefixToPropTypes)(controlledPropTypes);

var eventMap = {
  onClick: "click",
  onFormat: "format"
};

var publicMethodMap = {
  addListener: function addListener(markerSpiderfier) {
    return markerSpiderfier.addListener();
  },
  getMarkerStatus: function getMarkerStatus(markerSpiderfier) {
    return markerSpiderfier.markerStatus;
  }
};

var controlledPropUpdaterMap = {};

function getInstanceFromComponent(component) {
  return component.state[_constants.MARKER_SPIDERFIER];
}

exports.default = (0, _flowRight3.default)(_createReactClass2.default, (0, _enhanceElement2.default)(getInstanceFromComponent, publicMethodMap, eventMap, controlledPropUpdaterMap))({
  displayName: "MarkerSpiderfier",

  propTypes: (0, _extends3.default)({}, controlledPropTypes, defaultUncontrolledPropTypes),

  contextTypes: (0, _defineProperty3.default)({}, _constants.MAP, _propTypes2.default.object),

  childContextTypes: (_childContextTypes = {}, (0, _defineProperty3.default)(_childContextTypes, _constants.ANCHOR, _propTypes2.default.object), (0, _defineProperty3.default)(_childContextTypes, _constants.MARKER_SPIDERFIER, _propTypes2.default.object), _childContextTypes),

  getInitialState: function getInitialState() {
    // http://google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclustererplus/docs/reference.html#events
    var markerSpiderfier = new window.OverlappingMarkerSpiderfier(this.context[_constants.MAP], (0, _enhanceElement.collectUncontrolledAndControlledProps)(defaultUncontrolledPropTypes, controlledPropTypes, this.props));
    return (0, _defineProperty3.default)({}, _constants.MARKER_SPIDERFIER, markerSpiderfier);
  },
  getChildContext: function getChildContext() {
    var _ref2;

    var markerSpiderfier = getInstanceFromComponent(this);

    return _ref2 = {}, (0, _defineProperty3.default)(_ref2, _constants.ANCHOR, markerSpiderfier), (0, _defineProperty3.default)(_ref2, _constants.MARKER_SPIDERFIER, markerSpiderfier), _ref2;
  },
  componentDidMount: function componentDidMount() {
    var markerSpiderfier = getInstanceFromComponent(this);
    if (this.props.onClick && markerSpiderfier) {
      markerSpiderfier.addListener("click", this.props.onClick);
    }
  },
  componentDidUpdate: function componentDidUpdate() {
    var markerSpiderfier = getInstanceFromComponent(this);
    if (this.props.onClick && markerSpiderfier) {
      markerSpiderfier.addListener("click", this.props.onClick);
    }
  },
  componentWillUnmount: function componentWillUnmount() {
    var markerSpiderfier = getInstanceFromComponent(this);
    if (markerSpiderfier) {
      markerSpiderfier.removeAllMarkers();
      if (this.props.onClick) {
        markerSpiderfier.removeListener("click", this.props.onClick);
      }
    }
  },
  render: function render() {
    var children = this.props.children;


    return _react2.default.createElement(
      "div",
      null,
      children
    );
  }
});