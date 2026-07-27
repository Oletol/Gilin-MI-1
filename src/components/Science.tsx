import { BookOpen, FileText, Mic, FlaskConical } from 'lucide-react';

interface ScienceItem {
  type: 'publication' | 'conference' | 'research';
  title: string;
  venue?: string;
  year: string;
  description?: string;
}

const scienceItems: ScienceItem[] = [
  {
    type: 'publication',
    title: 'Цифровая трансформация переводческой отрасли: вызовы и перспективы',
    venue: 'Вестник НИЯУ МИФИ / научное издание',
    year: '2024',
    description: 'Анализ влияния ИИ-технологий на трансформацию переводческих профессий и модели подготовки специалистов нового поколения',
  },
  {
    type: 'conference',
    title: 'Интеграция LLM в производственные процессы перевода',
    venue: 'Translation Forum Russia',
    year: '2023–2024',
    description: 'Доклады о практических аспектах внедрения больших языковых моделей в переводческие процессы',
  },
  {
    type: 'research',
    title: 'Методология оценки качества машинного перевода',
    venue: 'НИТУ МИСИС',
    year: '2023',
    description: 'Разработка критериев и метрик оценки качества MT-выхода в контексте постредактирования',
  },
  {
    type: 'publication',
    title: 'Риск-менеджмент в мультиязычных проектах локализации',
    venue: 'Отраслевое издание',
    year: '2022',
    description: 'Систематизация рисков и стратегий их митигации в крупных проектах перевода и локализации',
  },
  {
    type: 'conference',
    title: 'Автоматизация переводческих процессов: от CAT до AI',
    venue: 'Профессиональные конференции отрасли',
    year: '2021–2023',
    description: 'Серия докладов об эволюции инструментов автоматизации и их влиянии на профессию переводчика',
  },
];

const typeConfig = {
  publication: {
    icon: FileText,
    label: 'Публикация',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10 border-blue-500/20',
  },
  conference: {
    icon: Mic,
    label: 'Конференция',
    color: 'text-violet-400',
    bg: 'bg-violet-500/10 border-violet-500/20',
  },
  research: {
    icon: FlaskConical,
    label: 'Исследование',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10 border-emerald-500/20',
  },
};

export default function Science() {
  return (
    <section id="science" className="relative bg-navy-900 py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-700 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-700 to-transparent" />
        {/* Molecule-like decoration */}
        <svg className="absolute right-0 top-1/4 w-96 h-96 opacity-[0.02]" viewBox="0 0 400 400">
          <circle cx="200" cy="200" r="80" stroke="#f5c13e" fill="none" strokeWidth="1" />
          <circle cx="200" cy="200" r="150" stroke="#f5c13e" fill="none" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="8" fill="#f5c13e" />
          <circle cx="300" cy="100" r="8" fill="#f5c13e" />
          <circle cx="100" cy="300" r="8" fill="#f5c13e" />
          <circle cx="300" cy="300" r="8" fill="#f5c13e" />
          <line x1="100" y1="100" x2="300" y2="300" stroke="#f5c13e" strokeWidth="0.5" />
          <line x1="300" y1="100" x2="100" y2="300" stroke="#f5c13e" strokeWidth="0.5" />
        </svg>
        <div className="absolute -left-20 bottom-1/4 w-72 h-72 rounded-full bg-violet-500/3 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-gold-500 text-sm uppercase tracking-[0.3em] font-medium">Исследования</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mt-3 mb-4">
            Наука
          </h2>
          <div className="section-divider w-24 mx-auto mb-6" />
          <p className="text-navy-300 text-base max-w-2xl mx-auto leading-relaxed">
            Публикации, доклады и исследовательская деятельность на стыке лингвистики, технологий и управления
          </p>
        </div>

        {/* Science cards */}
        <div className="space-y-5">
          {scienceItems.map((item, i) => {
            const config = typeConfig[item.type];
            const Icon = config.icon;

            return (
              <div
                key={i}
                className="group bg-navy-950/50 border border-navy-800/40 rounded-2xl p-6 md:p-7 hover:border-navy-700/60 hover:bg-navy-950/70 transition-all duration-500 hover:shadow-lg hover:shadow-navy-950/50"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                  {/* Icon + Type */}
                  <div className="flex items-center gap-3 md:flex-col md:items-center md:min-w-[100px]">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${
                      item.type === 'publication' ? 'from-blue-500/15 to-blue-600/5' :
                      item.type === 'conference' ? 'from-violet-500/15 to-violet-600/5' :
                      'from-emerald-500/15 to-emerald-600/5'
                    } flex items-center justify-center`}>
                      <Icon size={18} className={config.color} />
                    </div>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider border ${config.bg} ${config.color}`}>
                      {config.label}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="text-white text-base md:text-lg font-semibold leading-snug group-hover:text-gold-300 transition-colors duration-300">
                        {item.title}
                      </h3>
                    </div>

                    {item.venue && (
                      <div className="flex items-center gap-2 text-gold-400/70 text-sm font-medium mb-2">
                        <BookOpen size={13} />
                        {item.venue}
                      </div>
                    )}

                    {item.description && (
                      <p className="text-navy-300 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>

                  {/* Year */}
                  <div className="md:text-right">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-navy-800/50 text-navy-300 border border-navy-700/30">
                      {item.year}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
