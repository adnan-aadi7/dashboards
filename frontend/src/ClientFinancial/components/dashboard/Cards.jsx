import React from "react";
import Chart from "../dashboard/Wavechart";
import { Sparklines, SparklinesLine } from "react-sparklines";

// Sample NetProfitChart component (replace with your actual import)
const NetProfitChart = ({ className }) => (
  <div
    className={`${className} rounded-lg flex items-center justify-center text-white font-semibold`}
  >
    <Chart />
  </div>
);
// SparkMini Component (responsive)
const SparkMini = ({
  data = [5, 20, 15, 30, 15, 40, 10, 35, 25, 45, 20, 50, 15, 55, 8],
}) => (
  <div className="w-full">
    <Sparklines data={data} width={undefined} height={36} margin={4}>
      <defs>
        <linearGradient id="sparklineGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="50%" stopColor="#F04245" />
          <stop offset="100%" stopColor="rgba(254,253,255,0)" />
        </linearGradient>
      </defs>
      <SparklinesLine
        style={{ stroke: "url(#sparklineGradient)", strokeWidth: 2 }}
      />
    </Sparklines>
  </div>
);

// ✅ Compact Stat Card
const StatCard = ({ title, value, note, change, big, bg }) => (
  <div
    className={`relative rounded border border-[#252B42] p-3 flex flex-col items-center text-center
    ${big ? "h-46 w-full" : "w-full"}`}
    style={{
      background: bg || "transparent", // custom background if provided
    }}
  >
    {/* Title */}
    <div className="text-[7px] font-medium tracking-wider text-gray-400 mb-1 text-center truncate">
      {title}
    </div>

    {/* Value */}
    <div
      className={`text-white ${big ? "text-xl" : "text-base"} font-semibold`}
    >
      {value}
    </div>

    {/* Change + Note */}
    {(change || note) && (
      <div className="flex items-center justify-center gap-1 text-[8px] mt-1">
        {change && (
          <span
            className={`font-medium rounded-md px-1 py-0.5 ${
              change.startsWith("-")
                ? "text-red-400 bg-red-500/20"
                : "text-green-400 bg-green-500/20"
            }`}
          >
            {change}
          </span>
        )}
        {note && <span className="text-gray-500">{note}</span>}
      </div>
    )}

    {/* ✅ Sparkline fixed at bottom + responsive */}
    <div className="absolute bottom-0 left-0 right-0  -mb-[3px]">
      <SparkMini />
    </div>
  </div>
);

export default function Cards() {
  return (
    <div className="flex flex-col xl:flex-row gap-3 w-full max-w-full">
      {/* ==== LEFT COLUMN - Net Cash Position ==== */}
      <div className="grid grid-cols-2 gap-2 w-full xl:w-60 flex-shrink-0 grid-rows-3">
        {/* Big Top Card - spans 2 columns and 2 rows */}
        <div className="col-span-2 row-span-2">
          <StatCard
            big
            title="NET (FREE) CASH POSITION"
            value="€7.345.273"
            change="+12%"
            note="vs last 3 months"
          />
        </div>

        {/* Two Small Cards below */}
        <StatCard
          title="NET PROFIT"
          value="€3.345.345"
          change="-5%"
          note="vs last 3 months"
        />
        <StatCard
          title="GROWTH CASH POSITION"
          value="€5.172.595"
          change="+8%"
          note="vs last 3 months"
        />
      </div>

      {/* ==== MIDDLE COLUMN - 6 Financial Cards ==== */}
      <div className="grid grid-cols-2 gap-2 w-full xl:w-60 flex-shrink-0">
        <StatCard
          title="GROSS CASH  (BANK)"
          value="€12.345.345"
          change="+12%"
          note="vs last 3 months"
        />
        <StatCard
          title="TEMPORARY FROZEN CASH"
          value="€3.345.345"
          change="-5%"
          note="vs last 3 months"
          bg="linear-gradient(180deg, rgba(240, 66, 69, 0.52) 0%, rgba(9, 13, 40, 0) 100%)"
        />
        <StatCard
          title="REVENUE"
          value="€5.172.595"
          change="-12%"
          note="vs last 3 months"
          bg="linear-gradient(180deg, rgba(240, 66, 69, 0.52) 0%, rgba(9, 13, 40, 0) 100%)"

        />
        <StatCard
          title="COSTS OF GOODS SOLD "
          value="€11.500.000"
          change="+10%"
          note="vs last 3 months"

        />
        <StatCard
          title="OPERATIONAL COSTS"
          value="€3.192.969"
          change="-15%"
          note="vs last 3 months"
          
        />
        <StatCard
          title="NET PROFIT MARGIN"
          value="€12.345.345"
          change="-8%"
          note="vs last 3 months"
          bg="linear-gradient(180deg, rgba(240, 66, 69, 0.52) 0%, rgba(9, 13, 40, 0) 100%)"
        />
      </div>

      {/* ==== RIGHT COLUMN - Chart ==== */}
      <div className="flex-1 min-w-0 w-full xl:w-auto">
        <div className="rounded-xl bg-[#090D28] border border-[#252B42] p-3 h-full min-h-[180px] xl:min-h-[240px]">
          <NetProfitChart className="w-full h-full" />
        </div>
      </div>
    </div>
  );
}
