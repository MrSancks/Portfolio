'use client';

export default function AnimatedBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.22),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(14,165,233,0.18),_transparent_60%)]" />
      <div className="absolute inset-0 animate-gradient-shift bg-[linear-gradient(130deg,_rgba(2,6,23,0.95),_rgba(30,27,75,0.72),_rgba(8,47,73,0.68))]" />
      <div className="absolute -top-32 left-1/4 h-72 w-72 -translate-x-1/2 rounded-full bg-[#38bdf8]/30 blur-3xl animate-blob" />
      <div className="absolute bottom-0 right-0 h-80 w-80 translate-x-1/3 translate-y-1/3 rounded-full bg-[#6366f1]/25 blur-3xl animate-blob animation-delay-4000" />
      <div className="absolute top-1/3 right-1/4 h-64 w-64 translate-x-1/2 -translate-y-1/2 rounded-full bg-[#a855f7]/20 blur-3xl animate-blob animation-delay-2000" />
      <svg
        className="absolute bottom-[-10%] left-1/2 h-[70vh] min-h-[420px] w-[140vw] -translate-x-1/2 text-cyan-100/10 animate-wave"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,224L48,224C96,224,192,224,288,224C384,224,480,224,576,229.3C672,235,768,245,864,229.3C960,213,1056,171,1152,165.3C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
    </div>
  );
}
