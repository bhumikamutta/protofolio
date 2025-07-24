import React from 'react';
import { Card, Row, Col, Badge } from 'react-bootstrap';
import { SiLeetcode } from 'react-icons/si';
import { BsCheck2Circle } from 'react-icons/bs';
import { motion } from 'framer-motion';

const badges = [
  { label: '50 Days Badge (2024)', color: 'success' },
  { label: '50 Days Badge (2025)', color: 'success' },
  { label: '100 Days Badge (2024)', color: 'success' },
];

const ProblemSolving = () => {
  return (
    <motion.div
      className="mx-3 mx-md-5 my-4" // margin left, right, top, bottom
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <Card className="p-4 shadow-lg rounded-4 border-0 bg-light">
        <Card.Body>
          {/* Header */}
          <motion.div
            className="d-flex align-items-center mb-3"
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <SiLeetcode size={32} color="#f89f1b" className="me-2" />
            <h3 className="mb-0">Problem Solving (LeetCode)</h3>
          </motion.div>

          {/* Info */}
          <motion.p
            className="text-dark fs-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            ✅ Solved <strong>300+</strong> problems using <strong>Java</strong> on <span className="text-warning fw-semibold">LeetCode</span>.
          </motion.p>

          {/* Badges */}
          <Row className="mt-3">
            {badges.map((badge, index) => (
              <Col md={4} className="mb-2" key={index}>
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.15 * index }}
                >
                  <Badge
                    bg={badge.color}
                    className="p-2 w-100 d-flex align-items-center gap-2 fs-6"
                  >
                    <BsCheck2Circle /> {badge.label}
                  </Badge>
                </motion.div>
              </Col>
            ))}
          </Row>

          {/* Profile Link */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <a
              href="https://leetcode.com/bhumika_mutta"
              target="_blank"
              rel="noopener noreferrer"
              className="d-block mt-4 text-primary fw-semibold"
            >
              🔗 View My LeetCode Profile
            </a>
          </motion.div>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default ProblemSolving;
