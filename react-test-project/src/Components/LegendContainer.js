import React from 'react';
import Container from 'react-bootstrap/Container';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import TabContainer from 'react-bootstrap/TabContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tree from './Tree.js';
import '../Style/legend-container.css'

export default class LegendContainer extends React.PureComponent {

    render() {
      return (
        <TabContainer>
          <Tabs defaultActiveKey="legend" transition={false} id="legend-tabs">
            <Tab eventKey="legend" title="Legend">
              <section id="content1">
                <p className="legend">
                  <span style={{ color: "grey" }}>------------ Condition ------------<i className="arrow right"></i></span>
                  <br></br>
                  <br></br>
                  <span className="verylow">Very Poor</span> <span className="low">Poor</span> <span className="moderate">Moderate</span> <span className="high">Good</span> <span className="veryhigh">Very Good</span>
                </p>
              </section>
              <div>
                {this.props.data.nodes.map((node) => {
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