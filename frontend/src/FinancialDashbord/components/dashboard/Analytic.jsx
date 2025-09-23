import React from "react";
import ScalingChart from "./GraphLine";
import PieChartComponent from "./Piechart";
import Wavechart from "./Wavechart";
import LineChart from "./LineChart";
import { Sparklines, SparklinesLine } from 'react-sparklines';
const SectionHeader = ({ text, bg }) => (
  <div
    className={`w-full bg-gradient-to-r from-[#000000] to-[#20A804] rounded-t-lg text-white text-xs font-semibold tracking-widest px-3 py-2 ${bg}`}
  >
    {text}
  </div>
);
const SparkMini = ({
  data = [5, 20, 15, 30, 15, 40, 10, 35, 25, 45, 20, 50, 15, 55, 30],
}) => (
  <Sparklines data={data} limit={0} width={260} height={36} margin={4}>
    <SparklinesLine color="#FF3B61" />
  </Sparklines>
);
const StatCard = ({ title, value, note, change, header }) => (
  <div className="rounded-lg  overflow-hidden border border-[#252B42] flex flex-col h-full min-h-[120px]">
    {/* Card Header (optional) */}
    {header && (
      <div
        className={`px-2 py-1 text-[8px] sm:text-[10px] font-semibold tracking-wider text-white ${header}`}
      >
        <div className="truncate">{title}</div>
      </div>
    )}

    {/* Card Body */}
    <div className="bg-[#181C3A] p-2 sm:p-3 flex flex-col flex-1">
      {!header && (
        <div className="text-[8px] sm:text-[10px] tracking-widest text-gray-300 mb-1 leading-tight line-clamp-2 min-h-[16px]">
          {title.length > 20 ? `${title.substring(0, 17)}...` : title}
        </div>
      )}

      <div className="text-white text-sm sm:text-xl font-semibold mb-1 truncate flex-shrink-0">
        {value}
      </div>

      <div className="flex items-center justify-start gap-1 sm:gap-2 text-[7px] sm:text-[9px] mb-2 min-h-[16px]">
        {change && (
          <span
            className={`font-medium rounded-md px-1 shrink-0 ${
              change.startsWith("-")
                ? "text-red-400 bg-[#FF000024]"
                : "text-green-400 bg-[#00D39424]"
            }`}
          >
            {change}
          </span>
        )}
        {note && (
          <span className="text-gray-400 truncate text-[6px] sm:text-[8px]">
            {note.length > 15 ? `${note.substring(0, 12)}...` : note}
          </span>
        )}
      </div>

      {/* Sparkline replace image */}
      <div className="h-6 sm:h-8 -mx-2 sm:-mx-5 -mb-2 sm:-mb-5 mt-auto flex items-center">
        <SparkMini />
      </div>
    </div>
  </div>
);

const SectionPanel = ({ header, headerBg, children }) => (
  <div className="rounded-lg overflow-hidden border border-[#252B42] bg-[#090D28] h-full flex flex-col">
    <SectionHeader text={header} bg={headerBg} />
    <div className="p-2 flex-1 overflow-auto">{children}</div>
  </div>
);

