import React from "react";

const SectionHeader = ({ title }) => (
  <div className="w-full rounded-t-lg bg-gradient-to-r from-[#000000] to-[#ED5E23] text-white text-xs font-semibold tracking-widest px-3 py-2">
    {title}
  </div>
);

const StatCard = ({ title, value, note }) => (
  <div className="rounded-lg bg-[#0A0F1F] border border-[#252B42] p-3">
    <div className="text-[10px] tracking-widest text-gray-300 mb-1">{title}</div>
    <div className="text-white text-xl font-semibold mb-1">{value}</div>
    <div className="text-[9px] text-gray-400 mb-2">{note}</div>
    <div className="h-6 -mx-3 -mb-3">
      <img src="/graphpink.png" alt="spark" className="w-full h-full object-cover" />
    </div>
  </div>
);

const SectionPanel = ({ title, children }) => (
  <div className="rounded-lg overflow-hidden border border-[#252B42] bg-[#0B1020]">
    <SectionHeader title={title} />
    <div className="p-3">
      {children}
    </div>
  </div>
);

function Gauge({ value = 10.8, min = 0, max = 20 }) {
  const normalized = Math.max(min, Math.min(value, max));
  const percent = (normalized - min) / (max - min);

  const cx = 100;
  const cy = 100;
  const radius = 70;

  const polarToCartesian = (centerX, centerY, r, angleInDegrees) => {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
    return {
      x: centerX + r * Math.cos(angleInRadians),
      y: centerY + r * Math.sin(angleInRadians)
    };
  };

  const describeArc = (x, y, r, startAngle, endAngle) => {
    const start = polarToCartesian(x, y, r, endAngle);
    const end = polarToCartesian(x, y, r, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    return [
      "M", start.x, start.y,
      "A", r, r, 0, largeArcFlag, 0, end.x, end.y
    ].join(" ");
  };

  const startAngle = 180; // left
  const endAngle = 360; // right
  const angleSpan = endAngle - startAngle; // 180
  const currentAngle = startAngle + angleSpan * percent;

  return (
    <div className="relative flex items-center justify-center">
      <svg viewBox="0 0 200 140" className="w-full max-w-[360px]">
        <path d={describeArc(cx, cy, radius, startAngle, endAngle)} stroke="#646B79" strokeWidth="18" fill="none" strokeLinecap="round" />
        <path d={describeArc(cx, cy, radius, startAngle, currentAngle)} stroke="#F2B46D" strokeWidth="18" fill="none" strokeLinecap="round" />
        <path d={describeArc(cx, cy, radius, currentAngle, endAngle)} stroke="#9CA3AF33" strokeWidth="18" fill="none" strokeLinecap="round" />
      </svg>
      <div className="absolute top-[44%] -translate-y-1/2 text-center">
        <div className="text-white text-6xl font-semibold leading-none">{value}</div>
        <div className="text-[10px] tracking-widest text-gray-300 mt-2">WEEKS</div>
      </div>
    </div>
  );
}

function Funnel() {
  const steps = [
    { label: "LEADS", value: 1200, width: 92 },
    { label: "CALLS", value: 521, width: 75 },
    { label: "MEETINGS", value: 62, width: 62 },
    { label: "CONTRACTS SENT", value: 50, width: 52 },
    { label: "CLOSES", value: 10, width: 46 }
  ];

  return (
    <div className="relative mt-4 space-y-3">
      {steps.map((step) => {
        const ml = (100 - step.width) / 2; // center each step
        return (
          <div key={step.label} className="relative" style={{ marginLeft: `${ml}%`, width: `${step.width}%` }}>
            <div
              className="relative h-10 text-white flex items-center px-4 rounded-md shadow-[0_8px_18px_rgba(0,0,0,0.35)]"
              style={{
                background: "linear-gradient(90deg, #0E3B33 0%, #00D18F 100%)",
                clipPath: "polygon(4% 0, 100% 0, 96% 100%, 0 100%)"
              }}
            >
              <span className="text-[10px] tracking-widest opacity-90">{step.label}</span>
              <span className="ml-auto text-sm font-semibold bg-[#19C38A] text-white px-3 py-1 rounded-md shadow">
                {step.value}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function Sales() {
  return (
    <div className="grid grid-cols-12 gap-4 text-white">
      {/* Activity */}
      <div className="col-span-12 lg:col-span-4">
        <SectionPanel title="ACTIVITY">
          <div className="grid grid-cols-2 gap-3">
            <StatCard title="TOTAL MARKETING SPENT" value="$340,231" note="vs last 3 months" />
            <StatCard title="REVENUE ATTR TO MARKETING" value="24%" note="vs last 3 months" />
            <StatCard title="MARKETING FTE" value="2 FTE" note="vs last 3 months" />
            <StatCard title="% OF TOTAL FTE'S IN MARKETING" value="20%" note="vs last 3 months" />
          </div>
        </SectionPanel>
      </div>

      {/* Effectivity */}
      <div className="col-span-12 lg:col-span-4">
        <SectionPanel title="EFFECTIVITY">
          <div className="space-y-4">
            <div>
              <div className="text-[10px] tracking-widest text-gray-300 mb-2">AVG. SALES CYCLE DURATION</div>
              <div className="rounded-lg bg-[#0A0F1F] border border-[#252B42] p-4 flex items-center justify-center">
                <Gauge value={10.8} min={0} max={20} />
              </div>
            </div>

            <div className="rounded-lg bg-[#0A0F1F] border border-[#252B42] p-4">
              <Funnel />
            </div>
          </div>
        </SectionPanel>
      </div>

      {/* Potential */}
      <div className="col-span-12 lg:col-span-4">
        <SectionPanel title="POTENTIAL">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <StatCard title="OCCUPANCY RATE" value="99%" note="vs last 3 months" />
            <StatCard title="WIN RATE" value="82%" note="vs last 3 months" />
          </div>
        </SectionPanel>
      </div>
    </div>
  );
}
