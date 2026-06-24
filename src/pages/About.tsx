import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Coffee, Heart, Lightbulb, Users, ArrowRight, Zap, Target, Globe } from 'lucide-react';

const values = [
  { icon: Coffee, title: 'Caffeine-Driven', desc: 'Great code requires great coffee. We measure productivity in espresso shots and measure quality in zero-bug deploys.' },
  { icon: Heart, title: 'User-First', desc: "Empathy drives every design decision. If the experience isn't intuitive, we haven't finished the job." },
  { icon: Lightbulb, title: 'Creative Logic', desc: 'Analytical thinking meets creative problem-solving. We find elegant solutions where others see impossible constraints.' },
  { icon: Users, title: 'Collaboration', desc: 'Great software is a team sport — pair programming, thorough reviews, and transparent communication always.' },
  { icon: Zap, title: 'Speed & Quality', desc: 'Fast shipping without cutting corners. We build processes that let us move quickly without sacrificing excellence.' },
  { icon: Target, title: 'Impact-Oriented', desc: 'We measure success by outcomes created, not lines shipped. ROI is always the north star.' },
];

const timeline = [
  {
    chapter: '01',
    title: 'The Origin',
    desc: "Born from a shared frustration with buggy, soul-less software and a love for clean, purposeful code. Ctrl Alt Crew emerged as the answer to \"Why can't tech be both powerful and delightful?\"",
  },
  {
    chapter: '02',
    title: 'The Philosophy',
    desc: 'We believe the best solutions come from combining technical excellence with human creativity. We craft digital experiences that make businesses thrive — not just function.',
  },
  {
    chapter: '03',
    title: 'The Growth',
    desc: 'From local roots to serving clients across 15+ countries. Each engagement deepened our expertise and expanded our ambitions for what software could achieve.',
  },
  {
    chapter: '04',
    title: 'The Future',
    desc: 'AI that makes sense. Automation that liberates. Experiences that inspire. We\'re here to prove that ambitious software can be intelligent and profoundly human.',
  },
];

