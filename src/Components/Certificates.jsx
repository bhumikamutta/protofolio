// src/components/Certificates.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

const certificateList = [
  {
    title: "AI for Everyone: Master the Basics",
    issuer: "IBM",
    date: "24 April 2024",
    img: "Aifoeveryone.jpg"
  },
  {
    title: "Data Science with Python",
    issuer: "Simplilearn",
    date: "10 May 2024",
    img: "datascience.jpg"
  },
  {
    title: "Introduction to Front-End Development",
    issuer: "Simplilearn",
    date: "18 June 2024",
    img: "frontend.jpg"
  },
  {
    title: "Develop Interpersonal Skills",
    issuer: "IBM",
    date: "23 April 2024",
    img: "interpersonal.jpg"
  },
  {
    title: "Build Your First Node.js App",
    issuer: "Unknown",
    date: "24 April 2024",
    img: "node.jpg"
  },
  {
    title: "Introduction to Node.js",
    issuer: "Unknown",
    date: "24 April 2024",
    img: "nodeintro.jpg"
  },
  {
    title: "NoSQL Database Basics",
    issuer: "IBM",
    date: "24 April 2024",
    img: "nosql.jpg"
  },
  {
    title: "Build Your First Project with React",
    issuer: "IBM",
    date: "24 April 2024",
    img: "react.jpg"
  },
  {
    title: "Create Your First Project with RESTful API and Express",
    issuer: "Unknown",
    date: "April 2024",
    img: "restfl.jpg"
  },
  {
    title: "Introduction to SQL",
    issuer: "Unknown",
    date: "24 April 2024",
    img: "sql.jpg"
  }
];

const Certificates = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Certificates</h2>
      <Row>
        {certificateList.map((cert, index) => (
          <Col md={6} lg={4} className="mb-4" key={index}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="shadow-lg h-100 rounded-4">
                <Card.Img
                  variant="top"
                  src={`/assets/certificates/${cert.img}`}
                  alt={cert.title}
                  style={{ height: '250px', objectFit: 'cover', borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem' }}
                />
                <Card.Body>
                  <Card.Title>{cert.title}</Card.Title>
                  <Card.Text><strong>Issuer:</strong> {cert.issuer}</Card.Text>
                  <Card.Text><strong>Date:</strong> {cert.date}</Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Certificates;
