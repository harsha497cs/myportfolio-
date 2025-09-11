import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Drawer from './Components/Drawer';
import heroImg from './Components/image1.jpg';

function App() {
  const typedElRef = useRef(null);

  useEffect(() => {
    let typedInstance;
    (async () => {
      try {
        const { default: Typed } = await import('typed.js');
        if (typedElRef.current) {
          typedInstance = new Typed(typedElRef.current, {
            strings: ["Designer", "Developer", "Trainer"],
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
        const sectionIds = ['home', 'about', 'skills', 'contact'];
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
                <h3 style={{ color: '#e2e8f0', fontSize: 24, marginTop: 0 }}>Web Developer & Mobile Developer</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  <li><strong>Birthday:</strong> 26 dec 2007</li>
                  <li><strong>Age:</strong> 18</li>
                  <li><strong>Phone:</strong> +91 9880339147</li>
                  <li><strong>City:</strong> Bangalore, India</li>
                </ul>
              </div>
              <div style={{ textAlign: 'center' }}>
                <img src={heroImg} alt="About visual" style={{ maxWidth: '100%', borderRadius: 16, opacity: 0.95 }} />
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
                  <li><a style={{ color: '#0ea5e9', textDecoration: 'none' }} href="https://www.triyatri.in">www.triyatri.in</a> - Auto Booking website for locals in Ujire</li>
                  <li><a style={{ color: '#0ea5e9', textDecoration: 'none' }} href="https://github.com/harsha497cs/collegewedsite44">github.com/harsha497cs/collegewedsite44</a> - SDM Polytechnic College website</li>
                </ul>
              
            </div>
          </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" style={{ background: '#0b1220', color: '#e5e7eb', padding: '64px 24px' }}>
          <div style={{ maxWidth: 1040, margin: '0 auto' }}>
            <h2 style={{ color: '#e2e8f0', fontSize: 32, margin: 0, fontWeight: 800 }}>Skills</h2>
            <div style={{ height: 4, width: 70, background: '#60a5fa', borderRadius: 999, marginTop: 12 }} />
            <p style={{ marginTop: 24, lineHeight: 1.8, color: '#cbd5e1' }}>
              I've developed various skills which helped my personal as well as professional career. Here are some
              skills I'm familiar with!
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28, marginTop: 24 }}>
              {[
                { label: 'HTML 5', value: 50 },
                { label: 'CSS 3', value: 50 },
                { label: 'JavaScript', value: 25 },
                { label: 'Figma', value: 50 },
                { label: 'React JS', value: 50 },
                { label: 'React Native', value: 50 },
                { label: 'Photoshop', value: 70 }
              ].map((skill, idx) => (
                <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#cbd5e1', fontSize: 14 }}>
                    <span>{skill.label}</span>
                    <span>{skill.value}%</span>
                  </div>
                  <div style={{ height: 10, background: '#e5e7eb1a', borderRadius: 999 }}>
                    <div
                      style={{
                        width: `${skill.value}%`,
                        height: '100%',
                        background: '#0ea5e9',
                        borderRadius: 999
                      }}
                    />
                  </div>
                </div>
              ))}
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
