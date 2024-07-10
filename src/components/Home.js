// src/components/Home.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import familyPicture from '../assets/bradley_family.png'

const Home = () => (
    <Container>
        <Row>
            <Col md={{ span: 10, offset: 1 }} className='parent-container'>
                <h2>Happy 60th Brenda!</h2>
                <img className='round' src={familyPicture} alt="Family" />
                <p>Happy 60th Birthday! Today, we celebrate not just your birthday, but the incredible woman who has shaped our lives with boundless love and unwavering strength.<br/><br/>
                    Mom, you are the heart and soul of our family. From the moment we were born, you've been our guiding light, our rock through every storm, and our biggest cheerleader in every triumph. Your endless patience, kindness, and wisdom have shaped us into who we are today. From the earliest memories of bedtime stories and scraped knees to the countless times you've lifted us up with your unwavering support, you've been our steady compass in life's journey.<br/><br/>
                    You've taught us the value of compassion, the importance of perseverance, and the beauty of unconditional love. Your nurturing spirit has filled our lives with warmth and joy, and your laughter is a melody that echoes in our hearts forever.<br/><br/>
                    As we gather to celebrate this milestone birthday, we want you to know how much you mean to us. You've sacrificed so much for our happiness, and today, we want to shower you with all the love and appreciation you deserve.<br/><br/>
                    Thank you for being our superhero, our confidante, and our best friend. Your love is the heartbeat of our family, and we are so grateful to have you as our mom.<br/><br/>
                    Happy Birthday, Mom! Here's to many more years of love, laughter, and cherished memories together.<br/><br/>
                    With all our love,<br/>
                    Friends and Family</p>
            </Col>
        </Row>
    </Container>
);

export default Home;
