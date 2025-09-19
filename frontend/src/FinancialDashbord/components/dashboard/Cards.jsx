import React from "react";
import Gauge from "./Gauge";
import { Sparklines, SparklinesLine } from "react-sparklines";

// ✅ Sparkline Component
const SparkMini = ({
  data = [5, 10, 5, 5, 20, 4, 6, 12, 8, 15, 10, 25, 10],
}) => (
  <Sparklines data={data} width={120} height={32} margin={2}>
    <SparklinesLine color="#00D394" />
  </Sparklines>
);

// ✅ Generic Stat Card
const StatCard = ({ title, value, note, change }) => (
  <div className="rounded-xl bg-[#090D28] border border-[#252B42] flex flex-col items-center text-center h-40">
    {/* Title */}
    <div className="text-[10px] sm:text-[11px] font-medium tracking-widest text-gray-400 mb-1 mt-4 sm:mt-5 truncate">
      {title}
    </div>

    {/* Value */}
    <div className="text-white text-base sm:text-lg font-semibold truncate">
      {value}
    </div>

    {/* Change + Note */}
    {(change || note) && (
      <div className="flex items-center justify-center gap-1 sm:gap-2 text-[9px] sm:text-[10px] mb-2">
        {change && (
          <span
            className={`font-medium rounded-md px-1 ${
              change.startsWith("-")
                ? "text-red-400 bg-[#FF000024]"
                : "text-green-400 bg-[#00D39424]"
            }`}
          >
            {change}
          </span>
        )}
        {note && (
          <span className="text-gray-500 truncate max-w-[80px] sm:max-w-none">
            {note}
          </span>
        )}
      </div>
    )}

    {/* Sparkline */}
    <div className="h-6 sm:h-7 w-full mt-auto mb-3 flex items-center justify-center">
      <SparkMini />
    </div>
  </div>
);

// ✅ Main Layout
export default function Cards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 w-full">
      <StatCard
        title="NET (FREE) CASH POSITION"
        value="$7,345,273"
        change="+12%"
        note="vs last 3 months"
      />
      <StatCard
        title="BURN RATE"
        value="$31,987"
        change="+8%"
        note="vs last 3 months"
      />

      {/* Gauge Card */}
      <div className="rounded-xl bg-[#090D28] border border-[#252B42] flex flex-col items-center justify-center p-3 sm:p-4 h-40">
        <Gauge value={10.8} min={0} max={20} />
      </div>

      <StatCard
        title="ANNUAL NET PROFIT"
        value="$7,345,273"
        change="+5%"
        note="vs last 3 months"
      />
      <StatCard
        title="ANNUAL REVENUE"
        value="$31,987"
        change="+3%"
        note="vs last 3 months"
      />
    </div>
  );
}
