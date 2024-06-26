// src/components/WordsOfEncouragement.js
import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';

const WordsOfEncouragement = () => (
  <Container>
    <h2>Words of encouragement</h2>
    <Row>
      <Col>
        <Carousel>
          {/* Add your videos here with captions */}
          <Carousel.Item>
            <video className="d-block w-100" controls>
              <source src="path_to_video.mp4" type="video/mp4" />
            </video>
            <Carousel.Caption>
              <h3>Video title</h3>
            </Carousel.Caption>
          </Carousel.Item>
          {/* Repeat for more items */}
        </Carousel>
      </Col>
    </Row>
  </Container>
);

export default WordsOfEncouragement;
