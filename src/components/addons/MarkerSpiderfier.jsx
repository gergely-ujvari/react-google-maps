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
   * @see https://github.com/jawj/OverlappingMarkerSpiderfier/blob/master/lib/oms.coffee
   */
  constructor(props, context) {
    super(props, context)
    console.log("spiderifier constructor")
    console.log("map", this.context[MAP])
    const markerSpiderfier = new window.OverlappingMarkerSpiderfier(
      this.context[MAP]
    )

    construct(
      MarkerSpiderfier.propTypes,
      updaterMap,
      this.props,
      markerSpiderfier
    )

    // XXX:  See https://github.com/jawj/OverlappingMarkerSpiderfier/blob/master/lib/oms.coffee#L78
    // Overlapping markerSpiderifier uses a hack to get a projection
    // which is no longer working after the google map is loaded out and a new map is loaded
    // This hacky code emulates that function and reinitializes the OverlayView
    markerSpiderfier.constructor.a = function(map) {
      return this.setMap(map)
    }
    markerSpiderfier.constructor.a.prototype = new google.maps.OverlayView()
    markerSpiderfier.constructor.a.prototype["draw"] = function() {}
    markerSpiderfier.g = new markerSpiderfier.constructor.a(
      _this.context[_constants.MAP]
    )

    this.state = {
      [MARKER_SPIDERFIER]: markerSpiderfier,
    }
  }

  getChildContext() {
    const markerSpiderfier = this.state[MARKER_SPIDERFIER]
    return {
      [ANCHOR]: markerSpiderfier,
      [MARKER_SPIDERFIER]: markerSpiderfier,
    }
  }

  componentDidMount() {
    componentDidMount(this, this.state[MARKER_SPIDERFIER], eventMap)
    this.registerOwnEvents(this.props)
  }

  componentDidUpdate(prevProps) {
    componentDidUpdate(
      this,
      this.state[MARKER_SPIDERFIER],
      eventMap,
      updaterMap,
      prevProps
    )

    this.unregisterOwnEvents(prevProps)
    this.registerOwnEvents(this.props)
  }

  componentWillUnmount() {
    componentWillUnmount(this)
    const markerSpiderfier = this.state[MARKER_SPIDERFIER]
    if (markerSpiderfier) {
      markerSpiderfier.removeAllMarkers()
      this.unregisterOwnEvents(this.props)
      markerSpiderfier.projHelper = null
      this.setState({ [MARKER_SPIDERFIER]: null })
    }
  }

  registerOwnEvents(props) {
    const markerSpiderfier = this.state[MARKER_SPIDERFIER]
    if (markerSpiderfier) {
      Object.keys(ownEventMap).forEach(e => {
        if (props[e]) {
          markerSpiderfier.addListener(ownEventMap[e], props[e])
        }
      })
    }
  }

  unregisterOwnEvents(props) {
    const markerSpiderfier = this.state[MARKER_SPIDERFIER]
    if (markerSpiderfier) {
      Object.keys(ownEventMap).forEach(e => {
        if (props[e]) {
          markerSpiderfier.removeListener(ownEventMap[e], props[e])
        }
      })
    }
  }

  render() {
    const { children } = this.props
    return <div>{children}</div>
  }
}

export default MarkerSpiderfier

const eventMap = {}

const ownEventMap = {
  onClick: "click",
  onFormat: "format",
}

/*
 * @see https://github.com/jawj/OverlappingMarkerSpiderfier/blob/master/lib/oms.coffee
 */
const updaterMap = {
  basicFormatEvents(instance, basicFormatEvents) {
    instance.basicFormatEvents = basicFormatEvents
  },

  circleFootSeparation(instance, circleFootSeparation) {
    instance.circleFootSeparation = circleFootSeparation
  },

  circleSpiralSwitchover(instance, circleSpiralSwitchover) {
    instance.circleSpiralSwitchover = circleSpiralSwitchover
  },

  circleStartAngle(instance, circleStartAngle) {
    instance.circleStartAngle = circleStartAngle
  },

  highlightedLegZIndex(instance, highlightedLegZIndex) {
    instance.highlightedLegZIndex = highlightedLegZIndex
  },

  ignoreMapClick(instance, ignoreMapClick) {
    instance.ignoreMapClick = ignoreMapClick
  },

  keepSpiderfied(instance, keepSpiderfied) {
    instance.keepSpiderfied = keepSpiderfied
  },

  legColors(instance, legColors) {
    instance.legColors = legColors
  },

  legWeigth(instance, legWeigth) {
    instance.legWeigth = legWeigth
  },

  markersWontHide(instance, markersWontHide) {
    instance.markersWontHide = markersWontHide
  },

  markersWontMove(instance, markersWontMove) {
    instance.markersWontMove = markersWontMove
  },

  nearbyDistance(instance, nearbyDistance) {
    instance.nearbyDistance = nearbyDistance
  },

  spiralFootSeparation(instance, spiralFootSeparation) {
    instance.spiralFootSeparation = spiralFootSeparation
  },

  spiralLengthFactor(instance, spiralLengthFactor) {
    instance.spiralLengthFactor = spiralLengthFactor
  },

  spiralLengthStart(instance, spiralLengthStart) {
    instance.spiralLengthStart = spiralLengthStart
  },

  spiderfiedZIndex(instance, spiderfiedZIndex) {
    instance.spiderfiedZIndex = spiderfiedZIndex
  },

  usualLegZIndex(instance, usualLegZIndex) {
    instance.usualLegZIndex = usualLegZIndex
  },
}
