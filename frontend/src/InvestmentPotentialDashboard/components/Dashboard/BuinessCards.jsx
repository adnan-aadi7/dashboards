import React from "react";
import PieChartComponent from "./Piechart";

// Compact Stat Card
const StatCard = ({ title, value, note, change, children }) => (
  <div className="rounded-md bg-gradient-to-b from-black to-slate-700 border border-[#252B42] p-1.5 flex flex-col items-center text-center h-full min-h-[90px]">
    {/* Title */}
    <div className="text-[8px] font-medium tracking-wide text-gray-400 mb-0.5 mt-0.5">
      {title}
    </div>

    {/* Value + Change inline */}
    <div className="flex items-center justify-center gap-1 mb-0.5">
      <span className="text-white text-lg sm:text-xl font-semibold">
        {value}
      </span>
      {change && (
        <span
          className={`text-[7px] font-medium rounded px-1 py-[1px] ${
            change.startsWith("-")
              ? "text-red-400 bg-red-500/20"
              : "text-green-400 bg-green-500/20"
          }`}
        >
          {change}
        </span>
      )}
    </div>

    {/* Children */}
    {children && (
      <div className="w-full flex-1 flex items-center justify-center">
        {children}
      </div>
    )}

    {/* Note */}
    {note && <span className="text-gray-500 text-[7px] mt-0.5">{note}</span>}
  </div>
);

export default function Cards() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-4 gap-2 w-full h-full p-1.5">
      {/* LEFT SECTION */}
      <div className="grid grid-rows-3 gap-2">
        {/* Row 1 */}
        <div className="rounded-md bg-[linear-gradient(180deg,#000000_0%,#20A804_100%)] border border-[#252B42] p-1.5 flex flex-col items-center text-center min-h-[90px]">
          <div className="text-[8px] font-medium tracking-wide text-gray-400 mb-0.5 mt-1">
            TOTAL CONTRACT VALUE
          </div>
          <div className="text-white text-lg sm:text-xl font-semibold">
            $1.54M
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-2 gap-2">
          <StatCard title="TOTAL ACTIVE USERS" value="20" change="-3%" />
          <StatCard title="RENEWAL" value="100%" change="+8%" />
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-2 gap-2">
          <StatCard title="CHURN" value="2.4%" change="+6%" />
          <StatCard title="NET PROMOTER SCORE" value="7.8" change="-1%" />
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="grid grid-rows-2 gap-2">
        <StatCard title="AVERAGE CUSTOMER LIFETIME VALUE (CLV)" value="$97,041.60" change="+6%">
          <div className="h-12 w-full">
            <img
              src="/Graph.png"
              alt="sparkline"
              className="w-full h-full mt-10 object-cover"
            />
          </div>
        </StatCard>

        <StatCard title="AVERAGE MONTHLY CUSTOMER REVENUE" value="$3,516.67" change="+12%">
          <div className="h-12 w-full">
            <img
              src="/Graph.png"
              alt="profit chart"
              className="w-full h-full mt-10 object-cover"
            />
          </div>
        </StatCard>
      </div>

      {/* LONG + 2x2 CARDS */}
      <div className="grid grid-cols-1 gap-2">
        <div></div>
        <StatCard title="AVERAGE MONTHLY CUSTOMER SAAS FEE" value="$1,250" change="+20%">
          <div className="h-14 w-full">
            <img
              src="/Graph.png"
              alt="main chart"
              className="w-full h-full mt-1.5 object-cover"
            />
          </div>
        </StatCard>

        {/* Row 1 */}
        <div className="grid grid-cols-2 gap-2">
          <StatCard title="% OF PAYMENT WITH CARD PRESENT" value="30%" change="+12%">
            <div className="h-12 w-full">
              <img
                src="/Graph.png"
                alt="chart 1"
                className="w-full h-full mt-1.5 object-cover"
              />
            </div>
          </StatCard>
          <StatCard title="MONTHLY CUSTOMER REVENUE WITH CARD" value="$400" change="-5%">
            <div className="h-12 w-full">
              <img
                src="/Graph.png"
                alt="chart 2"
                className="w-full h-full mt-1.5 object-cover"
              />
            </div>
          </StatCard>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-2 gap-2">
          <StatCard title="% OF PAYMENT WITHOUT CARD PRESENT" value="70%" change="+8%">
            <div className="h-12 w-full">
              <img
                src="/Graph.png"
                alt="chart 3"
                className="w-full h-full mt-1.5 object-cover"
              />
            </div>
          </StatCard>
          <StatCard title="MONTHLY CUSTOMER REVENUE WITHOUT CARD PRESENT" value="$1,866.67" change="+3%">
            <div className="h-12 w-full">
              <img
                src="/Graph.png"
                alt="chart 4"
                className="w-full h-full mt-1.5 object-cover"
              />
            </div>
          </StatCard>
        </div>
      </div>

      {/* PIE CHARTS */}
      <div className="grid grid-cols-3 bg-[#252A51] gap-2 rounded-lg">
        <StatCard
          title={<span className="text-white">REVENUE</span>}
          value=""
        >
          <PieChartComponent />
        </StatCard>

        <StatCard
          title={<span className="text-white">COSTS</span>}
          value=""
        >
          <PieChartComponent />
        </StatCard>

        <StatCard
          title={<span className="text-white">PROFIT</span>}
          value=""
        >
          <PieChartComponent />
        </StatCard>
      </div>
    </div>
  );
}
