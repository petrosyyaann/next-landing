"use client";

import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Smartphone, Watch, Monitor } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

const float: Variants = {
  animate: {
    y: [-6, 6, -6],
    rotate: [-1.2, 1.2, -1.2],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function HeroImmersive() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 overflow-hidden flex items-center">
      {/* Background Pattern */}
      <motion.div
        className="absolute inset-0 opacity-[0.03]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03, transition: { duration: 2 } }}
      >
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="jaw-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1.5" fill="#1e40af" />
              <circle cx="90" cy="90" r="1.5" fill="#7c3aed" />
              <path d="M 30 60 Q 45 45, 60 60 T 90 60" stroke="#334155" strokeWidth="0.5" fill="none" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#jaw-pattern)" />
        </svg>
      </motion.div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">

          {/* Left Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-10"
          >
            <motion.div variants={fadeUp} custom={0} className="flex items-center gap-3 flex-wrap">
              <Badge variant="outline" className="bg-white/90 backdrop-blur-sm border-blue-300 px-4 py-2">
                <Smartphone className="w-4 h-4 mr-2 text-blue-600" />
                Телефон
              </Badge>
              <Badge variant="outline" className="bg-white/90 backdrop-blur-sm border-purple-300 px-4 py-2">
                <Watch className="w-4 h-4 mr-2 text-purple-600" />
                Часы
              </Badge>
              <Badge variant="outline" className="bg-white/90 backdrop-blur-sm border-slate-300 px-4 py-2">
                <Monitor className="w-4 h-4 mr-2 text-slate-600" />
                Веб
              </Badge>
            </motion.div>

            <motion.div variants={fadeUp} custom={1} className="space-y-6">
              <h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05]">
                <span className="block text-slate-900">Контролируйте</span>
                <span className="block text-slate-900">напряжение</span>
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  челюсти
                </span>
              </h1>

              <div className="space-y-4 max-w-xl">
                <p className="text-2xl md:text-3xl text-slate-700 leading-relaxed">
                  Защитите эмаль. Понимайте свое тело.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed border-l-4 border-blue-400 pl-6">
                  Научно обоснованная система для отслеживания и снижения бруксизма на телефоне, часах и в вебе.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} custom={2} className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-xl px-8 py-6 text-lg h-auto">
                Скачать приложение
              </Button>
              <Button variant="outline" className="border-2 border-slate-300 hover:bg-slate-100 px-8 py-6 text-lg h-auto">
                Присоединиться к списку ожидания
              </Button>
            </motion.div>

            <motion.div variants={fadeUp} custom={3} className="flex items-center gap-8 pt-6 text-sm text-slate-600 border-t border-slate-200">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
                Сертифицировано
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 bg-blue-500 rounded-full"></div>
                Открытый код
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 bg-purple-500 rounded-full"></div>
                Данные защищены
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <div className="relative">
            {/* Jaw Image */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-8 border-white/80 backdrop-blur-sm relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1564420042700-a64e34a54c1b?auto=format&fit=crop&w=1080&q=80"
                  alt="Анатомия челюсти"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent"></div>
              </div>

              {/* Floating Cards */}
              <motion.div
                className="absolute -left-6 top-1/3 bg-white rounded-3xl shadow-2xl p-6 max-w-[240px] border-2 border-blue-100"
                {...float}
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                    <Watch className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Проверка состояния</p>
                    <p className="text-lg text-slate-900">Челюсть расслаблена ✓</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -right-8 bottom-1/4 bg-white rounded-3xl shadow-2xl p-6 max-w-[240px] border-2 border-purple-100"
                {...float}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                    <Smartphone className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Прогресс</p>
                    <p className="text-lg text-slate-900">-74% нагрузки</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
