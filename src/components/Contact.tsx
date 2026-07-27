import { Mail, MessageCircle, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative bg-navy-900 py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-700 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-900 to-navy-950" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-gold-500/3 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <span className="text-gold-500 text-sm uppercase tracking-[0.3em] font-medium">Связаться</span>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-white mt-3 mb-4">
          Контакт
        </h2>
        <div className="section-divider w-24 mx-auto mb-8" />

        <p className="text-navy-300 text-base md:text-lg leading-relaxed mb-12 max-w-xl mx-auto">
          Открыт для сотрудничества в области цифровой лингвистики,
          управления переводческими проектами и интеграции ИИ
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:contact@example.com"
            className="group flex items-center gap-3 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 font-semibold px-7 py-3.5 rounded-xl hover:from-gold-400 hover:to-gold-500 transition-all duration-300 shadow-lg shadow-gold-500/20 hover:shadow-gold-500/30 hover:-translate-y-0.5"
          >
            <Mail size={18} />
            Написать письмо
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <a
            href="#"
            className="group flex items-center gap-3 bg-navy-800/60 border border-navy-700/50 text-navy-200 font-medium px-7 py-3.5 rounded-xl hover:bg-navy-800/80 hover:border-navy-600/50 hover:text-white transition-all duration-300 hover:-translate-y-0.5"
          >
            <MessageCircle size={18} />
            Telegram
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
