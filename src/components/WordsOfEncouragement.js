// src/components/WordsOfEncouragement.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import VideoCarousel from './VideoCarousel';
import FileUpload from './FileUpload';

const WordsOfEncouragement = () => (
  <Container className="words-of-encouragement-container">
    <h2>Words of encouragement</h2>
    <Row className="justify-content-center align-items-center flex-grow-1">
      <Col>
        <div className="carousel-wrapper">
          <VideoCarousel folder="words-of-encouragement" />
        </div>
      </Col>
    </Row>
    <Row>
      <Col>
        <FileUpload folder="words-of-encouragement" placeholder='video' />
      </Col>
    </Row>
  </Container>
);

export default WordsOfEncouragement;
