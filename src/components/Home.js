// src/components/Home.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FileUpload from './FileUpload';

const Home = () => (
    <Container>
        <Row>
            <Col>
                <h1>Happy 60th Brenda!</h1>
                <FileUpload />
            </Col>
        </Row>
    </Container>
);

export default Home;
