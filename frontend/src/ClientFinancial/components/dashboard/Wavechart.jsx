import React from "react";
import { ResponsiveContainer, AreaChart, Area } from "recharts";

export default function ScalingChart() {
  const yTicks = ["€700K", "€600K", "€500K", "€400K", "€300K", "€200K"];

  const data = [
    { m: "Jan", blue: 200, purple: 200 },
    { m: "Feb", blue: 400, purple: 300 },
    { m: "Mar", blue: 500, purple: 400 },
    { m: "Apr", blue: 600, purple: 600 },
    { m: "May", blue: 550, purple: 420 },
    { m: "Jun", blue: 450, purple: 250 },
    { m: "Jul", blue: 400, purple: 200 },
    { m: "Aug", blue: 350, purple: 180 },
    { m: "Sep", blue: 370, purple: 170 },
    { m: "Oct", blue: 390, purple: 150 },
    { m: "Nov", blue: 410, purple: 120 },
    { m: "Dec", blue: 430, purple: 100 },
  ];

  return (
    <div className="text-white w-full h-full flex flex-col">
      {/* Chart Header with Legend */}
      <div className="flex items-center justify-between mb-2">
        <div className="text-[9px] font-medium tracking-wider text-gray-400">
          YEAR FORECAST FINANCIAL POSITION
        </div>
        <div className="text-[8px] text-gray-500">
          Weekly ▼
        </div>
      </div>
      
      {/* Legend Dots */}
      <div className="flex flex-wrap items-center gap-2 mb-2 text-[7px]">
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-blue-400"></div>
          <span className="text-gray-300">CASH POSITION</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-green-400"></div>
          <span className="text-gray-300">REVENUE</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-red-400"></div>
          <span className="text-gray-300">COSTS - Costs Of Goods Sold</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-orange-400"></div>
          <span className="text-gray-300">COSTS - Overhead</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-purple-400"></div>
          <span className="text-gray-300">TEMPORARY FROZEN CASH</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
          <span className="text-gray-300">PROFIT</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
          <span className="text-gray-300">INVESTMENTS</span>
        </div>
      </div>

      {/* Chart container */}
      <div
        className="flex-1 rounded-xl bg-[#0C132A] p-2 min-h-[120px]"
        style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.05)" }}
      >
        <div className="relative w-full h-full">
          {/* Y-axis labels */}
          <div className="absolute left-0 top-1 bottom-4 flex flex-col justify-between text-[8px] text-gray-300 pl-1">
            {yTicks.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>

          {/* Chart */}
          <div className="absolute inset-0 left-8 right-2 top-1 bottom-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="blueWave" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="100%" stopColor="#189AF8" stopOpacity={0.9} />
                    <stop offset="100%" stopColor="#189AF8" stopOpacity={0.1} />
                  </linearGradient>
                  <linearGradient id="purpleWave" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="100%" stopColor="#9333EA" stopOpacity={0.8} />
                    <stop offset="100%" stopColor="#9333EA" stopOpacity={0.1} />
                  </linearGradient>
                </defs>

                {/* Purple under Blue */}
                <Area
                  type="monotone"
                  dataKey="purple"
                  stroke="none"
                  fill="url(#purpleWave)"
                  stackId="1"
                />
                <Area
                  type="monotone"
                  dataKey="blue"
                  stroke="none"
                  fill="url(#blueWave)"
                  stackId="1"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}