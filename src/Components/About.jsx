// src/Components/About.jsx
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <Container id="about" className="my-5">
      <motion.h2
        className="text-center mb-4 fw-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ color: '#4b0082' }} // Indigo
      >
        About Me
      </motion.h2>

      <Row className="justify-content-center">
        <Col md={10}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Card
              className="p-4 shadow-lg border-0"
              style={{
                background: 'linear-gradient(to right, #f5f7fa, #c3cfe2)',
                borderRadius: '20px',
              }}
            >
              <Card.Body>
                <Card.Text style={{ fontSize: '1.1rem', color: '#333' }}>
                  Hello! I'm{' '}
                  <strong style={{ color: '#007bff' }}>Mutta Bhoomika</strong>, a final-year <strong>B.Tech</strong> student and a passionate <strong>Full Stack Developer</strong>.
                  <br />
                  I specialize in the <strong style={{ color: '#28a745' }}>MERN stack</strong> and also have experience in{' '}
                  <strong style={{ color: '#e83e8c' }}>Android (Java)</strong> development.
                </Card.Text>

                <Card.Text style={{ fontSize: '1.1rem', color: '#333' }}>
                  I’ve worked on real-world apps like a <strong>Job Portal</strong>, <strong>Food Delivery App</strong>, and a <strong>Language Translator</strong>. I love solving problems and building useful, user-friendly applications.
                </Card.Text>

                <Card.Text style={{ fontSize: '1.1rem', color: '#333' }}>
                  I'm currently exploring <strong style={{ color: '#ff5733' }}>Cloud (AWS)</strong>, <strong style={{ color: '#007acc' }}>TypeScript</strong>, and <strong style={{ color: '#000' }}>Next.js</strong> to grow as a developer.
                </Card.Text>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
