import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faInfoCircle, faMap } from '@fortawesome/free-solid-svg-icons';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import TabContainer from 'react-bootstrap/TabContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

library.add(faInfoCircle, faEye, faMap);

let data = require("./assets/data.json")

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>TCA dynamic legend with React</h2>
        </div>
        <LegendContainer></LegendContainer>
        
      </div>
    );
  }
}

class LegendContainer extends React.PureComponent {

  render() {
    return (
      <TabContainer id="container">
        <Tabs defaultActiveKey="legend" transition={false} id="legend-tabs">
          <Tab eventKey="legend" title="Legend">
            <section id="content1">
              <p className="legend">
                <span style={{ color: "grey" }}>------------ Condition ------------<i className="arrow"></i></span>
                <br></br>
                <br></br>
                <span className="verylow">Very Poor</span> <span className="low">Poor</span> <span className="moderate">Moderate</span> <span className="high">Good</span> <span className="veryhigh">Very Good</span>
              </p>
              <div className="pane">
                <ul id="ltaTree" className="tree"></ul>
              </div>
            </section>
            <div>
          
          {data.nodes.map((node) => {
            return (

              <Tree node={node}></Tree>
            )
          })}
        </div>
          </Tab>
          <Tab eventKey="statistics" title="Statistics" >
            <section id="content2">
              <div className="pane center">
                <p>
                  <select id="selectedVariable"></select>
                </p>
                <div id="charts">
                  <h3>National Histogram</h3>
                  <div>
                    <div id="national-chart" className="chart"></div>
                  </div>
                  <h3>Regional Histogram</h3>
                  <div>
                    <div id="region-chart" className="chart"></div>
                  </div>
                  <h3>Forest Histogram</h3>
                  <div>
                    <div id="forest-chart" className="chart"></div>
                  </div>
                </div>
              </div>
            </section>
          </Tab>
          <Tab eventKey="data" title="Data">
            <section id="content3">
              <div className="pane">
                <div className="header center">
                </div>
                <div id="rawdata" className="center">
                  <h3>Zonal Stats</h3>
                  <div>
                    <table id="data-table-zonalstats" className="data-table">
                      <tbody></tbody>
                    </table>
                  </div>
                  <h3>EMDS Parameters</h3>
                  <div>
                    <table id="data-table-emdsparameters" className="data-table">
                      <tbody></tbody>
                    </table>
                  </div>
                  <h3>EMDS Outcomes</h3>
                  <div>
                    <table id="data-table-emdsoutcomes" className="data-table">
                      <tbody></tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>
          </Tab>
        </Tabs>
      </TabContainer>
    )
  }
}

class Tree extends React.PureComponent {
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

class Node extends React.PureComponent {
  constructor(props) {
    super(props);
    this.props = props;
  }

  layerNameText() {
    return (
      <span className="clickable">{this.props.name}</span>
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
      <ul className="node" style={{ "marginLeft": "50px", "marginTop": "10px" }}>
        <li key={this.props.layer} className="layer-name">{this.layerNameText()}{this.metadataText()}{this.dataLayerText()}{this.layerText()}</li>
      </ul>
    )
  }
}



// function setLayer(name) {
//   this._map.setTcaLayer(name);
//   this._currentLayer(name);
//   this._currentDataLayer(null);
// }

// function setDataLayer(name) {
//   if(this._currentDataLayer() == name){
//       this._map.removeDataLayer();
//       this._currentDataLayer = null;
//   }else{
//       this._map.setDataLayer = name;
//       this._currentDataLayer =name;
//   }
// }

// function isLayerVisible(name) {
//   return this._currentLayer() == name;
// }

// function renderDataLayer(name) {
//   return name == this._currentDataLayer() ? 'selected-layer' : 'unselected-layer';
// }

export default App;
