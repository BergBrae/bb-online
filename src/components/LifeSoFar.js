// src/components/LifeSoFar.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import DisplayFiles from './DisplayFiles';
import FileUpload from './FileUpload';

const LifeSoFar = () => (
  <Container className='spaced'>
    <Row>
      <Col className='parent-container'>
        <h2>Life so far</h2>
        <DisplayFiles folder="life-so-far" className='spaced' />
        <FileUpload folder="life-so-far" placeholder='memories' />
      </Col>
    </Row>
  </Container>
);

export default LifeSoFar;
