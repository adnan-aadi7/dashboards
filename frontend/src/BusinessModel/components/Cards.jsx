import React from 'react';

// Sample data array for the cards
const cardData = [
  {
    id: 'total-contract-value',
    type: 'large',
    title: 'TOTAL CONTRACT VALUE',
    value: '$180,000',
    background: 'bg-gradient-to-b from-green-600 to-green-400',
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

// Small area chart component
const MiniChart = () => (
  <div className="w-full h-6">
    <svg width="100%" height="100%" viewBox="0 0 100 20" className="overflow-visible">
      <defs>
        <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.3"/>
          <stop offset="100%" stopColor="#22D3EE" stopOpacity="0"/>
        </linearGradient>
      </defs>
      <path
        d="M0,15 Q10,12 20,8 T40,5 T60,10 T80,7 T100,4"
        stroke="#22D3EE"
        strokeWidth="1.5"
        fill="url(#chartGradient)"
        className="opacity-90"
      />
    </svg>
  </div>
);

// Individual card component
const Card = ({ card }) => (
  <div className="bg-gray-800 rounded-lg p-4 h-32 flex flex-col justify-between">
    <h3 className="text-xs text-gray-300 uppercase font-medium leading-tight">
      {card.title}
    </h3>
    <div className="text-xl font-bold text-white">
      {card.value}
    </div>
    <div className={`text-xs ${card.trendColor} mb-1`}>
      {card.trend}
    </div>
    <div className="flex-1">
      <MiniChart />
    </div>
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
  <div className="bg-gradient-to-r from-cyan-500 to-cyan-400 text-white px-4 py-2 rounded-t-lg">
    <h2 className="text-sm font-medium uppercase">{title}</h2>
  </div>
);

// Section component
const Section = ({ section }) => (
  <div className="space-y-2">
    {section.title && <SectionHeader title={section.title} />}
    <div className="grid grid-cols-2 gap-2">
      {section.cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  </div>
);

// Special section for customer revenue with large card + 2x2 grid
const CustomerRevenueSection = ({ section }) => (
  <div className="space-y-2">
    {section.title && <SectionHeader title={section.title} />}
    <div className="space-y-2">
      {/* Large CLV card */}
      <Card card={section.cards[0]} />
      {/* 2x2 grid for remaining cards */}
      <div className="grid grid-cols-2 gap-2">
        {section.cards.slice(1).map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  </div>
);

// Main Cards component
const Cards = () => {
  return (
    <div className="bg-black min-h-screen p-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Large Total Contract Value Card */}
          <div className="lg:col-span-3">
            {cardData
              .filter(item => item.type === 'large')
              .map((item) => (
                <div
                  key={item.id}
                  className={`${item.background} ${item.textColor} rounded-lg p-6 h-48 flex flex-col justify-center items-center`}
                >
                  <h2 className="text-sm font-medium uppercase mb-4">
                    {item.title}
                  </h2>
                  <div className="text-4xl font-bold">
                    {item.value}
                  </div>
                </div>
              ))}
          </div>

          {/* Main content area */}
          <div className="lg:col-span-9">
            <div className="space-y-6">
              {cardData
                .filter(item => item.type === 'section')
                .map((section) => (
                  <div key={section.id}>
                    {section.id === 'customer-revenue' ? (
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
