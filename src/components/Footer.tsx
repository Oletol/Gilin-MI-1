export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-navy-800/30 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-navy-500 text-sm">
          © {new Date().getFullYear()} Гилин Михаил Игоревич
        </div>
        <div className="flex items-center gap-1 text-navy-600 text-xs">
          <span>Персональная страница</span>
          <span className="text-gold-500/40 mx-1">•</span>
          <span>На стыке перевода и технологий</span>
        </div>
      </div>
    </footer>
  );
}
