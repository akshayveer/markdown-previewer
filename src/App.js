import React, { Component } from 'react';
import './App.css';
import {Grid, Row, Col, FormGroup, FormControl, Button} from 'react-bootstrap'
import marked from 'marked'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {value : "", preview : ""};
    this.handleClick = this.convert.bind(this);
  }
  handleChange(e){
    const val = e.target.value;
    this.setState({value : val});
  }
  convert(){
    const val = this.state.value;
    const that = this;
    marked(val, function (err, content) {
      if (err) throw err;
      that.setState({preview : val});
    });
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
                  <FormControl componentClass="textarea" value={this.state.preview} disabled={"disabled"}/>
                </FormGroup>
              </div>
            </Col>
          </Row>
          <Button bsStyle="info" onClick={this.handleClick}>Convert</Button>
        </Grid>

      </div>
    );
  }
}

export default App;
