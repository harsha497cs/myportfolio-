import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Drawer from './Components/Drawer';
// Removed local hero image; using a neutral placeholder background only

function App() {
  const typedElRef = useRef(null);

  useEffect(() => {
    let typedInstance;
    (async () => {
      try {
        const { default: Typed } = await import('typed.js');
        if (typedElRef.current) {
          typedInstance = new Typed(typedElRef.current, {
            strings: ["Designer", "Developer"],
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 900,
            loop: true,
            smartBackspace: true,
            showCursor: true,
            cursorChar: '|'
          });
        }
      } catch (error) {
        console.warn('Failed to load typed.js:', error);
      }
    })();
    return () => {
      if (typedInstance) {
        typedInstance.destroy();
      }
    };
  }, []);

  const [activeSection, setActiveSection] = useState('home');
  const [mapSrc, setMapSrc] = useState('https://www.google.com/maps?q=Kanchipura&output=embed');
  const [formValues, setFormValues] = useState({ name: '', email: '', subject: '', message: '' });
  const [formErrors, setFormErrors] = useState({});

  const handleUseMyLocation = () => {
    try {
      if (!('geolocation' in navigator)) {
        alert('Geolocation is not supported by your browser.');
        return;
      }
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords || {};
          if (typeof latitude === 'number' && typeof longitude === 'number') {
            setMapSrc(`https://www.google.com/maps?q=${latitude},${longitude}&output=embed`);
          }
        },
        (error) => {
          console.warn('Geolocation error:', error);
          alert('Unable to fetch your location. Please allow location access.');
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 }
      );
    } catch (err) {
      console.warn('Failed to use geolocation:', err);
    }
  };

  useEffect(() => {
    let observer = null;
    
    const setupObserver = () => {
      try {
        const sectionIds = ['home', 'about', 'portfolio', 'skills', 'contact'];
        const elements = sectionIds
          .map((id) => {
            const el = document.getElementById(id);
            return el && el.id ? el : null;
          })
          .filter(Boolean);

        if (elements.length === 0) {
          // If no elements found, try again after a short delay
          setTimeout(setupObserver, 200);
          return;
        }

        observer = new IntersectionObserver(
          (entries) => {
            try {
              const visible = entries
                .filter((entry) => entry && entry.isIntersecting && entry.target && entry.target.id)
                .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0));
              
              if (visible.length > 0 && visible[0] && visible[0].target && visible[0].target.id) {
                setActiveSection(visible[0].target.id);
              }
            } catch (error) {
              console.warn('Error in intersection observer callback:', error);
            }
          },
          { 
            root: null, 
            rootMargin: '0px', 
            threshold: [0.2, 0.4, 0.6, 0.8, 1] 
          }
        );
        
        {/* Skills Section */}
        <section id="skills" style={{ background: '#0b1220', color: '#e5e7eb', padding: '64px 24px' }}>
          <div style={{ maxWidth: 1040, margin: '0 auto' }}>
            <h2 style={{ color: '#e2e8f0', fontSize: 32, margin: 0, fontWeight: 800 }}>Skills</h2>
            <div style={{ height: 4, width: 70, background: '#60a5fa', borderRadius: 999, marginTop: 12 }} />
            <div style={{ marginTop: 24, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
              {[
                { label: 'React', icon: '⚛️' },
                { label: 'JavaScript', icon: '🟡' },
                { label: 'HTML/CSS', icon: '🧱' },
                { label: 'Material UI', icon: '🧰' },
                { label: 'GitHub', icon: '🐙' },
                { label: 'Problem Solving', icon: '✅' },
                { label: 'UI/UX Design', icon: '➕' },
                { label: 'Cloud Computing', icon: '☁️' }
              ].map((skill, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    background: '#0f172a',
                    border: '1px solid #1f2937',
                    borderRadius: 14,
                    padding: '14px 16px',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.25)'
                  }}
                >
                  <span style={{ fontSize: 22 }}>{skill.icon}</span>
                  <span style={{ color: '#e2e8f0', fontWeight: 600 }}>{skill.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        elements.forEach((el) => {
          if (el && el.id) {
            observer.observe(el);
          }
        });
        
      } catch (error) {
        console.warn('Failed to setup intersection observer:', error);
        // Retry after error
        setTimeout(setupObserver, 500);
      }
    };

    // Fallback scroll handler in case intersection observer fails
    const handleScroll = () => {
      try {
        const sectionIds = ['home', 'about', 'portfolio', 'skills', 'contact'];
        const scrollPosition = window.scrollY + window.innerHeight / 2;
        
        for (let i = sectionIds.length - 1; i >= 0; i--) {
          const el = document.getElementById(sectionIds[i]);
          if (el && el.offsetTop <= scrollPosition) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      } catch (error) {
        console.warn('Error in scroll handler:', error);
      }
    };

    // Initial setup with delay
    const timer = setTimeout(setupObserver, 300);

    // Add scroll listener as fallback
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      if (observer) {
        observer.disconnect();
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavigate = (id) => {
    try {
      if (!id) return;
      const el = document.getElementById(id);
      if (el && el.id) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Update active section manually as fallback
        setActiveSection(id);
      }
    } catch (error) {
      console.warn('Failed to navigate to section:', id, error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formValues.name.trim()) errors.name = 'Name is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) errors.email = 'Valid email required';
    if (!formValues.subject.trim()) errors.subject = 'Subject is required';
    if (!formValues.message.trim()) errors.message = 'Message is required';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    const to = 'harsha497cs@gmail.com';
    const subject = encodeURIComponent(formValues.subject);
    const body = encodeURIComponent(`Name: ${formValues.name}\nEmail: ${formValues.email}\n\n${formValues.message}`);
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`;
    try {
      window.open(gmailUrl, '_blank', 'noopener');
    } catch (_) {
      window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <Drawer
        name="harsha p"
        active={activeSection}
        onNavigate={handleNavigate}
        footerLink="https://github.com/harsha497cs"
      />
      <main style={{ flex: 1, minHeight: '100vh', padding: 0, background: '#0b1220', color: 'white' }}>
        {/* Home Section */}
        <section
          id="home"
          style={{
            position: 'relative',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            overflow: 'hidden',
            backgroundImage: `url('https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'none'
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(0,0,0,0.6)'
            }}
          />
          <div style={{ position: 'relative', padding: 24 }}>
            <h1 style={{ fontSize: 56, margin: 0, fontWeight: 800 }}>harsha p</h1>
            <p style={{ fontSize: 24, marginTop: 12, color: '#e2e8f0' }}>
              I'm a <span style={{ color: '#60a5fa' }} ref={typedElRef} />
            </p>
            <div style={{ height: 2, width: 80, background: '#60a5fa', margin: '16px auto 0', borderRadius: 999 }} />
          </div>
        </section>

        {/* About Section */}
        <section id="about" style={{ background: '#0b1220', color: '#e5e7eb', padding: '64px 24px' }}>
          <div style={{ maxWidth: 1040, margin: '0 auto' }}>
            <h2 style={{ color: '#e2e8f0', fontSize: 36, margin: 0, fontWeight: 800 }}>About</h2>
            <div style={{ height: 4, width: 70, background: '#60a5fa', borderRadius: 999, marginTop: 12 }} />
            <p style={{ marginTop: 24, lineHeight: 1.8, color: '#cbd5e1' }}>
              As a passionate Front-End Developer with a solid foundation in Computer Science, I bring
              hands-on experience in building responsive, user-centric web applications using React,
              HTML, CSS, and JavaScript. I specialize in crafting intuitive interfaces and deploying
              polished projects via GitHub, with recent work including a functional website clone and
              customized UI components using Material UI. My approach is rooted in practical
              problem-solving and attention to detail, ensuring that every element contributes to a
              seamless user experience. I'm deeply curious about emerging technologies like AI and cloud
              computing, and I thrive in collaborative environments where I can contribute innovative
              solutions while continuously learning from experienced teams. Driven by a desire to create
              meaningful digital experiences, I'm eager to join dynamic development teams where I can
              apply my technical skills, creativity, and growth mindset to deliver impactful front-end
              solutions.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28, alignItems: 'start', marginTop: 24 }}>
              <div>
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  <a
                    href="/harsha_resume.pdf"
                    download
                    style={{
                      display: 'inline-block',
                      background: '#0ea5e9',
                      color: 'white',
                      textDecoration: 'none',
                      fontWeight: 700,
                      padding: '12px 16px',
                      borderRadius: 10
                    }}
                    aria-label="Download Resume PDF"
                  >
                    Download Resume
                  </a>
                  <a
                    href="/harsha_resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'inline-block',
                      background: 'transparent',
                      color: '#0ea5e9',
                      textDecoration: 'none',
                      fontWeight: 700,
                      padding: '12px 16px',
                      border: '2px solid #0ea5e9',
                      borderRadius: 10
                    }}
                    aria-label="View Resume PDF in a new tab"
                  >
                    View Resume
                  </a>
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <img
                  src="/about-illustration.png"
                  alt="About illustration"
                  style={{ maxWidth: '100%', borderRadius: 16, opacity: 0.95 }}
                  onError={(e) => {
                    try { e.currentTarget.style.display = 'none'; } catch (_) {}
                  }}
                />
              </div>
            </div>
          </div>
          <div style={{ display: 'none' }} />
        </section>

        

        

        

        {/* Portfolio Section */}
        <section id="portfolio" style={{ background: '#0b1220', color: '#e5e7eb', padding: '64px 24px' }}>
          <div style={{ maxWidth: 1040, margin: '0 auto' }}>
            <h2 style={{ color: '#e2e8f0', fontSize: 32, margin: 0, fontWeight: 800 }}>Portfolio</h2>
            <div style={{ height: 4, width: 70, background: '#60a5fa', borderRadius: 999, marginTop: 12 }} />
            <p style={{ marginTop: 16, color: '#cbd5e1' }}>Here are some of my works as a Freelance Project and Personal Project</p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 12 }}>
              <div>
                <h4 style={{ color: '#e2e8f0', marginBottom: 8 }}>Freelance Projects & Personal Project</h4>
                <ul style={{ color: '#94a3b8', paddingLeft: 18, lineHeight: 1.8 }}>
                  <li><a style={{ color: '#0ea5e9', textDecoration: 'none' }} href="https://collagewebsitclon.vercel.app/">collagewebsitclon.vercel.app</a> - College Website Clone (live)</li>
                </ul>
              
            </div>
          </div>
          </div>
        </section>

        

        {/* Contact Section */}
        <section id="contact" style={{ background: '#0b1220', color: '#e5e7eb', padding: '64px 24px' }}>
          <div style={{ maxWidth: 1040, margin: '0 auto' }}>
            <h2 style={{ color: '#e2e8f0', fontSize: 32, margin: 0, fontWeight: 800 }}>Contact</h2>
            <div style={{ height: 4, width: 70, background: '#60a5fa', borderRadius: 999, marginTop: 12 }} />
            <p style={{ marginTop: 16, color: '#cbd5e1' }}>
              Contact me for any queries or you can write us, we will get back to you in 48 hours.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 24, marginTop: 24 }}>
              <form onSubmit={handleSubmit} style={{ background: '#0f172a', border: '1px solid #1f2937', borderRadius: 16, padding: 24 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div>
                    <label style={{ display: 'block', color: '#cbd5e1', marginBottom: 6 }}>Name *</label>
                    <input
                      name="name"
                      value={formValues.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      style={{ width: '100%', background: '#0b1220', color: '#e2e8f0', border: '1px solid #1f2937', borderRadius: 10, padding: '12px 14px' }}
                    />
                    {formErrors.name && <div style={{ color: '#f87171', marginTop: 6 }}>{formErrors.name}</div>}
                  </div>
                  <div>
                    <label style={{ display: 'block', color: '#cbd5e1', marginBottom: 6 }}>Email *</label>
                    <input
                      name="email"
                      value={formValues.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      style={{ width: '100%', background: '#0b1220', color: '#e2e8f0', border: '1px solid #1f2937', borderRadius: 10, padding: '12px 14px' }}
                    />
                    {formErrors.email && <div style={{ color: '#f87171', marginTop: 6 }}>{formErrors.email}</div>}
                  </div>
                </div>
                <div style={{ marginTop: 16 }}>
                  <label style={{ display: 'block', color: '#cbd5e1', marginBottom: 6 }}>Subject</label>
                  <input
                    name="subject"
                    value={formValues.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    style={{ width: '100%', background: '#0b1220', color: '#e2e8f0', border: '1px solid #1f2937', borderRadius: 10, padding: '12px 14px' }}
                  />
                  {formErrors.subject && <div style={{ color: '#f87171', marginTop: 6 }}>{formErrors.subject}</div>}
                </div>
                <div style={{ marginTop: 16 }}>
                  <label style={{ display: 'block', color: '#cbd5e1', marginBottom: 6 }}>Message *</label>
                  <textarea
                    name="message"
                    value={formValues.message}
                    onChange={handleInputChange}
                    rows={6}
                    placeholder="Tell me about your project or idea..."
                    style={{ width: '100%', background: '#0b1220', color: '#e2e8f0', border: '1px solid #1f2937', borderRadius: 10, padding: '12px 14px', resize: 'vertical' }}
                  />
                  {formErrors.message && <div style={{ color: '#f87171', marginTop: 6 }}>{formErrors.message}</div>}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 16 }}>
                  <button type="submit" style={{ background: 'linear-gradient(90deg,#3b82f6,#8b5cf6)', border: 'none', color: 'white', padding: '12px 16px', borderRadius: 10, cursor: 'pointer', fontWeight: 700 }}>Send Message</button>
                  <span style={{ color: '#94a3b8' }}>Response within 48 hours</span>
                </div>
              </form>
              <div style={{ background: '#0f172a', border: '1px solid #1f2937', borderRadius: 16, padding: 24 }}>
                <p><strong>Location:</strong> kanchipura post, Mathodu Hobil, hosadurga Taluk, Chitradurga-577533
                </p>
                <p><strong>Email:</strong> harsha497cs@gmail.com</p>
                <p><strong>Call:</strong> +91 9880339147</p>
                <p>
                  <strong>WhatsApp:</strong>{' '}
                  <button
                    onClick={() => window.open('https://wa.me/9880339147', '_blank')}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: '#0ea5e9',
                      textDecoration: 'none',
                      padding: 0,
                      cursor: 'pointer',
                      font: 'inherit'
                    }}
                  >
                    chat on WhatsApp
                  </button>
                </p>
              </div>
              
              <div style={{ gridColumn: '1 / -1', marginTop: 24 }}>
                <div style={{ marginBottom: 12, display: 'flex', justifyContent: 'flex-end' }}>
                  <button
                    onClick={handleUseMyLocation}
                    style={{
                      background: '#0ea5e9',
                      color: 'white',
                      border: 'none',
                      borderRadius: 8,
                      padding: '10px 12px',
                      cursor: 'pointer',
                      fontWeight: 600
                    }}
                  >
                    Use my location
                  </button>
                </div>
                <div style={{ borderRadius: 16, overflow: 'hidden', border: '1px solid #1f2937' }}>
                  <iframe
                    title="Kanchipura Map"
                    src={mapSrc}
                    width="100%"
                    height="320"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
