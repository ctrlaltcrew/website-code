import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Github, Brain, Bot, Smartphone, ArrowRight, Star, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'SmartChat AI',
    tagline: 'RAG-powered enterprise assistant',
    desc: 'Multi-document knowledge base chatbot with real-time learning and context-aware conversations that drive outcomes.',
    category: 'AI & Chatbots',
    icon: Bot,
    github: 'https://github.com/ctrlaltcrew/SmartChat-AI-Assistant',
    tech: ['Python', 'LangChain', 'OpenAI', 'Vector DB', 'FastAPI'],
    features: ['Multi-document knowledge base', 'Real-time learning', 'Multi-language support'],
  },
  {
    title: 'PredictaFlow',
    tagline: 'End-to-end ML pipeline platform',
    desc: 'Scalable ML pipeline predicting user behavior with 94% accuracy. Automated retraining and A/B testing built-in.',
    category: 'Data Science',
    icon: Brain,
    github: 'https://github.com/ctrlaltcrew/PredictaFlow-Analytics',
    tech: ['TensorFlow', 'Airflow', 'PostgreSQL', 'Docker', 'AWS'],
    features: ['Real-time data processing', 'Automated retraining', 'A/B testing integration'],
  },
  {
    title: 'EcoTrack Mobile',
    tagline: 'Gamified sustainability platform',
    desc: '50k+ active users tracking carbon footprints through gamification, social challenges, and AI-powered recommendations.',
    category: 'Mobile App',
    icon: Smartphone,
    github: 'https://github.com/ctrlaltcrew/EcoTrack-Mobile-App',
    tech: ['React Native', 'Node.js', 'Firebase', 'Redux', 'Chart.js'],
    features: ['Gamified tracking', 'Social challenges', 'AI recommendations'],
  },
  {
    title: 'AutoCode Gen',
    tagline: 'AI-powered dev assistant',
    desc: 'Natural language to production code. Auto-documentation, intelligent review suggestions, VS Code integration.',
    category: 'Automation',
    icon: Bot,
    github: 'https://github.com/ctrlaltcrew/SmartChat-AI-Assistant',
    tech: ['GPT-4', 'AST Parsing', 'TypeScript', 'VS Code API', 'Git'],
    features: ['Natural language to code', 'Auto-documentation', 'AI code review'],
  },
];

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CTO · TechFlow Inc.',
    quote: "Ctrl Alt Crew built our AI system so well our team actually enjoys using it. That's genuine engineering magic.",
    project: 'SmartChat AI',
    avatar: 'SC',
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Founder · GreenTech',
    quote: 'They took our crazy idea and shipped a mobile app with 50k users in 6 months. Unmatched execution speed.',
    project: 'EcoTrack',
    avatar: 'MR',
  },
  {
    name: 'Dr. Emily Watson',
    role: 'Head of Data · FinFlow',
    quote: 'Our ML pipeline has been flawless for 8 months straight. The ROI pays for itself many times over.',
    project: 'PredictaFlow',
    avatar: 'EW',
  },
];

