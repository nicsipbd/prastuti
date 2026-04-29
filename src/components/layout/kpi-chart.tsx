import { TrendingUp } from "lucide-react";
import styles from "../../routes/overview-page.module.css";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface KPIChartProps {
  title: string;
  type: "line" | "bar" | "area" | "pie";
  data: any[];
  dataKey?: string;
  dataKeys?: string[];
  colors?: string[];
}

const DEFAULT_COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"];

export function KPIChart({
  title,
  type,
  data,
  dataKey,
  dataKeys,
  colors = DEFAULT_COLORS,
}: KPIChartProps) {
  return (
    <div className={styles.chartCard}>
      <div className={styles.decorativeOrb}></div>

      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.headerIcon}>
            <TrendingUp />
          </div>
          <h3 className={styles.title}>{title}</h3>
        </div>

        <div className={styles.chartContainer}>
          <ResponsiveContainer width="100%" height="100%">
            {type === "line" && (
              <LineChart data={data}>
                <defs>
                  {dataKeys?.map((key, index) => (
                    <linearGradient
                      key={key}
                      id={`gradient-${key}`}
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="5%"
                        stopColor={colors[index % colors.length]}
                        stopOpacity={0.8}
                      />
                      <stop
                        offset="95%"
                        stopColor={colors[index % colors.length]}
                        stopOpacity={0}
                      />
                    </linearGradient>
                  ))}
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis
                  dataKey="name"
                  stroke="#6b7280"
                  style={{ fontSize: "12px" }}
                />
                <YAxis stroke="#6b7280" style={{ fontSize: "12px" }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                    border: "none",
                    borderRadius: "12px",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  }}
                />
                <Legend wrapperStyle={{ fontSize: "12px" }} />
                {dataKeys?.map((key, index) => (
                  <Line
                    key={key}
                    type="monotone"
                    dataKey={key}
                    stroke={colors[index % colors.length]}
                    strokeWidth={3}
                    dot={{ fill: colors[index % colors.length], r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                ))}
              </LineChart>
            )}
            {type === "bar" && (
              <BarChart data={data}>
                <defs>
                  {dataKeys?.map((key, index) => (
                    <linearGradient
                      key={key}
                      id={`barGradient-${key}`}
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="5%"
                        stopColor={colors[index % colors.length]}
                        stopOpacity={0.9}
                      />
                      <stop
                        offset="95%"
                        stopColor={colors[index % colors.length]}
                        stopOpacity={0.6}
                      />
                    </linearGradient>
                  ))}
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis
                  dataKey="name"
                  stroke="#6b7280"
                  style={{ fontSize: "12px" }}
                />
                <YAxis stroke="#6b7280" style={{ fontSize: "12px" }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                    border: "none",
                    borderRadius: "12px",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  }}
                />
                <Legend wrapperStyle={{ fontSize: "12px" }} />
                {dataKeys?.map((key, index) => (
                  <Bar
                    key={key}
                    dataKey={key}
                    fill={`url(#barGradient-${key})`}
                    radius={[8, 8, 0, 0]}
                  />
                ))}
              </BarChart>
            )}
            {type === "area" && (
              <AreaChart data={data}>
                <defs>
                  {dataKeys?.map((key, index) => (
                    <linearGradient
                      key={key}
                      id={`areaGradient-${key}`}
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="5%"
                        stopColor={colors[index % colors.length]}
                        stopOpacity={0.8}
                      />
                      <stop
                        offset="95%"
                        stopColor={colors[index % colors.length]}
                        stopOpacity={0.1}
                      />
                    </linearGradient>
                  ))}
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis
                  dataKey="name"
                  stroke="#6b7280"
                  style={{ fontSize: "12px" }}
                />
                <YAxis stroke="#6b7280" style={{ fontSize: "12px" }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                    border: "none",
                    borderRadius: "12px",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  }}
                />
                <Legend wrapperStyle={{ fontSize: "12px" }} />
                {dataKeys?.map((key, index) => (
                  <Area
                    key={key}
                    type="monotone"
                    dataKey={key}
                    stroke={colors[index % colors.length]}
                    strokeWidth={2}
                    fill={`url(#areaGradient-${key})`}
                  />
                ))}
              </AreaChart>
            )}
            {type === "pie" && (
              <PieChart>
                <defs>
                  {data.map((entry, index) => (
                    <linearGradient
                      key={`pieGradient-${index}`}
                      id={`pieGradient-${index}`}
                      x1="0"
                      y1="0"
                      x2="1"
                      y2="1"
                    >
                      <stop
                        offset="5%"
                        stopColor={colors[index % colors.length]}
                        stopOpacity={0.9}
                      />
                      <stop
                        offset="95%"
                        stopColor={colors[index % colors.length]}
                        stopOpacity={0.7}
                      />
                    </linearGradient>
                  ))}
                </defs>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) =>
                    `${name}: ${(percent * 100).toFixed(0)}%`
                  }
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey={dataKey || "value"}
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={`url(#pieGradient-${index})`}
                    />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                    border: "none",
                    borderRadius: "12px",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  }}
                />
              </PieChart>
            )}
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
