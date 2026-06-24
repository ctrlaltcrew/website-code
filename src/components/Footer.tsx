import { Link } from 'react-router-dom';
import { Mail, Github, Linkedin, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer style={{ position: 'relative', background: '#080810', borderTop: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden' }}>
      {/* Grid bg */}
      <div className="bg-grid-dark absolute inset-0 pointer-events-none opacity-40" />

      {/* Top line */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 1,
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08) 30%, rgba(255,255,255,0.08) 70%, transparent)',
        }}
      />

      <div className="container mx-auto px-6 pt-20 pb-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* ── Brand ── */}
          <div>
            {/* Three keycap logo */}
            <Link to="/" style={{ display: 'inline-flex', gap: 6, marginBottom: 20, alignItems: 'center' }}>
              <div className="keycap keycap-logo">Ctrl</div>
              <div className="keycap keycap-logo">Alt</div>
              <div className="keycap keycap-logo keycap-white">Crew</div>
            </Link>

            <p style={{ fontSize: '0.83rem', color: '#8a8a8e', lineHeight: 1.8, marginBottom: 20 }}>
              Rebooting old ideas into bold AI-powered solutions. Your trusted tech partners for the future.
            </p>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: 10 }}>
              {[
                { Icon: Mail, href: 'mailto:ctrlaltcreww@gmail.com', label: 'Email' },
                { Icon: Github, href: 'https://github.com/ctrlaltcrew', label: 'GitHub' },
                { Icon: Linkedin, href: 'https://www.linkedin.com/company/ctrlaltcrew', label: 'LinkedIn' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="keycap keycap-xs"
                  style={{ width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}
                >
                  <Icon size={14} style={{ color: '#c9c9ce' }} />
                </a>
              ))}
            </div>
          </div>

          {/* ── Navigation ── */}
          <div>
            <h3 style={{ fontSize: '0.72rem', fontFamily: "'Space Mono', monospace", letterSpacing: '0.12em', color: '#8a8a8e', textTransform: 'uppercase', marginBottom: 20 }}>
              Navigation
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Portfolio', path: '/portfolio' },
                { name: 'Blog', path: '/blog' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      fontSize: '0.85rem',
                      color: '#8a8a8e',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#f5f5f7'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#8a8a8e'; }}
                  >
                    <span
                      style={{
                        width: 16,
                        height: 1,
                        background: 'rgba(255,255,255,0.2)',
                        display: 'inline-block',
                        flexShrink: 0,
                      }}
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Services ── */}
          <div>
            <h3 style={{ fontSize: '0.72rem', fontFamily: "'Space Mono', monospace", letterSpacing: '0.12em', color: '#8a8a8e', textTransform: 'uppercase', marginBottom: 20 }}>
              Services
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {['AI & Data Science', 'Web Development', 'Mobile Apps', 'RAG & Chatbots', 'Data Engineering', 'Automation'].map((svc) => (
                <li key={svc}>
                  <Link
                    to="/services"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      fontSize: '0.85rem',
                      color: '#8a8a8e',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#f5f5f7'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#8a8a8e'; }}
                  >
                    <span style={{ width: 16, height: 1, background: 'rgba(255,255,255,0.2)', display: 'inline-block', flexShrink: 0 }} />
                    {svc}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact CTA ── */}
          <div>
            <h3 style={{ fontSize: '0.72rem', fontFamily: "'Space Mono', monospace", letterSpacing: '0.12em', color: '#8a8a8e', textTransform: 'uppercase', marginBottom: 20 }}>
              Get In Touch
            </h3>
            <p style={{ fontSize: '0.83rem', color: '#8a8a8e', lineHeight: 1.8, marginBottom: 20 }}>
              Ready to start your next project? Let's build something incredible together.
            </p>
            <Link
              to="/contact"
              className="keycap keycap-md keycap-white"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}
            >
              Start a Project
              <ArrowUpRight size={14} />
            </Link>

            <div style={{ marginTop: 24, paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
              <p style={{ fontSize: '0.65rem', fontFamily: "'Space Mono', monospace", color: '#8a8a8e', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 6 }}>
                Email Us
              </p>
              <a
                href="mailto:ctrlaltcreww@gmail.com"
                style={{
                  fontSize: '0.82rem',
                  color: '#c9c9ce',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                  fontFamily: "'Space Mono', monospace",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#f5f5f7'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#c9c9ce'; }}
              >
                ctrlaltcreww@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: 24, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 12,
            }}
          >
            <p style={{ fontSize: '0.78rem', color: '#8a8a8e', fontFamily: "'Space Mono', monospace" }}>
              © {year} Ctrl Alt Crew. All rights reserved.
            </p>
            <p style={{ fontSize: '0.72rem', color: '#4a4a4e', fontFamily: "'Space Mono', monospace" }}>
              Debugging life's glitches, one commit at a time.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
