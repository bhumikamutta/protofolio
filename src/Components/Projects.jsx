import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const projectList = [
  {
    title: 'Job Portal Website',
    description:
      'A full-stack MERN job portal with role-based login, resume builder, recruiter dashboard, and cloud storage.',
    image: '/assets/job.png',
    github: 'https://github.com/bhumikamutta/jobportal',
  },
  {
    title: 'Language Translator App',
    description:
      'An Android app using ML Kit for text recognition and translation between multiple languages with Firebase support.',
    image: '/assets/android.jpeg',
    github: 'https://github.com/bhumikamutta/languagetranslatorapp',
  },
  {
    title: 'React.js Mini Projects (Hooks)',
    description:
      'Collection of mini React projects using Hooks: Accordion, Random Color, Tree View, QR Generator, Tabs, Dark Mode, etc.',
    image: '/assets/react.png',
    github: 'https://github.com/bhumikamutta/react-mini-projects',
  },
  {
    title: 'Food Delivery App',
    description:
      'Responsive food delivery website using MERN stack with order tracking, payment integration, and cart system.',
    image: '/assets/food.jpeg',
    github: 'https://github.com/bhumikamutta/fooddeliveryapp',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="p-5">
      <h2 className="text-center mb-4">Projects</h2>
      <Row xs={1} md={2} className="g-4">
        {projectList.map((project, idx) => (
          <Col key={idx}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="h-100 shadow-sm rounded-4">
                <Card.Img
                  variant="top"
                  src={project.image}
                  alt={project.title}
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-dark"
                  >
                    <FaGithub className="me-2" />
                    GitHub
                  </a>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Projects;
