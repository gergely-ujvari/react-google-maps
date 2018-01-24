import React from "react"
import PropTypes from "prop-types"
import "npm-overlapping-marker-spiderfier"

import {
  construct,
  componentDidMount,
  componentDidUpdate,
  componentWillUnmount,
} from "../../utils/MapChildHelper"

import { MAP, ANCHOR, MARKER_SPIDERFIER } from "../../constants"

/**
 * A wrapper around `MarkerSpiderfier`
 *
 * @see https://github.com/jawj/OverlappingMarkerSpiderfier
 */
export class MarkerSpiderfier extends React.PureComponent {
  static propTypes = {
    /**
     * @type boolean
     */
    defaultBasicFormatEvents: PropTypes.bool,

    /**
     * @type number
     */
    defaultCircleFootSeparation: PropTypes.number,

    /**
     * @type number
     */
    defaultCircleSpiralSwitchover: PropTypes.number,

    /**
     * @type number
     */
    defaultCircleStartAngle: PropTypes.number,

    /**
     * @type number
     */
    defaultCircleStartAngle: PropTypes.number,

    /**
     * @type number
     */
    defaultHighlightedLegZIndex: PropTypes.number,

    /**
     * @type boolean
     */
    defaultIgnoreMapClick: PropTypes.bool,

    /**
     * @type boolean
     */
    defaultKeepSpiderfied: PropTypes.bool,

    /**
     * @type Object
     */
    defaultLegColors: PropTypes.object,

    /**
     * @type number
     */
    defaultLegWeigth: PropTypes.number,

    /**
     * @type boolean
     */
    defaultMarkersWontHide: PropTypes.bool,

    /**
     * @type boolean
     */
    defaultMarkersWontMove: PropTypes.bool,

    /**
     * @type number
     */
    defaultNearbyDistance: PropTypes.number,

    /**
     * @type number
     */
    defaultSpiralFootSeparation: PropTypes.number,

    /**
     * @type number
     */
    defaultSpiralLengthFactor: PropTypes.number,

    /**
     * @type number
     */
    defaultSpiralLengthStart: PropTypes.number,

    /**
     * @type number
     */
    defaultSpiderfiedZIndex: PropTypes.number,

    /**
     * @type number
     */
    defaultUsualLegZIndex: PropTypes.number,

    /**
     * @type boolean
     */
    basicFormatEvents: PropTypes.bool,

    /**
     * @type number
     */
    circleFootSeparation: PropTypes.number,

    /**
     * @type number
     */
    circleSpiralSwitchover: PropTypes.number,

    /**
     * @type number
     */
    circleStartAngle: PropTypes.number,

    /**
     * @type number
     */
    highlightedLegZIndex: PropTypes.number,

    /**
     * @type boolean
     */
    ignoreMapClick: PropTypes.bool,

    /**
     * @type boolean
     */
    keepSpiderfied: PropTypes.bool,

    /**
     * @type Object
     */
    legColors: PropTypes.object,

    /**
     * @type number
     */
    legWeigth: PropTypes.number,

    /**
     * @type boolean
     */
    markersWontHide: PropTypes.bool,

    /**
     * @type boolean
     */
    markersWontMove: PropTypes.bool,

    /**
     * @type number
     */
    nearbyDistance: PropTypes.number,

    /**
     * @type number
     */
    spiralFootSeparation: PropTypes.number,

    /**
     * @type number
     */
    spiralLengthFactor: PropTypes.number,

    /**
     * @type number
     */
    spiralLengthStart: PropTypes.number,

    /**
     * @type number
     */
    spiderfiedZIndex: PropTypes.number,

    /**
     * @type number
     */
    usualLegZIndex: PropTypes.number,
  }

  static contextTypes = {
    [MAP]: PropTypes.object,
  }

  static childContextTypes = {
    [ANCHOR]: PropTypes.object,
    [MARKER_SPIDERFIER]: PropTypes.object,
  }

  /*
   * @see https://github.com/mahnunchik/markerclustererplus/blob/master/docs/reference.html
   */
  constructor(props, context) {
    super(props, context)
    const markerSpiderfier = new window.OverlappingMarkerSpiderfier(
      this.context[MAP],
      construct(
        MarkerSpiderfier.propTypes,
        updaterMap,
        this.props,
        markerSpiderfier
      )
    )

    this.state = {
      [MARKER_SPIDERFIER]: markerSpiderfier,
    }
  }

  getChildContext() {
    const markerSpiderfier = this.state[MARKER_SPIDERFIER]
    return {
      [ANCHOR]: markerClusterer,
      [MARKER_SPIDERFIER]: markerSpiderfier,
    }
  }

  componentDidMount() {
    componentDidMount(this, this.state[MARKER_SPIDERFIER], eventMap)
  }

  componentDidUpdate(prevProps) {
    componentDidUpdate(
      this,
      this.state[MARKER_SPIDERFIER],
      eventMap,
      updaterMap,
      prevProps
    )
  }

  componentWillUnmount() {
    componentWillUnmount(this)
    const markerSpiderfier = this.state[MARKER_SPIDERFIER]
    if (markerSpiderfier) {
      markerSpiderfier.removeAllMarkers()
    }
  }

  render() {
    const { children } = this.props
    return <div>{children}</div>
  }
}

export default MarkerSpiderfier

const eventMap = {
  onClick: "click",
  onFormat: "format",
}

const updaterMap = {
  basicFormatEvents(instance, basicFormatEvents) {
    instance.setBasicFormatEvents(basicFormatEvents)
  },

  circleFootSeparation(instance, circleFootSeparation) {
    instance.setCircleFootSeparation(circleFootSeparation)
  },

  circleSpiralSwitchover(instance, circleSpiralSwitchover) {
    instance.setCircleSpiralSwitchover(circleSpiralSwitchover)
  },

  circleStartAngle(instance, circleStartAngle) {
    instance.setCircleStartAngle(circleStartAngle)
  },

  highlightedLegZIndex(instance, highlightedLegZIndex) {
    instance.setHighlightedLegZIndex(highlightedLegZIndex)
  },

  ignoreMapClick(instance, ignoreMapClick) {
    instance.setIgnoreMapClick(ignoreMapClick)
  },

  keepSpiderfied(instance, keepSpiderfied) {
    instance.setKeepSpiderfied(keepSpiderfied)
  },

  legColors(instance, legColors) {
    instance.setLegColors(legColors)
  },

  legWeigth(instance, legWeigth) {
    instance.setLegWeigth(legWeigth)
  },

  markersWontHide(instance, markersWontHide) {
    instance.setMarkersWontHide(markersWontHide)
  },

  markersWontMove(instance, markersWontMove) {
    instance.setMarkersWontMove(markersWontMove)
  },

  nearbyDistance(instance, nearbyDistance) {
    instance.setNearbyDistance(nearbyDistance)
  },

  spiralFootSeparation(instance, spiralFootSeparation) {
    instance.setSpiralFootSeparation(spiralFootSeparation)
  },

  spiralLengthFactor(instance, spiralLengthFactor) {
    instance.setSpiralLengthFactor(spiralLengthFactor)
  },

  spiralLengthStart(instance, spiralLengthStart) {
    instance.setSpiralLengthStart(spiralLengthStart)
  },

  spiderfiedZIndex(instance, spiderfiedZIndex) {
    instance.setSpiderfiedZIndex(spiderfiedZIndex)
  },

  usualLegZIndex(instance, usualLegZIndex) {
    instance.setUsualLegZIndex(usualLegZIndex)
  },
}
