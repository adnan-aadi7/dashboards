import React from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";

// ✅ Sparkline Component
const SparkMini = ({
  data = [5, 15, 15, 10, 20, 4, 6, 12, 8, 15, 10, 25, 10],
}) => (
  <Sparklines data={data} width={100} height={20} margin={0}>
    <SparklinesLine color="#00D394" />
  </Sparklines>
);

// ✅ Generic Stat Card
const StatCard = ({ title, value, note, change }) => (
  <div className="rounded-lg bg-[#090D28] border border-[#252B42] flex flex-col items-center text-center h-40">
    {/* Title */}
    <div className="text-[12px] sm:text-[13px] font-medium tracking-widest text-gray-400 mt-4 sm:mt-5 truncate">
      {title}
    </div>

    {/* Value */}
    <div className="text-white text-base sm:text-xl font-semibold truncate">
      {value}
    </div>

    {/* Change + Note */}
    {(change || note) && (
      <div className="flex items-center justify-center gap-1 sm:gap-2 text-[9px] sm:text-[13px] mb-1">
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

    {/* Sparkline — always at bottom */}
    <div className="mt-auto w-full flex items-end justify-center h-6">
      <SparkMini />
    </div>
  </div>
);


// ✅ Main Layout
export default function Cards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3  w-full">
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