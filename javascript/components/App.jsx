import React from 'react';

import Editor from "./Editor.js";
import Preview from "./Preview.js";
import { Grid, Row, Col } from "react-bootstrap";
import { styles } from "./AppCSS.js";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      value: ''
    }
    this._edit = this._edit.bind(this);
  }

  _edit(text) {
    this.setState({
      value: text
    })
  }

  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={6} sm={6} md={6} lg={6} style={styles.editor}>
              <div>
                <Editor edit={this._edit} value={this.state.value} />
              </div>
            </Col>
            <Col xs={6} sm={6} md={6} lg={6} style={styles.preview}>
              <div>
                <Preview data={this.state.value} />
              </div>
            </Col>
          </Row>
        </Grid>
       </div>
    )
  }

}