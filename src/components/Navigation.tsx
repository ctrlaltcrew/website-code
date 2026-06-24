import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pressedKey, setPressedKey] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [location.pathname]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleKeyPress = (key: string) => {
    setPressedKey(key);
    setTimeout(() => setPressedKey(null), 150);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-white/5'
          : ''
      }`}
      style={{
        background: scrolled
          ? 'rgba(10,10,12,0.92)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(24px)' : 'none',
      }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* ── Logo: Three keycap pills ── */}
          <Link
            to="/"
            className="flex items-center gap-1.5 group"
            onClick={() => handleKeyPress('logo')}
          >
            <div
              className={`keycap keycap-logo ${pressedKey === 'logo' ? 'pressed' : ''}`}
              style={{ letterSpacing: '0.05em' }}
            >
              Ctrl
            </div>
            <div
              className={`keycap keycap-logo ${pressedKey === 'logo' ? 'pressed' : ''}`}
              style={{ letterSpacing: '0.05em', transitionDelay: '0.02s' }}
            >
              Alt
            </div>
            <div
              className={`keycap keycap-logo keycap-white ${pressedKey === 'logo' ? 'pressed' : ''}`}
              style={{ letterSpacing: '0.05em', transitionDelay: '0.04s' }}
            >
              Crew
            </div>
          </Link>

          {/* ── Desktop Nav ── */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => handleKeyPress(item.name)}
                className={`keycap keycap-xs ${isActive(item.path) ? 'active-key' : ''} ${
                  pressedKey === item.name ? 'pressed' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}

            <div className="ml-3">
              <Link
                to="/contact"
                onClick={() => handleKeyPress('cta')}
                className={`keycap keycap-sm keycap-white ${pressedKey === 'cta' ? 'pressed' : ''}`}
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* ── Mobile ── */}
          <button
            className="md:hidden keycap keycap-xs"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

        {/* ── Mobile Nav ── */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out ${
            isOpen ? 'max-h-screen opacity-100 pb-6' : 'max-h-0 opacity-0'
          }`}
        >
          <div
            className="mt-2 p-4 rounded-2xl border border-white/6 space-y-2"
            style={{ background: 'rgba(12,12,14,0.98)', backdropFilter: 'blur(20px)' }}
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`keycap keycap-sm w-full justify-start ${isActive(item.path) ? 'keycap-white' : ''}`}
                style={{ display: 'flex' }}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="keycap keycap-sm keycap-white w-full justify-center"
                style={{ display: 'flex' }}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;