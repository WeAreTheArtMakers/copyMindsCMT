import { LineChart, Line, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { traderPerformanceData } from "@/lib/mock-data";

export default function PerformanceChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={traderPerformanceData}>
        <XAxis dataKey="name" hide />
        <YAxis hide />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#3b82f6"
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 4, fill: "#3b82f6" }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
