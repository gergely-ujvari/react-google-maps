import _ from "lodash";

import PropTypes from "prop-types";

import createReactClass from "create-react-class";

import React from "react";

import "./oms.min";

import {
  MAP,
  ANCHOR,
  MARKER_SPIDERFIER,
} from "../constants";

import {
  addDefaultPrefixToPropTypes,
  collectUncontrolledAndControlledProps,
  default as enhanceElement,
} from "../enhanceElement";

const controlledPropTypes = {
  // NOTICE!!!!!!
  //
  // Only expose those with getters & setters in the table as controlled props.
  //
  // https://github.com/jawj/OverlappingMarkerSpiderfier/blob/master/lib/oms.coffee
  keepSpiderfied: PropTypes.bool,
  ignoreMapClick: PropTypes.bool,
  markersWontHide: PropTypes.bool,
  markersWontMove: PropTypes.bool,
  basicFormatEvents: PropTypes.bool,
  nearbyDistance: PropTypes.number,
  circleSpiralSwitchover: PropTypes.number,
  circleFootSeparation: PropTypes.number,
  circleStartAngle: PropTypes.number,
  spiralFootSeparation: PropTypes.number,
  spiralLengthStart: PropTypes.number,
  spiralLengthFactor: PropTypes.number,
  spiderfiedZIndex: PropTypes.number,
  highlightedLegZIndex: PropTypes.number,
  usualLegZIndex: PropTypes.number,
  legWeigth: PropTypes.number,
  legColors: PropTypes.object,
};

const defaultUncontrolledPropTypes = addDefaultPrefixToPropTypes(controlledPropTypes);

const eventMap = {
};

const publicMethodMap = {
  addListener(markerSpiderfier) { return markerSpiderfier.addListener(); },
};

const controlledPropUpdaterMap = {
};

function getInstanceFromComponent(component) {
  return component.state[MARKER_SPIDERFIER];
}

export default _.flowRight(
  createReactClass,
  enhanceElement(getInstanceFromComponent, publicMethodMap, eventMap, controlledPropUpdaterMap),
)({
  displayName: `MarkerSpiderfier`,

  propTypes: {
    ...controlledPropTypes,
    ...defaultUncontrolledPropTypes,
  },

  contextTypes: {
    [MAP]: PropTypes.object,
  },

  childContextTypes: {
    [ANCHOR]: PropTypes.object,
    [MARKER_SPIDERFIER]: PropTypes.object,
  },

  getInitialState() {
    // http://google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclustererplus/docs/reference.html#events
    const markerSpiderfier = new OverlappingMarkerSpiderfier(
      this.context[MAP],
      collectUncontrolledAndControlledProps(
        defaultUncontrolledPropTypes,
        controlledPropTypes,
        this.props
      )
    );
    return {
      [MARKER_SPIDERFIER]: markerSpiderfier,
    };
  },

  getChildContext() {
    const markerSpiderfier = getInstanceFromComponent(this);
    return {
      [ANCHOR]: markerSpiderfier,
      [MARKER_SPIDERFIER]: markerSpiderfier,
    };
  },

  componentDidUpdate() {
//    const markerSpiderfier = getInstanceFromComponent(this);
//    markerClusterer.repaint();
  },

  componentWillUnmount() {
    const markerSpiderfier = getInstanceFromComponent(this);
    if (markerSpiderfier) {
      markerSpiderfier.removeAllMarkers();
    }
  },

  render() {
    const {
      children,
    } = this.props;

    return (
      <div>
        {children}
      </div>
    );
  },
});
