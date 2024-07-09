// src/components/LifeSoFar.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import DisplayFiles from './DisplayFiles';
import FileUpload from './FileUpload';

const LifeSoFar = () => (
  <Container>
    <h2>Life so far</h2>
    <Row>
      <Col>
        <DisplayFiles folder="life-so-far" />
        <FileUpload />
      </Col>
    </Row>
  </Container>
);

export default LifeSoFar;
