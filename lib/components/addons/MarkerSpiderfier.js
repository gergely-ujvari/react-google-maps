"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true,
})
exports.MarkerSpiderfier = undefined

var _keys = require("babel-runtime/core-js/object/keys")

var _keys2 = _interopRequireDefault(_keys)

var _defineProperty2 = require("babel-runtime/helpers/defineProperty")

var _defineProperty3 = _interopRequireDefault(_defineProperty2)

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of")

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf)

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck")

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2)

var _createClass2 = require("babel-runtime/helpers/createClass")

var _createClass3 = _interopRequireDefault(_createClass2)

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn")

var _possibleConstructorReturn3 = _interopRequireDefault(
  _possibleConstructorReturn2
)

var _inherits2 = require("babel-runtime/helpers/inherits")

var _inherits3 = _interopRequireDefault(_inherits2)

var _MarkerSpiderfier$pro, _MarkerSpiderfier$chi

var _react = require("react")

var _react2 = _interopRequireDefault(_react)

var _propTypes = require("prop-types")

var _propTypes2 = _interopRequireDefault(_propTypes)

require("npm-overlapping-marker-spiderfier")

var _MapChildHelper = require("../../utils/MapChildHelper")

var _constants = require("../../constants")

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * A wrapper around `MarkerSpiderfier`
 *
 * @see https://github.com/jawj/OverlappingMarkerSpiderfier
 */
var MarkerSpiderfier = (exports.MarkerSpiderfier = (function(
  _React$PureComponent
) {
  ;(0, _inherits3.default)(MarkerSpiderfier, _React$PureComponent)

  /*
   * @see https://github.com/jawj/OverlappingMarkerSpiderfier/blob/master/lib/oms.coffee
   */
  function MarkerSpiderfier(props, context) {
    ;(0, _classCallCheck3.default)(this, MarkerSpiderfier)

    var _this = (0, _possibleConstructorReturn3.default)(
      this,
      (
        MarkerSpiderfier.__proto__ ||
        (0, _getPrototypeOf2.default)(MarkerSpiderfier)
      ).call(this, props, context)
    )

    var markerSpiderfier = new window.OverlappingMarkerSpiderfier(
      _this.context[_constants.MAP]
    )

    ;(0, _MapChildHelper.construct)(
      MarkerSpiderfier.propTypes,
      updaterMap,
      _this.props,
      markerSpiderfier
    )

    _this.state = (0, _defineProperty3.default)(
      {},
      _constants.MARKER_SPIDERFIER,
      markerSpiderfier
    )
    return _this
  }

  ;(0, _createClass3.default)(MarkerSpiderfier, [
    {
      key: "getChildContext",
      value: function getChildContext() {
        var _ref

        var markerSpiderfier = this.state[_constants.MARKER_SPIDERFIER]
        return (
          (_ref = {}),
          (0, _defineProperty3.default)(
            _ref,
            _constants.ANCHOR,
            markerSpiderfier
          ),
          (0, _defineProperty3.default)(
            _ref,
            _constants.MARKER_SPIDERFIER,
            markerSpiderfier
          ),
          _ref
        )
      },
    },
    {
      key: "componentDidMount",
      value: function componentDidMount() {
        ;(0, _MapChildHelper.componentDidMount)(
          this,
          this.state[_constants.MARKER_SPIDERFIER],
          eventMap
        )
        this.registerOwnEvents(this.props)
      },
    },
    {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        ;(0, _MapChildHelper.componentDidUpdate)(
          this,
          this.state[_constants.MARKER_SPIDERFIER],
          eventMap,
          updaterMap,
          prevProps
        )

        this.unregisterOwnEvents(prevProps)
        this.registerOwnEvents(this.props)
      },
    },
    {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        ;(0, _MapChildHelper.componentWillUnmount)(this)
        var markerSpiderfier = this.state[_constants.MARKER_SPIDERFIER]
        if (markerSpiderfier) {
          markerSpiderfier.removeAllMarkers()
          this.unregisterOwnEvents(this.props)
        }
      },
    },
    {
      key: "registerOwnEvents",
      value: function registerOwnEvents(props) {
        var markerSpiderfier = this.state[_constants.MARKER_SPIDERFIER]
        if (markerSpiderfier) {
          ;(0, _keys2.default)(ownEventMap).forEach(function(e) {
            if (props[e]) {
              markerSpiderfier.addListener(ownEventMap[e], props[e])
            }
          })
        }
      },
    },
    {
      key: "unregisterOwnEvents",
      value: function unregisterOwnEvents(props) {
        var markerSpiderfier = this.state[_constants.MARKER_SPIDERFIER]
        if (markerSpiderfier) {
          ;(0, _keys2.default)(ownEventMap).forEach(function(e) {
            if (props[e]) {
              markerSpiderfier.removeListener(ownEventMap[e], props[e])
            }
          })
        }
      },
    },
    {
      key: "render",
      value: function render() {
        var children = this.props.children

        return _react2.default.createElement("div", null, children)
      },
    },
  ])
  return MarkerSpiderfier
})(_react2.default.PureComponent))

