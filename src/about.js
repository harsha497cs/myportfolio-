import React from 'react';
import { Box, Typography, Chip } from '@mui/material';
// Local hero image removed per request

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

      {/* Educational Qualifications (MUI) */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>
          Educational Qualifications
        </Typography>
        <Box
          sx={{
            mt: 3,
            border: 1,
            borderColor: 'divider',
            borderRadius: 2,
            bgcolor: 'background.paper',
            overflow: 'hidden',
            '&:hover': { boxShadow: 2, transition: 'box-shadow 0.3s ease' }
          }}
        >
          <Box
            component="table"
            sx={{
              width: '100%',
              borderCollapse: 'collapse',
              '& th, & td': {
                border: '1px solid',
                borderColor: 'divider',
                padding: 2,
                textAlign: 'left',
                verticalAlign: 'top'
              },
              '& th': {
                bgcolor: 'primary.main',
                color: 'white',
                fontWeight: 700,
                fontSize: '0.875rem'
              },
              '& tr:nth-of-type(even)': {
                bgcolor: 'action.hover'
              },
              '& tr:hover': {
                bgcolor: 'action.selected'
              },
              '& strong': {
                color: 'primary.main',
                fontWeight: 700
              }
            }}
          >
            <Box component="thead">
              <Box component="tr">
                <Box component="th" sx={{ width: '25%' }}>Qualification</Box>
                <Box component="th" sx={{ width: '40%' }}>Institution Name</Box>
                <Box component="th" sx={{ width: '15%' }}>Duration</Box>
                <Box component="th" sx={{ width: '20%' }}>Percentage / CGPA</Box>
              </Box>
            </Box>
            <Box component="tbody">
              <Box component="tr">
                <Box component="td">
                  <strong>Diploma in Computer Science</strong>
                </Box>
                <Box component="td">
                  Sri Dharmasthala Manjunatheshwara Polytechnic<br />
                  <Typography variant="caption" color="text.secondary">
                    SDM Institute of Technology (SDMIT), Ujire
                  </Typography>
                </Box>
                <Box component="td">2023 – Present</Box>
                <Box component="td">
                  <Chip
                    label="64.70 / 7.22"
                    color="primary"
                    variant="outlined"
                    size="small"
                    sx={{ fontWeight: 600 }}
                  />
                </Box>
              </Box>
              <Box component="tr">
                <Box component="td">
                  <strong>SSLC</strong>
                </Box>
                <Box component="td">
                  s nijalingappa high school hosadurga<br />
                  <Typography variant="caption" color="text.secondary">
                    Kuvempu Nagara, Hosadurga, Chitradurga, Karnataka, with the Pincode 577527
                  </Typography>
                </Box>
                <Box component="td">2023</Box>
                <Box component="td">
                  <Chip
                    label="78.92%"
                    color="primary"
                    variant="outlined"
                    size="small"
                    sx={{ fontWeight: 600 }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  </section>
);

export default About;