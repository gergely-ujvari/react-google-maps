/* global google */
import _ from "lodash";

import PropTypes from "prop-types";

import createReactClass from "create-react-class";

import {
  MAP,
  AUTO_COMPLETE,
} from "../constants";

import {
  addDefaultPrefixToPropTypes,
  collectUncontrolledAndControlledProps,
  default as enhanceElement,
} from "../enhanceElement";

import * as helpers from "../utils/AutocompleteHelper";

const controlledPropTypes = {
  // NOTICE!!!!!!
  //
  // Only expose those with getters & setters in the table as controlled props.
  //
  // [].map.call($0.querySelectorAll("tr>td>code", function(it){ return it.textContent; })
  //    .filter(function(it){ return it.match(/^set/) && !it.match(/^setMap/); })
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#autocomplete
  bounds: PropTypes.any,
  options: PropTypes.any,
  inputProps: PropTypes.object,
  inputStyle: PropTypes.object,
  inputClassName: PropTypes.string,
};

const defaultUncontrolledPropTypes = addDefaultPrefixToPropTypes(controlledPropTypes);

const eventMap = {
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#autocomplete
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
  onPlacesChanged: `places_changed`,
};

const publicMethodMap = {
  // Public APIs
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#autocomplete
  //
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
  //    .filter(function(it){ return it.match(/^get/) && !it.match(/Map$/); })
  getBounds(autocomplete) { return autocomplete.getBounds(); },

  getPlace(autocomplete) { return autocomplete.getPlace(); },
  // END - Public APIs
};

const controlledPropUpdaterMap = {
  bounds(autocomplete, bounds) { autocomplete.setBounds(bounds); },
};

function getInstanceFromComponent(component) {
  return component.state[AUTO_COMPLETE];
}

export default _.flowRight(
  createReactClass,
  enhanceElement(getInstanceFromComponent, publicMethodMap, eventMap, controlledPropUpdaterMap),
)({
  displayName: `Autocomplete`,

  propTypes: {
    ...controlledPropTypes,
    ...defaultUncontrolledPropTypes,
    controlPosition: PropTypes.any.isRequired,
    inputProps: PropTypes.object,
    inputStyle: PropTypes.object,
    inputClassName: PropTypes.string,
    inputPlaceholder: PropTypes.string,
  },

  contextTypes: {
    [MAP]: PropTypes.object,
  },

  componentWillMount() {
    this._inputElement = helpers.createInputElement(this.props);
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Autocomplete
    const autocomplete = new google.maps.places.Autocomplete(this._inputElement, this.props.options);
    this.setState({
      [AUTO_COMPLETE]: autocomplete,
    });
  },

  componentDidMount() {
    this._mountIndex = helpers.mountInputElementToControlPositionOnMap(
      this._inputElement,
      this.props.controlPosition,
      this.context[MAP],
    );
  },

  componentDidUpdate(prevProps) {
    if (this.props.controlPosition !== prevProps.controlPosition) {
      helpers.unmountInputElementFromControlPositionOnMap(
        this._mountIndex,
        prevProps.controlPosition,
        this.context[MAP],
      );
      this._mountIndex = helpers.mountInputElementToControlPositionOnMap(
        this._inputElement,
        this.props.controlPosition,
        this.context[MAP],
      );
    }
  },

  componentWillUnmount() {
    if (this._mountIndex) {
      helpers.unmountInputElementFromControlPositionOnMap(
        this._mountIndex,
        this.props.controlPosition,
        this.context[MAP],
      );
      this._inputElement = null;
    }
  },

  render() {
    return false;
  },
});
