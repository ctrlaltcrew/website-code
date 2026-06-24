import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Brain, Bot, Code, Smartphone, Database, Zap, ArrowRight, Check } from 'lucide-react';

const services = [
  {
    icon: Brain,
    num: '01',
    title: 'AI & Data Science',
    tagline: 'Intelligence at scale.',
    desc: 'Custom ML models and data pipelines engineered for real-world impact. We turn raw data into measurable advantage.',
    features: ['Custom ML Model Development', 'Data Pipeline Architecture', 'Predictive Analytics', 'Neural Network Training', 'Model Optimization & Deployment'],
    stack: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas'],
  },
  {
    icon: Bot,
    num: '02',
    title: 'RAG Pipelines & Chatbots',
    tagline: 'Conversations that matter.',
    desc: 'Retrieval-augmented AI with deep knowledge integration. Chatbots that understand context and drive real outcomes.',
    features: ['Retrieval-Augmented Generation', 'Custom Chatbot Development', 'Knowledge Base Integration', 'Multi-channel Deployment', 'Continuous Learning Systems'],
    stack: ['OpenAI', 'LangChain', 'Vector DBs', 'FastAPI', 'React'],
  },
  {
    icon: Code,
    num: '03',
    title: 'Web Development',
    tagline: 'Performant & beautiful.',
    desc: 'High-performance web apps with pixel-perfect UI. Modern frameworks, clean architecture, uncompromising quality.',
    features: ['Full-Stack Applications', 'Responsive Design Systems', 'Performance Optimization', 'REST & GraphQL APIs', 'Cloud Deployment'],
    stack: ['React', 'Node.js', 'TypeScript', 'Tailwind', 'PostgreSQL'],
  },
  {
    icon: Smartphone,
    num: '04',
    title: 'Mobile Applications',
    tagline: 'Native feel everywhere.',
    desc: 'Cross-platform apps with native-grade performance and intuitive UX that users love.',
    features: ['Cross-Platform Development', 'Native Performance', 'Offline Capabilities', 'Push Notifications', 'App Store Optimization'],
    stack: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
  },
  {
    icon: Database,
    num: '05',
    title: 'Data Engineering',
    tagline: 'Your data, supercharged.',
    desc: 'Scalable ETL pipelines and real-time data infrastructure that transforms chaos into structured intelligence.',
    features: ['ETL Pipeline Development', 'Data Warehouse Design', 'Real-time Processing', 'Data Quality Assurance', 'Analytics Infrastructure'],
    stack: ['Apache Airflow', 'Spark', 'Kafka', 'dbt', 'Snowflake'],
  },
  {
    icon: Zap,
    num: '06',
    title: 'Automation & Integration',
    tagline: 'Work smarter.',
    desc: 'Intelligent workflow automation that eliminates bottlenecks and connects your entire tech stack seamlessly.',
    features: ['Workflow Automation', 'API Integrations', 'Process Optimization', 'Legacy System Modernization', 'CI/CD Implementation'],
    stack: ['Docker', 'Kubernetes', 'GitHub Actions', 'AWS', 'Zapier'],
  },
];

/* ── 3D tilt keycap service card ── */
const ServiceCard = ({ s }: { s: typeof services[0] }) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    ref.current.style.transform = `perspective(900px) rotateY(${x * 14}deg) rotateX(${-y * 10}deg) translateZ(8px) translateY(2px)`;
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
      className="keycap-card p-8 rounded-2xl h-full"
      style={{ transition: 'transform 0.12s ease-out', willChange: 'transform' }}
    >
      {/* Top: icon + number */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 24 }}>
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: 12,
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.09)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <s.icon size={22} style={{ color: '#c9c9ce' }} />
        </div>
        <span
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '2.8rem',
            fontWeight: 700,
            color: 'rgba(255,255,255,0.04)',
            lineHeight: 1,
          }}
        >
          {s.num}
        </span>
      </div>

      <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#f5f5f7', marginBottom: 4 }}>
        {s.title}
      </h3>
      <p
        style={{
          fontSize: '0.7rem',
          fontFamily: "'Space Mono', monospace",
          letterSpacing: '0.1em',
          color: '#8a8a8e',
          marginBottom: 14,
          textTransform: 'uppercase',
        }}
      >
        {s.tagline}
      </p>
      <p style={{ fontSize: '0.85rem', color: '#8a8a8e', lineHeight: 1.75, marginBottom: 20 }}>
        {s.desc}
      </p>

      {/* Features */}
      <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', display: 'flex', flexDirection: 'column', gap: 8 }}>
        {s.features.map((f, i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.82rem', color: '#c9c9ce' }}>
            <Check size={13} style={{ color: '#8a8a8e', flexShrink: 0 }} />
            {f}
          </li>
        ))}
      </ul>

      {/* Tech stack */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {s.stack.map((t, i) => (
          <span key={i} className="tag-mono">{t}</span>
        ))}
      </div>

      {/* Bottom line */}
      <div style={{ marginTop: 20, height: 1, background: 'linear-gradient(90deg, rgba(255,255,255,0.06), transparent)' }} />
    </div>
  );
};

