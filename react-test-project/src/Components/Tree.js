import React, { Component } from 'react';
import Node from './Node.js';


export default class Tree extends React.PureComponent {
    constructor(props) {
      super(props);
      this.props = props;
    }
  
  
    nestedNodes = (this.props.node.nodes || []).map(node => {
      if (node == null) return;
      return (
        <div>
          <Tree node={node}> </Tree>
        </div>
      )
    })
  
    render() {
      return (
        <ul>
          <Node name={this.props.node.name} layer={this.props.node.layer} type='child'></Node>
          <ul>
            {this.nestedNodes}
          </ul>
        </ul>
      )
    }
  }