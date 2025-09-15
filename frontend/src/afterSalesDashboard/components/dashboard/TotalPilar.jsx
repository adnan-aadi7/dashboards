import React from "react";

const TotalPilar = () => {
  return (
    <div className="flex flex-col w-[100px] bg-[#090D28]  rounded-xl px-3 pt-3 pb-4">
      <div className="text-sm text-gray-200 text-center font-semibold uppercase tracking-wide leading-tight ">
        <div>TOTAL DURATION</div>
        <div>EXIT</div>
      </div>

      <div className="mt-4 space-y-3">
        <div className="rounded-md bg-[#0E1330] border  py-2 text-center shadow-[0_0_0_1px_rgba(24,211,89,0.3)]" style={{ borderColor: '#18D359' }}>
          <div className="text-[11px] text-gray-300">Goals</div>
          <div className="text-[11px] text-white font-semibold">28 DAYS</div>
        </div>
        <div className="rounded-md bg-[#18D359]  py-2 text-center">
          <div className="text-[11px] text-[#0E1330] font-semibold">Now</div>
          <div className="text-[11px] text-[#0E1330] font-semibold">15.5 DAYS</div>
        </div>
      </div>

      <div className="mt-4 flex-1 flex items-end justify-center">
        <div className="w-[120px] h-[250px] rounded-lg bg-[#2A3354] relative overflow-hidden border border-[#3A456B]/40">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="absolute left-3 z-20" style={{ bottom: 10 + i * 22 }}>
              <div className={`h-[2px] ${i === 6 ? 'w-6' : 'w-3'} rounded bg-white/80`} />
            </div>
          ))}
          <div className="absolute left-0 right-0 bottom-0  z-10">
            <div className="w-full h-[75px] rounded-[12px] bg-[#18D359]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalPilar;
