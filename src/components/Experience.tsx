import { Building2, Calendar, ChevronRight } from 'lucide-react';

interface ExperienceEntry {
  period: string;
  title: string;
  organization: string;
  bullets: string[];
  current?: boolean;
}

const experiences: ExperienceEntry[] = [
  {
    period: 'с 2022 г.',
    title: 'Руководитель магистерской программы',
    organization: '«Цифровая лингвистика и локализация» НИТУ МИСИС',
    current: true,
    bullets: [
      'Создал с нуля экспертную программу подготовки специалистов в области цифровых инструментов: проектных менеджеров и менеджеров локализации, промпт-инженеров, технологов, терминологов',
      'Интегрировал программу с профильными подразделениями ведущих компаний лингвистического рынка',
      'Организовал совместную реализацию отраслевых проектов в области цифровизации и автоматизации переводческих инструментов',
    ],
  },
  {
    period: '2020–2025 гг.',
    title: 'Руководитель локализации маркетплейса',
    organization: 'Qlekta',
    bullets: [
      'Управлял локализацией информационных продуктов маркетплейса',
    ],
  },
  {
    period: '2020–2022 гг.',
    title: 'Руководитель проектного отдела',
    organization: 'Бюро переводов «Альянс ПРО»',
    bullets: [
      'Руководил отделом управления переводческими проектами',
      'Выстроил систему контроля качества и автоматизации производственных процессов',
      'Внедрил CAT-инструменты и системы управления терминологией',
    ],
  },
  {
    period: '2014–2020 гг.',
    title: 'Руководитель проектов перевода и локализации',
    organization: 'Janus Worldwide / Логрус',
    bullets: [
      'Координировал масштабные мультиязычные проекты перевода и локализации',
      'Управлял командами переводчиков, редакторов и инженеров локализации',
      'Внедрял инструменты автоматизации переводческих процессов и контроля качества',
      'Обеспечивал выполнение проектов в срок и в рамках бюджета',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative bg-navy-950 py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-800 to-transparent" />
        <svg className="absolute left-0 top-0 w-full h-full opacity-[0.015]" viewBox="0 0 1000 800">
          <circle cx="200" cy="400" r="300" stroke="#f5c13e" fill="none" strokeWidth="0.5" />
          <circle cx="800" cy="300" r="250" stroke="#f5c13e" fill="none" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-gold-500 text-sm uppercase tracking-[0.3em] font-medium">Карьера</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mt-3 mb-4">
            Отрасль
          </h2>
          <div className="section-divider w-24 mx-auto" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-gold-500/50 via-navy-700 to-transparent" />

          <div className="space-y-10 md:space-y-14">
            {experiences.map((exp, i) => (
              <div key={i} className="relative pl-16 md:pl-20 group">
                {/* Timeline dot */}
                <div className={`absolute left-4 md:left-6 top-1 w-4 h-4 rounded-full border-2 ${
                  exp.current
                    ? 'border-gold-400 bg-gold-400/30 shadow-lg shadow-gold-400/20'
                    : 'border-navy-600 bg-navy-800 group-hover:border-gold-500/50'
                } transition-all duration-300`}>
                  {exp.current && (
                    <div className="absolute inset-0 rounded-full bg-gold-400/30 animate-ping" />
                  )}
                </div>

                {/* Content card */}
                <div className="bg-navy-900/40 border border-navy-800/50 rounded-2xl p-6 md:p-8 hover:border-navy-700/70 hover:bg-navy-900/60 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-navy-950/50">
                  {/* Period badge */}
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${
                      exp.current
                        ? 'bg-gold-500/15 text-gold-400 border border-gold-500/20'
                        : 'bg-navy-800/60 text-navy-300 border border-navy-700/40'
                    }`}>
                      <Calendar size={12} />
                      {exp.period}
                    </span>
                    {exp.current && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-emerald-500/15 text-emerald-400 border border-emerald-500/20">
                        Текущая
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-white text-lg md:text-xl font-bold mb-1.5 leading-snug">
                    {exp.title}
                  </h3>

                  {/* Organization */}
                  <div className="flex items-center gap-2 text-gold-400/80 text-sm font-medium mb-5">
                    <Building2 size={14} />
                    {exp.organization}
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-3">
                    {exp.bullets.map((bullet, j) => (
                      <li key={j} className="flex items-start gap-3 text-navy-300 text-sm leading-relaxed">
                        <ChevronRight size={14} className="text-gold-500/60 mt-1 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
