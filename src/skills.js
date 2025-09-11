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
        { label: 'HTML 5', value: 100 },
        { label: 'CSS 3', value: 90 },
        { label: 'JavaScript', value: 80 },
        { label: 'Figma', value: 50 },
        { label: 'React JS', value: 70 },
        { label: 'React Native', value: 70 },
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