/* ── 3D Tilt project card ── */
const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    ref.current.style.transform = `perspective(1000px) rotateY(${x * 10}deg) rotateX(${-y * 8}deg) translateZ(6px)`;
  };

  const handleLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = '';
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="card-mono rounded-2xl overflow-hidden"
      style={{
        transition: 'transform 0.12s ease-out',
        willChange: 'transform',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Preview area */}
      <div
        style={{
          height: '200px',
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, #141418 0%, #0e0e12 100%)',
        }}
      >
        <div className="bg-dots-dark absolute inset-0 opacity-80" />

        {/* Center icon in a keycap-style box */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            className="keycap"
            style={{
              width: 80,
              height: 80,
              borderRadius: 18,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              '--key-depth': '5px',
              pointerEvents: 'none',
            } as React.CSSProperties}
          >
            <project.icon size={32} style={{ color: '#c9c9ce' }} />
          </div>
        </div>

        {/* Category badge */}
        <div style={{ position: 'absolute', top: 16, left: 16 }}>
          <span className="tag-mono">{project.category}</span>
        </div>

        {/* Index */}
        <div
          style={{
            position: 'absolute',
            top: 12,
            right: 16,
            fontFamily: "'Space Mono', monospace",
            fontSize: '2.5rem',
            fontWeight: 700,
            color: 'rgba(255,255,255,0.04)',
            lineHeight: 1,
          }}
        >
          0{index + 1}
        </div>

        {/* Shimmer on hover */}
        <div
          className="shimmer absolute inset-0"
          style={{ opacity: 0, transition: 'opacity 0.3s', background: 'transparent' }}
        />
      </div>

      {/* Content */}
      <div style={{ padding: '28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#f5f5f7', marginBottom: 4 }}>
          {project.title}
        </h3>
        <p
          style={{
            fontSize: '0.7rem',
            fontFamily: "'Space Mono', monospace",
            color: '#8a8a8e',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: 14,
          }}
        >
          {project.tagline}
        </p>
        <p style={{ fontSize: '0.85rem', color: '#8a8a8e', lineHeight: 1.75, marginBottom: 16, flex: 1 }}>
          {project.desc}
        </p>

        {/* Features */}
        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 16px', display: 'flex', flexDirection: 'column', gap: 6 }}>
          {project.features.map((f, i) => (
            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.8rem', color: '#c9c9ce' }}>
              <span
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: '50%',
                  background: '#c9c9ce',
                  flexShrink: 0,
                }}
              />
              {f}
            </li>
          ))}
        </ul>

        {/* Tech */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: 20 }}>
          {project.tech.map((t, i) => (
            <span key={i} className="tag-mono">{t}</span>
          ))}
        </div>

        {/* Actions */}
        <div
          style={{
            display: 'flex',
            gap: 10,
            paddingTop: 16,
            borderTop: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="keycap keycap-sm keycap-white"
            style={{ flex: 1, justifyContent: 'center', display: 'flex', alignItems: 'center', gap: 6 }}
          >
            <Github size={14} />
            Source
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="keycap keycap-sm"
            style={{ display: 'flex', alignItems: 'center', gap: 6 }}
          >
            <ExternalLink size={13} />
            Live
          </a>
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('booted'); }),
      { threshold: 0.07 }
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
          style={{ top: '-80px', right: '20%', width: 350, height: 350, background: 'rgba(255,255,255,0.016)', filter: 'blur(80px)', position: 'absolute' }}
        />
        <div className="container mx-auto px-6 text-center relative">
          <div className="status-pill inline-flex mb-8">
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#f5f5f7', boxShadow: '0 0 6px rgba(255,255,255,0.8)' }} />
            Real Projects · Real Results
          </div>
          <h1 style={{ fontSize: 'clamp(3.5rem, 10vw, 8rem)', letterSpacing: '-0.04em', lineHeight: 1, marginBottom: 24 }}>
            Our Work.
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#8a8a8e', maxWidth: 480, margin: '0 auto', lineHeight: 1.75 }}>
            Handcrafted software that ships, scales, and delivers measurable business impact.
          </p>
        </div>
      </section>

      {/* ── Projects Grid ── */}
      <section style={{ padding: '60px 0 100px' }}>
        <div className="container mx-auto px-6">
          <div className="divider-mono mb-14" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <div
                key={i}
                className="boot-in h-full"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <ProjectCard project={project} index={i} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section style={{ padding: '80px 0' }} className="relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-dark pointer-events-none opacity-40" />
        <div className="container mx-auto px-6 relative">
          <div className="boot-in text-center mb-16">
            <p className="mono mb-4" style={{ color: '#8a8a8e', fontSize: '0.75rem', letterSpacing: '0.12em' }}>CLIENT VOICES</p>
            <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', letterSpacing: '-0.04em' }}>Feedback.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="boot-in card-mono rounded-2xl p-8"
                style={{ transitionDelay: `${i * 0.08}s`, display: 'flex', flexDirection: 'column' }}
              >
                {/* Stars */}
                <div style={{ display: 'flex', gap: 4, marginBottom: 20 }}>
                  {[...Array(5)].map((_, si) => (
                    <Star key={si} size={14} style={{ fill: '#f5f5f7', color: '#f5f5f7' }} />
                  ))}
                </div>

                <blockquote style={{ fontSize: '0.88rem', color: '#c9c9ce', lineHeight: 1.8, fontStyle: 'italic', flex: 1, marginBottom: 24 }}>
                  "{t.quote}"
                </blockquote>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    paddingTop: 16,
                    borderTop: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  <div
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #2a2a2e, #1a1a1e)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: "'Space Mono', monospace",
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      color: '#c9c9ce',
                      flexShrink: 0,
                    }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f5f5f7' }}>{t.name}</div>
                    <div style={{ fontSize: '0.72rem', color: '#8a8a8e', fontFamily: "'Space Mono', monospace" }}>{t.role}</div>
                  </div>
                  <span className="tag-mono" style={{ marginLeft: 'auto' }}>{t.project}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech Arsenal ── */}
      <section style={{ padding: '60px 0 100px' }}>
        <div className="container mx-auto px-6">
          <div className="boot-in text-center mb-12">
            <p className="mono mb-4" style={{ color: '#8a8a8e', fontSize: '0.75rem', letterSpacing: '0.12em' }}>POWERED BY</p>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-0.04em' }}>Our Arsenal.</h2>
          </div>
          <div className="boot-in grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {['Python', 'React', 'Node.js', 'TypeScript', 'TensorFlow', 'Docker', 'AWS', 'PostgreSQL', 'MongoDB', 'Redis', 'Kubernetes', 'OpenAI'].map((t, i) => (
              <div key={i} className="keycap keycap-sm justify-center" style={{ display: 'flex', fontSize: '0.7rem' }}>{t}</div>
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
              Ready to Build?
            </h2>
            <p style={{ color: '#8a8a8e', fontSize: '1.1rem', marginBottom: '2.5rem' }}>
              Let's create something remarkable together.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center' }}>
              <Link to="/contact" className="keycap keycap-lg keycap-white">
                Start Your Project
              </Link>
              <Link
                to="/services"
                className="keycap keycap-lg"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}
              >
                View Services <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
