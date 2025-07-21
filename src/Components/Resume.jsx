import React from 'react';

const Resume = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">My Resume</h2>
      <iframe
        src="https://drive.google.com/file/d/1JJc6wjJLrjoxDqK9FnlnKmThGc8Oue1X/preview"
        width="100%"
        height="600"
        allow="autoplay"
        style={{ border: 'none' }}
        title="Resume Preview"
      ></iframe>
    </div>
  );
};

export default Resume;
