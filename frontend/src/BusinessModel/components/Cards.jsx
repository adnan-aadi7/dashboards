import React from 'react';

// Sample data array for the cards
const cardData = [
  {
    id: 'total-contract-value',
    type: 'large',
    title: 'TOTAL CONTRACT VALUE',
    value: '$180.000',
    background: 'bg-gradient-to-b from-[#0B1F0C] via-[#0F3A15] to-[#16A34A]',
    textColor: 'text-white'
  },
  {
    id: 'monthly-revenue',
    type: 'section',
    title: 'MONTHLY REVENUE',
    cards: [
      {
        id: 'mrr',
        title: 'MONTHLY RECURRING REVENUE',
        value: '$15,000',
        trend: '-12% VS LAST 3 MONTHS',
        trendColor: 'text-red-500'
      },
      {
        id: 'argp',
        title: 'AVERAGE RECURRING GROSS PROFIT',
        value: '$14,250',
        trend: '-12% VS LAST 3 MONTHS',
        trendColor: 'text-red-500'
      },
      {
        id: 'mrcrc',
        title: 'MONTHLY RECURRING CLIENT RELATED COSTS',
        value: '$703.33',
        trend: '-12% VS LAST 3 MONTHS',
        trendColor: 'text-red-500'
      },
      {
        id: 'argm',
        title: 'AVERAGE RECURRING GROSS MARGIN',
        value: '93.4%',
        trend: '-12% VS LAST 3 MONTHS',
        trendColor: 'text-red-500'
      }
    ]
  },
  {
    id: 'customer-revenue',
    type: 'section',
    title: 'AVG CUSTOMER REVENUE',
    cards: [
      {
        id: 'clv',
        title: 'AVERAGE CUSTOMER LIFETIME VALUE (CLV)',
        value: '$97,041.60',
        trend: '-12% VS LAST 3 MONTHS',
        trendColor: 'text-red-500'
      },
      {
        id: 'amcr',
        title: 'AVERAGE MONTHLY CUSTOMER REVENUE',
        value: '$3,516.67',
        trend: '-12% VS LAST 3 MONTHS',
        trendColor: 'text-red-500'
      },
      {
        id: 'amcpc',
        title: 'AVERAGE MONTHLY COSTS PER CUSTOMER',
        value: '$703.33',
        trend: '-12% VS LAST 3 MONTHS',
        trendColor: 'text-red-500'
      },
      {
        id: 'amrppc',
        title: 'AVERAGE MONTHLY RECURRING PROFIT PER CUSTOMER',
        value: '$3,516.67',
        trend: '-12% VS LAST 3 MONTHS',
        trendColor: 'text-red-500'
      },
      {
        id: 'ayrpc',
        title: 'AVERAGE YEARLY REVENUE PER CUSTOMER',
        value: '$3,516.67',
        trend: '-12% VS LAST 3 MONTHS',
        trendColor: 'text-red-500'
      }
    ]
  },
  {
    id: 'revenue-streams',
    type: 'section',
    title: 'SPECIFIC MONTHLY REVENUE STREAMS',
    cards: [
      {
        id: 'amcsf',
        title: 'AVERAGE MONTHLY CUSTOMER SAAS FEE',
        value: '$1,250',
        trend: '-12% VS LAST 3 MONTHS',
        trendColor: 'text-red-500'
      },
      {
        id: 'pocp',
        title: '% OF PAYMENT WITH CARD PRESENT',
        value: '30%',
        trend: '-12% VS LAST 3 MONTHS',
        trendColor: 'text-red-500'
      },
      {
        id: 'mcrwc',
        title: 'MONTHLY CUSTOMER REVENUE WITH CARD',
        value: '$400',
        trend: '-12% VS LAST 3 MONTHS',
        trendColor: 'text-red-500'
      },
      {
        id: 'powcp',
        title: '% OF PAYMENT WITHOUT CARD PRESENT',
        value: '70%',
        trend: '-12% VS LAST 3 MONTHS',
        trendColor: 'text-red-500'
      },
      {
        id: 'mcrwocp',
        title: 'MONTHLY CUSTOMER REVENUE WITHOUT CARD PRESENT',
        value: '$1,866.67',
        trend: '-12% VS LAST 3 MONTHS',
        trendColor: 'text-red-500'
      }
    ]
  }
];

// Small area chart component (uses public/Vector.png like Marketing.jsx)
const MiniChart = ({ height = 'h-4' }) => (
  <div className={`w-full ${height}  -mb-3`}>
    <img src="/Graph.png" alt="spark" className="w-full h-full object-fill" />
  </div>
);

// Large variant used for big top cards
const LargeChart = ({ height = 'h-4' }) => (
  <div className={`w-full ${height}  -mb-8`}>
    <img src="/Graph.png" alt="spark" className="w-full h-6 object-fill" />
  </div>
);

