import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero-gradient relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />

        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/6 w-72 h-72 rounded-full bg-gold-500/5 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/6 w-96 h-96 rounded-full bg-navy-500/10 blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-navy-700/10 blur-3xl" />

        {/* Decorative lines */}
        <svg className="absolute top-0 right-0 w-1/2 h-full opacity-5" viewBox="0 0 500 800">
          <line x1="100" y1="0" x2="400" y2="800" stroke="#f5c13e" strokeWidth="0.5" />
          <line x1="200" y1="0" x2="500" y2="800" stroke="#f5c13e" strokeWidth="0.5" />
          <line x1="0" y1="200" x2="500" y2="600" stroke="#f5c13e" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Avatar */}
        <div className="animate-scale-in mb-8">
          <div className="relative inline-block">
            <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-2 border-gold-400/30 p-1 animate-pulse-glow">
              <img
                src="/images/avatar.jpg"
                alt="Михаил Гилин"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-navy-950 text-xs font-bold">✓</span>
            </div>
          </div>
        </div>

        {/* Name */}
        <h1 className="animate-fade-in-up delay-200 font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight mb-4">
          Гилин Михаил
          <br />
          <span className="gold-gradient-text">Игоревич</span>
        </h1>

        {/* Subtitle */}
        <p className="animate-fade-in-up delay-400 text-navy-300 text-base md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed mb-10 font-light">
          На стыке практического перевода, управления проектами
          <br className="hidden md:block" />
          и передовых лингвистических технологий
        </p>

        {/* Stat badges */}
        <div className="animate-fade-in-up delay-600 flex flex-wrap justify-center gap-4 md:gap-6 mb-14">
          <div className="glass-card rounded-xl px-5 py-3 text-center">
            <div className="text-gold-400 text-2xl font-bold">10+</div>
            <div className="text-navy-300 text-xs uppercase tracking-wider mt-1">лет опыта</div>
          </div>
          <div className="glass-card rounded-xl px-5 py-3 text-center">
            <div className="text-gold-400 text-2xl font-bold">AI</div>
            <div className="text-navy-300 text-xs uppercase tracking-wider mt-1">интеграция</div>
          </div>
          <div className="glass-card rounded-xl px-5 py-3 text-center">
            <div className="text-gold-400 text-2xl font-bold">МИСИС</div>
            <div className="text-navy-300 text-xs uppercase tracking-wider mt-1">программа</div>
          </div>
        </div>

        {/* Scroll indicator */}
        <a href="#about" className="animate-fade-in-up delay-800 inline-flex flex-col items-center gap-2 text-navy-400 hover:text-gold-400 transition-colors group">
          <span className="text-xs uppercase tracking-[0.2em]">Подробнее</span>
          <ChevronDown size={20} className="animate-bounce" />
        </a>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-950 to-transparent" />
    </section>
  );
}
