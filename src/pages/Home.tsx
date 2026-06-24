import { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import RobotMascot from '@/components/RobotMascot';
import { ArrowRight, Brain, Bot, Code, Smartphone, Zap, Database, Terminal as TerminalIcon } from 'lucide-react';

/* ── Cursor glow ── */
const CursorGlow = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (ref.current) {
        ref.current.style.left = `${e.clientX}px`;
        ref.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);
  return <div ref={ref} className="cursor-glow" />;
};

/* ── Animated counter ── */
const useCounter = (target: number, duration = 1800) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const start = useCallback(() => {
    if (started) return;
    setStarted(true);
    const t0 = performance.now();
    const step = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);
  return { count, start };
};

/* ── Stat card ── */
const StatCard = ({ value, suffix, label }: { value: number; suffix: string; label: string }) => {
  const { count, start } = useCounter(value);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) start(); }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [start]);
  return (
    <div ref={ref} className="keycap-card p-8 text-center rounded-2xl group">
      <div
        className="text-5xl md:text-6xl font-bold mb-2"
        style={{ fontFamily: "'Space Mono', monospace", color: '#f5f5f7' }}
      >
        {count}<span style={{ color: '#c9c9ce', fontSize: '0.7em' }}>{suffix}</span>
      </div>
      <div className="text-xs uppercase tracking-widest" style={{ color: '#8a8a8e', fontFamily: "'Space Mono', monospace" }}>
        {label}
      </div>
    </div>
  );
};

/* ── Terminal easter egg ── */
const TerminalEgg = ({ visible, onClose }: { visible: boolean; onClose: () => void }) => {
  const [lines, setLines] = useState<string[]>([]);
  const [typing, setTyping] = useState(false);

  const sequence = [
    '> Initializing Ctrl+Alt+Crew...',
    '> Loading premium software house modules...',
    '> Brain.AI          [████████████] 100%',
    '> WebDev.engine     [████████████] 100%',
    '> Mobile.core       [████████████] 100%',
    '> Automation.suite  [████████████] 100%',
    '> All systems operational.',
    '> Welcome to the future. Let\'s build.',
  ];

  useEffect(() => {
    if (!visible) { setLines([]); setTyping(false); return; }
    setLines([]);
    setTyping(true);
    let i = 0;
    const addLine = () => {
      if (i >= sequence.length) { setTyping(false); return; }
      setLines(prev => [...prev, sequence[i]]);
      i++;
      setTimeout(addLine, i === 1 ? 300 : 480);
    };
    setTimeout(addLine, 200);
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(12px)' }}
      onClick={onClose}
    >
      <div
        className="terminal-panel w-full max-w-lg mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="terminal-title-bar">
          <div className="terminal-dot" style={{ background: '#ff5f57' }} />
          <div className="terminal-dot" style={{ background: '#febc2e' }} />
          <div className="terminal-dot" style={{ background: '#28c840' }} />
          <span style={{ color: '#8a8a8e', marginLeft: 8, fontSize: '0.72rem', fontFamily: "'Space Mono', monospace" }}>
            ctrl-alt-crew — bash
          </span>
        </div>
        <div className="terminal-body" style={{ minHeight: '200px' }}>
          {lines.map((line, i) => (
            <div key={i} style={{ color: i === 0 ? '#c9c9ce' : '#8a8a8e', marginBottom: 2 }}>
              {line}
            </div>
          ))}
          {typing && (
            <div style={{ color: '#8a8a8e' }}>
              <span className="terminal-cursor" />
            </div>
          )}
          {!typing && lines.length > 0 && (
            <div style={{ color: '#f5f5f7', marginTop: 12 }}>
              {'> '}<span style={{ color: '#c9c9ce' }}>Ready. </span>
              <button
                onClick={onClose}
                style={{
                  color: '#f5f5f7',
                  textDecoration: 'underline',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  fontSize: 'inherit',
                }}
              >
                Close terminal
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

/* ── Service data ── */
const services = [
  { icon: Brain, num: '01', title: 'AI & Data Science', desc: 'Custom ML models and data pipelines built for real-world impact at massive scale.' },
  { icon: Code, num: '02', title: 'Web Development', desc: 'High-performance web apps with pixel-perfect design and uncompromising quality.' },
  { icon: Bot, num: '03', title: 'RAG & Chatbots', desc: 'Retrieval-augmented AI with deep knowledge integration and continuous learning.' },
  { icon: Smartphone, num: '04', title: 'Mobile Apps', desc: 'Cross-platform apps with native-grade performance and intuitive UX.' },
  { icon: Database, num: '05', title: 'Data Engineering', desc: 'Scalable ETL pipelines and real-time data infrastructure that never sleeps.' },
  { icon: Zap, num: '06', title: 'Automation', desc: 'Intelligent workflow automation eliminating bottlenecks across your stack.' },
];

/* ── 3D tilt service card ── */
const ServiceKeyCard = ({ s }: { s: typeof services[0] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    ref.current.style.transform = `perspective(800px) rotateY(${x * 12}deg) rotateX(${-y * 10}deg) translateZ(8px) translateY(2px)`;
    (ref.current as HTMLElement & { _hovered?: boolean })._hovered = true;
  };
  const handleLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = '';
    (ref.current as HTMLElement & { _hovered?: boolean })._hovered = false;
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="keycap-card p-8 rounded-2xl group"
      style={{ transition: 'transform 0.15s ease-out', willChange: 'transform' }}
    >
      {/* Shimmer overlay */}
      <div
        className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none"
        style={{ opacity: 0 }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '-100%',
            width: '60%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.04), transparent)',
            animation: 'shimmer 4s ease-in-out infinite',
          }}
        />
      </div>

      <div className="flex items-start justify-between mb-6">
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: 10,
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <s.icon size={20} style={{ color: '#c9c9ce' }} />
        </div>
        <span
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '2.5rem',
            fontWeight: 700,
            color: 'rgba(255,255,255,0.04)',
            lineHeight: 1,
          }}
        >
          {s.num}
        </span>
      </div>

      <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f5f5f7', marginBottom: 8 }}>
        {s.title}
      </h3>
      <p style={{ fontSize: '0.85rem', color: '#8a8a8e', lineHeight: 1.7 }}>
        {s.desc}
      </p>

      {/* Bottom line */}
      <div
        style={{
          marginTop: 24,
          height: 1,
          background: 'linear-gradient(90deg, rgba(255,255,255,0.06), transparent)',
        }}
      />
    </div>
  );
};

/* ── Scroll boot observer ── */
const useBootObserver = () => {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('booted'); }),
      { threshold: 0.08 }
    );
    document.querySelectorAll('.boot-in').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
};

