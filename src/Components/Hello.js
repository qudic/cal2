import React, { Component } from 'react';
import { Grid, Jumbotron, Col, Row } from 'react-bootstrap';

class Hello extends Component {
  render() {
    return (
    <Grid style={{ marginTop: 10 }}>
        <Row className="show-grid">
            <Col xs={12}>        
                <Jumbotron>
                <h3>부가세 환급 계산 시뮬레이터</h3>
                <p>내가 돌려받을 수 있는 부가세를 바로 확인하세요.</p>
              </Jumbotron>
              </Col>
  	    </Row>
    </Grid>
    );
  }
}

export default Hello;


