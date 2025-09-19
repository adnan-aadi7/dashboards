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

export default function Marketing() {
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
          <div className="grid grid-cols-2 gap-3">
            <StatCard title="NEW REVENUE GENERATED" value="$523,531" note="vs last 3 months" />
            <StatCard title="MARKETING EFFECIENCY RATIO" value="4.23" note="vs last 3 months" />
            <StatCard title="COST PER LEAD" value="$142.12" note="vs last 3 months" />
            <StatCard title="RETURN ON INVESTMENT" value="4.23" note="vs last 3 months" />
          </div>
        </SectionPanel>
      </div>

      {/* Potential (no inner cards, fixed size) */}
      <div className="col-span-12 lg:col-span-4">
        <SectionPanel title="POTENTIAL">
          <div className="rounded-lg  h-[230px]" />
        </SectionPanel>
      </div>
    </div>
  );
}
