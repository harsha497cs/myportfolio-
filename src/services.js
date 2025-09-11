<section id="services" style={{ background: '#0b1220', color: '#e5e7eb', padding: '64px 24px' }}>
<div style={{ maxWidth: 1040, margin: '0 auto' }}>
  <h2 style={{ color: '#e2e8f0', fontSize: 32, margin: 0, fontWeight: 800 }}>Services</h2>
  <div style={{ height: 4, width: 70, background: '#60a5fa', borderRadius: 999, marginTop: 12 }} />
  <p style={{ marginTop: 16, color: '#cbd5e1' }}>Our team is capable of providing following services</p>
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginTop: 24 }}>
    {[
      'Web Development',
      'Digital Marketing',
      'Social Media handling',
      'Logo Making and Video Editing',
      'Youtube Channel Management',
      'Mobile App Development'
    ].map((service, idx) => (
      <div key={idx} style={{ background: '#0f172a', border: '1px solid #1f2937', borderRadius: 16, padding: 24 }}>
        <div style={{ fontWeight: 600, color: '#e2e8f0' }}>{service}</div>
      </div>
    ))}
  </div>
</div>
</section>