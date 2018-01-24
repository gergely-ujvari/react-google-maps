/*
 * -----------------------------------------------------------------------------
 * This file is auto-generated from the corresponding file at `src/macros/`.
 * Please **DO NOT** edit this file directly when creating PRs.
 * -----------------------------------------------------------------------------
 */
/* global google */
import _ from "lodash"
import React from "react"
import ReactDOM from "react-dom"
import PropTypes from "prop-types"
//import * as helpers from "../../utils/AutocompleteHelper"

import {
  construct,
  componentDidMount,
  componentDidUpdate,
  componentWillUnmount,
} from "../../utils/MapChildHelper"

import { MAP, AUTO_COMPLETE } from "../../constants"
import invariant from "invariant"

/**
 * A wrapper around `google.maps.places.AutoComplete` on the map
 *
 * @see https://developers.google.com/maps/documentation/javascript/reference#Autocomplete
 */
export class Autocomplete extends React.PureComponent {
  static propTypes = {
    /**
     * Where to put `<AutoComplete>` inside a `<GoogleMap>`
     *
     * @example google.maps.ControlPosition.TOP_LEFT
     * @type number
     */
    controlPosition: PropTypes.number,

    /**
     * @type LatLngBounds|LatLngBoundsLiteral
     */
    defaultBounds: PropTypes.any,

    /**
     * @type ComponentRestrictions
     */
    defaultComponentRestrictions: PropTypes.any,

    /**
     * @type AutocompleteOptions
     */
    defaultOptions: PropTypes.any,

    /**
     * @type Array<string>
     */
    defaultTypes: PropTypes.any,

    /**
     * @type LatLngBounds|LatLngBoundsLiteral
     */
    bounds: PropTypes.any,

    /**
     * @type ComponentRestrictions
     */
    componentRestrictions: PropTypes.any,

    /**
     * @type AutocompleteOptions
     */
    options: PropTypes.any,

    /**
     * @type Array<string>
     */
    types: PropTypes.any,

    /**
     * function
     */
    onPlaceChanged: PropTypes.func,
  }

  static contextTypes = {
    [MAP]: PropTypes.object,
  }

  state = {
    [AUTO_COMPLETE]: null,
  }

  render() {
    if (React.version.match(/^16/)) {
      return ReactDOM.createPortal(
        React.Children.only(this.props.children),
        this.containerElement
      )
    }
    return false
  }

  /**
   * Returns the bounds to which predictions are biased.
   * @type LatLngBounds
   * @public
   */
  getBounds() {
    return this.state[AUTO_COMPLETE].getBounds()
  }

  /**
   * Returns the details of the Place selected by user if the details were successfully retrieved. Otherwise returns a stub Place object, with the `name` property set to the current value of the input field.
   * @type PlaceResultname
   * @public
   */
  getPlace() {
    return this.state[AUTO_COMPLETE].getPlace()
  }
}

export default Autocomplete

const isValidControlPosition = _.isNumber

const eventMap = {
  onPlaceChanged: "place_changed",
}

const updaterMap = {
  bounds(instance, bounds) {
    instance.setBounds(bounds)
  },

  componentRestrictions(instance, componentRestrictions) {
    instance.setComponentRestrictions(componentRestrictions)
  },

  options(instance, options) {
    instance.setOptions(options)
  },

  types(instance, types) {
    instance.setTypes(types)
  },
}
