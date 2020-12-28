import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './App.scss';
import LegendContainer from './Components/LegendContainer.js'

let data = require("./assets/data.json")

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container >
          <Row>
            <Col lg='auto'>
              
            </Col>
            <Col lg='auto'>
              <LegendContainer data={data} id='container'></LegendContainer>
            </Col>
          </Row>
        </Container>
      </div>
    );
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
