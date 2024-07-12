// src/components/BirthdayWishes.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import VideoCarousel from './VideoCarousel';
import FileUpload from './FileUpload';

const BirthdayWishes = () => (
  <Container className="words-of-encouragement-container parent-container spaced">
    <h2>Birthday Wishes</h2>
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

export default BirthdayWishes;
