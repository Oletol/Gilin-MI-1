import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'О себе', href: '#about' },
  { label: 'Профиль', href: '#profile' },
  { label: 'Опыт', href: '#experience' },
  { label: 'Наука', href: '#science' },
  { label: 'Сертификаты', href: '#certificates' },
  { label: 'Благодарности', href: '#gratitude' },
  { label: 'Контакты', href: '#contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-navy-950/90 backdrop-blur-xl shadow-lg shadow-navy-950/30 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-white font-display text-xl font-semibold tracking-wide flex-shrink-0">
          М<span className="text-gold-400">.</span>Гилин
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-navy-200 hover:text-gold-400 text-sm font-medium tracking-wide transition-colors duration-300 relative group whitespace-nowrap"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white p-2"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-navy-950/95 backdrop-blur-xl border-t border-navy-800/50 mt-2">
          <div className="px-6 py-4 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block text-navy-200 hover:text-gold-400 hover:bg-navy-800/30 text-sm font-medium py-2.5 px-3 rounded-lg transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
