import React, { useEffect, useRef, useState } from 'react';

const Pill = ({ text }) => (
  <span className="rounded-full px-3 py-1 text-xs font-semibold" style={{ backgroundColor: '#7C7AA1AD', color: '#23ED30' }}>{text}</span>
);

function useElementWidth() {
  const ref = useRef(null);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const update = () => setWidth(el.clientWidth || 0);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return { ref, width };
}

const SmoothMini = ({ colorStops = ['#10b981', '#60a5fa', '#a855f7'], height = 64 }) => {
  const { ref, width } = useElementWidth();
  const viewW = Math.max(220, width);
  const viewH = height;
  const padL = 12;
  const padB = 10;

  const pts = Array.from({ length: 40 }, (_, i) => {
    const x = i / 39;
    const y = 0.5 + Math.sin(i * 0.35) * 0.18 + Math.sin(i * 0.9) * 0.07 + (i > 30 ? 0.15 : 0) - x * 0.03;
    return { x, y };
  }).map(({ x, y }) => ({
    x: padL + x * (viewW - padL),
    y: viewH - padB - y * (viewH - 2 * padB)
  }));

  const d = pts.reduce((acc, p, idx) => {
    if (idx === 0) return `M ${p.x} ${p.y}`;
    const prev = pts[idx - 1];
    const cx = (prev.x + p.x) / 2;
    const cy = (prev.y + p.y) / 2;
    return acc + ` Q ${cx} ${cy} ${p.x} ${p.y}`;
  }, '');

  const current = pts[Math.floor(pts.length * 0.9)] || { x: 0, y: 0 };

  return (
    <div ref={ref} className="w-full h-full">
      <svg viewBox={`0 0 ${viewW} ${viewH}`} className="w-full h-full" style={{ overflow: 'visible' }}>
        <defs>
          <linearGradient id="kpiLine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={colorStops[0]} />
            <stop offset="60%" stopColor={colorStops[1]} />
            <stop offset="100%" stopColor={colorStops[2]} />
          </linearGradient>
          <filter id="kpiGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path d={d} fill="none" stroke="url(#kpiLine)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx={current.x} cy={current.y} r="9" fill={colorStops[2]} filter="url(#kpiGlow)" opacity="0.35" />
        <circle cx={current.x} cy={current.y} r="5" fill="#0B1020" />
      </svg>
    </div>
  );
};

const ConversionForecast = () => {
  // Simple static points for the right chart (scaled to view)
  const points = [
    { x: 0.05, y: 0.85 },
    { x: 0.22, y: 0.70 },
    { x: 0.38, y: 0.70 },
    { x: 0.52, y: 0.50 },
    { x: 0.70, y: 0.40 },
    { x: 0.82, y: 0.40 },
    { x: 0.95, y: 0.20 },
  ];
  const viewW = 700;
  const viewH = 320;
  const pad = { l: 60, r: 16, t: 24, b: 36 };

  const px = p => pad.l + p.x * (viewW - pad.l - pad.r);
  const py = p => pad.t + p.y * (viewH - pad.t - pad.b);

  const d = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${px(p)} ${py(p)}`).join(' ');
  const last = points[points.length - 1];

  const yTicks = [0.85, 0.70, 0.50, 0.40, 0.20];

  return (
    <div className="bg-[#0B1020] rounded-xl border border-[#252B42] p-4 h-full">
      <div className="text-white text-xl font-semibold mb-3">Conversion Forecast</div>
      <svg viewBox={`0 0 ${viewW} ${viewH}`} className="w-full h-[320px]">
        <defs>
          <pattern id="hGrid" width="4" height="32" patternUnits="userSpaceOnUse">
            <path d={`M 0 0 L ${viewW} 0`} stroke="rgba(148,163,184,0.15)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect x="0" y="0" width={viewW} height={viewH} fill="transparent" />
        {yTicks.map((y, i) => (
          <g key={i}>
            <text x={12} y={py({ x: 0, y }) + 4} className="fill-gray-400" fontSize="12">8M</text>
            <line x1={pad.l} y1={py({ x: 0, y })} x2={viewW - pad.r} y2={py({ x: 0, y })} stroke="rgba(148,163,184,0.15)" strokeWidth="1" />
          </g>
        ))}
        <path d={d} fill="none" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />
        <circle cx={px(last)} cy={py(last)} r="4" fill="#f59e0b" />
        <text x={px(last) + 6} y={py(last) - 4} className="fill-gray-300" fontSize="12">€8.3M</text>
      </svg>
    </div>
  );
};

const KpiCard = ({ title, subtitle, value, pillText, gradient }) => (
  <div className="bg-[#0B1020] rounded-xl border border-[#252B42] p-4 h-full">
    <div className="flex items-start justify-between">
      <div>
        <div className="text-white text-sm font-semibold">{title}</div>
        <div className="text-gray-400 text-xs">{subtitle}</div>
      </div>
      <div className="flex flex-col items-end">
        <Pill text={pillText} />
        <div className="text-gray-400 text-[10px] mt-1">VS GOAL</div>
      </div>
    </div>
    <div className="text-white text-5xl font-extrabold my-3">{value}</div>
    <div className="h-16 -mb-2">
      <SmoothMini colorStops={gradient} />
    </div>
  </div>
);

const Charts = () => {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-12 md:col-span-5 flex flex-col gap-4">
        <KpiCard title="Forecast Revenue" subtitle="This Month" value="€3.55M" pillText="+20%" gradient={["#10b981", "#22c55e", "#a855f7"]} />
        <KpiCard title="Team Conversion" subtitle="This Month" value="81%" pillText="+12%" gradient={["#60a5fa", "#3b82f6", "#a855f7"]} />
      </div>
      <div className="col-span-12 md:col-span-7">
        <ConversionForecast />
      </div>
    </div>
  );
};

export default Charts;
