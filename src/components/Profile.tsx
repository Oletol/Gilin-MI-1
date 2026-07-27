import { Workflow, Bot, ShieldCheck, AlertTriangle, Sparkles } from 'lucide-react';

const profileItems = [
  {
    icon: Workflow,
    title: 'Проектная деятельность',
    text: 'Организация и автоматизация проектной деятельности в переводе',
    color: 'from-blue-500/20 to-indigo-600/10',
    hoverColor: 'group-hover:from-blue-500/30 group-hover:to-indigo-600/20',
    iconColor: 'text-blue-400',
  },
  {
    icon: Bot,
    title: 'Инструменты ИИ',
    text: 'Интеграция и администрирование инструментов ИИ',
    color: 'from-violet-500/20 to-purple-600/10',
    hoverColor: 'group-hover:from-violet-500/30 group-hover:to-purple-600/20',
    iconColor: 'text-violet-400',
  },
  {
    icon: ShieldCheck,
    title: 'Качество и аудит',
    text: 'Управление качеством и аудит',
    color: 'from-emerald-500/20 to-green-600/10',
    hoverColor: 'group-hover:from-emerald-500/30 group-hover:to-green-600/20',
    iconColor: 'text-emerald-400',
  },
  {
    icon: AlertTriangle,
    title: 'Риск-менеджмент',
    text: 'Риск-менеджмент в производственных процессах',
    color: 'from-amber-500/20 to-orange-600/10',
    hoverColor: 'group-hover:from-amber-500/30 group-hover:to-orange-600/20',
    iconColor: 'text-amber-400',
  },
  {
    icon: Sparkles,
    title: 'Цифровая трансформация',
    text: 'Цифровая трансформация лингвистических профессий',
    color: 'from-gold-500/20 to-gold-600/10',
    hoverColor: 'group-hover:from-gold-500/30 group-hover:to-gold-600/20',
    iconColor: 'text-gold-400',
  },
];

export default function Profile() {
  return (
    <section id="profile" className="relative bg-navy-900 py-24 md:py-32 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-700 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-700 to-transparent" />
        <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-gold-500/3 blur-3xl" />
        <div className="absolute -right-20 top-1/3 w-60 h-60 rounded-full bg-navy-500/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-gold-500 text-sm uppercase tracking-[0.3em] font-medium">Компетенции</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mt-3 mb-4">
            Профиль
          </h2>
          <div className="section-divider w-24 mx-auto" />
        </div>

        {/* Profile items */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {profileItems.map((item, i) => (
            <div
              key={i}
              className={`group relative bg-navy-950/50 border border-navy-800/40 rounded-2xl p-6 hover:border-navy-700/60 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 ${
                i === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className={`w-11 h-11 rounded-lg bg-gradient-to-br ${item.color} ${item.hoverColor} flex items-center justify-center mb-4 transition-all duration-500`}>
                <item.icon size={20} className={item.iconColor} />
              </div>

              <h3 className="text-white text-base font-semibold mb-2">
                {item.title}
              </h3>

              <p className="text-navy-300 text-sm leading-relaxed">
                {item.text}
              </p>

              {/* Number */}
              <div className="absolute top-5 right-6 text-navy-800/50 text-4xl font-bold font-display">
                {String(i + 1).padStart(2, '0')}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
