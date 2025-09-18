import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const pieData = [
  { name: "Marketing", value: 400 },
  { name: "Salaries", value: 300 },
  { name: "Operations", value: 1400 },
  { name: "Other", value: 700 },
];

const COLORS = ["#DB2777", "#22D3EE", "#1D4ED8", "#9333EA"];

const PieChartComponent = () => {
  return (
    <div className="w-full h-28"> {/* ✅ Fixed small height */}
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={pieData}
            cx="50%"
            cy="50%"
            outerRadius={55}  // ✅ Smaller radius
            fill="#8884d8"
            dataKey="value"
            labelLine={false}
            stroke="none"  // ✅ Border removed
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartComponent;
