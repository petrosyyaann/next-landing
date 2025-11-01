'use client';

import { TrendingDown } from "lucide-react";
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

type MetricColor = "red" | "orange" | "yellow" | "green" | "emerald" | "cyan";

interface MetricProps {
  label: string;
  value: number | string;
  percent: string;
  color: MetricColor;
}

const colorClasses: Record<MetricColor, {
  bg: string;
  border: string;
  text: string;
  track: string;
  fill: string;
}> = {
  red: { bg: "bg-red-50", border: "border-red-200", text: "text-red-700", track: "bg-red-200", fill: "bg-red-600" },
  orange: { bg: "bg-orange-50", border: "border-orange-200", text: "text-orange-700", track: "bg-orange-200", fill: "bg-orange-600" },
  yellow: { bg: "bg-yellow-50", border: "border-yellow-200", text: "text-yellow-700", track: "bg-yellow-200", fill: "bg-yellow-600" },
  green: { bg: "bg-green-50", border: "border-green-200", text: "text-green-700", track: "bg-green-200", fill: "bg-green-600" },
  emerald: { bg: "bg-emerald-50", border: "border-emerald-200", text: "text-emerald-700", track: "bg-emerald-200", fill: "bg-emerald-600" },
  cyan: { bg: "bg-cyan-50", border: "border-cyan-200", text: "text-cyan-700", track: "bg-cyan-200", fill: "bg-cyan-600" }
};

interface HeatMapProps {
  title: string;
  data: number[];
  colors: [string, string, string];
}

