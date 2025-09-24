import React from "react";

// Gauge Component - Made Smaller
const Gauge = ({
  value = 10.8,
  min = 0,
  max = 20,
  color = "#F2B46D",
  label = "MONTHS RUNWAY",
}) => {
  const normalized = Math.max(min, Math.min(value, max));
  const percent = (normalized - min) / (max - min);

  const cx = 100;
  const cy = 100;
  const radius = 85;

  const polarToCartesian = (centerX, centerY, r, angleInDegrees) => {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
    return {
      x: centerX + r * Math.cos(angleInRadians),
      y: centerY + r * Math.sin(angleInRadians),
    };
  };

  const describeArc = (x, y, r, startAngle, endAngle) => {
    const start = polarToCartesian(x, y, r, endAngle);
    const end = polarToCartesian(x, y, r, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    return [
      "M",
      start.x,
      start.y,
      "A",
      r,
      r,
      0,
      largeArcFlag,
      0,
      end.x,
      end.y,
    ].join(" ");
  };

  const startAngle = 240;
  const endAngle = 480;
  const angleSpan = endAngle - startAngle;
  const currentAngle = startAngle + angleSpan * percent;

  return (
    <div className="relative flex items-center justify-center w-[50px] h-[40px]">
      <svg viewBox="0 0 200 140" className="w-[50px] h-[40px]">
        <path
          d={describeArc(cx, cy, radius, startAngle, endAngle)}
          stroke="#1F2937"
          strokeWidth="18"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d={describeArc(cx, cy, radius, startAngle, currentAngle)}
          stroke={color}
          strokeWidth="20"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d={describeArc(cx, cy, radius, currentAngle, endAngle)}
          stroke="#9CA3AF33"
          strokeWidth="18"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute text-center mt-1">
        <div className="text-white text-xs font-bold leading-none">{value}</div>
        <div className="text-[3px] tracking-wider text-gray-400 mt-0.5">
          {label}
        </div>
      </div>
    </div>
  );
};

const DealDuration = ({ dealPhases }) => (
  <div className="flex-shrink-0 w-[90px]">
    <div className="rounded-lg p-1">
      <div className="flex gap-1">
        {dealPhases.map((phase, index) => (
          <div key={index} className="flex flex-col w-[40px] items-center">
            <div className="text-[9px] text-gray-300 text-center leading-tight min-h-[12px] mb-1">
              {phase.title}
            </div>
            <div
              className="w-full bg-[#090D28] rounded border px-0.5 py-0.5 text-center mb-1"
              style={{ borderColor: phase.nowColor }}
            >
              <div className="text-[6px] text-white">Goals</div>
              <div className="text-[7px] text-white font-bold">
                {phase.goalValue}
              </div>
            </div>
            <div
              className="w-full rounded px-0.5 py-0.5 text-center mb-1"
              style={{ background: phase.nowColor }}
            >
              <div className="text-[6px] text-white font-semibold">Now</div>
              <div className="text-[7px] text-white font-bold">
                {phase.nowValue}
              </div>
            </div>
            <div className="flex-1 flex items-end justify-center">
              <div className="w-[30px] h-[60px] rounded bg-[#D9D9D93D] relative overflow-hidden">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute left-0.5 z-20"
                    style={{ bottom: 5 + i * 15 }}
                  >
                    <div
                      className={`h-[1px] ${
                        i === 1 ? "w-2" : "w-1"
                      } rounded bg-white/60`}
                    />
                  </div>
                ))}
                <div className="absolute left-0 right-0 bottom-0 z-10">
                  <div
                    className="w-full rounded"
                    style={{
                      height: phase.barHeight || "35px", // 👈 duration ke hisaab se
                      background: phase.barColor,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Main Dashboard Component
const DashboardLayout = () => {
  const dealPhases = [
    {
      title: "average",
      goalValue: "7 Days",
      nowValue: "7 Days",
      barColor: "#18D359",
      goalColor: "#18D359",
      nowColor: "#18D359",
      barHeight: "60px",
    },
  ];

  const gauges = [
    { value: 10.8, color: "#18D359", label: "RUNWAY" },
    { value: 15.2, color: "#F2B46D", label: "GROWTH" },
    { value: 8.5, color: "#EF4444", label: "BURN" },
    { value: 12.3, color: "#3B82F6", label: "CASH" },
    { value: 18.7, color: "#8B5CF6", label: "VALUE" },
    { value: 6.9, color: "#10B981", label: "EFFICIENCY" },
  ];

  return (
    <div className="w-full max-w-full  p-4">
      {/* Header */}
      <div className="mb-4">
        <div className="flex items-center gap-4 text-xs text-gray-400">
          <span>PREPARATION & RESEARCH</span>
          <span className="ml-20">DESIGN DELIVERY & VERHANDLUNGEN</span>
        </div>
      </div>
      <div className="flex flex-wrap items-start gap-3 w-full">
        {/* First Deal Duration */}
        <DealDuration dealPhases={dealPhases} />

        {/* Compact Gauges Grid */}
        <div className="flex-shrink-0 min-w-[140px] max-w-[220px] flex-1">
          <div className="grid grid-cols-3 gap-2">
            {gauges.map((gauge, index) => (
              <div
                key={index}
                className=" rounded p-2 flex justify-center"
              >
                <Gauge
                  value={gauge.value}
                  color={gauge.color}
                  label={gauge.label}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Second Deal Duration */}
        <DealDuration dealPhases={dealPhases} />

        {/* Second Gauges Grid */}
        <div className="flex-shrink-0 min-w-[160px] max-w-[240px] flex-1">
         
          <div className="grid grid-cols-3 gap-2">
            {gauges.map((gauge, index) => (
              <div
                key={index + 6}
                className=""
              >
                <Gauge
                  value={gauge.value}
                  color={gauge.color}
                  label={gauge.label}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Additional Deal Duration Sections */}
        {Array.from({ length: 7 }).map((_, index) => (
          <DealDuration key={index} dealPhases={dealPhases} />
        ))}
      </div>
    </div>
  );
};

export default DashboardLayout;
