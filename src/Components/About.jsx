// src/Components/About.jsx
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about">
      <Container className="my-5">
        <motion.h2
          className="text-center mb-4 fw-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ color: 'skyblue', fontWeight: 'bold' }}
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
                  <Card.Text style={{ fontSize: '1.1rem' }}>
                    Hello! I'm <strong>Mutta Bhoomika</strong>, a final-year <strong>B.Tech</strong> student and a passionate <strong>Full Stack Developer</strong>.
                    <br />
                    I specialize in the <strong>MERN stack</strong> and also have experience in <strong>Android (Java)</strong> development.
                  </Card.Text>

                  <Card.Text style={{ fontSize: '1.1rem' }}>
                    I’ve worked on real-world apps like a <strong>Job Portal</strong>, <strong>Food Delivery App</strong>, and a <strong>Language Translator</strong>. I love solving problems and building useful, user-friendly applications.
                  </Card.Text>

                  <Card.Text style={{ fontSize: '1.1rem' }}>
                    I'm currently exploring <strong>Cloud (AWS)</strong>, <strong>TypeScript</strong>, and <strong>Next.js</strong> to grow as a developer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