MarkerSpiderfier.propTypes = ((_MarkerSpiderfier$pro = {
  /**
   * @type boolean
   */
  defaultBasicFormatEvents: _propTypes2.default.bool,

  /**
   * @type number
   */
  defaultCircleFootSeparation: _propTypes2.default.number,

  /**
   * @type number
   */
  defaultCircleSpiralSwitchover: _propTypes2.default.number,

  /**
   * @type number
   */
  defaultCircleStartAngle: _propTypes2.default.number,
}),
(0, _defineProperty3.default)(
  _MarkerSpiderfier$pro,
  "defaultCircleStartAngle",
  _propTypes2.default.number
),
(0, _defineProperty3.default)(
  _MarkerSpiderfier$pro,
  "defaultHighlightedLegZIndex",
  _propTypes2.default.number
),
(0, _defineProperty3.default)(
  _MarkerSpiderfier$pro,
  "defaultIgnoreMapClick",
  _propTypes2.default.bool
),
(0, _defineProperty3.default)(
  _MarkerSpiderfier$pro,
  "defaultKeepSpiderfied",
  _propTypes2.default.bool
),
(0, _defineProperty3.default)(
  _MarkerSpiderfier$pro,
  "defaultLegColors",
  _propTypes2.default.object
),
(0, _defineProperty3.default)(
  _MarkerSpiderfier$pro,
  "defaultLegWeigth",
  _propTypes2.default.number
),
(0, _defineProperty3.default)(
  _MarkerSpiderfier$pro,
  "defaultMarkersWontHide",
  _propTypes2.default.bool
),
(0, _defineProperty3.default)(
  _MarkerSpiderfier$pro,
  "defaultMarkersWontMove",
  _propTypes2.default.bool
),
(0, _defineProperty3.default)(
  _MarkerSpiderfier$pro,
  "defaultNearbyDistance",
  _propTypes2.default.number
),
(0, _defineProperty3.default)(
  _MarkerSpiderfier$pro,
  "defaultSpiralFootSeparation",
  _propTypes2.default.number
),
(0, _defineProperty3.default)(
  _MarkerSpiderfier$pro,
  "defaultSpiralLengthFactor",
  _propTypes2.default.number
),
(0, _defineProperty3.default)(
  _MarkerSpiderfier$pro,
  "defaultSpiralLengthStart",
  _propTypes2.default.number
),
(0, _defineProperty3.default)(
  _MarkerSpiderfier$pro,
  "defaultSpiderfiedZIndex",
  _propTypes2.default.number
),
(0, _defineProperty3.default)(
  _MarkerSpiderfier$pro,
  "defaultUsualLegZIndex",
  _propTypes2.default.number
),
(0, _defineProperty3.default)(
  _MarkerSpiderfier$pro,
  "basicFormatEvents",
  _propTypes2.default.bool
),
(0, _defineProperty3.default)(
  _MarkerSpiderfier$pro,
  "circleFootSeparation",
  _propTypes2.default.number
),
(0, _defineProperty3.default)(
  _MarkerSpiderfier$pro,
  "circleSpiralSwitchover",
  _propTypes2.default.number
),
(0, _defineProperty3.default)(
  _MarkerSpiderfier$pro,
  "circleStartAngle",
  _propTypes2.default.number
),
(0, _defineProperty3.default)(
  _MarkerSpiderfier$pro,
  "highlightedLegZIndex",
  _propTypes2.default.number
),
(0, _defineProperty3.default)(
  _MarkerSpiderfier$pro,
  "ignoreMapClick",
  _propTypes2.default.bool
),
(0, _defineProperty3.default)(
  _MarkerSpiderfier$pro,
  "keepSpiderfied",
  _propTypes2.default.bool
),
(0, _defineProperty3.default)(
  _MarkerSpiderfier$pro,
  "legColors",
  _propTypes2.default.object
),
(0, _defineProperty3.default)(
  _MarkerSpiderfier$pro,
  "legWeigth",
  _propTypes2.default.number
),
(0, _defineProperty3.default)(
  _MarkerSpiderfier$pro,
  "markersWontHide",
  _propTypes2.default.bool
),
(0, _defineProperty3.default)(
  _MarkerSpiderfier$pro,
  "markersWontMove",
  _propTypes2.default.bool
),
(0, _defineProperty3.default)(
  _MarkerSpiderfier$pro,
  "nearbyDistance",
  _propTypes2.default.number
),
(0, _defineProperty3.default)(
  _MarkerSpiderfier$pro,
  "spiralFootSeparation",
  _propTypes2.default.number
),
(0, _defineProperty3.default)(
  _MarkerSpiderfier$pro,
  "spiralLengthFactor",
  _propTypes2.default.number
),
(0, _defineProperty3.default)(
  _MarkerSpiderfier$pro,
  "spiralLengthStart",
  _propTypes2.default.number
),
(0, _defineProperty3.default)(
  _MarkerSpiderfier$pro,
  "spiderfiedZIndex",
  _propTypes2.default.number
),
(0, _defineProperty3.default)(
  _MarkerSpiderfier$pro,
  "usualLegZIndex",
  _propTypes2.default.number
),
_MarkerSpiderfier$pro)
MarkerSpiderfier.contextTypes = (0, _defineProperty3.default)(
  {},
  _constants.MAP,
  _propTypes2.default.object
)
MarkerSpiderfier.childContextTypes = ((_MarkerSpiderfier$chi = {}),
(0, _defineProperty3.default)(
  _MarkerSpiderfier$chi,
  _constants.ANCHOR,
  _propTypes2.default.object
),
(0, _defineProperty3.default)(
  _MarkerSpiderfier$chi,
  _constants.MARKER_SPIDERFIER,
  _propTypes2.default.object
),
_MarkerSpiderfier$chi)
exports.default = MarkerSpiderfier

