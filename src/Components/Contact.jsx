import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_k4hqyve',
        'template_x413uha',
        form.current,
        'xNVff-vWygfkNfxrY'
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact">
      <div className="container mt-5">
        <h2 className="text-center mb-4 text-primary">Contact Me</h2>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="shadow p-4 rounded bg-light"
        >
          <div className="mb-3">
            <label className="form-label">Your Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Your Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Subject</label>
            <input
              type="text"
              name="title"
              className="form-control"
              placeholder="Subject"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea
              name="message"
              rows="4"
              className="form-control"
              placeholder="Write your message"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Send Message
          </button>
          {done && (
            <div className="text-success text-center mt-3">
              Message Sent Successfully ✅
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
