// src/components/WordsOfEncouragement.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import VideoCarousel from './VideoCarousel';
import FileUpload from './FileUpload';

const WordsOfEncouragement = () => (
  <Container>
    <h2>Words of encouragement</h2>
    <Row>
      <Col>
        <VideoCarousel folder="words-of-encouragement" />
      </Col>
    </Row>
    <Row>
      <Col>
        <FileUpload folder="words-of-encouragement" />
      </Col>
    </Row>
  </Container>
);

export default WordsOfEncouragement;
