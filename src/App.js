import React, { Component } from 'react';
import './App.css';
import {Grid, Row, Col, FormGroup, FormControl, Button} from 'react-bootstrap'
class App extends Component {
  constructor(props){
    super(props);
    this.state = {value : ""};
  }
  handleChange(e){
    const val = e.target.val;
    this.setState({value : val});
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Markdown Preview</h1>
        </div>
        <Grid>
          <Row>
            <Col sm={6}>
              <div id="source">
                <FormGroup controlId="formControlsTextarea">
                  <FormControl componentClass="textarea" value={this.state.value} onChange={(e) => this.handleChange(e)}/>
                </FormGroup>
              </div>
            </Col>
            <Col sm={6}>
              <div id="preview">
                <FormGroup controlId="formControlsTextarea">
                  <FormControl componentClass="textarea" disabled={"disabled"}/>
                </FormGroup>
              </div>
            </Col>
          </Row>
          <Button bsStyle="info">Convert</Button>
        </Grid>

      </div>
    );
  }
}

export default App;
