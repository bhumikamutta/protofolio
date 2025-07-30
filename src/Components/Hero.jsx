import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import profileImg from '/assets/pallavi.jpeg'; // ✅ corrected path
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <Container id="home" className="py-5 hero-section" fluid>
      <Row className="align-items-center">
        <Col md={6} className="text-center text-md-start mb-4 mb-md-0">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Hello, I'm <span className="text-primary">Mutta Bhoomika</span>
          </motion.h1>

          <motion.h4
            className="text-muted"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Full Stack Developer | MERN | Android | Java
          </motion.h4>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            A passionate developer building responsive web and mobile applications with modern tech.
          </motion.p>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            <Button
              variant="primary"
              href="#contact"
              className="mt-3"
              style={{ transition: 'all 0.3s ease-in-out' }}
            >
              Let's Connect
            </Button>
          </motion.div>
        </Col>

        <Col md={6} className="text-center">
          <motion.img
            src={profileImg}
            alt="Mutta Bhoomika"
            className="img-fluid rounded-circle shadow"
            style={{ maxWidth: '300px' }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