export default function Marketing() {
  return (
    <div className="grid grid-cols-12  gap-4 text-white ">
      <div className="col-span-12 lg:col-span-4 flex">
        <SectionPanel header="PRODUCT RELATED COSTS GROSS REVENUE - cogs">
          {/* Stat Cards */}
          <div className="grid grid-cols-2 gap-1 sm:gap-2 mb-4">
            <StatCard
              title="REVENUE"
              value="€5,172,595"
              change="+12%"
              note="vs last 3 months"
            />
            <StatCard
              title="COSTS OF GOODS SOLD"
              value="€1,801,005"
              change="-4%"
              note="vs last 3 months"
            />
            <StatCard
              title="GROSS PROFIT"
              value="€5,172,595"
              change="+8%"
              note="vs last 3 months"
            />
            <StatCard
              title="GROSS PROFIT MARGIN"
              value="80%"
              change="-3%"
              note="vs last 3 months"
            />
          </div>

          {/* Chart below cards */}
          <div className="mb-4">
            <ScalingChart />
          </div>

          {/* Two cards in one row */}
          <div className="grid grid-cols-2 gap-1 mb-4">
            <StatCard
              title="GROSS PROFIT"
              value="€5,172,595"
              change="+8%"
              note="vs last 3 months"
            />
            <StatCard
              title="GROSS PROFIT MARGIN"
              value="80%"
              change="-3%"
              note="vs last 3 months"
            />
          </div>

          {/* Table below cards */}
          <div className="mt-4 flex-1 overflow-auto">
            <div className="overflow-x-auto">
              <h1 className="text-sm sm:text-lg font-semibold p-2">
                REVENUE SPECIFICATIONS
              </h1>
              <div className="flex items-center justify-between  bg-[#00D394] p-2 mb-5 rounded">
                {/* Left (Monthly) */}
                <h2 className="text-xs sm:text-sm text-[#1F1F1F]">MONTHLY</h2>

                <p className="text-white">
                  <span className="text-sm sm:text-xl text-[#1F1F1F] font-semibold">
                    €7.345.273
                  </span>{" "}
                  <span className="text-[#003D2B] bg-[#FFFFFF66] rounded-md p-1 text-[10px] sm:text-xs">
                    +12%
                  </span>{" "}
                  <span className="text-[10px] sm:text-xs text-[#1F1F1F]">
                    €5.172.595
                  </span>
                </p>

                {/* Right (Arrow Icon) */}
                <div className="text-[#1F1F1F]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 sm:h-4 sm:w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m0 0l-6-6m6 6l6-6"
                    />
                  </svg>
                </div>
              </div>

              <table className="w-full text-xs sm:text-sm text-gray-300">
                <thead className=" text-gray-100 text-[10px] sm:text-xs uppercase">
                  <tr>
                    <th className="px-2 sm:px-3 py-2 border-r border-[#2A2C3D] text-left">
                      REVENUE
                    </th>
                    <th className="px-2 sm:px-3 py-2 border-r border-[#2A2C3D] text-right">
                      COGS
                    </th>
                    <th className="px-2 sm:px-3 py-2 border-r border-[#2A2C3D] text-right">
                      OVERHEAD
                    </th>
                    <th className="px-2 sm:px-3 py-2 border-r border-[#2A2C3D] text-right">
                      NET PROFIT
                    </th>
                    <th className="px-2 sm:px-3 py-2 border-r border-[#2A2C3D] text-right">
                      SELLER
                    </th>
                    <th className="px-2 sm:px-3 py-2 border-r border-[#2A2C3D] text-right"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-[#252A51]">
                    <td className="px-2 sm:px-3 py-2">Project A</td>
                    <td className="px-2 sm:px-3 py-2 text-right"></td>
                    <td className="px-2 sm:px-3 py-2 text-right text-[#00D394]"></td>
                    <td className="px-2 sm:px-3 py-2 text-right text-[#00D394]"></td>
                    <td className="px-2 sm:px-3 py-2 text-right text-[#00D394]"></td>
                    <td className="px-2 sm:px-3 py-2 text-right text-[#00D394] whitespace-nowrap">
                      <div className="flex justify-end items-center gap-1">
                        <span>€1,034,516</span>
                        <span className="text-xs font-medium">+20%</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 sm:px-3 py-2">Project B</td>
                  </tr>
                  <tr className="bg-[#252A51]">
                    <td className="px-2 sm:px-3 py-2">Project C</td>
                    <td className="px-2 sm:px-3 py-2 text-right"></td>
                    <td className="px-2 sm:px-3 py-2 text-right"></td>
                    <td className="px-2 sm:px-3 py-2 text-right"></td>
                    <td className="px-2 sm:px-3 py-2 text-right"></td>
                    <td className="px-2 sm:px-3 py-2 text-right"></td>
                  </tr>
                  <tr>
                    <td className="px-2 sm:px-3 py-2">Project D</td>
                  </tr>
                  <tr className="bg-[#252A51]">
                    <td className="px-2 sm:px-3 py-2">Project E</td>
                    <td className="px-2 sm:px-3 py-2 text-right"></td>
                    <td className="px-2 sm:px-3 py-2 text-right"></td>
                    <td className="px-2 sm:px-3 py-2 text-right"></td>
                    <td className="px-2 sm:px-3 py-2 text-right"></td>
                    <td className="px-2 sm:px-3 py-2 text-right"></td>
                  </tr>
                  <tr>
                    <td className="px-2 sm:px-3 py-2">Project F</td>
                  </tr>
                  <tr className="bg-[#252A51]">
                    <td className="px-2 sm:px-3 py-2">Project G</td>
                    <td className="px-2 sm:px-3 py-2 text-right"></td>
                    <td className="px-2 sm:px-3 py-2 text-right"></td>
                    <td className="px-2 sm:px-3 py-2 text-right"></td>
                    <td className="px-2 sm:px-3 py-2 text-right"></td>
                    <td className="px-2 sm:px-3 py-2 text-right"></td>
                  </tr>
                  <tr>
                    <td className="px-2 sm:px-3 py-2">Project H</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </SectionPanel>
      </div>

      <div className="col-span-12 lg:col-span-4 flex">
        <SectionPanel header="OPERATIONAL COSTS (overhead)">
          {/* Cards Section */}
          <div className="grid grid-cols-3 gap-1 sm:gap-2 w-full">
            {/* First Row (3 cards) */}
            <StatCard
              className="w-full h-full"
              title="OPERATIONAL COSTS $"
              value="€3,192,969"
              change="+6%"
              note="vs last 3 months"
            />
            <StatCard
              className="w-full h-full bg-[#181C3A]"
              title="OPERATIONAL MARGIN %"
              value="27%"
              change="-1%"
              note="vs last 3 months"
            />
            <StatCard
              className="w-full h-full bg-[#181C3A]"
              title="PROFIT BEFORE TAXES EBITDA"
              value="$2,002,095"
              change="-2%"
              note="vs last 3 months"
            />

            {/* Second Row (2 cards full width) */}
            <div className="col-span-3 grid grid-cols-2 gap-1 w-full">
              <StatCard
                className="w-full h-full"
                title="TAXES"
                value="572"
                change="+4%"
                note="vs last 3 months"
              />
              <StatCard
                className="w-full h-full"
                title="EARNINGS AFTER TAXES"
                value="$1,372,595"
                change="-3%"
                note="vs last 3 months"
              />
            </div>
          </div>

          {/* Charts Section */}
          <h1 className="mt-6 text-sm sm:text-lg font-semibold">Costs</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mt-2">
            {/* Scaling Chart */}
            <div className="bg-[#181C3A] rounded-xl p-2 sm:p-4">
              <div className="h-[200px] sm:h-[250px]">
                <Wavechart />
              </div>
            </div>

            {/* Pie Chart */}
            <div className="bg-[#181C3A] rounded-xl p-2 sm:p-4">
              <div className="h-[200px] sm:h-[250px]">
                <PieChartComponent />
              </div>
            </div>
          </div>

          {/* Revenue Table Section */}
          <div className="mt-12 flex-1 overflow-auto">
            <div className="overflow-x-auto">
              <h1 className="text-sm sm:text-lg font-semibold p-2">
                COSTS SPEFICATION
              </h1>

              {/* Monthly summary row */}
              <div className="flex items-center justify-between bg-[#F04245] p-2 mb-5 rounded">
                <h2 className="text-xs sm:text-sm text-[#1F1F1F]">MONTHLY</h2>

                <p className="text-white">
                  <span className="text-sm sm:text-xl text-[#1F1F1F] font-semibold">
                    €3.192.969
                  </span>{" "}
                  <span className="text-[#CF1114] p-1 rounded-md bg-[#FFFFFF66] text-[10px] sm:text-xs">
                    +12%
                  </span>{" "}
                  <span className="text-[10px] sm:text-xs text-[#1F1F1F]">
                    €5.172.595
                  </span>
                </p>

                {/* Arrow Icon */}
                <div className="text-[#1F1F1F]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 sm:h-4 sm:w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m0 0l-6-6m6 6l6-6"
                    />
                  </svg>
                </div>
              </div>

              {/* Table */}
              <table className="w-full text-xs sm:text-sm text-gray-300 border border-[#2A2C3D] rounded-lg overflow-hidden">
                <tbody>
                  <tr className="">
                    <td className="px-2 sm:px-3 bg-[#252A51] py-2">
                      Belastingdienst
                    </td>
                    <td className="px-2 sm:px-3 py-2 text-right">€1,034,516</td>
                    <td className="px-2 sm:px-3 py-2 text-right text-[#00D394]">
                      +20%
                    </td>
                    <td className="px-2 sm:px-3 py-2 bg-[#252A51] text-right">
                      €400,000
                    </td>
                    <td className="px-2 sm:px-3 py-2 bg-[#252A51] text-right">
                      John Doe
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 sm:px-3 py-2">Lonen en Salarissen</td>
                    <td className="px-2 sm:px-3 py-2 text-right">€850,000</td>
                    <td className="px-2 sm:px-3 py-2 text-right">+10%</td>
                    <td className="px-2 sm:px-3 py-2 text-right">€300,000</td>
                    <td className="px-2 sm:px-3 py-2 text-right">Jane Smith</td>
                  </tr>
                  <tr className="">
                    <td className="px-2 sm:px-3 bg-[#252A51] py-2">
                      Sociale Lasten
                    </td>
                    <td className="px-2 sm:px-3 py-2 text-right">€920,000</td>
                    <td className="px-2 sm:px-3 py-2 text-right">+15%</td>
                    <td className="px-2 sm:px-3 py-2 bg-[#252A51] text-right">
                      €350,000
                    </td>
                    <td className="px-2 sm:px-3 py-2 bg-[#252A51] text-right">
                      Ali Khan
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 sm:px-3 py-2">Projectkosten</td>
                    <td className="px-2 sm:px-3 py-2 text-right">€780,000</td>
                    <td className="px-2 sm:px-3 py-2 text-right">+8%</td>
                    <td className="px-2 sm:px-3 py-2 text-right">€250,000</td>
                    <td className="px-2 sm:px-3 py-2 text-right">
                      Maria Garcia
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 sm:px-3 py-2 bg-[#252A51]">
                      Auto Lease
                    </td>
                    <td className="px-2 sm:px-3 py-2 text-right">€780,000</td>
                    <td className="px-2 sm:px-3 py-2 text-right">+8%</td>
                    <td className="px-2 sm:px-3 py-2 bg-[#252A51] text-right">
                      €250,000
                    </td>
                    <td className="px-2 sm:px-3 py-2 bg-[#252A51] text-right">
                      Maria Garcia
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 sm:px-3 py-2">Autokosten (overig)</td>
                    <td className="px-2 sm:px-3 py-2 text-right">€780,000</td>
                    <td className="px-2 sm:px-3 py-2 text-right">+8%</td>
                    <td className="px-2 sm:px-3 py-2 text-right">€250,000</td>
                    <td className="px-2 sm:px-3 py-2 text-right">
                      Maria Garcia
                    </td>
                  </tr>
                  <tr className="">
                    <td className="px-2 sm:px-3 bg-[#252A51] py-2">
                      Sociale Lasten
                    </td>
                    <td className="px-2 sm:px-3 py-2 text-right">€920,000</td>
                    <td className="px-2 sm:px-3 py-2 text-right">+15%</td>
                    <td className="px-2 sm:px-3 py-2 bg-[#252A51] text-right">
                      €350,000
                    </td>
                    <td className="px-2 sm:px-3 py-2 bg-[#252A51] text-right">
                      Ali Khan
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 sm:px-3 py-2">Autokosten (overig)</td>
                    <td className="px-2 sm:px-3 py-2 text-right">€780,000</td>
                    <td className="px-2 sm:px-3 py-2 text-right">+8%</td>
                    <td className="px-2 sm:px-3 py-2 text-right">€250,000</td>
                    <td className="px-2 sm:px-3 py-2 text-right">
                      Maria Garcia
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </SectionPanel>
      </div>

      {/* Net Profit */}
      <div className="col-span-12 lg:col-span-4 flex">
        <SectionPanel header="NET PROFIT">
          {/* Cards Section */}
          <div className="grid grid-cols-3 gap-1 sm:gap-2 w-full">
            {/* First Row (3 cards) */}
            <StatCard
              className="w-full h-full"
              title="NET PROFIT"
              value="€3,192,969"
              change="+6%"
              note="vs last 3 months"
            />
            <StatCard
              className="w-full h-full bg-[#181C3A]"
              title="NET PROFIT MARGIN"
              value="27%"
              change="-1%"
              note="vs last 3 months"
            />
            <StatCard
              className="w-full h-full bg-[#181C3A]"
              title="GROWTH CASH POSITION (BANK)"
              value="$2,002,095"
              change="-2%"
              note="vs last 3 months"
            />

            {/* Second Row (2 cards full width) */}
            <div className="col-span-3 grid grid-cols-2 gap-1 w-full">
              <StatCard
                className="w-full h-full"
                title="NET CASH POSITION (BANK)"
                value="572"
                change="+4%"
                note="vs last 3 months"
              />
              <StatCard
                className="w-full h-full"
                title="GROWTH CASH POSITION"
                value="$1,372,595"
                change="-3%"
                note="vs last 3 months"
              />
            </div>
          </div>
          <div className="mt-12">
            <LineChart />
          </div>
          {/* Revenue Table Section */}
          <div className="mt-12 flex-1 overflow-auto">
            <div className="overflow-x-auto">
              <h1 className="text-sm sm:text-lg font-semibold p-2">
                FORECAST CASH POSITION
              </h1>
              <table className="w-full text-xs sm:text-sm text-gray-300">
                <thead className="text-gray-100 text-[10px] sm:text-xs uppercase">
                  <tr>
                    <th className="px-2 sm:px-3 py-2 border-r border-[#2A2C3D] text-left"></th>
                    <th className="px-2 sm:px-3 py-2 border-r border-[#2A2C3D] text-left"></th>
                    <th className="px-2 sm:px-3 py-2 border-r border-[#2A2C3D] text-right">
                      REVENUE
                    </th>
                    <th className="px-2 sm:px-3 py-2 border-r border-[#2A2C3D] text-right">
                      COGS
                    </th>
                    <th className="px-2 sm:px-3 py-2 border-r border-[#2A2C3D] text-right">
                      OVERHEAD
                    </th>
                    <th className="px-2 sm:px-3 py-2 border-r border-[#2A2C3D] text-right">
                      INCOME
                    </th>
                    <th className="px-2 sm:px-3 py-2 border-r border-[#2A2C3D] text-right">
                      NET CASH POSITION
                    </th>
                    <th className="px-2 sm:px-3 py-2 text-right">Seller</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="">
                    <td className="px-2 sm:px-3 bg-[#252A51] py-2">MEI</td>
                    <td className="px-2 sm:px-3 bg-[#252A51] py-2 text-right">
                      FORECASTED
                    </td>
                    <td className="px-2 sm:px-3 py-2 bg-[#F0424599] text-right">
                      €820,000
                    </td>
                    <td className="px-2 sm:px-3 py-2 bg-[#2FC639] text-right">
                      €120,000
                    </td>
                    <td className="px-2 sm:px-3 py-2 bg-[#F0424599] text-right text-[#00D394]">
                      €820,000
                    </td>
                    <td className="px-2 sm:px-3 py-2 bg-[#F0424599] text-right">
                      €820,000
                    </td>
                    <td className="px-2 sm:px-3 py-2 bg-[#F0424599] text-right">
                      €820,000
                    </td>
                    <td className="px-2 sm:px-3 py-2 bg-[#F0424599] text-right">
                      €820,000
                    </td>
                  </tr>
                  <tr className="">
                    <td className="px-2 sm:px-3 bg-[#252A51] py-2">JUNI</td>
                    <td className="px-2 sm:px-3 py-2 text-right">FORECASTED</td>
                    <td className="px-2 sm:px-3 py-2 text-right">€820,000</td>
                    <td className="px-2 sm:px-3 py-2 text-right">€120,000</td>
                    <td className="px-2 sm:px-3 py-2 text-right text-[#00D394]">
                      €820,000
                    </td>
                    <td className="px-2 sm:px-3 py-2 text-right">€820,000</td>
                    <td className="px-2 sm:px-3 py-2 text-right">€820,000</td>
                    <td className="px-2 sm:px-3 py-2 text-right">€820,000</td>
                  </tr>
                  <tr className="">
                    <td className="px-2 sm:px-3 bg-[#252A51] py-2">JULI</td>
                    <td className="px-2 sm:px-3 bg-[#252A51] py-2 text-right">
                      FORECASTED
                    </td>
                    <td className="px-2 sm:px-3 py-2 bg-[#F0424599] text-right">
                      €820,000
                    </td>
                    <td className="px-2 sm:px-3 py-2 bg-[#2FC639] text-right">
                      €120,000
                    </td>
                    <td className="px-2 sm:px-3 py-2 bg-[#F0424599] text-right text-[#00D394]">
                      €820,000
                    </td>
                    <td className="px-2 sm:px-3 py-2 bg-[#F0424599] text-right">
                      €820,000
                    </td>
                    <td className="px-2 sm:px-3 py-2 bg-[#F0424599] text-right">
                      €820,000
                    </td>
                    <td className="px-2 sm:px-3 py-2 bg-[#F0424599] text-right">
                      €820,000
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 sm:px-3 bg-[#252A51] py-2">AUGUEST</td>
                    <td className="px-2 sm:px-3 py-2 text-right">REALITY</td>
                    <td className="px-2 sm:px-3 py-2 text-right">€910,000</td>
                    <td className="px-2 sm:px-3 py-2 text-right">€140,000</td>
                    <td className="px-2 sm:px-3 py-2 text-right text-red-500">
                      €820,000
                    </td>
                    <td className="px-2 sm:px-3 py-2 text-right">€820,000</td>
                    <td className="px-2 sm:px-3 py-2 text-right">€820,000</td>
                    <td className="px-2 sm:px-3 py-2 text-right">€820,000</td>
                  </tr>
                  <tr className="">
                    <td className="px-2 sm:px-3 bg-[#252A51] py-2">OCTOBER</td>
                    <td className="px-2 sm:px-3 bg-[#252A51] py-2 text-right">
                      FORECASTED
                    </td>
                    <td className="px-2 sm:px-3 py-2 bg-[#F0424599] text-right">
                      €760,000
                    </td>
                    <td className="px-2 sm:px-3 py-2 bg-[#2FC639] text-right">
                      €100,000
                    </td>
                    <td className="px-2 sm:px-3 py-2 bg-[#F0424599] text-right text-[#00D394]">
                      €820,000
                    </td>
                    <td className="px-2 sm:px-3 py-2 bg-[#F0424599] text-right">
                      €820,000
                    </td>
                    <td className="px-2 sm:px-3 py-2 bg-[#F0424599] text-right">
                      €820,000
                    </td>
                    <td className="px-2 sm:px-3 py-2 bg-[#F0424599] text-right">
                      €820,000
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 sm:px-3 bg-[#252A51] py-2">
                      September
                    </td>
                    <td className="px-2 sm:px-3 py-2 text-right">REALITY</td>
                    <td className="px-2 sm:px-3 py-2 text-right">€890,000</td>
                    <td className="px-2 sm:px-3 py-2 text-right">€150,000</td>
                    <td className="px-2 sm:px-3 py-2 text-right text-[#00D394]">
                      €820,000
                    </td>
                    <td className="px-3 py-2 text-right">€820,000</td>
                    <td className="px-3 py-2 text-right">€820,000</td>
                    <td className="px-3 py-2 text-right">€820,000</td>
                  </tr>
                  <tr className="">
                    <td className="px-2 sm:px-3 bg-[#252A51] py-2">MEI</td>
                    <td className="px-2 sm:px-3 bg-[#252A51] py-2 text-right">
                      FORECASTED
                    </td>
                    <td className="px-2 sm:px-3 py-2 bg-[#F0424599] text-right">
                      €820,000
                    </td>
                    <td className="px-2 sm:px-3 py-2 bg-[#2FC639] text-right">
                      €120,000
                    </td>
                    <td className="px-2 sm:px-3 py-2 bg-[#F0424599] text-right text-[#00D394]">
                      €820,000
                    </td>
                    <td className="px-2 sm:px-3 py-2 bg-[#F0424599] text-right">
                      €820,000
                    </td>
                    <td className="px-2 sm:px-3 py-2 bg-[#F0424599] text-right">
                      €820,000
                    </td>
                    <td className="px-2 sm:px-3 py-2 bg-[#F0424599] text-right">
                      €820,000
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 sm:px-3 bg-[#252A51] py-2">
                      September
                    </td>
                    <td className="px-2 sm:px-3 py-2 text-right">REALITY</td>
                    <td className="px-2 sm:px-3 py-2 text-right">€890,000</td>
                    <td className="px-2 sm:px-3 py-2 text-right">€150,000</td>
                    <td className="px-2 sm:px-3 py-2 text-right text-[#00D394]">
                      €820,000
                    </td>
                    <td className="px-3 py-2 text-right">€820,000</td>
                    <td className="px-3 py-2 text-right">€820,000</td>
                    <td className="px-3 py-2 text-right">€820,000</td>
                  </tr>
                  <tr className="">
                    <td className="px-2 sm:px-3 bg-[#252A51] py-2">MEI</td>
                    <td className="px-2 sm:px-3 bg-[#252A51] py-2 text-right">
                      FORECASTED
                    </td>
                    <td className="px-2 sm:px-3 py-2 bg-[#F0424599] text-right">
                      €820,000
                    </td>
                    <td className="px-2 sm:px-3 py-2 bg-[#2FC639] text-right">
                      €120,000
                    </td>
                    <td className="px-2 sm:px-3 py-2 bg-[#F0424599] text-right text-[#00D394]">
                      €820,000
                    </td>
                    <td className="px-2 sm:px-3 py-2 bg-[#F0424599] text-right">
                      €820,000
                    </td>
                    <td className="px-2 sm:px-3 py-2 bg-[#F0424599] text-right">
                      €820,000
                    </td>
                    <td className="px-2 sm:px-3 py-2 bg-[#F0424599] text-right">
                      €820,000
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </SectionPanel>
      </div>
    </div>
  );
}