// Individual card component
const Card = ({ card, compact = false, tall = false }) => (
  <div className={`rounded-lg bg-gradient-to-b from-[#000000] to-[#242a4c] border border-[#3b4467] p-3 ${compact ? 'h-29' : tall ? 'h-42' : 'h-3'} flex flex-col overflow-hidden`}>
    <h3 className={`${compact ? 'text-[9px]' : tall ? 'text-[11px]' : 'text-[10px]'} tracking-widest text-gray-300 uppercase font-medium leading-tight`}>
      {card.title}
    </h3>
    <div className={`${compact ? 'text-lg' : tall ? 'text-2xl' : 'text-xl'} font-semibold text-white`}>
      {card.value}
    </div>
    <div className={`${compact ? 'text-[8px]' : 'text-[9px]'} mb-1 flex items-center gap-2`}>
      {(() => {
        const parts = (card.trend || '').split(' ');
        const percent = parts.shift() || '';
        const label = parts.join(' ');
        return (
          <>
            <span className={`${card.trendColor}`}>{percent}</span>
            <span className="text-white"> {label}</span>
          </>
        );
      })()}
    </div>
    <div className="mt-auto">
      <MiniChart height={compact ? 'h-5' : tall ? 'h-8' : 'h-5'} />
    </div>
  </div>
);

// Larger card used for CLV (top wide card)
const LargeStatCard = ({ card, compact = false }) => (
  <div className={`rounded-lg bg-gradient-to-b from-[#000000] to-[#252c57] border border-[#252B42] p-3 flex flex-col justify-between overflow-hidden ${compact ? 'h-27' : 'h-40'}`}>
    <h3 className={`${compact ? 'text-[10px]' : 'text-xs'} text-gray-300 uppercase font-medium tracking-widest`}>
      {card.title}
    </h3>
    <div className={`${compact ? 'text-2xl' : 'text-2xl'} font-semibold text-white`}>
      {card.value}
    </div>
    <div className={`text-[10px] mb-1`}>
      {(() => {
        const parts = (card.trend || '').split(' ');
        const percent = parts.shift() || '';
        const label = parts.join(' ');
        return (
          <>
            <span className={`${card.trendColor}`}>{percent}</span>
            <span className="text-white"> {label}</span>
          </>
        );
      })()}
    </div>
    <LargeChart height={compact ? 'h-12' : 'h-16'} />
  </div>
);

// Split card component for two cards side by side
const SplitCard = ({ cards }) => (
  <div className="grid grid-cols-2 gap-2">
    {cards.map((card) => (
      <Card key={card.id} card={card} />
    ))}
  </div>
);

// Section header component
const SectionHeader = ({ title }) => (
  <div className="bg-gradient-to-r from-[#000000] to-[#22D3EE] text-white px-4 py-2 rounded-t-lg">
    <h2 className="text-sm font-medium uppercase">{title}</h2>
  </div>
);

// Section component (panel with header included)
const Section = ({ section }) => (
  <div className="rounded-lg overflow-hidden border border-[#252B42] bg-[#0B1020]">
    {section.title && <SectionHeader title={section.title} />}
    <div className="p-3">
      <div className="grid grid-cols-2 gap-2">
        {section.cards.map((card) => (
          <Card key={card.id} card={card} tall={section.id === 'monthly-revenue'} />
        ))}
      </div>
    </div>
  </div>
);

// Special section for customer revenue with large card + 2x2 grid (panel with header)
const CustomerRevenueSection = ({ section }) => (
  <div className="rounded-lg overflow-hidden border border-[#252B42] bg-[#0B1020]">
    {section.title && <SectionHeader title={section.title} />}
    <div className="p-3 space-y-1">
      {/* Large CLV card */}
      <LargeStatCard card={section.cards[0]} compact />
      {/* 2x2 grid for remaining cards */}
      <div className="grid grid-cols-2 gap-1">
        {section.cards.slice(1).map((card) => (
          <Card key={card.id} card={card} compact />
        ))}
      </div>
    </div>
  </div>
);

// Main Cards component
const Cards = () => {
  return (
    <div className="">
      <div className="grid ">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 ">
          {/* Large Total Contract Value Card */}
          <div className="lg:col-span-3 ">
            {cardData
              .filter(item => item.type === 'large')
              .map((item) => (
                <div
                  key={item.id}
                  className={`${item.background} ${item.textColor} rounded-xl p-6 h-[400px] relative overflow-hidden bg-gradient-to-b from-[#000000] to-[#20A804] border border-[#20A804]`}
                >
                  <h2 className="text-lg md:text-2xl font-medium uppercase text-gray-200">
                    {item.title}
                  </h2>
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="text-5xl md:text-6xl font-extrabold">
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Main content area */}
          <div className="lg:col-span-9">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
              {cardData
                .filter(item => item.type === 'section')
                .map((section) => (
                  <div key={section.id} className="w-full ">
                    {['customer-revenue', 'revenue-streams'].includes(section.id) ? (
                      <CustomerRevenueSection section={section} />
                    ) : (
                      <Section section={section} />
                    )}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
