import { useEffect, useCallback } from 'react';
import { X, ZoomIn } from 'lucide-react';

interface LightboxProps {
  src: string;
  alt: string;
  onClose: () => void;
}

export default function Lightbox({ src, alt, onClose }: LightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose],
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleKeyDown]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-950/90 backdrop-blur-md p-4 sm:p-8 animate-fade-in"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 w-10 h-10 rounded-full bg-navy-800/80 border border-navy-700/50 flex items-center justify-center text-navy-300 hover:text-white hover:bg-navy-700/80 transition-all duration-200"
      >
        <X size={20} />
      </button>

      {/* Hint */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-navy-500 text-xs flex items-center gap-1.5">
        <span>Нажмите Esc или за пределами изображения для закрытия</span>
      </div>

      {/* Image container */}
      <div
        className="relative max-w-5xl max-h-[90vh] w-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={src}
          alt={alt}
          className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl shadow-navy-950/60 border border-navy-700/30"
        />

        {/* Open in new tab */}
        <a
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-3 right-3 w-9 h-9 rounded-lg bg-navy-900/80 border border-navy-700/40 flex items-center justify-center text-navy-300 hover:text-gold-400 hover:bg-navy-800/90 transition-all duration-200"
          title="Открыть в новой вкладке"
        >
          <ZoomIn size={16} />
        </a>
      </div>
    </div>
  );
}
