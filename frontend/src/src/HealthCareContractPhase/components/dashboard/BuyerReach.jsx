import React from 'react'

const STAGES = [
  { key: 'marketResearch', label: 'Market Research' },
  { key: 'legalDue', label: 'Legal Due Diligence' },
  { key: 'technicalDue', label: 'Technical Due Diligence' },
  { key: 'floorplan', label: 'Floorplan Architect' },
  { key: 'taxOptimization', label: 'Floorplan Architect' },
]

const defaultRow = {
  street: 'Project C',
  progress: { value: 20, total: 30, barColor: '#22C55E', badgeText: 'Over' },
  stageData: {
    marketResearch: { done: true },
    legalDue: { done: true },
    technicalDue: { done: true },
    floorplan: { done: true },
    taxOptimization: { done: true },
  },
}

function SectionHeader({ title, rightBadges = [], leftBadges = [], leftGap = 'gap-2' }) {
  return (
    <div className="flex items-center justify-between px-3 py-3 bg-[#141938] rounded-md">
      <div className={`flex items-center ${leftGap}`}>
        <div className="text-white font-semibold tracking-wide text-[12px] uppercase">{title}</div>
        {leftBadges.map((b, idx) => (
          <span key={idx} className="inline-flex items-center justify-center w-9 h-9 rounded-full text-[12px] font-bold "
            style={{ backgroundColor: b.bg || '#1F2A55', color: b.color || '#6CC1FF' }}>{b.text}</span>
        ))}
      </div>
      <div className="flex items-center gap-3">
        {rightBadges.map((b, idx) => (
          <span key={idx} className="inline-flex items-center justify-center w-6 h-6 rounded-full text-[12px] font-bold"
            style={{ backgroundColor: b.bg || '#1F2A55', color: b.color || '#6CC1FF' }}>{b.text}</span>
        ))}
      </div>
    </div>
  )
}

export default function BuyerReach({ title = 'POT. BUYER OUTREACH', count = 1, row = defaultRow }) {
  const pct = Math.min(100, Math.max(0, (row.progress.value / row.progress.total) * 100))
  return (
    <section className="w-full bg-[#0F1330] rounded-md overflow-hidden">
      {/* Section 1: Pot. Buyer Outreach */}
      <SectionHeader title={title} leftBadges={[{ text: String(count) }]} rightBadges={[{ text: 'V', color: '#FFFFFF' }]} />

      {/* Content Row */}
      <div className="px-2 py-2 overflow-x-auto no-scrollbar">
        <div className="w-full min-w-[900px] xl:min-w-0 grid grid-cols-[120px_160px_160px_160px_160px_160px_160px] items-center gap-1.5">
          {/* Project pill */}
          <div>
            <span className="inline-block rounded-full bg-[#2A334D] text-white/90 text-[12px] px-6 py-2">{row.street}</span>
          </div>

          {/* Progress bar */}
          <div className="relative h-7 w-[160px] rounded-full bg-[#2A334D]">
            <div className="absolute left-0 top-0 h-full rounded-full" style={{ width: `${pct}%`, background: row.progress.barColor }} />
            <div className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full px-2.5 py-[2px] text-white text-[9px] font-semibold" style={{ background: row.progress.barColor }}>{row.progress.badgeText || 'Over'}</div>
            <span className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-[10px] font-semibold">{row.progress.value}/{row.progress.total} DAYS</span>
          </div>

          {/* Stage pills */}
          {STAGES.map((s) => {
            const cfg = (row.stageData && row.stageData[s.key]) || {}
            const pillColor = cfg.color || (cfg.done ? '#2A3354' : '#2A3354')
            const textColor = cfg.textColor || '#FFFFFF'
            const rightIcon = cfg.rightTag ? (
              <span className="text-[11px] font-semibold text-white">{cfg.rightTag}</span>
            ) : (
              <span className="ml-2 inline-flex items-center justify-center w-5 h-5 rounded-full bg-white"><span className="text-[#16A34A] text-[12px] font-bold">✓</span></span>
            )
            return (
              <div key={s.key} className="flex items-center gap-1">
                <div className="flex items-center justify-between rounded-full h-7 px-2 min-w-[160px]" style={{ backgroundColor: pillColor }}>
                  <span className="text-[9px] font-semibold" style={{ color: textColor }}>{s.label}</span>
                  {rightIcon}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Section 2: Concept Sent To Buyer (header only) */}
      <div className="mt-3"></div>
      <SectionHeader
        title="CONCEPT SENT TO BUYER"
        leftBadges={[{ text: '1', bg: '#F59E0B', color: '#0E1330' }, { text: '1' }]}
        leftGap="gap-3"
        rightBadges={[{ text: 'V', color: '#FFFFFF' }]}
      />

      {/* spacer under header per screenshot */}
      <div className="h-6" />

      {/* Section 3: Signed Purchase Agreement (header only) */}
      <SectionHeader
        title="SIGNED PURCHASE AGREEMENT"
        rightBadges={[{ text: 'V', color: '#FFFFFF' }]}
      />
      <div className="h-6" />
    </section>
  )
}


