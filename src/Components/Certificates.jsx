import React from 'react';
import { Container, Row, Col, Card, Tabs, Tab } from 'react-bootstrap';
import { motion } from 'framer-motion';
import EduTracker from './EduTracker';
import BubbleBackground from './BubbleBackground';

// 🖼️ Imported certificate images
import Aifoeveryone from '../../public/certificates/Aifoeveryone.jpg';
import datascience from '../../public/certificates/datascience.jpg';
import frontend from '../../public/certificates/frontend.jpg';
import interpersonal from '../../public/certificates/interpersonal.jpg';
import node from '../../public/certificates/node.jpg';
import nodeintro from '../../public/certificates/nodeintro.jpg';
import nosql from '../../public/certificates/nosql.jpg';
import react from '../../public/certificates/react.jpg';
import restfl from '../../public/certificates/restfl.jpg';
import sql from '../../public/certificates/sql.jpg';
import nptel1 from '../../public/certificates/nptel1.png'
import nptel2 from '../../public/certificates/nptel2.png'
import nptel3 from '../../public/certificates/nptel3.png'


const certificates = {
  frontend: [
    {
      title: "Introduction to Front-End Development",
      issuer: "Simplilearn",
      date: "18 June 2024",
      img: frontend
    },
    {
      title: "Build Your First Project with React",
      issuer: "IBM",
      date: "24 April 2024",
      img: react
    }
  ],
  backend: [
    {
      title: "Build Your First Node.js App",
      issuer: "Unknown",
      date: "24 April 2024",
      img: node
    },
    {
      title: "Introduction to Node.js",
      issuer: "Unknown",
      date: "24 April 2024",
      img: nodeintro
    },
    {
      title: "Create Your First Project with RESTful API and Express",
      issuer: "Unknown",
      date: "April 2024",
      img: restfl
    },
    {
      title: "NoSQL Database Basics",
      issuer: "IBM",
      date: "24 April 2024",
      img: nosql
    },
    {
      title: "Introduction to SQL",
      issuer: "Unknown",
      date: "24 April 2024",
      img: sql
    }
  ],
  ai: [
    {
      title: "AI for Everyone: Master the Basics",
      issuer: "IBM",
      date: "24 April 2024",
      img: Aifoeveryone
    },
    {
      title: "Data Science with Python",
      issuer: "Simplilearn",
      date: "10 May 2024",
      img: datascience
    }
  ],
  nptel: [
    {
      title:"Data Structure and Algorithms using Java",
      issuer:"NPTEL",
      date:"Jul-Oct 2024",
      img:nptel1
    },{
      title:"Deep Learning - IIT Ropar",
      issuer:"NPTEL",
      date:"Jan-Apr 2025",
      img:nptel3
    },
    {
      title:"Object Oriented System Development Using UMLJava And Patterns",
      issuer:"NPTEL",
      date:"Jan-Apr 2025",
      img:nptel2
    },
  ],
  extra: [
    {
      title: "Develop Interpersonal Skills",
      issuer: "IBM",
      date: "23 April 2024",
      img: interpersonal
    }
  ]
};

const renderCards = (list) => (
  <Row>
    {list.length > 0 ? (
      list.map((cert, index) => (
        <Col md={6} lg={4} className="mb-4" key={index}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="shadow-lg h-100 rounded-4">
              <Card.Img
                variant="top"
                src={cert.img}
                alt={cert.title}
                style={{
                  height: '250px',
                  objectFit: 'cover',
                  borderTopLeftRadius: '1rem',
                  borderTopRightRadius: '1rem'
                }}
              />
              <Card.Body>
                <Card.Title>{cert.title}</Card.Title>
                <Card.Text><strong>Issuer:</strong> {cert.issuer}</Card.Text>
                <Card.Text><strong>Date:</strong> {cert.date}</Card.Text>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>
      ))
    ) : (
      <p className="text-center">🚧 Coming Soon...</p>
    )}
  </Row>
);

const Certificates = () => {
  return (
    <Container className="my-5">
      <BubbleBackground />
      <h2 className="text-center mb-4">🎓 Education & Certificates</h2>
      <Tabs defaultActiveKey="certificates" className="mb-3 nav-pills justify-content-center" variant="pills">
      
        <Tab eventKey="certificates" title="📜 Certificates">
          <Tabs defaultActiveKey="frontend" className="mb-3" justify variant="tabs">
            <Tab eventKey="frontend" title="💻 Frontend">
              {renderCards(certificates.frontend)}
            </Tab>
            <Tab eventKey="backend" title="🛠️ Backend">
              {renderCards(certificates.backend)}
            </Tab>
            <Tab eventKey="ai" title="🤖 AI">
              {renderCards(certificates.ai)}
            </Tab>
            <Tab eventKey="nptel" title="📘 NPTEL">
              {renderCards(certificates.nptel)}
            </Tab>
            <Tab eventKey="extra" title="🌟 Extra-Curricular">
              {renderCards(certificates.extra)}
            </Tab>
          </Tabs>
        </Tab>
        <Tab eventKey="education" title="🎓 Education">
          <EduTracker />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default Certificates;
