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
    <section id="projects" className="p-5">
      <Container>
        <h2 className="text-center mb-5 fw-bold">Projects</h2>
        {projectList.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <Card className="flex-md-row h-100 rounded-4 overflow-hidden shadow-lg">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
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
              </motion.div>

              <Card.Body className="d-flex flex-column justify-content-between bg-light text-dark">
                <div>
                  <Card.Title className="fw-semibold">{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                </div>
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-dark w-50 mt-3"
                  whileHover={{ scale: 1.05, opacity: 0.85 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <FaGithub className="me-2" />
                  GitHub
                </motion.a>
              </Card.Body>
            </Card>
          </motion.div>
        ))}
      </Container>
    </section>
  );
};

export default Projects;
