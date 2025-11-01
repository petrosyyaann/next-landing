import { Sunrise, Sun, Sunset, Moon } from "lucide-react";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function DayWithBruxiCare() {
  return (
    <section className="py-32 bg-gradient-to-b from-white via-purple-50/20 to-blue-50/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl mb-8 text-slate-900 leading-tight">
              День с BruxiCare
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              От утренней проверки до ночного режима — система поддерживает осознанность на каждом этапе
            </p>
          </div>

          {/* Timeline storyline */}
          <div className="space-y-16">
            {/* Morning */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-400 to-yellow-400 flex items-center justify-center shadow-lg">
                    <Sunrise className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-orange-600 uppercase tracking-wider mb-1">07:30</div>
                    <h3 className="text-3xl text-slate-900">Утренняя проверка</h3>
                  </div>
                </div>

                <div className="pl-6 border-l-4 border-orange-300 space-y-4">
                  <p className="text-lg text-slate-700 leading-relaxed">
                    Вы просыпаетесь. Первое действие — открыть приложение и ответить на вопросы: 
                    «Болит ли челюсть?», «Качество сна?», «Заметили скрежет?»
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    Система фиксирует утренние симптомы. Если партнер слышал скрежет ночью — вы можете добавить эту информацию. 
                    Боль оценивается по шкале 1-10. Все данные сохраняются для анализа паттернов.
                  </p>
                </div>

                <div className="bg-orange-50 rounded-2xl p-6 border-2 border-orange-200">
                  <p className="text-sm text-orange-900">
                    <span className="font-semibold">Совет дня:</span> Легкий массаж массетера утром помогает снять напряжение после ночи
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-[9/16] max-w-sm mx-auto bg-slate-900 rounded-[3rem] shadow-2xl p-4 border-8 border-slate-800">
                  <div className="bg-white rounded-[2.5rem] h-full overflow-hidden relative">
                    <div className="bg-gradient-to-br from-orange-500 to-yellow-500 h-32 flex items-center justify-center">
                      <Sunrise className="w-12 h-12 text-white" />
                    </div>
                    <div className="p-6 space-y-4">
                      <h4 className="text-xl text-slate-900">Доброе утро!</h4>
                      <div className="space-y-3">
                        <div className="bg-slate-50 rounded-xl p-4">
                          <p className="text-sm text-slate-600 mb-2">Челюсть болит?</p>
                          <div className="flex gap-2">
                            {[1,2,3,4,5].map(n => (
                              <div key={n} className="w-8 h-8 rounded-lg bg-slate-200 flex items-center justify-center text-xs">
                                {n}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="bg-slate-50 rounded-xl p-4">
                          <p className="text-sm text-slate-600 mb-2">Качество сна</p>
                          <div className="flex gap-2">
                            <div className="flex-1 py-2 bg-green-100 rounded text-center text-xs">Хорошо</div>
                            <div className="flex-1 py-2 bg-slate-200 rounded text-center text-xs">Плохо</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Daytime */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1614721827836-a7a24d470a69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHdhdGNoJTIwaGVhbHRoJTIwYXBwfGVufDF8fHx8MTc2MTg5OTAzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Умные часы"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6">
                      <div className="flex items-center justify-between mb-4">
                        <p className="text-slate-900 text-lg">Проверка напряжения</p>
                        <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                      </div>
                      <div className="flex gap-3">
                        <button className="flex-1 py-3 bg-green-500 text-white rounded-xl text-sm">
                          Расслаблена
                        </button>
                        <button className="flex-1 py-3 bg-red-500 text-white rounded-xl text-sm">
                          Сжата
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6 order-1 lg:order-2">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                    <Sun className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-blue-600 uppercase tracking-wider mb-1">14:45</div>
                    <h3 className="text-3xl text-slate-900">Уведомление во время стресса</h3>
                  </div>
                </div>

                <div className="pl-6 border-l-4 border-blue-300 space-y-4">
                  <p className="text-lg text-slate-700 leading-relaxed">
                    Вы на важной встрече. Концентрация высокая. Вибрация на запястье — мягкое напоминание.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    Один взгляд на часы. Вопрос: «Челюсть напряжена?» Вы осознаете — да, сжата. 
                    Один тап: «Сжата». Система зафиксировала. Вы делаете глубокий вдох, расслабляете челюсть. 
                    Момент осознанности прерывает автоматический паттерн.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    Через час — еще одна проверка. На этот раз челюсть расслаблена. Прогресс.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-2xl p-6 border-2 border-blue-200">
                  <p className="text-sm text-blue-900">
                    <span className="font-semibold">Напоминание:</span> Стрессовые ситуации — главный триггер дневного бруксизма
                  </p>
                </div>
              </div>
            </div>

            {/* Evening */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                    <Sunset className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-purple-600 uppercase tracking-wider mb-1">20:00</div>
                    <h3 className="text-3xl text-slate-900">Вечерняя рефлексия</h3>
                  </div>
                </div>

                <div className="pl-6 border-l-4 border-purple-300 space-y-4">
                  <p className="text-lg text-slate-700 leading-relaxed">
                    День подходит к концу. Вы открываете приложение и видите дневную статистику: 
                    8 проверок, 3 эпизода напряжения, 5 моментов расслабленности.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    График показывает пик напряжения между 14:00 и 16:00 — именно тогда были важные задачи. 
                    Корреляция очевидна. Вы добавляете заметку: «Крайний срок по проекту — стресс».
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    Приложение предлагает упражнение: 5-минутная релаксация челюсти перед сном. 
                    Вы следуете инструкциям — мягкое растяжение, дыхание, массаж.
                  </p>
                </div>

                <div className="bg-purple-50 rounded-2xl p-6 border-2 border-purple-200">
                  <p className="text-sm text-purple-900">
                    <span className="font-semibold">Достижение:</span> Сегодня на 40% меньше эпизодов, чем неделю назад
                  </p>
                </div>
              </div>

              <div className="relative">
                <Card className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 shadow-2xl">
                  <h4 className="text-xl text-slate-900 mb-6">Сегодняшний отчет</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-white rounded-xl">
                      <span className="text-slate-700">Проверок</span>
                      <span className="text-2xl text-slate-900">8</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white rounded-xl">
                      <span className="text-slate-700">Эпизодов напряжения</span>
                      <span className="text-2xl text-red-600">3</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white rounded-xl">
                      <span className="text-slate-700">Моментов расслабления</span>
                      <span className="text-2xl text-green-600">5</span>
                    </div>
                    <div className="p-4 bg-purple-100 rounded-xl border border-purple-300">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-purple-900">Прогресс за неделю</span>
                        <span className="text-sm text-green-700">-40%</span>
                      </div>
                      <div className="w-full bg-white rounded-full h-3">
                        <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full" style={{width: '60%'}}></div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Night */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1759176171049-9b4f451506d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbGVlcCUyMG5pZ2h0JTIwcmVzdHxlbnwxfHx8fDE3NjE5OTM4ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Ночной отдых"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Moon className="w-6 h-6 text-slate-700" />
                        <p className="text-slate-900 text-lg">Ночной режим активен</p>
                      </div>
                      <p className="text-sm text-slate-600">
                        Уведомления отключены до 7:00. Приятных снов!
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6 order-1 lg:order-2">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-700 to-blue-900 flex items-center justify-center shadow-lg">
                    <Moon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-600 uppercase tracking-wider mb-1">23:00</div>
                    <h3 className="text-3xl text-slate-900">Ночное руководство</h3>
                  </div>
                </div>

                <div className="pl-6 border-l-4 border-slate-300 space-y-4">
                  <p className="text-lg text-slate-700 leading-relaxed">
                    Вы готовитесь ко сну. Приложение напоминает: проверьте каппу, если она назначена стоматологом. 
                    Ночной режим активируется — уведомления отключены до утра.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    Система не может отслеживать ночной бруксизм автоматически (пока), но утром вы зафиксируете симптомы. 
                    Со временем паттерны проявятся: качество сна, утренняя боль, звуки скрежета от партнера.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    Спокойной ночи. Завтра — новый день осознанности.
                  </p>
                </div>

                <div className="bg-slate-100 rounded-2xl p-6 border-2 border-slate-300">
                  <p className="text-sm text-slate-700">
                    <span className="font-semibold">Совет:</span> Расслабление перед сном снижает вероятность ночного бруксизма на 30-40%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
