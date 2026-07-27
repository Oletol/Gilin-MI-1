import { Mail, MessageCircle, ArrowUpRight, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative bg-navy-950 py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-800 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950 to-navy-950" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full bg-gold-500/3 blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-48 h-48 rounded-full bg-navy-600/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <span className="text-gold-500 text-sm uppercase tracking-[0.3em] font-medium">Связаться</span>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-white mt-3 mb-4">
          Контакты
        </h2>
        <div className="section-divider w-24 mx-auto mb-8" />

        <p className="text-navy-300 text-base md:text-lg leading-relaxed mb-14 max-w-xl mx-auto">
          Открыт для сотрудничества в области цифровой лингвистики,
          управления переводческими проектами и интеграции ИИ
        </p>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto mb-12">
          {/* Email */}
          <a
            href="mailto:m.gilin@mail.ru"
            className="group bg-navy-900/50 border border-navy-800/50 rounded-2xl p-6 hover:border-gold-500/30 hover:bg-navy-900/70 transition-all duration-500 hover:shadow-lg hover:shadow-gold-500/5 hover:-translate-y-1 flex flex-col items-center text-center"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold-500/20 to-gold-600/10 flex items-center justify-center mb-4 group-hover:from-gold-500/30 group-hover:to-gold-600/20 transition-all duration-500">
              <Mail size={24} className="text-gold-400" />
            </div>
            <h3 className="text-white text-sm font-semibold mb-1 group-hover:text-gold-300 transition-colors duration-300">
              Электронная почта
            </h3>
            <p className="text-navy-400 text-xs">Написать письмо</p>
            <ArrowUpRight size={14} className="text-navy-600 mt-3 group-hover:text-gold-400 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {/* Telegram */}
          <a
            href="https://t.me/mikhail_gi/"
            className="group bg-navy-900/50 border border-navy-800/50 rounded-2xl p-6 hover:border-blue-500/30 hover:bg-navy-900/70 transition-all duration-500 hover:shadow-lg hover:shadow-blue-500/5 hover:-translate-y-1 flex flex-col items-center text-center"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 flex items-center justify-center mb-4 group-hover:from-blue-500/30 group-hover:to-blue-600/20 transition-all duration-500">
              <Send size={24} className="text-blue-400" />
            </div>
            <h3 className="text-white text-sm font-semibold mb-1 group-hover:text-blue-300 transition-colors duration-300">
              Telegram
            </h3>
            <p className="text-navy-400 text-xs">Быстрые сообщения</p>
            <ArrowUpRight size={14} className="text-navy-600 mt-3 group-hover:text-blue-400 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {/* Max messenger */}
          <a
            href="https://max.ru/u/f9LHodD0cOJT5w363DqBP85EcIh2-TH3OCswuM2TY3QKTwaJDetb0oJCAAM"
            className="group bg-navy-900/50 border border-navy-800/50 rounded-2xl p-6 hover:border-violet-500/30 hover:bg-navy-900/70 transition-all duration-500 hover:shadow-lg hover:shadow-violet-500/5 hover:-translate-y-1 flex flex-col items-center text-center"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500/20 to-violet-600/10 flex items-center justify-center mb-4 group-hover:from-violet-500/30 group-hover:to-violet-600/20 transition-all duration-500">
              <MessageCircle size={24} className="text-violet-400" />
            </div>
            <h3 className="text-white text-sm font-semibold mb-1 group-hover:text-violet-300 transition-colors duration-300">
              Max
            </h3>
            <p className="text-navy-400 text-xs">Мессенджер Max</p>
            <ArrowUpRight size={14} className="text-navy-600 mt-3 group-hover:text-violet-400 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* CTA */}
        <div className="inline-flex items-center gap-2 text-navy-500 text-sm">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Открыт к предложениям о сотрудничестве
        </div>
      </div>
    </section>
  );
}
