"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Download, Globe, Mail, CheckCircle2, Smartphone, Watch, Monitor } from "lucide-react";

type FormEvent = React.FormEvent<HTMLFormElement>

export function ClosingCTA() {
  const [email, setEmail] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      }
    })
  };

  return (
    <section className="py-32 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated glow background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/3 left-1/4 w-[28rem] h-[28rem] bg-white rounded-full blur-3xl opacity-10"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-[28rem] h-[28rem] bg-white rounded-full blur-3xl opacity-10"
          animate={{ scale: [1.2, 1, 1.2] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">

          {/* Heading */}
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <motion.div
              className="inline-block bg-white/20 backdrop-blur-md px-6 py-3 rounded-full mb-10 border border-white/30"
              variants={fadeUp}
            >
              <span className="text-white uppercase tracking-wider text-sm">
                Начните заботу о себе
              </span>
            </motion.div>

            <motion.h2
              className="text-4xl sm:text-5xl md:text-7xl mb-8 text-white leading-tight"
              variants={fadeUp}
              custom={1}
            >
              Начните заботиться<br />о своей челюсти<br />уже сегодня
            </motion.h2>

            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-6 max-w-3xl mx-auto leading-relaxed"
              variants={fadeUp}
              custom={2}
            >
              Защитите эмаль от разрушения, снимите напряжение и верните контроль над телом.
            </motion.p>

            <motion.p
              className="text-base sm:text-lg text-purple-200 max-w-2xl mx-auto leading-relaxed"
              variants={fadeUp}
              custom={3}
            >
              Научно обоснованная система осознанности для перестройки многолетних паттернов.
            </motion.p>
          </motion.div>

          {/* Form */}
          {!submitted ? (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mb-16 space-y-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input
                    type="email"
                    placeholder="Ваш email"
                    className="flex-1 h-16 px-6 bg-white/95 backdrop-blur-md border-2 border-white/50 text-slate-900 placeholder:text-slate-500 text-lg"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Button
                    type="submit"
                    size="lg"
                    className="h-16 px-10 bg-white text-blue-900 hover:bg-blue-50 shadow-2xl text-lg whitespace-nowrap"
                  >
                    <Mail className="w-5 h-5 mr-3" />
                    Присоединиться
                  </Button>
                </div>
                <p className="text-sm text-blue-200 text-center">
                  Узнайте первыми о запуске. Без спама.
                </p>
              </form>
            </motion.div>
          ) : (
            <motion.div
              className="max-w-2xl mx-auto mb-16"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="p-10 bg-white/20 backdrop-blur-md rounded-3xl border-2 border-white/40 text-center">
                <CheckCircle2 className="w-20 h-20 mx-auto mb-6 text-green-300" />
                <h3 className="text-3xl mb-4 text-white">Вы в списке!</h3>
                <p className="text-lg text-blue-100">
                  Проверяйте почту — мы скоро свяжемся 📨
                </p>
              </div>
            </motion.div>
          )}

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <Button
              size="lg"
              className="h-16 px-10 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl text-lg"
            >
              <Download className="w-6 h-6 mr-3" />
              Скачать
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="h-16 px-10 bg-white/10 backdrop-blur-md border-2 border-white/40 text-white hover:bg-white/20 text-lg"
            >
              <Globe className="w-6 h-6 mr-3" />
              Веб-версия
            </Button>
          </motion.div>

          {/* Platforms */}
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="text-sm text-blue-200 mb-6 uppercase tracking-wider">
              Доступно на всех устройствах
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {[
                { icon: Smartphone, text: "iOS & Android" },
                { icon: Watch, text: "Apple Watch & Wear OS" },
                { icon: Monitor, text: "Веб-панель" },
              ].map(({ icon: Icon, text }, i) => (
                <motion.div
                  key={text}
                  variants={fadeUp}
                  custom={i}
                  className="px-6 py-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/30 flex items-center gap-3"
                >
                  <Icon className="w-5 h-5 text-white" />
                  <span className="text-white">{text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Footer tagline */}
          <motion.div
            className="text-center mt-16 pt-12 border-t border-white/20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="text-3xl md:text-4xl text-white mb-4 leading-relaxed">
              Осознанность. Аналитика. Облегчение.
            </p>
            <p className="text-xl text-purple-200">
              Ваша челюсть заслуживает заботы.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
