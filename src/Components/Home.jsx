// src/Components/Home.js
import React from 'react';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import '../App.css'
import BubbleBackground from './BubbleBackground';
import ProblemSolving from './ProblemSolving';

const Home = () => {
  return (
    <>
    <BubbleBackground/>
      <Hero />
      <About />
      <Skills />
      <ProblemSolving/>
      <Projects />
      <Contact />
      
    </>
  );
};

export default Home;
