import React from "react";
import Exit from "./Exit"; // import your Exit component

// --- STAGES config ---
const SHORT_STAGES = [
  { key: "marketResearch", label: "Market Research" },
  { key: "legalDue", label: "Legal Due Diligence" },
];

const LONG_STAGES = [
  { key: "marketResearch", label: "Market Research" },
  { key: "legalDue", label: "Legal Due Diligence" },
  { key: "technicalDue", label: "Technical Due Diligence" },
  { key: "floorplan", label: "Floorplan" },
  { key: "taxOptimization", label: "Tax Optimization" },
  { key: "financing", label: "Financing" },
  { key: "exitStrategy", label: "Exit Strategy" },
];

// --- Small table rows ---
const shortRows = [
  {
    street: "Project A",
    progress: { value: 9, total: 30, barColor: "#EF4444" },
    stageData: {
      marketResearch: { color: "#F04245", textColor: "#FFFFFF", rightTag: "3 Days" },
      legalDue: { color: "#F04245", textColor: "#FFFFFF", rightTag: "1 WK" },
    },
  },
  {
    street: "Project B",
    progress: { value: 12, total: 30, barColor: "#EF4444" },
    stageData: {
      marketResearch: { done: true },
      legalDue: { done: true },
    },
  },
];

// --- Long table rows ---
const longRows = [
  {
    street: "Project C",
    progress: { value: 21, total: 30, barColor: "#F59E0B" },
    stageData: {
      marketResearch: { done: true },
      legalDue: { done: true },
      technicalDue: { done: true },
      floorplan: { color: "#F59E0B", textColor: "#0E1330", rightTag: "15 WK" },
      taxOptimization: { done: true },
      financing: { color: "#22C55E", textColor: "#FFFFFF", rightTag: "2 WK" },
      exitStrategy: { done: true },
    },
  },
  {
    street: "Project D",
    progress: { value: 25, total: 30, barColor: "#22C55E" },
    stageData: {
      marketResearch: { done: true },
      legalDue: { done: true },
      technicalDue: { done: true },
      floorplan: { done: true },
      taxOptimization: { done: true },
      financing: { done: true },
      exitStrategy: { done: true },
    },
  },
];

// --- Table Component ---
function ActiveDealsTable({ data = [], stages = [] }) {
  return (
    <section className="w-full bg-[#181C3A] rounded-lg overflow-hidden">
      <div className="p-2">
        {data.map((r, i) => {
          const pct = Math.min(100, Math.max(0, (r.progress.value / r.progress.total) * 100));
          return (
            <div key={i} className="py-1.5">
              <div
                className="w-full grid items-center gap-1.5"
                style={{
                  gridTemplateColumns: `120px 180px repeat(${stages.length}, 1fr)`,
                }}
              >
                {/* Street */}
                <div>
                  <span className="inline-block rounded-full bg-black text-white/90 text-[11px] px-4 py-1.5">
                    {r.street}
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="relative h-7 rounded-full bg-[#2A334D]">
                  <div
                    className="absolute left-0 top-0 h-full rounded-full"
                    style={{ width: `${pct}%`, background: r.progress.barColor }}
                  />
                  <div
                    className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full px-2.5 py-[2px] text-white text-[9px] font-semibold"
                    style={{ background: r.progress.barColor }}
                  >
                    Over
                  </div>
                  <span className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-[10px] font-semibold">
                    {r.progress.value}/{r.progress.total} DAGEN
                  </span>
                </div>

                {/* Stages */}
                {stages.map((s) => {
                  const cfg = (r.stageData && r.stageData[s.key]) || {};
                  const pillColor = cfg.color || (cfg.done ? "#2A3354" : "#2A3354");
                  const textColor = cfg.textColor || "#FFFFFF";
                  return (
                    <div key={s.key} className="flex items-center">
                      <div
                        className="flex items-center justify-between rounded-full h-7 px-2 w-full"
                        style={{ backgroundColor: pillColor }}
                      >
                        <span className="text-[9px] font-semibold truncate" style={{ color: textColor }}>
                          {s.label}
                        </span>
                        {cfg.rightTag ? (
                          <span className="text-[9px] font-semibold text-white">{cfg.rightTag}</span>
                        ) : cfg.done ? (
                          <span className="ml-2 inline-flex items-center justify-center w-4.5 h-4.5 rounded-full bg-white">
                            <span className="text-[#16A34A] text-[11px] font-bold">✓</span>
                          </span>
                        ) : null}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// --- Page with Exit + Tables ---
export default function DealsPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
      <div>
        {/* Exit above short table */}
        <Exit
          title="ACTIEVE DEALS 2e CONTRACTFASE EXIT"
          label="Internal Research"
          counts={{ red: 2, orange: 1, blue: 1 }}
        />
        <div className="mt-4">
          <ActiveDealsTable data={shortRows} stages={SHORT_STAGES} />
        </div>
      </div>

      <div>
        {/* Exit above long table */}
        <Exit
          title="ACTIEVE DEALS 3e CONTRACTFASE EXIT"
          label="Legal Research"
          counts={{ red: 1, orange: 2, blue: 3 }}
        />
        <div className="mt-4">
          <ActiveDealsTable data={longRows} stages={LONG_STAGES} />
        </div>
      </div>
    </div>
  );
}
