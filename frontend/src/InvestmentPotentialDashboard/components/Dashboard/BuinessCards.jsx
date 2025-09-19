import React from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";
import PieChartComponent from "./Piechart";
import ScalingChart from "./ScallingChart";

const SectionHeader = ({ text, bg }) => (
  <div
    className={`w-full rounded-t-lg text-white text-xs font-semibold tracking-widest  py-2 ${bg}`}
  >
    {text}
  </div>
);

// ✅ Sparkline Component
const SparkMini = ({ 
  data = [5, 10, 5, 20, 60, 4, 6, 12, 25, 18, 40, 15] 
}) => (
  <Sparklines data={data} width={120} height={32} margin={2}>
    <SparklinesLine color="#00D394" />
  </Sparklines>
);

// Compact Stat Card
const StatCard = ({ title, value, note, change, children }) => (
  <div className="rounded-md bg-gradient-to-b from-black to-slate-700 border border-[#252B42] p-1 flex flex-col items-center text-center min-h-[70px]">
    {/* Title */}
    <div className="text-[7px] font-medium tracking-wide text-gray-400 mb-0.5 mt-8">
      {title}
    </div>

    {/* Value + Change inline */}
    <div className="flex items-center justify-center gap-1 mb-0.5">
      <span className="text-white text-sm sm:text-base font-semibold">
        {value}
      </span>
      {change && (
        <span
          className={`text-[6px] font-medium rounded px-1 py-[1px] ${
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
    {note && <span className="text-gray-500 text-[6px] mt-0.5">{note}</span>}
  </div>
);

const SectionPanel = ({ header, headerBg, children }) => (
  <div className="rounded-lg overflow-hidden h-full flex flex-col">
    <SectionHeader text={header} bg={headerBg} />
    <div className="flex-1 overflow-auto">{children}</div>
  </div>
);

export default function Cards() {
  return (
    <>
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-2 w-full h-full">
        {/* LEFT SECTION */}
        <div className="grid grid-rows-3 gap-2">
          {/* Row 1 */}
          <div className="rounded-md bg-[linear-gradient(180deg,#000000_0%,#20A804_100%)] border border-[#252B42] p-1 flex flex-col items-center text-center min-h-[40px]">
            <div className="text-[10px] font-medium tracking-wide text-gray-400 mb-0.5 mt-10">
              TOTAL CONTRACT VALUE
            </div>
            <div className="text-white text-sm sm:text-3xl font-semibold">
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
          <StatCard
            title="AVERAGE CUSTOMER LIFETIME VALUE (CLV)"
            value="$97,041.60"
            change="+6%"
          >
            <div className="h-10 w-full flex mt-18 items-center justify-center">
              <SparkMini />
            </div>
          </StatCard>

          <StatCard
            title="AVERAGE MONTHLY CUSTOMER REVENUE"
            value="$3,516.67"
            change="+12%"
          >
            <div className="h-10 w-full mt-18 flex items-center justify-center">
              <SparkMini />
            </div>
          </StatCard>
        </div>

        {/* LONG + 2x2 CARDS */}
        <div className="grid grid-cols-1 gap-2">
          <div
            style={{
              background: "linear-gradient(90deg, #000000 0%, #22D3EE 100%)",
              color: "white",
              padding: "8px 12px",
              borderRadius: "8px",
              textAlign: "center",
              fontSize: "clamp(10px, 1vw, 10px)", // responsive text
              fontWeight: "500",
            }}
          >
            SPECIFIC MONTHLY CUSTOMER REVENUE STREAMS
          </div>

          <StatCard
            title="AVERAGE MONTHLY CUSTOMER SAAS FEE"
            value="$1,250"
            change="+20%"
          >
            <div className="h-12 w-full flex items-center justify-center">
              <SparkMini />
            </div>
          </StatCard>

          <div className="grid grid-cols-2 gap-2">
            <StatCard
              title="% OF PAYMENT WITH CARD PRESENT"
              value="30%"
              change="+12%"
            >
              <div className="h-10 w-full flex items-center justify-center">
                <SparkMini />
              </div>
            </StatCard>
            <StatCard
              title="MONTHLY CUSTOMER REVENUE WITH CARD"
              value="$400"
              change="-5%"
            >
              <div className="h-10 w-full flex items-center justify-center">
                <SparkMini />
              </div>
            </StatCard>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <StatCard
              title="% OF PAYMENT WITHOUT CARD PRESENT"
              value="70%"
              change="+8%"
            >
              <div className="h-10 w-full flex items-center justify-center">
                <SparkMini />
              </div>
            </StatCard>
            <StatCard
              title="MONTHLY CUSTOMER REVENUE WITHOUT CARD PRESENT"
              value="$1,866.67"
              change="+3%"
            >
              <div className="h-10 w-full flex items-center justify-center">
                <SparkMini />
              </div>
            </StatCard>
          </div>
        </div>

        {/* PIE CHARTS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 bg-[#252A51] rounded-lg">
          <StatCard title={<span className="text-white text-sm">REVENUE</span>} value="">
            <div className="h-24 w-full">
              <PieChartComponent />
            </div>
          </StatCard>

          <StatCard title={<span className="text-white text-sm">COSTS</span>} value="">
            <div className="h-24 w-full">
              <PieChartComponent />
            </div>
          </StatCard>

          <StatCard title={<span className="text-white text-sm">PROFIT</span>} value="">
            <div className="h-24 w-full">
              <PieChartComponent />
            </div>
          </StatCard>
        </div>
      </div>

      {/* FINANCIAL MODEL */}
      <div className="flex bg-gradient-to-r from-[#000000] to-[#20A804] mt-5 rounded-xl text-white text-xl p-2">
        <h3>FINANCIAL MODEL</h3>
      </div>
      <div className="grid grid-cols-12 gap-4">
        {/* Left Column: Chart */}
        <div className="col-span-12 lg:col-span-6 flex">
          <div className="flex-1">
            <ScalingChart className="h-full" />
          </div>
        </div>

        {/* Right Column: Stats Card */}
        <div className="col-span-12 lg:col-span-6 flex">
          <SectionPanel>
            {/* First Row */}
            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-2 text-center w-full">
              {[
                { title: "REVENUE", value: "€5,172,595", change: "+8%", note: "vs last 3 months" },
                { title: "GROSS PROFIT MARGIN", value: "80%", change: "-3%", note: "vs last 3 months" },
                { title: "EBITA", value: "$2,002.095", change: "+6%", note: "vs last 3 months" },
                { title: "EARNINGS AFTER TAXES", value: "$12,172.595", change: "-12%", note: "vs last 3 months" },
                { title: "EARNINGS AFTER TAXES", value: "$2,002.095", change: "-12%", note: "vs last 3 months" },
              ].map((card, index) => (
                <StatCard key={index} {...card} className="h-24 w-full text-xs" />
              ))}
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-2 text-center w-full mt-2">
              {[
                { title: "COSTS OF GOODS SOLD", value: "$1,895.345", change: "-3%", note: "vs last 3 months" },
                { title: "OPERATIONAL COSTS", value: "$3,192.969", change: "-6%", note: "vs last 3 months" },
                { title: "TAXES", value: "$2,002.095", change: "-8%", note: "vs last 3 months" },
                { title: "NET PROFIT", value: "$2,002.095", change: "-3%", note: "vs last 3 months" },
                { title: "NET CASH POSITION (BANK)", value: "$10,172.595", change: "-6%", note: "vs last 3 months" },
              ].map((card, index) => (
                <StatCard key={index} {...card} className="h-24 w-full text-xs" />
              ))}
            </div>

            {/* Third Row */}
            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-2 text-center w-full mt-2">
              {[
                { title: "GROSS PROFIT", value: "$3,996.901", change: "-3%", note: "vs last 3 months" },
                { title: "OPERATIONAL MARGIN", value: "27%", change: "-6%", note: "vs last 3 months" },
                { title: "MARKETING FTE", value: "€5,172,595", change: "+8%", note: "vs last 3 months" },
                { title: "TAXES", value: "$2,002.095", change: "-3%", note: "vs last 3 months" },
                { title: "NET PROFIT MARGIN", value: "12.6%", change: "+6%", note: "vs last 3 months" },
              ].map((card, index) => (
                <StatCard key={index} {...card} className="h-24 w-full text-xs" />
              ))}
            </div>
          </SectionPanel>
        </div>
      </div>
    </>
  );
}
