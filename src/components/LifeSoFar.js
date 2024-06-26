// src/components/LifeSoFar.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import DisplayFiles from './DisplayFiles';

const LifeSoFar = () => (
  <Container>
    <h2>Life so far</h2>
    <Row>
      <Col>
        <DisplayFiles />
      </Col>
    </Row>
  </Container>
);

export default LifeSoFar;
