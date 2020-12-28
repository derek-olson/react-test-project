import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faInfoCircle, faMap } from '@fortawesome/free-solid-svg-icons';

library.add(faInfoCircle, faEye, faMap);

export default class Node extends React.PureComponent {
    constructor(props) {
      super(props);
      this.props = props;
    }
  
    layerNameText() {
      return (
        <span className="layerNameText">{this.props.name}</span>
      )
    }
  
    metadataText() {
      return (
        <FontAwesomeIcon icon="info-circle" />
      )
    }
  
    dataLayerText() {
      return (
        <FontAwesomeIcon icon="map" />
      )
    }
  
    layerText() {
      return (
        <FontAwesomeIcon icon="eye" />
      )
    }
  
    render() {
      return (
        <ul className="node" style={{ "marginLeft": "0", "marginTop": "0" }}>
          <li key={this.props.layer} className="tree-node">{this.layerNameText()}{this.metadataText()}{this.dataLayerText()}{this.layerText()}</li>
        </ul>
      )
    }
  }