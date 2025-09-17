import React from 'react';

const Row = ({ label, value }) => (
  <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: 12 }}>
    <div style={{ color: '#94a3b8' }}>{label}</div>
    <div style={{ color: '#e2e8f0' }}>{value}</div>
  </div>
);

const Resume = () => (
  <section id="resume" style={{ background: '#0b1220', color: '#e5e7eb', padding: '64px 24px' }}>
    <div style={{ maxWidth: 1040, margin: '0 auto' }}>
      <h2 style={{ color: '#e2e8f0', fontSize: 32, margin: 0, fontWeight: 800 }}>Resume</h2>
      <div style={{ height: 4, width: 70, background: '#60a5fa', borderRadius: 999, marginTop: 12 }} />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28, marginTop: 24 }}>
        {/* Left column: Contact + Candidate details */}
        <div style={{ background: '#0f172a', border: '1px solid #1f2937', borderRadius: 16, padding: 24 }}>
          <h3 style={{ marginTop: 0 }}>Contact</h3>
          <div style={{ display: 'grid', gap: 10 }}>
            <Row label="Name" value="Harsha P" />
            <Row label="Mobile" value="9880339147" />
            <Row label="Email" value="harsha497cs@gmail.com" />
            <Row label="Current Address" value="Near Kanchipura, hosadurga(Tq), chitradurga(Dist) 577533" />
            <Row label="Permanent Address" value="Near Kanchipura, hosadurga(Tq), chitradurga(Dist) 577533" />
          </div>

          <h3 style={{ marginTop: 24 }}>Candidate Details</h3>
          <div style={{ display: 'grid', gap: 10 }}>
            <Row label="Objective" value="Adaptable and motivated computer science student seeking an internship to gain hands-on experience and explore AI and cloud technologies. Passionate about building scalable, user‑centric apps." />
            <Row label="Skill Sets" value="HTML, CSS, Basic Python, Basic Java, MySQL, DBMS" />
            <Row label="Courses" value="HTML5 & CSS3 (Infosys Springboard); Frontend Web Developer (Udemy)" />
            <Row label="Gender" value="Male" />
            <Row label="Father/Mother" value="Prasana kumara M" />
            <Row label="Marital Status" value="Unmarried" />
            <Row label="Date of Birth" value="26/12/2007" />
            <Row label="Nationality" value="Indian" />
            <Row label="Languages" value="Kannada, English" />
          </div>
        </div>

        {/* Right column: Education + Projects */}
        <div style={{ background: '#0f172a', border: '1px solid #1f2937', borderRadius: 16, padding: 24 }}>
          <h3 style={{ marginTop: 0 }}>Education Details</h3>
          <div style={{ overflowX: 'auto', marginTop: 8 }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', color: '#cbd5e1' }}>
              <thead>
                <tr>
                  <th style={{ border: '1px solid #1f2937', padding: 10, textAlign: 'left' }}>Qualification</th>
                  <th style={{ border: '1px solid #1f2937', padding: 10, textAlign: 'left' }}>College / School Name</th>
                  <th style={{ border: '1px solid #1f2937', padding: 10, textAlign: 'left' }}>University/Board</th>
                  <th style={{ border: '1px solid #1f2937', padding: 10, textAlign: 'left' }}>Year of Passing</th>
                  <th style={{ border: '1px solid #1f2937', padding: 10, textAlign: 'left' }}>Branch / Stream</th>
                  <th style={{ border: '1px solid #1f2937', padding: 10, textAlign: 'left' }}>Percentage (%)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ border: '1px solid #1f2937', padding: 10 }}>DIPLOMA</td>
                  <td style={{ border: '1px solid #1f2937', padding: 10 }}>SDM Polytechnic, Ujire.</td>
                  <td style={{ border: '1px solid #1f2937', padding: 10 }}>Directorate of Technical Education</td>
                  <td style={{ border: '1px solid #1f2937', padding: 10 }}>2026</td>
                  <td style={{ border: '1px solid #1f2937', padding: 10 }}>CSE</td>
                  <td style={{ border: '1px solid #1f2937', padding: 10 }}>—</td>
                </tr>
                <tr>
                  <td style={{ border: '1px solid #1f2937', padding: 10 }}>10TH</td>
                  <td style={{ border: '1px solid #1f2937', padding: 10 }}>M P Prakash High School, Hosadurga</td>
                  <td style={{ border: '1px solid #1f2937', padding: 10 }}>Karnataka Secondary Education Examination Board</td>
                  <td style={{ border: '1px solid #1f2937', padding: 10 }}>2023</td>
                  <td style={{ border: '1px solid #1f2937', padding: 10 }}>-------</td>
                  <td style={{ border: '1px solid #1f2937', padding: 10 }}>78.42%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 style={{ marginTop: 20 }}>Project 1</h3>
          <div>
            <div style={{ color: '#e2e8f0', fontWeight: 600 }}>SDM Polytechnic Website Clone</div>
            <ul style={{ color: '#94a3b8', marginTop: 8, paddingLeft: 18, lineHeight: 1.8 }}>
              <li>Tech Stack: HTML, CSS, JavaScript, React</li>
              <li>Responsive Design: Works smoothly on desktop and mobile</li>
              <li>Feature-Rich UI: Dark mode, login form, product filtering, media integration</li>
            </ul>
          </div>
        </div>
      </div>

      <div style={{ marginTop: 24, background: '#0f172a', border: '1px solid #1f2937', borderRadius: 16, padding: 24 }}>
        <h3 style={{ marginTop: 0 }}>Declaration</h3>
        <p style={{ color: '#cbd5e1' }}>
          I hereby declare that the details and information given above are complete and true to the
          best of my knowledge.
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between', color: '#94a3b8' }}>
          <span>Place: Bengaluru</span>
          <span>Harsha P</span>
        </div>
      </div>
    </div>
  </section>
);

export default Resume;


