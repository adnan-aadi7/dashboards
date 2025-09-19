import React from "react";
import { Sparklines, SparklinesLine } from 'react-sparklines';

export default function MarketingCards() {
  const bigCards = [
    { id: "marketing", title: "MARKETING EFFECTIVITY", value: "99", suffix: "%" },
    { id: "sales", title: "SALES EFFECTIVITY", value: "$3" },
    { id: "cac", title: "CLIENT ACQUISITION COSTS", value: "$2.10" },
  ];

  const rightTop = [
    {
      id: "scale-costs",
      type: "scale",
      title: "COSTS OF SCALE",
      value: "$5.200",
      change: "-12%",
      label: "VS LAST 3 MONTHS",
    },
    {
      id: "payback",
      type: "widget",
      title: "CAC PAY BACK TIME",
      value: "1.5",
      sub: "MONTHS",
    },
  ];

  const rightBottom = [
    {
      id: "client-cac",
      type: "small",
      title: "CLIENT ACQUISITION COSTS",
      value: "$400",
      change: "-12%",
      label: "VS LAST 3 MONTHS",
    },
    {
      id: "onboarding",
      type: "small",
      title: "CUSTOMER ONBOARDING COSTS",
      value: "$4.000",
      change: "-12%",
      label: "VS LAST 3 MONTHS",
    },
  ];

  const Badge = ({ text }) => (
    <span className="inline-flex items-center rounded-md bg-[#FF3B61]/20 text-[#FF3B61] px-1 py-0.5 text-[8px] font-semibold">
      {text}
    </span>
  );

  const scaleCard = rightTop.find((x) => x.type === "scale");
  const payback = rightTop.find((x) => x.type === "widget");

  const SparkMini = () => (
    <Sparklines data={[5, 10, 5, 20,60,4,6,5, 10, 5, 20,60]} limit={0} width={260} height={32} margin={4}>
      <SparklinesLine color="#00D394" />
    </Sparklines>
  );

  return (
    <div className="grid grid-cols-12 gap-4 ">
      {bigCards.map((card) => (
        <div key={card.id} className="col-span-12 md:col-span-3 ">
          <div className="pb-14 relative overflow-hidden rounded-[18px] border border-[#252B42] bg-gradient-to-b from-[#000000] to-[#090D2800] p-3 min-h-[240px]">
            <div className="text-center text-[10px] tracking-widest text-gray-300 mb-4 ">
              {card.title}
            </div>
            <div className="text-center text-white text-5xl md:text-6xl font-extrabold mb-4 mt-15">
              {card.value}
              {card.suffix ? (
                <span className="text-3xl align-top ml-1">{card.suffix}</span>
              ) : null}
            </div>
            <div className="absolute left-0 right-0 bottom-0 h-16 w-full  ">
              <img src="/graph1.png" alt="graph" className="w-full h-full  " />
            </div>
          </div>
        </div>
      ))}

      {/* Right column: top single full-width scale card with overlaid CAC pill (shorter) */}
      <div className="col-span-12 md:col-span-3 flex flex-col gap-1.5">
        <div className="relative rounded-[14px] border border-[#252B42] bg-[#0A0F1F] p-1.5">
          <div className="text-[7px] tracking-widest text-gray-300 mb-1">{scaleCard.title}</div>
          <div className="text-white text-2xl font-extrabold mb-1">{scaleCard.value}</div>
          <div className="flex items-center gap-1 mb-1">
            <Badge text={scaleCard.change} />
            <span className="text-[7px] text-gray-300">{scaleCard.label}</span>
          </div>
          {/* CAC pill overlay - fixed top-right, ultra compact */}
          <div className="absolute top-1.5 right-1.5 w-16 h-[42px]">
            <div className="rounded border border-white/10 bg-gradient-to-b from-[#4E78C7] to-[#1E2E56] text-white px-1.5 py-1 shadow-md">
              <div className="text-center text-[7px] tracking-widest">{payback.title}</div>
              <div className="text-center text-base font-extrabold leading-none">{payback.value}</div>
              <div className="text-center text-[7px] tracking-wider opacity-90">{payback.sub}</div>
            </div>
          </div>
          <div className="h-8 -mx-1.5 -mb-1.5 mt-1 flex items-center">
            <SparkMini />
          </div>
        </div>

        {/* Bottom two half-width cards (shortest) */}
        <div className="grid grid-cols-2 gap-1.5">
          {rightBottom.map((item) => (
            <div key={item.id} className="rounded-[14px] border border-[#252B42] bg-[#0A0F1F] p-1.5">
              <div className="text-[7px] tracking-widest text-gray-300 mb-1">{item.title}</div>
              <div className="text-white text-lg font-extrabold mb-1">{item.value}</div>
              <div className="flex items-center gap-1 mb-1">
                <Badge text={item.change} />
                <span className="text-[7px] text-gray-300">{item.label}</span>
              </div>
              <div className="h-8 -mx-1.5 -mb-1.5 flex items-center">
                <SparkMini />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
