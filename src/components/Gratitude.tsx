import { Heart, Star, Quote, FileText, ExternalLink } from 'lucide-react';

interface GratitudeItem {
  from: string;
  role: string;
  text: string;
  year: string;
  fileUrl: string;
}

const gratitudeItems: GratitudeItem[] = [
  {
    from: 'НИТУ МИСИС',
    role: 'Институт лингвистики и межкультурной коммуникации',
    text: 'За выдающийся вклад в создание и развитие магистерской программы «Цифровая лингвистика и локализация», формирование нового подхода к подготовке специалистов отрасли',
    year: '2024',
    fileUrl: '/gratitude/misis.html',
  },
  {
    from: 'Translation Forum Russia',
    role: 'Оргкомитет форума',
    text: 'За многолетнее активное участие в организации и проведении крупнейшего отраслевого мероприятия, вклад в развитие профессионального сообщества',
    year: '2023',
    fileUrl: '/gratitude/tfr.html',
  },
  {
    from: 'Ассоциация переводческих компаний',
    role: 'Профессиональное объединение',
    text: 'За содействие в продвижении стандартов качества и профессиональной этики в переводческой индустрии',
    year: '2022',
    fileUrl: '/gratitude/association.html',
  },
  {
    from: 'Qlekta',
    role: 'Руководство компании',
    text: 'За выстраивание системы локализации продуктов маркетплейса и обеспечение высокого качества мультиязычного контента',
    year: '2023',
    fileUrl: '/gratitude/qlekta.html',
  },
];

export default function Gratitude() {
  return (
    <section id="gratitude" className="relative bg-navy-900 py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-700 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-700 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gold-500/2 blur-3xl" />

        {/* Decorative stars */}
        <svg className="absolute right-10 top-20 opacity-[0.03]" width="120" height="120" viewBox="0 0 120 120">
          <polygon points="60,5 72,40 110,40 80,62 90,98 60,78 30,98 40,62 10,40 48,40" fill="#f5c13e" />
        </svg>
        <svg className="absolute left-10 bottom-20 opacity-[0.02]" width="80" height="80" viewBox="0 0 120 120">
          <polygon points="60,5 72,40 110,40 80,62 90,98 60,78 30,98 40,62 10,40 48,40" fill="#f5c13e" />
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-gold-500 text-sm uppercase tracking-[0.3em] font-medium">Признание</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mt-3 mb-4">
            Благодарности
          </h2>
          <div className="section-divider w-24 mx-auto mb-6" />
          <p className="text-navy-300 text-base max-w-2xl mx-auto leading-relaxed">
            Благодарственные письма и отзывы от организаций и профессионального сообщества
          </p>
        </div>

        {/* Gratitude cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {gratitudeItems.map((item, i) => (
            <div
              key={i}
              className="group relative bg-navy-950/50 border border-navy-800/40 rounded-2xl p-7 hover:border-gold-500/20 hover:bg-navy-950/70 transition-all duration-500 hover:shadow-xl hover:shadow-gold-500/5"
            >
              {/* Quote icon */}
              <div className="absolute top-5 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <Quote size={40} className="text-gold-400" />
              </div>

              {/* Header */}
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-500/20 to-gold-600/10 flex items-center justify-center flex-shrink-0">
                  <Star size={20} className="text-gold-400" />
                </div>
                <div>
                  <h3 className="text-white text-base font-semibold group-hover:text-gold-300 transition-colors duration-300">
                    {item.from}
                  </h3>
                  <p className="text-navy-400 text-xs mt-0.5">{item.role}</p>
                </div>
              </div>

              {/* Text */}
              <p className="text-navy-300 text-sm leading-relaxed italic pl-0.5 border-l-2 border-gold-500/20 ml-1 pl-4">
                «{item.text}»
              </p>

              {/* Footer: year + file link */}
              <div className="mt-5 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-gold-500/50">
                  <Heart size={12} />
                  <Heart size={10} />
                  <Heart size={8} />
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-navy-500 text-xs font-mono">{item.year}</span>
                  <a
                    href={item.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-medium hover:bg-gold-500/20 hover:border-gold-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:shadow-gold-500/10"
                  >
                    <FileText size={12} />
                    <span>Открыть письмо</span>
                    <ExternalLink size={10} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
