"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true,
})
exports.Autocomplete = undefined

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

var _isNumber2 = require("lodash/isNumber")

var _isNumber3 = _interopRequireDefault(_isNumber2)

var _react = require("react")

var _react2 = _interopRequireDefault(_react)

var _reactDom = require("react-dom")

var _reactDom2 = _interopRequireDefault(_reactDom)

var _propTypes = require("prop-types")

var _propTypes2 = _interopRequireDefault(_propTypes)

var _MapChildHelper = require("../../utils/MapChildHelper")

var _constants = require("../../constants")

var _invariant = require("invariant")

var _invariant2 = _interopRequireDefault(_invariant)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * A wrapper around `google.maps.places.AutoComplete` on the map
 *
 * @see https://developers.google.com/maps/documentation/javascript/reference#Autocomplete
 */
/*
 * -----------------------------------------------------------------------------
 * This file is auto-generated from the corresponding file at `src/macros/`.
 * Please **DO NOT** edit this file directly when creating PRs.
 * -----------------------------------------------------------------------------
 */
/* global google */
var Autocomplete = (exports.Autocomplete = (function(_React$PureComponent) {
  ;(0, _inherits3.default)(Autocomplete, _React$PureComponent)

  function Autocomplete() {
    var _ref

    var _temp, _this, _ret

    ;(0, _classCallCheck3.default)(this, Autocomplete)

    for (
      var _len = arguments.length, args = Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key]
    }

    return (
      (_ret = ((_temp = ((_this = (0, _possibleConstructorReturn3.default)(
        this,
        (_ref =
          Autocomplete.__proto__ ||
          (0, _getPrototypeOf2.default)(Autocomplete)).call.apply(
          _ref,
          [this].concat(args)
        )
      )),
      _this)),
      (_this.state = (0, _defineProperty3.default)(
        {},
        _constants.AUTO_COMPLETE,
        null
      )),
      _temp)),
      (0, _possibleConstructorReturn3.default)(_this, _ret)
    )
  }

  ;(0, _createClass3.default)(Autocomplete, [
    {
      key: "render",
      value: function render() {
        if (_react2.default.version.match(/^16/)) {
          return _reactDom2.default.createPortal(
            _react2.default.Children.only(this.props.children),
            this.containerElement
          )
        }
        return false
      },

      /**
       * Returns the bounds to which predictions are biased.
       * @type LatLngBounds
       * @public
       */
    },
    {
      key: "getBounds",
      value: function getBounds() {
        return this.state[_constants.AUTO_COMPLETE].getBounds()
      },

      /**
       * Returns the details of the Place selected by user if the details were successfully retrieved. Otherwise returns a stub Place object, with the `name` property set to the current value of the input field.
       * @type PlaceResultname
       * @public
       */
    },
    {
      key: "getPlace",
      value: function getPlace() {
        return this.state[_constants.AUTO_COMPLETE].getPlace()
      },
    },
  ])
  return Autocomplete
})(_react2.default.PureComponent))
//import * as helpers from "../../utils/AutocompleteHelper"

Autocomplete.propTypes = {
  /**
   * Where to put `<AutoComplete>` inside a `<GoogleMap>`
   *
   * @example google.maps.ControlPosition.TOP_LEFT
   * @type number
   */
  controlPosition: _propTypes2.default.number,

  /**
   * @type LatLngBounds|LatLngBoundsLiteral
   */
  defaultBounds: _propTypes2.default.any,

  /**
   * @type ComponentRestrictions
   */
  defaultComponentRestrictions: _propTypes2.default.any,

  /**
   * @type AutocompleteOptions
   */
  defaultOptions: _propTypes2.default.any,

  /**
   * @type Array<string>
   */
  defaultTypes: _propTypes2.default.any,

  /**
   * @type LatLngBounds|LatLngBoundsLiteral
   */
  bounds: _propTypes2.default.any,

  /**
   * @type ComponentRestrictions
   */
  componentRestrictions: _propTypes2.default.any,

  /**
   * @type AutocompleteOptions
   */
  options: _propTypes2.default.any,

  /**
   * @type Array<string>
   */
  types: _propTypes2.default.any,

  /**
   * function
   */
  onPlaceChanged: _propTypes2.default.func,
}
Autocomplete.contextTypes = (0, _defineProperty3.default)(
  {},
  _constants.MAP,
  _propTypes2.default.object
)
exports.default = Autocomplete

var isValidControlPosition = _isNumber3.default

var eventMap = {
  onPlaceChanged: "place_changed",
}

var updaterMap = {
  bounds: function bounds(instance, _bounds) {
    instance.setBounds(_bounds)
  },
  componentRestrictions: function componentRestrictions(
    instance,
    _componentRestrictions
  ) {
    instance.setComponentRestrictions(_componentRestrictions)
  },
  options: function options(instance, _options) {
    instance.setOptions(_options)
  },
  types: function types(instance, _types) {
    instance.setTypes(_types)
  },
}
