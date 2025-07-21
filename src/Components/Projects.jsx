// src/components/Projects.js
import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

import job from '../assets/job.png';
import food from '../assets/food.jpeg';
import translator from '../assets/android.jpeg';
import reacthooks from '../assets/react.png';

const Projects = () => {
  const projectList = [
    {
      title: 'Job Portal Website',
      description:
        'A full-stack MERN job portal with role-based login, resume builder, recruiter dashboard, and cloud storage.',
      image: job,
      github: 'https://github.com/bhumikamutta/jobportal',
    },
    {
      title: 'Language Translator App',
      description:
        'An Android app using ML Kit for text recognition and translation between multiple languages with Firebase support.',
      image: translator,
      github: 'https://github.com/bhumikamutta/languagetranslatorapp',
    },
    {
      title: 'React.js Mini Projects (Hooks)',
      description:
        'Collection of mini React projects using Hooks: Accordion, Random Color, Tree View, QR Generator, Tabs, Dark Mode, etc.',
      image: reacthooks,
      github: 'https://github.com/bhumikamutta/react-mini-projects',
    },
    {
      title: 'Food Delivery App',
      description:
        'Responsive food delivery website using MERN stack with order tracking, payment integration, and cart system.',
      image: food,
      github: 'https://github.com/bhumikamutta/fooddeliveryapp',
    },
  ];

  return (
    <div
      id="projects"
      style={{
        background: 'linear-gradient(to right, #ffffff, #cce4ff)',
        padding: '60px 0',
      }}
    >
      <Container>
        <h2 className="text-center mb-5 border-bottom pb-2 text-primary">My Projects</h2>
        {projectList.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="mb-5 shadow-lg border-0 rounded-4">
              <Row className="g-0 align-items-center">
                <Col md={5}>
                  <div className="p-3">
                    <Card.Img
                      src={project.image}
                      alt={project.title}
                      className="rounded-4 w-100"
                      style={{ height: '250px', objectFit: 'cover' }}
                    />
                  </div>
                </Col>
                <Col md={7}>
                  <Card.Body className="p-4">
                    <Card.Title className="h4 mb-3">{project.title}</Card.Title>
                    <Card.Text className="text-secondary mb-4">{project.description}</Card.Text>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-primary"
                    >
                      View on GitHub
                    </a>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </motion.div>
        ))}
      </Container>
    </div>
  );
};

export default Projects;