const About = () => {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('booted'); }),
      { threshold: 0.08 }
    );
    document.querySelectorAll('.boot-in').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div style={{ background: '#0a0a0c', color: '#f5f5f7', minHeight: '100vh', overflowX: 'hidden' }}>
      <div className="grain" />
      <Navigation />

      {/* ── Hero ── */}
      <section style={{ paddingTop: 160, paddingBottom: 80 }} className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark pointer-events-none opacity-60" />
        <div
          className="glow-blob"
          style={{ top: '-100px', left: '25%', width: 400, height: 400, background: 'rgba(255,255,255,0.02)', filter: 'blur(80px)', position: 'absolute' }}
        />
        <div className="container mx-auto px-6 text-center relative">
          <div className="status-pill inline-flex mb-8">
            <Globe size={13} />
            Serving clients in 15+ countries
          </div>
          <h1 style={{ fontSize: 'clamp(3.5rem, 10vw, 8rem)', letterSpacing: '-0.04em', lineHeight: 1, marginBottom: 24 }}>
            Our Story.
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#8a8a8e', maxWidth: 520, margin: '0 auto', lineHeight: 1.75 }}>
            We're not your average software house. We're the engineers who believe a clean reboot fixes everything — in code and in life.
          </p>
        </div>
      </section>

      {/* ── Mission Card ── */}
      <section style={{ padding: '60px 0' }}>
        <div className="container mx-auto px-6 max-w-3xl">
          <div
            className="boot-in card-mono rounded-2xl p-12 text-center relative overflow-hidden"
          >
            {/* Top gradient line */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)' }} />
            <p className="mono mb-6" style={{ color: '#8a8a8e', fontSize: '0.72rem', letterSpacing: '0.12em' }}>OUR MISSION</p>
            <blockquote
              style={{
                fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
                fontWeight: 400,
                color: '#c9c9ce',
                lineHeight: 1.75,
              }}
            >
              "To engineer software that is not just{' '}
              <span style={{ color: '#f5f5f7', fontWeight: 700 }}>technically excellent</span>
              {' '}— but genuinely{' '}
              <span style={{ color: '#f5f5f7', fontWeight: 700 }}>transformative</span>
              {' '}for the businesses and people it serves."
            </blockquote>
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section style={{ padding: '80px 0' }} className="relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-dark pointer-events-none opacity-40" />
        <div className="container mx-auto px-6 max-w-4xl relative">
          <div className="boot-in text-center mb-16">
            <p className="mono mb-4" style={{ color: '#8a8a8e', fontSize: '0.75rem', letterSpacing: '0.12em' }}>HOW WE GOT HERE</p>
            <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', letterSpacing: '-0.04em' }}>Timeline.</h2>
          </div>

          <div style={{ position: 'relative' }}>
            {/* Vertical spine */}
            <div
              style={{
                position: 'absolute',
                left: '50%',
                top: 0,
                bottom: 0,
                width: 1,
                background: 'linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.04) 100%)',
                transform: 'translateX(-50%)',
              }}
              className="hidden md:block"
            />

            <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
              {timeline.map((item, i) => (
                <div
                  key={i}
                  className="boot-in"
                  style={{
                    transitionDelay: `${i * 0.1}s`,
                    display: 'flex',
                    flexDirection: i % 2 === 0 ? 'row' : 'row-reverse',
                    alignItems: 'flex-start',
                    gap: 32,
                  }}
                >
                  {/* Card */}
                  <div style={{ flex: 1 }}>
                    <div
                      className="card-mono rounded-2xl p-8"
                      style={{ borderLeft: i % 2 === 0 ? '2px solid rgba(255,255,255,0.12)' : undefined, borderRight: i % 2 === 1 ? '2px solid rgba(255,255,255,0.12)' : undefined }}
                    >
                      <span className="mono" style={{ fontSize: '0.68rem', color: '#8a8a8e', letterSpacing: '0.1em' }}>
                        Chapter {item.chapter}
                      </span>
                      <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#f5f5f7', margin: '8px 0 14px' }}>{item.title}</h3>
                      <p style={{ fontSize: '0.85rem', color: '#8a8a8e', lineHeight: 1.8 }}>{item.desc}</p>
                    </div>
                  </div>

                  {/* Center dot (desktop) */}
                  <div
                    className="hidden md:flex flex-shrink-0"
                    style={{
                      width: 32,
                      alignItems: 'center',
                      justifyContent: 'center',
                      paddingTop: 28,
                    }}
                  >
                    <div
                      style={{
                        width: 12,
                        height: 12,
                        borderRadius: '50%',
                        background: '#f5f5f7',
                        boxShadow: '0 0 8px rgba(255,255,255,0.6)',
                        flexShrink: 0,
                      }}
                    />
                  </div>

                  {/* Spacer */}
                  <div style={{ flex: 1 }} className="hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section style={{ padding: '80px 0' }}>
        <div className="container mx-auto px-6">
          <div className="boot-in text-center mb-16">
            <p className="mono mb-4" style={{ color: '#8a8a8e', fontSize: '0.75rem', letterSpacing: '0.12em' }}>WHAT DRIVES US</p>
            <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', letterSpacing: '-0.04em' }}>Our Values.</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <div
                key={i}
                className="boot-in card-mono rounded-2xl p-8 group"
                style={{ transitionDelay: `${i * 0.06}s`, cursor: 'default' }}
              >
                <div className="keycap keycap-md mb-6 w-14 h-14 flex items-center justify-center rounded-xl" style={{ display: 'inline-flex' }}>
                  <v.icon size={22} style={{ color: '#c9c9ce' }} />
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f5f5f7', marginBottom: 10 }}>{v.title}</h3>
                <p style={{ fontSize: '0.83rem', color: '#8a8a8e', lineHeight: 1.8 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Fun Stats ── */}
      <section style={{ padding: '60px 0 80px' }} className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark pointer-events-none opacity-40" />
        <div className="container mx-auto px-6 relative max-w-4xl">
          <div className="boot-in grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { value: '∞', label: 'Lines of Code', sub: 'And still counting (mostly comments)' },
              { value: '404', label: 'Bugs Fixed', sub: 'Error: number too large to display' },
              { value: '24/7', label: 'Support Available', sub: 'Someone always has to watch the watchers' },
            ].map((s, i) => (
              <div key={i} className="keycap-card p-10 text-center rounded-2xl">
                <div
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '3rem',
                    fontWeight: 700,
                    color: '#f5f5f7',
                    marginBottom: 8,
                  }}
                >
                  {s.value}
                </div>
                <div style={{ fontWeight: 700, color: '#c9c9ce', fontSize: '0.85rem', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  {s.label}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#8a8a8e', fontFamily: "'Space Mono', monospace" }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '60px 0 120px' }}>
        <div className="divider-mono mb-16" />
        <div className="container mx-auto px-6 text-center">
          <div className="boot-in max-w-2xl mx-auto">
            <h2 style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', letterSpacing: '-0.04em', marginBottom: '1.5rem' }}>
              Join the Crew?
            </h2>
            <p style={{ color: '#8a8a8e', fontSize: '1.1rem', marginBottom: '2.5rem' }}>
              Whether you need our services or want to join the team — let's connect.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center' }}>
              <Link to="/contact" className="keycap keycap-lg keycap-white">
                Let's Talk
              </Link>
              <Link
                to="/services"
                className="keycap keycap-lg"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}
              >
                See Services <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;