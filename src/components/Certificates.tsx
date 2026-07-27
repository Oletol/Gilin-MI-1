import { useState } from 'react';
import { Award, BadgeCheck, FileText, ExternalLink, Eye } from 'lucide-react';
import Lightbox from './Lightbox';

import certPmp from '../assets/certificates/cert-pmp.png';
import certTrados from '../assets/certificates/cert-trados.png';
import certMemoq from '../assets/certificates/cert-memoq.png';
import certLocalization from '../assets/certificates/cert-localization.png';
import certIso from '../assets/certificates/cert-iso.png';
import certAi from '../assets/certificates/cert-ai.png';

interface Certificate {
  title: string;
  issuer: string;
  year: string;
  category: 'professional' | 'technology' | 'management';
  description?: string;
  image: string;
}

const certificates: Certificate[] = [
  {
    title: 'Project Management Professional (PMP)',
    issuer: 'Project Management Institute',
    year: '2021',
    category: 'management',
    description: 'Международная сертификация в области управления проектами',
    image: certPmp,
  },
  {
    title: 'SDL Trados Studio — Advanced',
    issuer: 'RWS / SDL',
    year: '2020',
    category: 'technology',
    description: 'Продвинутый уровень владения CAT-инструментами',
    image: certTrados,
  },
  {
    title: 'memoQ Server Administrator',
    issuer: 'memoQ',
    year: '2021',
    category: 'technology',
    description: 'Администрирование серверных решений для управления переводами',
    image: certMemoq,
  },
  {
    title: 'Локализация и интернационализация ПО',
    issuer: 'Профессиональная сертификация',
    year: '2019',
    category: 'professional',
    description: 'Стандарты и лучшие практики локализации программного обеспечения',
    image: certLocalization,
  },
  {
    title: 'Управление качеством перевода (ISO 17100)',
    issuer: 'Международный стандарт',
    year: '2020',
    category: 'professional',
    description: 'Требования к процессам перевода и обеспечению качества',
    image: certIso,
  },
  {
    title: 'AI and Machine Learning for Translation',
    issuer: 'Coursera / DeepLearning.AI',
    year: '2023',
    category: 'technology',
    description: 'Применение ИИ и машинного обучения в переводческих технологиях',
    image: certAi,
  },
];

const categoryColors = {
  professional: {
    gradient: 'from-amber-500/20 to-orange-600/10',
    text: 'text-amber-400',
    border: 'border-amber-500/20',
    bg: 'bg-amber-500/10',
    label: 'Профессиональная',
  },
  technology: {
    gradient: 'from-cyan-500/20 to-blue-600/10',
    text: 'text-cyan-400',
    border: 'border-cyan-500/20',
    bg: 'bg-cyan-500/10',
    label: 'Технологическая',
  },
  management: {
    gradient: 'from-gold-500/20 to-gold-600/10',
    text: 'text-gold-400',
    border: 'border-gold-500/20',
    bg: 'bg-gold-500/10',
    label: 'Управление',
  },
};

export default function Certificates() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section id="certificates" className="relative bg-navy-950 py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-800 to-transparent" />
        <div className="absolute top-1/3 right-0 w-80 h-80 rounded-full bg-cyan-500/3 blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-60 h-60 rounded-full bg-amber-500/3 blur-3xl" />
        <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-[0.01]" viewBox="0 0 500 500">
          <rect x="50" y="50" width="400" height="400" rx="20" stroke="#f5c13e" fill="none" strokeWidth="2" />
          <rect x="80" y="80" width="340" height="340" rx="10" stroke="#f5c13e" fill="none" strokeWidth="0.5" strokeDasharray="8,4" />
          <circle cx="250" cy="250" r="60" stroke="#f5c13e" fill="none" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-gold-500 text-sm uppercase tracking-[0.3em] font-medium">Квалификация</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mt-3 mb-4">
            Сертификаты
          </h2>
          <div className="section-divider w-24 mx-auto mb-6" />
          <p className="text-navy-300 text-base max-w-2xl mx-auto leading-relaxed">
            Профессиональные сертификации и повышение квалификации в области перевода, технологий и управления
          </p>
        </div>

        {/* Certificates grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {certificates.map((cert, i) => {
            const colors = categoryColors[cert.category];

            return (
              <div
                key={i}
                className="group relative bg-navy-900/40 border border-navy-800/50 rounded-2xl p-6 hover:border-navy-700/60 hover:bg-navy-900/60 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 flex flex-col"
              >
                {/* Top row: icon + year */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center transition-all duration-500`}>
                    <Award size={20} className={colors.text} />
                  </div>
                  <span className="text-navy-500 text-xs font-mono">{cert.year}</span>
                </div>

                {/* Title */}
                <h3 className="text-white text-[15px] font-semibold mb-2 leading-snug group-hover:text-gold-300 transition-colors duration-300">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <div className="flex items-center gap-1.5 text-navy-400 text-xs font-medium mb-3">
                  <BadgeCheck size={12} className={colors.text} />
                  {cert.issuer}
                </div>

                {/* Description */}
                {cert.description && (
                  <p className="text-navy-400 text-xs leading-relaxed mt-auto">
                    {cert.description}
                  </p>
                )}

                {/* Category badge + open button */}
                <div className="mt-4 pt-4 border-t border-navy-800/30 flex items-center justify-between">
                  <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider border ${colors.bg} ${colors.border} ${colors.text}`}>
                    {colors.label}
                  </span>
                  <button
                    onClick={() => setLightbox({ src: cert.image, alt: cert.title })}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-medium hover:bg-gold-500/20 hover:border-gold-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:shadow-gold-500/10"
                  >
                    <FileText size={12} />
                    <span>Открыть</span>
                    <ExternalLink size={10} />
                  </button>
                </div>

                {/* Corner decoration */}
                <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Eye size={10} className="absolute top-3 right-3 text-navy-500" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <Lightbox
          src={lightbox.src}
          alt={lightbox.alt}
          onClose={() => setLightbox(null)}
        />
      )}
    </section>
  );
}