var eventMap = {}

var ownEventMap = {
  onClick: "click",
  onFormat: "format",

  /*
   * @see https://github.com/jawj/OverlappingMarkerSpiderfier/blob/master/lib/oms.coffee
   */
}
var updaterMap = {
  basicFormatEvents: function basicFormatEvents(instance, _basicFormatEvents) {
    instance.basicFormatEvents = _basicFormatEvents
  },
  circleFootSeparation: function circleFootSeparation(
    instance,
    _circleFootSeparation
  ) {
    instance.circleFootSeparation = _circleFootSeparation
  },
  circleSpiralSwitchover: function circleSpiralSwitchover(
    instance,
    _circleSpiralSwitchover
  ) {
    instance.circleSpiralSwitchover = _circleSpiralSwitchover
  },
  circleStartAngle: function circleStartAngle(instance, _circleStartAngle) {
    instance.circleStartAngle = _circleStartAngle
  },
  highlightedLegZIndex: function highlightedLegZIndex(
    instance,
    _highlightedLegZIndex
  ) {
    instance.highlightedLegZIndex = _highlightedLegZIndex
  },
  ignoreMapClick: function ignoreMapClick(instance, _ignoreMapClick) {
    instance.ignoreMapClick = _ignoreMapClick
  },
  keepSpiderfied: function keepSpiderfied(instance, _keepSpiderfied) {
    instance.keepSpiderfied = _keepSpiderfied
  },
  legColors: function legColors(instance, _legColors) {
    instance.legColors = _legColors
  },
  legWeigth: function legWeigth(instance, _legWeigth) {
    instance.legWeigth = _legWeigth
  },
  markersWontHide: function markersWontHide(instance, _markersWontHide) {
    instance.markersWontHide = _markersWontHide
  },
  markersWontMove: function markersWontMove(instance, _markersWontMove) {
    instance.markersWontMove = _markersWontMove
  },
  nearbyDistance: function nearbyDistance(instance, _nearbyDistance) {
    instance.nearbyDistance = _nearbyDistance
  },
  spiralFootSeparation: function spiralFootSeparation(
    instance,
    _spiralFootSeparation
  ) {
    instance.spiralFootSeparation = _spiralFootSeparation
  },
  spiralLengthFactor: function spiralLengthFactor(
    instance,
    _spiralLengthFactor
  ) {
    instance.spiralLengthFactor = _spiralLengthFactor
  },
  spiralLengthStart: function spiralLengthStart(instance, _spiralLengthStart) {
    instance.spiralLengthStart = _spiralLengthStart
  },
  spiderfiedZIndex: function spiderfiedZIndex(instance, _spiderfiedZIndex) {
    instance.spiderfiedZIndex = _spiderfiedZIndex
  },
  usualLegZIndex: function usualLegZIndex(instance, _usualLegZIndex) {
    instance.usualLegZIndex = _usualLegZIndex
  },
}
