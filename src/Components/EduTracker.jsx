import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const education = [
  {
    stage: "High School (SSC)",
    institution: "ZP High School, Manyapuratla Nathavaram",
    board: "State Board",
    year: "2020",
    percentage: "100%"
  },
  {
    stage: "Pre University Course (MPC)",
    institution: "Rajiv Gandhi University of Knowledge Technologies",
    board: "RGUKT",
    year: "2022",
    percentage: "93.9%"
  },
  {
    stage: "B.Tech (CSE)",
    institution: "RGUKT-Srikakulam",
    board: "RGUKT",
    year: "2026",
    percentage: "86%"
  }
];

const EduTracker = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-5 fw-bold text-primary">🎓 Education Tracker</h2>
      <div className="position-relative">
        <div
          className="position-absolute top-0 start-50 translate-middle-x border-start border-4 border-primary"
          style={{ height: '100%', zIndex: 0 }}
        ></div>

        {education.map((edu, index) => {
          const isLeft = index % 2 === 0;
          const card = (
            <motion.div
              initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="shadow rounded-4 border-0 p-3 bg-light">
                <Card.Body>
                  <Card.Title className="fw-bold fs-5 text-dark">{edu.stage}</Card.Title>
                  <Card.Subtitle className="mb-3 text-secondary">{edu.institution}</Card.Subtitle>
                  <hr />
                  <p className="mb-1"><strong className="text-primary">Board:</strong> {edu.board}</p>
                  <p className="mb-1"><strong className="text-primary">Year:</strong> {edu.year}</p>
                  <p className="mb-0"><strong className="text-primary">Percentage:</strong> {edu.percentage}</p>
                </Card.Body>
              </Card>
            </motion.div>
          );

          return (
            <Row key={index} className="mb-5 position-relative">
              {isLeft ? (
                <>
                  <Col md={5} className="text-end">{card}</Col>
                  <Col md={2} className="d-flex justify-content-center align-items-center">
                    <div
                      className="bg-primary rounded-circle border border-3 border-white"
                      style={{ width: '26px', height: '26px', zIndex: 1 }}
                    ></div>
                  </Col>
                  <Col md={5}></Col>
                </>
              ) : (
                <>
                  <Col md={5}></Col>
                  <Col md={2} className="d-flex justify-content-center align-items-center">
                    <div
                      className="bg-primary rounded-circle border border-3 border-white"
                      style={{ width: '26px', height: '26px', zIndex: 1 }}
                    ></div>
                  </Col>
                  <Col md={5}>{card}</Col>
                </>
              )}
            </Row>
          );
        })}
      </div>
    </Container>
  );
};

export default EduTracker;
