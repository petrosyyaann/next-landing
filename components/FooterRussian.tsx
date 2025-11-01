"use client";

import { Smartphone, Watch, Monitor, Heart, Github } from "lucide-react";
import { Separator } from "./ui/separator";
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

export function FooterRussian() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-20">

        {/* Main */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand */}
          <motion.div variants={fadeUp} custom={0} className="space-y-4">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
              BruxiCare
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Научно обоснованная система для осознанного контроля бруксизма.
              Снижайте напряжение челюсти. Защитите эмаль.
            </p>

            <div className="flex items-center gap-4 pt-4">
              {[Smartphone, Watch, Monitor].map((Icon, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.12 }}
                  className="w-11 h-11 rounded-xl bg-white/10 backdrop-blur-md
                             flex items-center justify-center border border-white/20
                             hover:bg-white/20 cursor-pointer transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Product */}
          <motion.div variants={fadeUp} custom={1}>
            <h4 className="text-lg mb-4 font-semibold">Продукт</h4>
            <ul className="space-y-3 text-sm text-slate-300">
              {["Мобильное приложение", "Приложение для часов", "Веб-панель", "Возможности", "Цены", "Дорожная карта"].map(
                (item) => (
                  <li key={item} className="hover:text-white transition-colors cursor-pointer">
                    {item}
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={fadeUp} custom={2}>
            <h4 className="text-lg mb-4 font-semibold">Ресурсы</h4>
            <ul className="space-y-3 text-sm text-slate-300">
              {["О бруксизме", "Здоровье ВНЧС", "Научные исследования", "Блог", "Сообщество", "Справочный центр"].map(
                (item) => (
                  <li key={item} className="hover:text-white transition-colors cursor-pointer">
                    {item}
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={fadeUp} custom={3}>
            <h4 className="text-lg mb-4 font-semibold">Компания</h4>
            <ul className="space-y-3 text-sm text-slate-300">
              {["О нас", "Карьера", "Пресс-кит", "Контакты", "Партнеры", "Медицинские специалисты"].map(
                (item) => (
                  <li key={item} className="hover:text-white transition-colors cursor-pointer">
                    {item}
                  </li>
                )
              )}
            </ul>
          </motion.div>
        </motion.div>

        <Separator className="bg-white/20 mb-10" />

        {/* Platforms */}
        <motion.div
          variants={fadeUp}
          custom={4}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <Smartphone className="w-4 h-4" /> Телефон
            <span className="opacity-40">•</span>
            <Watch className="w-4 h-4" /> Часы
            <span className="opacity-40">•</span>
            <Monitor className="w-4 h-4" /> Веб
          </div>
        </motion.div>

        {/* Open Source */}
        <motion.div
          variants={fadeUp}
          custom={5}
          className="mb-10 text-center flex justify-center text-sm text-slate-300"
        >
          <Github className="w-4 h-4 mr-2" /> Открытый исходный код
          <span className="mx-2 opacity-40">•</span>
          <Heart className="w-4 h-4 text-red-400 fill-red-400 mr-1" /> Создано с заботой о здоровье челюсти
        </motion.div>

        <Separator className="bg-white/20 mb-8" />

        {/* Bottom */}
        <motion.div
          variants={fadeUp}
          custom={6}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400"
        >
          <p>© 2025 BruxiCare. Все права защищены.</p>

          <div className="flex flex-wrap gap-6">
            {["Политика конфиденциальности", "Условия", "Соответствие", "Cookies", "Доступность"].map(
              (item) => (
                <a key={item} href="#" className="hover:text-white transition-colors">
                  {item}
                </a>
              )
            )}
          </div>
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          variants={fadeUp}
          custom={7}
          className="mt-8 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl"
        >
          <p className="text-xs text-slate-300 text-center leading-relaxed">
            <strong className="text-yellow-300">Важно:</strong> BruxiCare не является медицинским устройством и не
            предназначен для диагностики или лечения заболеваний. Это инструмент для осознанности и отслеживания поведения.
            При симптомах обращайтесь к врачу.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
