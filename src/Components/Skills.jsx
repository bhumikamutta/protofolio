import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

// FontAwesome icons
import {
  FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaReact, FaNodeJs,
  FaCloud, FaGitAlt, FaGithub, FaLinux, FaJava, FaAndroid, FaNetworkWired
} from 'react-icons/fa';

import {
  SiTailwindcss, SiTypescript, SiNextdotjs, SiVite, SiRedux, SiExpress,
  SiMongodb, SiMysql, SiFirebase, SiVscodium, SiAndroidstudio
} from 'react-icons/si';

const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'HTML', icon: <FaHtml5 size={30} color="#E34F26" /> },
      { name: 'CSS', icon: <FaCss3Alt size={30} color="#1572B6" /> },
      { name: 'Bootstrap', icon: <FaBootstrap size={30} color="#7952B3" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss size={30} color="#38B2AC" /> },
      { name: 'JavaScript', icon: <FaJs size={30} color="#F7DF1E" /> },
      { name: 'TypeScript', icon: <SiTypescript size={30} color="#3178C6" /> },
      { name: 'React.js', icon: <FaReact size={30} color="#61DAFB" /> },
      { name: 'Next.js', icon: <SiNextdotjs size={30} /> },
      { name: 'Vite', icon: <SiVite size={30} color="#646CFF" /> },
      { name: 'Redux Toolkit', icon: <SiRedux size={30} color="#764ABC" /> },
    ]
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', icon: <FaNodeJs size={30} color="#339933" /> },
      { name: 'Express.js', icon: <SiExpress size={30} /> },
      { name: 'MongoDB', icon: <SiMongodb size={30} color="#47A248" /> },
      { name: 'MySQL', icon: <SiMysql size={30} color="#00758F" /> },
      { name: 'Firebase', icon: <SiFirebase size={30} color="#FFCA28" /> },
      { name: 'REST APIs', icon: <FaNetworkWired size={30} /> },
    ]
  },
  {
    category: 'Tools / Platforms',
    items: [
      { name: 'Git', icon: <FaGitAlt size={30} color="#F05032" /> },
      { name: 'GitHub', icon: <FaGithub size={30} /> },
      { name: 'VS Code', icon: <SiVscodium size={30} color="#007ACC" /> },
      { name: 'Linux', icon: <FaLinux size={30} /> },
      { name: 'Cloud / AWS', icon: <FaCloud size={30} /> },
    ]
  },
  {
    category: 'Programming / Mobile',
    items: [
      { name: 'Java', icon: <FaJava size={30} color="#007396" /> },
      { name: 'Android Studio', icon: <SiAndroidstudio size={30} color="#3DDC84" /> },
      { name: 'React Native', icon: <FaReact size={30} color="#61DAFB" /> },
      { name: 'Android Dev', icon: <FaAndroid size={30} color="#3DDC84" /> },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills">
      <Container className="my-5">
        <h2 className="text-center mb-5 display-5 fw-bold" style={{ borderBottom: '4px solid #007bff', display: 'inline-block', paddingBottom: '5px' }}>
          Skills
        </h2>

        {skills.map((section, index) => (
          <div key={index} className="mb-5">
            <motion.h4
              className="mb-4"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              style={{
                textDecoration: 'underline',
                textUnderlineOffset: '6px',
                color: '#007bff'
              }}
            >
              {section.category}
            </motion.h4>
            <Row>
              {section.items.map((skill, i) => (
                <Col key={i} md={4} sm={6} className="mb-3">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.07, boxShadow: '0 4px 12px rgba(0, 123, 255, 0.2)' }}
                    className="p-3 rounded d-flex align-items-center gap-3"
                    style={{
                      border: '1px solid #dee2e6',
                      backgroundColor: '#f8f9fa',
                      borderRadius: '12px',
                      transition: 'all 0.3s ease',
                      height: '100%'
                    }}
                  >
                    <div>{skill.icon}</div>
                    <strong>{skill.name}</strong>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </Container>
    </section>
  );
};

export default Skills;
