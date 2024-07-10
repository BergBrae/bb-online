// src/components/Home.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import familyPicture from '../assets/bradley_family.png'

const Home = () => (
    <Container>
        <Row>
            <Col>
                <h2>Happy 60th Brenda!</h2>
                <img src={familyPicture} alt="Family" />
            </Col>
        </Row>
    </Container>
);

export default Home;
