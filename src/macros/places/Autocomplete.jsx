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

export const __jscodeshiftPlaceholder__ = `{
  "eventMapOverrides": {
  },
  "getInstanceFromComponent": "this.state[AUTO_COMPLETE]"
}`

/**
 * A wrapper around `google.maps.places.AutoComplete` on the map
 *
 * @see https://developers.google.com/maps/documentation/javascript/reference#Autocomplete
 */
export class Autocomplete extends React.PureComponent {
  static propTypes = {
    __jscodeshiftPlaceholder__: null,
    /**
     * Where to put `<AutoComplete>` inside a `<GoogleMap>`
     *
     * @example google.maps.ControlPosition.TOP_LEFT
     * @type number
     */
    controlPosition: PropTypes.number,
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
}

export default Autocomplete

const isValidControlPosition = _.isNumber

const eventMap = {}

const updaterMap = {}
