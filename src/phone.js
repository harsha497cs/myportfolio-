import React, { useEffect, useRef, useState } from 'react';

const Phone = () => {
  const typedRef = useRef(null);
  const [mapSrc, setMapSrc] = useState('https://www.google.com/maps?q=Kanchipura&output=embed');

  useEffect(() => {
    let typedInstance;
    (async () => {
      try {
        const { default: Typed } = await import('typed.js');
        if (typedRef.current) {
          typedInstance = new Typed(typedRef.current, {
            strings: ['Designer', 'Developer'],
            typeSpeed: 90,
            backSpeed: 50,
            backDelay: 900,
            loop: true,
          });
        }
      } catch (_) {}
    })();
    return () => typedInstance && typedInstance.destroy();
  }, []);

  const handleUseMyLocation = () => {
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
      () => alert('Unable to fetch your location. Please allow location access.'),
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 }
    );
  };

  const Card = ({ title, children }) => (
    <section style={{ background: 'rgba(15,23,42,0.9)', border: '1px solid #1f2937', borderRadius: 16, padding: 16 }}>
      <h3 style={{ margin: 0, color: '#e2e8f0' }}>{title}</h3>
      <div style={{ marginTop: 10, color: '#cbd5e1' }}>{children}</div>
    </section>
  );

  return (
    <div style={{ minHeight: '100vh', padding: 12, display: 'flex', flexDirection: 'column', gap: 12, background: 'transparent' }}>
      <header style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 42 }}>✨</div>
        <h1 style={{ margin: 8, color: '#e2e8f0' }}>harsha p</h1>
        <div style={{ color: '#93c5fd', fontWeight: 600 }}>I'm a <span ref={typedRef} style={{ color: '#60a5fa' }} /></div>
      </header>

      <button
        onClick={handleUseMyLocation}
        style={{
          background: 'linear-gradient(90deg,#3b82f6,#8b5cf6)',
          border: 'none',
          color: 'white',
          padding: '12px 16px',
          borderRadius: 12,
          fontWeight: 700,
        }}
      >
        Use my location
      </button>

      <Card title="About">
        As a passionate Front-End Developer with a solid foundation in Computer Science, I build responsive, user-centric web apps using React, HTML, CSS, and JavaScript.
      </Card>

      <Card title="Portfolio">
        <a style={{ color: '#60a5fa', textDecoration: 'none' }} href="https://collagewebsitclon.vercel.app/">collagewebsitclon.vercel.app</a> - College Website Clone (live)
      </Card>

      <Card title="Contact">
        <div style={{ display: 'grid', gap: 8 }}>
          <div><strong>Email:</strong> harsha497cs@gmail.com</div>
          <div><strong>Call:</strong> +91 9880339147</div>
          <div>
            <strong>WhatsApp:</strong>{' '}
            <button onClick={() => window.open('https://wa.me/9880339147', '_blank')} style={{ background: 'transparent', border: 'none', color: '#60a5fa', textDecoration: 'underline' }}>chat on WhatsApp</button>
          </div>
        </div>
      </Card>

      <div style={{ borderRadius: 16, overflow: 'hidden', border: '1px solid #1f2937' }}>
        <iframe title="Kanchipura Map" src={mapSrc} width="100%" height="240" style={{ border: 0 }} loading="lazy" />
      </div>

      <footer style={{ textAlign: 'center', color: '#94a3b8', padding: 8 }}>
        Designed by <a href="https://github.com/harsha497cs" style={{ color: '#60a5fa', textDecoration: 'none' }}>harsha p</a>
      </footer>
    </div>
  );
};

export default Phone;