export function BeforeAfter() {
  const beforeData = [
    { time: '8:00', events: 3 },
    { time: '10:00', events: 5 },
    { time: '12:00', events: 8 },
    { time: '14:00', events: 12 },
    { time: '16:00', events: 11 },
    { time: '18:00', events: 9 },
    { time: '20:00', events: 6 }
  ];

  const afterData = [
    { time: '8:00', events: 1 },
    { time: '10:00', events: 2 },
    { time: '12:00', events: 3 },
    { time: '14:00', events: 4 },
    { time: '16:00', events: 3 },
    { time: '18:00', events: 2 },
    { time: '20:00', events: 1 }
  ];

  const beforeTension = [
    0.9, 0.4, 0.7, 0.85, 0.2, 0.1, 0.6,
    0.8, 0.7, 0.9, 0.6, 0.5, 0.75, 0.4,
    0.65, 0.9, 0.8, 0.7, 0.1, 0.2, 0.5,
    0.75, 0.85, 0.9, 0.6, 0.7, 0.8, 0.3,
    0.2, 0.4, 0.85, 0.75, 0.6, 0.5, 0.4
  ];

  const afterTension = [
    0.2, 0.1, 0.15, 0.3, 0.05, 0.1, 0.2,
    0.25, 0.2, 0.3, 0.15, 0.2, 0.25, 0.1,
    0.3, 0.25, 0.2, 0.1, 0.05, 0.1, 0.15,
    0.2, 0.3, 0.25, 0.15, 0.2, 0.1, 0.1,
    0.05, 0.15, 0.2, 0.25, 0.1, 0.15, 0.1
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-blue-50/30 via-white to-slate-50">
      <div className="container mx-auto px-4">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="inline-flex items-center gap-2 md:gap-3 bg-green-100 text-green-800 px-4 md:px-6 py-2 md:py-3 rounded-full mb-6 md:mb-8 border-2 border-green-300 text-sm md:text-base">
            <TrendingDown className="w-4 h-4 md:w-5 md:h-5" />
            <span className="uppercase tracking-wider">Трансформация</span>
          </div>
          <h2 className="text-4xl md:text-6xl mb-4 md:mb-8 text-slate-900 leading-tight">
            Осознанность меняет привычки
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Сравнение паттернов до и после регулярного использования BruxiCare (8 недель)
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 md:gap-12 mb-12 md:mb-16">

          {/* BEFORE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Red card */}
            <div className="bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl p-4 md:p-8 shadow-xl md:shadow-2xl">
              <div className="bg-white/95 backdrop-blur-md rounded-xl md:rounded-2xl p-4 md:p-8 space-y-6">

                <div className="flex items-center justify-between">
                  <h3 className="text-2xl md:text-3xl text-slate-900">До</h3>
                  <div className="px-3 md:px-4 py-1 md:py-2 bg-red-100 text-red-800 rounded-lg text-xs md:text-sm uppercase tracking-wider">
                    Неделя 1
                  </div>
                </div>

                {/* Chart */}
                <ResponsiveContainer width="100%" height={180}>
                  <BarChart data={beforeData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="time" stroke="#64748b" style={{ fontSize: '10px' }} />
                    <YAxis stroke="#64748b" style={{ fontSize: '10px' }} />
                    <Tooltip />
                    <Bar dataKey="events" fill="#ef4444" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>

                {/* Metrics */}
                <div className="space-y-3 md:space-y-4 text-sm md:text-base">
                  <Metric label="Эпизодов в день" value="54" percent="90%" color="red" />
                  <Metric label="Боль (1-10)" value="7.8" percent="78%" color="orange" />
                  <Metric label="Осознанность (%)" value="15" percent="15%" color="yellow" />
                </div>

                <p className="text-xs md:text-sm text-slate-700 bg-slate-50 border border-slate-200 rounded-xl p-4 leading-relaxed">
                  <strong>Паттерн:</strong> хаотичные события, высокая интенсивность, низкая осознанность триггеров.
                </p>
              </div>
            </div>

            {/* Muscle tension heatmap */}
            <HeatMap title="Карта напряжения мышц" data={beforeTension} colors={['#fbbf24', '#f97316', '#dc2626']} />
          </motion.div>

          {/* AFTER */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl p-4 md:p-8 shadow-xl md:shadow-2xl">
              <div className="bg-white/95 backdrop-blur-md rounded-xl md:rounded-2xl p-4 md:p-8 space-y-6">

                <div className="flex items-center justify-between">
                  <h3 className="text-2xl md:text-3xl text-slate-900">После</h3>
                  <div className="px-3 md:px-4 py-1 md:py-2 bg-green-100 text-green-800 rounded-lg text-xs md:text-sm uppercase tracking-wider">
                    Неделя 8
                  </div>
                </div>

                <ResponsiveContainer width="100%" height={180}>
                  <BarChart data={afterData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="time" stroke="#64748b" style={{ fontSize: '10px' }} />
                    <YAxis stroke="#64748b" style={{ fontSize: '10px' }} />
                    <Tooltip />
                    <Bar dataKey="events" fill="#10b981" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>

                <div className="space-y-3 md:space-y-4 text-sm md:text-base">
                  <Metric label="Эпизодов в день" value="16" percent="30%" color="green" />
                  <Metric label="Боль (1-10)" value="3.1" percent="31%" color="emerald" />
                  <Metric label="Осознанность (%)" value="82" percent="82%" color="cyan" />
                </div>

                <p className="text-xs md:text-sm text-slate-700 bg-green-50 border border-green-200 rounded-xl p-4 leading-relaxed">
                  <strong>Паттерн:</strong> упорядоченные события, высокая осознанность, контролируемые триггеры.
                </p>
              </div>
            </div>

            <HeatMap title="Карта напряжения мышц" data={afterTension} colors={['#d1fae5', '#6ee7b7', '#34d399']} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}


export function Metric({ label, value, percent, color }: MetricProps) {
  const c = colorClasses[color];

  return (
    <div className={`p-3 md:p-4 rounded-xl border-2 ${c.bg} ${c.border}`}>
      <div className="flex items-center justify-between mb-1">
        <span className="text-slate-700 text-sm md:text-base">{label}</span>
        <span className={`text-lg md:text-2xl font-semibold ${c.text}`}>{value}</span>
      </div>
      <div className={`w-full h-2 rounded-full ${c.track}`}>
        <div className={`h-2 rounded-full ${c.fill}`} style={{ width: percent }} />
      </div>
    </div>
  );
}

export function HeatMap({ title, data, colors }: HeatMapProps) {
  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border">
      <h4 className="text-lg md:text-xl text-slate-900 mb-4">{title}</h4>

      <motion.div
        className="grid grid-cols-7 gap-1 md:gap-2"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.02 }
          }
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {data.map((intensity, i) => {
          const bg =
            intensity > 0.6 ? colors[2]
              : intensity > 0.3 ? colors[1]
                : colors[0];

          return (
            <motion.div
              key={i}
              className="aspect-square rounded-md md:rounded-lg"
              style={{ backgroundColor: bg }}
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, y: 0 } }}
            />
          );
        })}
      </motion.div>
    </div>
  );
}
