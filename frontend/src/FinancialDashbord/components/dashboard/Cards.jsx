import React from "react";
import Gauge from "./Gauge"; // Gauge component import karo

// Generic Stat Card
const StatCard = ({ title, value, note, change }) => (
  <div className="rounded-xl bg-[#090D28] border border-[#252B42] p-1 flex flex-col items-center text-center h-40">
    {/* Title */}
    <div className="text-[11px] font-medium tracking-widest text-gray-400 mb-1 mt-5">
      {title}
    </div>

    {/* Value */}
    <div className="text-white text-lg font-semibold">{value}</div>

    {/* Change % (optional) */}
    {(change || note) && (
  <div className="flex items-center justify-center gap-2 text-[10px] mb-2">
    {change && (
      <span
        className={`font-medium rounded-md p-1 ${
          change.startsWith("-") ? "text-red-400 bg-[#00D39424]" : "text-green-400 bg-[#00D39424]"
        }`}
      >
        {change}
      </span>
    )}
    {note && <span className="text-gray-500">{note}</span>}
  </div>
)}

    {/* Sparkline / Graph */}
    <div className="h-7 w-full mt-auto">
      <img
        src="/Graph.png"
        alt="spark"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
);

// Main Cards Layout
export default function Cards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full">
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
      <div className="rounded-xl bg-[#090D28] border border-[#252B42] flex flex-col items-center justify-between p-4 h-40">
        <Gauge value={10.8} min={0} max={20} />
        <div className="text-[10px] text-gray-500">vs last 3 months</div>
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