const Services = () => {
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
      <section
        className="relative overflow-hidden"
        style={{ paddingTop: '160px', paddingBottom: '80px' }}
      >
        <div className="absolute inset-0 bg-grid-dark pointer-events-none opacity-60" />
        <div
          className="glow-blob"
          style={{
            top: '-100px',
            left: '30%',
            width: 400,
            height: 400,
            background: 'rgba(255,255,255,0.018)',
            filter: 'blur(80px)',
            position: 'absolute',
          }}
        />
        {/* Floating keycap decorations */}
        <div
          className="keycap keycap-xs animate-spin-slow"
          style={{
            position: 'absolute',
            top: '30%',
            right: '8%',
            opacity: 0.15,
            pointerEvents: 'none',
            fontSize: '0.65rem',
          }}
        >
          &lt;/&gt;
        </div>
        <div
          className="keycap keycap-xs"
          style={{
            position: 'absolute',
            bottom: '20%',
            left: '6%',
            opacity: 0.12,
            pointerEvents: 'none',
            animation: 'robotFloat 7s ease-in-out infinite',
          }}
        >
          fn
        </div>

        <div className="container mx-auto px-6 text-center relative">
          <div className="status-pill inline-flex mb-8">
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#f5f5f7', boxShadow: '0 0 6px rgba(255,255,255,0.8)' }} />
            Full-Service Software Agency
          </div>
          <h1
            style={{
              fontSize: 'clamp(3.5rem, 10vw, 8rem)',
              letterSpacing: '-0.04em',
              lineHeight: 1,
              marginBottom: '1.5rem',
            }}
          >
            Our Services.
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#8a8a8e', maxWidth: '540px', margin: '0 auto', lineHeight: 1.75 }}>
            From intelligent AI to pixel-perfect mobile apps — we engineer digital excellence across every discipline.
          </p>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section style={{ padding: '80px 0' }}>
        <div className="container mx-auto px-6">
          <div className="divider-mono mb-14" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <div
                key={i}
                className="boot-in h-full"
                style={{ transitionDelay: `${i * 0.06}s` }}
              >
                <ServiceCard s={s} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section style={{ padding: '80px 0 100px' }} className="relative">
        <div className="absolute inset-0 bg-dots-dark pointer-events-none opacity-50" />
        <div className="container mx-auto px-6 relative">
          <div className="boot-in text-center mb-16">
            <p className="mono mb-4" style={{ color: '#8a8a8e', fontSize: '0.75rem', letterSpacing: '0.12em' }}>HOW WE WORK</p>
            <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', letterSpacing: '-0.04em' }}>Our Process.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { step: '01', title: 'Discovery', desc: 'Deep dive into your goals, constraints, and technical landscape to build a precise roadmap.' },
              { step: '02', title: 'Blueprint', desc: 'System architecture and specifications designed to scale from day one.' },
              { step: '03', title: 'Development', desc: 'Clean code, agile iterations — shipping quality fast without cutting corners.' },
              { step: '04', title: 'Launch & Grow', desc: 'Seamless deployment with continuous monitoring and optimization post-launch.' },
            ].map((p, i) => (
              <div
                key={i}
                className="boot-in card-mono p-8 rounded-2xl"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <span
                  style={{
                    display: 'block',
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '3rem',
                    fontWeight: 700,
                    color: 'rgba(255,255,255,0.06)',
                    lineHeight: 1,
                    marginBottom: 20,
                  }}
                >
                  {p.step}
                </span>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f5f5f7', marginBottom: 10 }}>{p.title}</h3>
                <p style={{ fontSize: '0.83rem', color: '#8a8a8e', lineHeight: 1.75 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech Stack ── */}
      <section style={{ padding: '60px 0 100px' }}>
        <div className="container mx-auto px-6">
          <div className="boot-in text-center mb-12">
            <p className="mono mb-4" style={{ color: '#8a8a8e', fontSize: '0.75rem', letterSpacing: '0.12em' }}>POWERED BY</p>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-0.04em' }}>Our Arsenal.</h2>
          </div>
          <div className="boot-in grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {['Python', 'React', 'Node.js', 'TypeScript', 'TensorFlow', 'Docker', 'AWS', 'PostgreSQL', 'MongoDB', 'Redis', 'Kubernetes', 'OpenAI'].map((t, i) => (
              <div key={i} className="keycap keycap-sm justify-center" style={{ display: 'flex', fontSize: '0.72rem' }}>{t}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '80px 0 120px' }} className="relative">
        <div className="divider-mono mb-16" />
        <div className="container mx-auto px-6 text-center">
          <div className="boot-in max-w-2xl mx-auto">
            <h2 style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', letterSpacing: '-0.04em', marginBottom: '1.5rem' }}>
              Ready to Start?
            </h2>
            <p style={{ color: '#8a8a8e', fontSize: '1.1rem', marginBottom: '2.5rem', lineHeight: 1.75 }}>
              Let's turn your vision into reality with expert engineering.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center' }}>
              <Link to="/contact" className="keycap keycap-lg keycap-white">
                Launch Project
              </Link>
              <Link
                to="/portfolio"
                className="keycap keycap-lg"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}
              >
                See Our Work <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;