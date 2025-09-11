import React from 'react';
import heroImg from './Components/image1.jpg';

const About = () => (
  <section id="about" style={{ background: '#0b1220', color: '#e5e7eb', padding: '64px 24px' }}>
    <div style={{ maxWidth: 1040, margin: '0 auto' }}>
      <h2 style={{ color: '#e2e8f0', fontSize: 36, margin: 0, fontWeight: 800 }}>About</h2>
      <div style={{ height: 4, width: 70, background: '#60a5fa', borderRadius: 999, marginTop: 12 }} />
      <p style={{ marginTop: 24, lineHeight: 1.8, color: '#cbd5e1' }}>
        As a passionate Front-End Developer with a solid foundation in Computer Science, I bring hands-on
        experience in building responsive, user-centric web applications using React, HTML, CSS, and JavaScript.
        I specialize in crafting intuitive interfaces and deploying polished projects via GitHub, with recent
        work including a functional website clone and customized UI components using Material UI. My approach is
        rooted in practical problem-solving and attention to detail, ensuring that every element contributes to a
        seamless user experience. I'm deeply curious about emerging technologies like AI and cloud computing, and
        I thrive in collaborative environments where I can contribute innovative solutions while continuously
        learning from experienced teams. Driven by a desire to create meaningful digital experiences, I'm eager to
        join dynamic development teams where I can apply my technical skills, creativity, and growth mindset to
        deliver impactful front-end solutions.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28, alignItems: 'start', marginTop: 24 }}>
        <div>
          <h3 style={{ color: '#e2e8f0', fontSize: 24, marginTop: 0 }}>Web Developer</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <li><strong>Birthday:</strong> 26 dec 2007</li>
            <li><strong>Age:</strong> 18</li>
            <li><strong>Phone:</strong> +91 9880339147</li>
            <li><strong>City:</strong> ujire, India</li>
            <li><strong>Freelance:</strong> Available</li>
          </ul>
        </div>
        <div style={{ textAlign: 'center' }}>
          <img src={heroImg} alt="About visual" style={{ maxWidth: '100%', borderRadius: 16, opacity: 0.95 }} />
        </div>
      </div>
    </div>
  </section>
);

export default About;