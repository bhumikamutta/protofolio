import React from 'react';

const Resume = () => {
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{
        backgroundImage: 'linear-gradient(to right, #ffffff, #a2d4f5)', // White to Blue
        padding: '20px',
        minHeight: '100vh',
      }}
    >
   <h2 className="text-white mb-4">My Resume (Updated)</h2>  // or any small change


      <div
        style={{
          width: '90%',
          height: '90vh',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 0 10px rgba(100, 255, 218, 0.3)',
          border: '2px solid #64ffda',
        }}
      >
        <iframe
          src="/resume.pdf"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            backgroundColor: 'transparent',
          }}
          title="Resume Preview"
        />
      </div>
    </div>
  );
};

export default Resume;
