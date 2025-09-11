{/* Contact Section */}
<section id="contact" style={{ background: '#0b1220', color: '#e5e7eb', padding: '64px 24px' }}>
<div style={{ maxWidth: 1040, margin: '0 auto' }}>
  <h2 style={{ color: '#e2e8f0', fontSize: 32, margin: 0, fontWeight: 800 }}>Contact</h2>
  <div style={{ height: 4, width: 70, background: '#60a5fa', borderRadius: 999, marginTop: 12 }} />
  <p style={{ marginTop: 16, color: '#cbd5e1' }}>
    Contact me for any queries or you can write us, we will get back to you in 48 hours.
  </p>
  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 24, marginTop: 24 }}>
    <div style={{ background: '#0f172a', border: '1px solid #1f2937', borderRadius: 16, padding: 24 }}>
      <p><strong>Location:</strong> Yogakshema, Srinagara, Ujire</p>
      <p><strong>Email:</strong> harsha497cs@gmail.com</p>
      <p><strong>Call:</strong> +91 9880339147</p>
      <p><strong>WhatsApp:</strong> <a href="#http//980339147" style={{ color: '#0ea5e9', textDecoration: 'none' }}>click here</a></p>
    </div>
    <form style={{ background: '#0f172a', border: '1px solid #1f2937', borderRadius: 16, padding: 24 }} onSubmit={(e) => e.preventDefault()}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        <input placeholder="Your Name" style={{ padding: 12, borderRadius: 8, border: '1px solid #1f2937', background: '#0b1220', color: '#e2e8f0' }} />
        <input placeholder="Your Email" style={{ padding: 12, borderRadius: 8, border: '1px solid #1f2937', background: '#0b1220', color: '#e2e8f0' }} />
      </div>
      <input placeholder="Subject" style={{ marginTop: 12, width: '100%', padding: 12, borderRadius: 8, border: '1px solid #1f2937', background: '#0b1220', color: '#e2e8f0' }} />
      <textarea placeholder="Message" rows={8} style={{ marginTop: 12, width: '100%', padding: 12, borderRadius: 8, border: '1px solid #1f2937', background: '#0b1220', color: '#e2e8f0', resize: 'vertical' }} />
      <button type="submit" style={{ marginTop: 12, padding: '12px 16px', borderRadius: 8, border: 'none', background: '#0ea5e9', color: 'white', fontWeight: 600 }}>Send Message</button>
    </form>
  </div>
</div>
</section>
</main>
</div>
);
}

export default App;
