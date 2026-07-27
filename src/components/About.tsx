import { Users, GraduationCap, Globe, BrainCircuit } from 'lucide-react';

const aboutItems = [
  {
    icon: Users,
    title: 'Лидерство',
    text: 'Более 10 лет в руководстве отраслевыми командами',
  },
  {
    icon: GraduationCap,
    title: 'Образование',
    text: 'Владелец продукта флагманской образовательной программы',
  },
  {
    icon: Globe,
    title: 'Сообщество',
    text: 'Член оргкомитета Translation Forum Russia',
  },
  {
    icon: BrainCircuit,
    title: 'Экспертиза ИИ',
    text: 'Приглашенный эксперт в области интеграции и управления ИИ',
  },
];

export default function About() {
  return (
    <section id="about" className="relative bg-navy-950 py-24 md:py-32">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-gold-500 text-sm uppercase tracking-[0.3em] font-medium">Знакомство</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mt-3 mb-4">
            О себе
          </h2>
          <div className="section-divider w-24 mx-auto" />
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {aboutItems.map((item, i) => (
            <div
              key={i}
              className="group relative bg-navy-900/50 border border-navy-800/60 rounded-2xl p-7 md:p-8 hover:border-gold-500/30 hover:bg-navy-900/70 transition-all duration-500 hover:shadow-xl hover:shadow-gold-500/5 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-500/20 to-gold-600/10 flex items-center justify-center mb-5 group-hover:from-gold-500/30 group-hover:to-gold-600/20 transition-all duration-500">
                <item.icon size={24} className="text-gold-400" />
              </div>

              {/* Content */}
              <h3 className="text-white text-lg font-semibold mb-2 group-hover:text-gold-300 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-navy-300 leading-relaxed text-[15px]">
                {item.text}
              </p>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl">
                <div className="absolute top-0 right-0 w-px h-8 bg-gradient-to-b from-gold-500/30 to-transparent" />
                <div className="absolute top-0 right-0 h-px w-8 bg-gradient-to-l from-gold-500/30 to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
