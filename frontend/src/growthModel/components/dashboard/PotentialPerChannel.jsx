import React from "react";

const SectionHeader = ({ title, gradient = true }) => (
  <div className={`${gradient ? "bg-gradient-to-r from-[#000000] to-[#ED5E23]" : "bg-transparent"} w-full rounded-t-lg text-white text-xl font-semibold tracking-widest px-3 py-2`}>
    {title}
  </div>
);

const Card = ({ children, className = "" }) => (
  <div className={`rounded-lg overflow-hidden border border-[#252B42] bg-[#0B1020] ${className}`}>
    {children}
  </div>
);

const SummarySpark = () => (
  <div className="h-16 w-full">
    <img src="/graphpink.png" alt="spark" className="w-full h-full object-cover opacity-80" />
  </div>
);

const MetricPill = ({ label }) => (
  <div className="rounded-md border border-[#1E2437] bg-[#0A0F1F] text-[5px] text-gray-300 px-1 py-1">
    {label}
  </div>
);

const ChannelCard = ({ title }) => (
  <Card className="p-3">
    <div className="text-white text-sm font-semibold tracking-wide mb-3">{title}</div>
    <div className="grid grid-cols-3 gap-1">
      <MetricPill label="MONEY SPENT" />
      <MetricPill label="REVENUE GAINED" />
      <MetricPill label="ROAS/POAS" />
    </div>
  </Card>
);

export default function PotentialPerChannel() {
  const channels = [
    "GOOGLE",
    "YOUTUBE",
    "ORGANIC META",
    "META ADS",
    "WEBSITE",
    "CRO",
    "TIKTOK",
    "LINKEDIN",
    "E-MAIL",
    "SEO",
    "INFLUENCER",
    "OUTREACH"
  ];

  return (
    <Card>
      <SectionHeader title="POTENTIAL PER CHANNEL" />
      <div className="p-3 space-y-3 text-base">
        <div className="grid grid-cols-12 gap-3">
          {/* Left summary */}
          <Card className="col-span-12 lg:col-span-6">
            <div className="p-3">
              <div className="text-gray-300 text-xs tracking-widest">POTENTIAL UNTAPPED</div>
              <div className="mt-1.5 text-3xl font-semibold text-white">90%</div>
              <div className="mt-1.5 flex items-center gap-2 text-[10px] text-gray-300">
                <span className="text-[#F26D6D] bg-[#3A1020] px-1.5 py-0.5 rounded">-12%</span>
                <span>VS LAST 3 MONTHS</span>
              </div>
            </div>
            <div className="px-3 pb-3">
              <SummarySpark />
            </div>
          </Card>

          {/* Right summary */}
          <Card className="col-span-12 lg:col-span-6">
            <div className="p-3">
              <div className="text-gray-300 text-xs tracking-widest">POTENTIAL MARKETING GROWTH</div>
              <div className="mt-1.5 text-3xl font-semibold text-white">*9</div>
              <div className="mt-1.5 flex items-center gap-2 text-[10px] text-gray-300">
                <span className="text-[#F26D6D] bg-[#3A1020] px-1.5 py-0.5 rounded">-12%</span>
                <span>VS LAST 3 MONTHS</span>
              </div>
            </div>
            <div className="px-3 pb-3">
              <SummarySpark />
            </div>
          </Card>
        </div>

        {/* Channel grid */}
        <div className="grid grid-cols-12 gap-3">
          {channels.map((name) => (
            <div key={name} className="col-span-12 sm:col-span-6 lg:col-span-3">
              <ChannelCard title={name} />
            </div>
          ))}
        </div>

        {/* Benchmarks inside same container */}
        <div className="mt-5">
          <SectionHeader title="BENCHMARKS" gradient={false} />
          <div className="pt-3 grid grid-cols-12 gap-3 text-xs">
            {channels.map((name) => (
              <div key={`bm-${name}`} className="col-span-12 sm:col-span-6 lg:col-span-3">
                <ChannelCard title={name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
