import React from 'react';
import { Container, Card } from 'react-bootstrap';
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
    <section id="projects" className="p-5 bg-light">
      <Container>
        <h2 className="text-center mb-5">Projects</h2>
        {projectList.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <Card className="flex-md-row h-100 shadow-sm rounded-4 overflow-hidden">
              <Card.Img
                src={project.image}
                alt={project.title}
                style={{
                  width: '100%',
                  maxWidth: '300px',
                  height: '200px',
                  objectFit: 'cover',
                }}
              />
              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-dark w-50 mt-3"
                >
                  <FaGithub className="me-2" />
                  GitHub
                </a>
              </Card.Body>
            </Card>
          </motion.div>
        ))}
      </Container>
    </section>
  );
};

export default Projects;
