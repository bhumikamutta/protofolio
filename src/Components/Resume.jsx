import React from 'react';

const Resume = () => {
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{
        backgroundImage: 'linear-gradient(to right, #ffffff, #a2d4f5)',
        padding: '20px',
        minHeight: '100vh',
      }}
    >
      <h2 className="text-primary mb-4">My Resume</h2>

      <a
        href="/resume.pdf"
        download="Bhoomika_Mutta_Resume.pdf" // file name when downloaded
        className="btn btn-success"
        style={{
          fontSize: '18px',
          padding: '10px 20px',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 'bold',
          marginBottom: '20px',
        }}
      >
        Download Resume
      </a>
    </div>
  );
};

export default Resume;