/* ══════════════════════════════════════════════════
   HOME PAGE
══════════════════════════════════════════════════ */
const Home = () => {
  const [terminalOpen, setTerminalOpen] = useState(false);
  useBootObserver();

  // Keyboard shortcut: Ctrl+Alt+C opens terminal
  useEffect(() => {
    const keys = new Set<string>();
    const down = (e: KeyboardEvent) => {
      keys.add(e.key.toLowerCase());
      if (keys.has('control') && keys.has('alt') && (keys.has('c') || keys.has('crew'))) {
        setTerminalOpen(true);
      }
    };
    const up = (e: KeyboardEvent) => keys.delete(e.key.toLowerCase());
    window.addEventListener('keydown', down);
    window.addEventListener('keyup', up);
    return () => { window.removeEventListener('keydown', down); window.removeEventListener('keyup', up); };
  }, []);

  return (
    <div
      className="min-h-screen overflow-x-hidden"
      style={{ background: '#0a0a0c', color: '#f5f5f7' }}
    >
      <CursorGlow />
      <div className="grain" />
      <Navigation />
      <TerminalEgg visible={terminalOpen} onClose={() => setTerminalOpen(false)} />

      {/* ══════════════════════════════
          HERO SECTION
      ══════════════════════════════ */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ paddingTop: '80px' }}
      >
        {/* Ambient blobs */}
        <div
          className="glow-blob glow-blob-1"
          style={{ top: '10%', right: '10%', position: 'absolute' }}
        />
        <div
          className="glow-blob glow-blob-2"
          style={{ bottom: '20%', left: '5%', position: 'absolute' }}
        />

        {/* Subtle grid */}
        <div className="absolute inset-0 bg-grid-dark opacity-100 pointer-events-none" />

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
          style={{ background: 'linear-gradient(0deg, #0a0a0c 0%, transparent 100%)' }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 min-h-[calc(100vh-80px)] py-20">

            {/* ── LEFT: Text content ── */}
            <div className="flex-1 max-w-2xl">
              {/* Status pill */}
              <div className="animate-fade-up" style={{ opacity: 0 }}>
                <div className="status-pill mb-8 inline-flex">
                  <span
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: '50%',
                      background: '#f5f5f7',
                      boxShadow: '0 0 6px rgba(255,255,255,0.8)',
                    }}
                  />
                  Modern Software House · Est. 2024
                </div>
              </div>

              {/* Main headline */}
              <h1
                className="animate-fade-up delay-1 font-bold leading-none mb-6"
                style={{
                  fontSize: 'clamp(3rem, 8vw, 6.5rem)',
                  opacity: 0,
                  letterSpacing: '-0.04em',
                  lineHeight: 0.95,
                }}
              >
                Press{' '}
                <span
                  style={{
                    display: 'inline-flex',
                    gap: '6px',
                    verticalAlign: 'middle',
                    flexWrap: 'wrap',
                  }}
                >
                  <span className="keycap keycap-xs" style={{ fontSize: '0.45em', verticalAlign: 'middle' }}>Ctrl</span>
                  <span className="keycap keycap-xs" style={{ fontSize: '0.45em', verticalAlign: 'middle' }}>Alt</span>
                  <span className="keycap keycap-xs keycap-white" style={{ fontSize: '0.45em', verticalAlign: 'middle' }}>Crew</span>
                </span>
                <br />
                to Restart
                <br />
                Innovation.
              </h1>

              <p
                className="animate-fade-up delay-2 mb-10"
                style={{
                  fontSize: '1.15rem',
                  color: '#8a8a8e',
                  lineHeight: 1.75,
                  maxWidth: '500px',
                  opacity: 0,
                  fontWeight: 400,
                }}
              >
                We engineer premium AI systems, web applications, and mobile experiences
                that reboot industries and delight users.
              </p>

              {/* CTA buttons */}
              <div
                className="animate-fade-up delay-3 flex flex-wrap gap-4"
                style={{ opacity: 0 }}
              >
                <Link to="/contact" className="keycap keycap-lg keycap-white">
                  Start a Project
                </Link>
                <Link
                  to="/portfolio"
                  className="keycap keycap-lg"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}
                >
                  View Work <ArrowRight size={16} />
                </Link>
                <button
                  onClick={() => setTerminalOpen(true)}
                  className="keycap keycap-md"
                  title="Ctrl+Alt+C"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}
                >
                  <TerminalIcon size={14} />
                  Run
                </button>
              </div>

              {/* Keyboard shortcut hint */}
              <div
                className="animate-fade-up delay-4 mt-8"
                style={{ opacity: 0, color: '#8a8a8e', fontSize: '0.75rem', fontFamily: "'Space Mono', monospace" }}
              >
                <span>tip: press </span>
                <span className="keycap keycap-xs" style={{ fontSize: '0.75rem', margin: '0 3px' }}>Ctrl</span>
                <span>+</span>
                <span className="keycap keycap-xs" style={{ fontSize: '0.75rem', margin: '0 3px' }}>Alt</span>
                <span>+</span>
                <span className="keycap keycap-xs" style={{ fontSize: '0.75rem', margin: '0 3px' }}>C</span>
                <span> to open terminal</span>
              </div>
            </div>

            {/* ── RIGHT: Robot mascot ── */}
            <div
              className="flex-1 flex justify-center lg:justify-end items-end animate-fade-in delay-3"
              style={{ opacity: 0, minHeight: 420, paddingBottom: 0 }}
            >
              <RobotMascot size="lg" />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          STATS
      ══════════════════════════════ */}
      <section className="py-24 relative">
        <div className="divider-mono mb-20" />
        <div className="container mx-auto px-6">
          <div className="boot-in grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard value={100} suffix="+" label="Projects Shipped" />
            <StatCard value={80} suffix="+" label="Happy Clients" />
            <StatCard value={15} suffix="+" label="Countries" />
            <StatCard value={98} suffix="%" label="Retention Rate" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          SERVICES PREVIEW
      ══════════════════════════════ */}
      <section className="py-28 relative">
        <div className="container mx-auto px-6">
          {/* Section header */}
          <div className="boot-in flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <p
                className="mono mb-3"
                style={{ color: '#8a8a8e', fontSize: '0.75rem', letterSpacing: '0.12em' }}
              >
                WHAT WE BUILD
              </p>
              <h2
                style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', letterSpacing: '-0.04em', lineHeight: 1 }}
              >
                Our Expertise.
              </h2>
            </div>
            <Link
              to="/services"
              className="keycap keycap-sm"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 6, alignSelf: 'flex-end' }}
            >
              All Services <ArrowRight size={14} />
            </Link>
          </div>

          <div className="divider-mono mb-14" />

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <div key={i} className={`boot-in`} style={{ transitionDelay: `${i * 0.07}s` }}>
                <ServiceKeyCard s={s} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          PROCESS — BOOT SEQUENCE
      ══════════════════════════════ */}
      <section className="py-28 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-dots-dark pointer-events-none"
          style={{ opacity: 0.6 }}
        />

        <div className="container mx-auto px-6 relative">
          <div className="boot-in text-center mb-20">
            <p className="mono mb-4" style={{ color: '#8a8a8e', fontSize: '0.75rem', letterSpacing: '0.12em' }}>
              HOW WE WORK
            </p>
            <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', letterSpacing: '-0.04em' }}>
              The Process.
            </h2>
          </div>

          {/* Horizontal connector */}
          <div className="relative">
            <div
              className="hidden md:block absolute top-[52px] left-1/4 right-1/4 h-px"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08) 20%, rgba(255,255,255,0.08) 80%, transparent)' }}
            />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Discover', desc: 'Deep analysis of your goals, constraints, and technical landscape.' },
                { step: '02', title: 'Blueprint', desc: 'System architecture and specifications designed to scale from day one.' },
                { step: '03', title: 'Build', desc: 'Clean code, agile iterations, and zero shortcuts on quality.' },
                { step: '04', title: 'Launch', desc: 'Seamless deployment with monitoring and continuous optimization.' },
              ].map((p, i) => (
                <div
                  key={i}
                  className="boot-in text-center"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className="keycap keycap-sm mx-auto mb-6 w-16 h-16 flex items-center justify-center rounded-xl">
                    <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '1rem', fontWeight: 700, color: '#f5f5f7' }}>
                      {p.step}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#f5f5f7', marginBottom: 8 }}>{p.title}</h3>
                  <p style={{ fontSize: '0.82rem', color: '#8a8a8e', lineHeight: 1.7 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          CTA
      ══════════════════════════════ */}
      <section className="py-40 relative overflow-hidden">
        {/* Large glow behind CTA */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            width: 600,
            height: 400,
            borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(255,255,255,0.04) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
        <div className="divider-mono mb-20" />

        <div className="container mx-auto px-6 text-center relative">
          <div className="boot-in max-w-3xl mx-auto">
            <p className="mono mb-6" style={{ color: '#8a8a8e', fontSize: '0.75rem', letterSpacing: '0.12em' }}>
              READY TO BUILD?
            </p>
            <h2
              style={{
                fontSize: 'clamp(3rem, 8vw, 6rem)',
                letterSpacing: '-0.04em',
                lineHeight: 1,
                marginBottom: '2rem',
              }}
            >
              Let's Engineer
              <br />
              the Future.
            </h2>
            <p style={{ color: '#8a8a8e', fontSize: '1.1rem', marginBottom: '3rem', maxWidth: 480, margin: '0 auto 3rem' }}>
              Partner with us to transform your vision into world-class software.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="keycap keycap-xl keycap-white">
                Initialize Project
              </Link>
              <Link
                to="/about"
                className="keycap keycap-xl"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}
              >
                Meet the Crew <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
