import { Bell, BarChart3, Heart } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function SystemModules() {
  return (
    <section className="py-32 bg-gradient-to-b from-blue-50/30 to-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl mb-8 text-slate-900 leading-tight">
              Три слоя системы
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              BruxiCare работает как интегрированная экосистема: осознанность, аналитика и облегчение
            </p>
          </div>

          {/* Module 1: Awareness Engine */}
          <div className="mb-32">
            <div className="grid lg:grid-cols-5 gap-12 items-center">
              <div className="lg:col-span-2 space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-2xl">
                    <Bell className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-blue-600 mb-2 uppercase tracking-wider">Модуль 1</div>
                    <h3 className="text-4xl text-slate-900 mb-4">Двигатель осознанности</h3>
                  </div>
                </div>

                <div className="space-y-6 pl-4 border-l-4 border-blue-300">
                  <p className="text-xl text-slate-700 leading-relaxed">
                    EMA (Ecological Momentary Assessment) — метод сбора данных в реальном времени. 
                    Вы получаете мягкие напоминания на телефоне и часах в течение дня.
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Вибрация на запястье. Один вопрос: «Ваша челюсть сейчас напряжена?» Одно касание — ответ зафиксирован. 
                    Не нужно вытаскивать телефон. Система учится вашим паттернам и подстраивает время уведомлений.
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Частота напоминаний настраивается. Алгоритм избегает ночных часов, встреч и других важных событий, 
                    если вы синхронизируете календарь.
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-4">
                  <div className="px-5 py-3 bg-blue-100 rounded-xl border border-blue-300">
                    <p className="text-sm text-blue-900">Телефон</p>
                  </div>
                  <div className="px-5 py-3 bg-cyan-100 rounded-xl border border-cyan-300">
                    <p className="text-sm text-cyan-900">Часы</p>
                  </div>
                  <div className="px-5 py-3 bg-slate-100 rounded-xl border border-slate-300">
                    <p className="text-sm text-slate-900">Фоновый режим</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3">
                <div className="relative">
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-8 border-white bg-gradient-to-br from-blue-500 to-cyan-500 p-8">
                    <div className="bg-white rounded-2xl p-8 shadow-xl h-full flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-8">
                          <div className="w-12 h-12 bg-blue-100 rounded-xl"></div>
                          <div className="text-sm text-slate-400">14:23</div>
                        </div>
                        <div className="space-y-6">
                          <div className="h-4 bg-slate-200 rounded w-3/4"></div>
                          <div className="h-4 bg-slate-200 rounded w-full"></div>
                          <div className="h-4 bg-slate-200 rounded w-2/3"></div>
                        </div>
                      </div>
                      <div className="bg-blue-50 rounded-2xl p-6 border-2 border-blue-200">
                        <p className="text-center text-slate-900 text-lg mb-4">Ваша челюсть сейчас напряжена?</p>
                        <div className="flex gap-3">
                          <button className="flex-1 py-3 bg-green-500 text-white rounded-xl">Расслаблена</button>
                          <button className="flex-1 py-3 bg-red-500 text-white rounded-xl">Сжата</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Watch mockup overlay */}
                  <div className="absolute -right-8 -bottom-8 w-48 h-48 bg-slate-900 rounded-full shadow-2xl border-8 border-white flex items-center justify-center">
                    <div className="text-center text-white space-y-2">
                      <Bell className="w-8 h-8 mx-auto mb-2" />
                      <p className="text-xs">Проверка</p>
                      <p className="text-lg">✓</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Module 2: Insight Layer */}
          <div className="mb-32">
            <div className="grid lg:grid-cols-5 gap-12 items-center">
              <div className="lg:col-span-3 order-2 lg:order-1">
                <div className="relative">
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1589913649361-56d3f8762bc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjB3b3Jrc3BhY2UlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzYxOTkzODg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Аналитическая панель"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/80 to-pink-600/80 flex items-center justify-center p-8">
                      <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 w-full max-w-2xl shadow-2xl">
                        <div className="flex items-center justify-between mb-6">
                          <h4 className="text-2xl text-slate-900">Тепловая карта</h4>
                          <div className="text-sm text-slate-500">За неделю</div>
                        </div>
                        <div className="grid grid-cols-7 gap-2 mb-6">
                          {[...Array(7)].map((_, i) => (
                            <div key={i} className="space-y-2">
                              {[...Array(4)].map((_, j) => (
                                <div 
                                  key={j} 
                                  className="aspect-square rounded-lg"
                                  style={{
                                    backgroundColor: `rgba(239, 68, 68, ${0.2 + (Math.random() * 0.6)})`
                                  }}
                                ></div>
                              ))}
                            </div>
                          ))}
                        </div>
                        <div className="flex justify-between text-xs text-slate-600">
                          <span>Пн</span>
                          <span>Вт</span>
                          <span>Ср</span>
                          <span>Чт</span>
                          <span>Пт</span>
                          <span>Сб</span>
                          <span>Вс</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2 space-y-8 order-1 lg:order-2">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 shadow-2xl">
                    <BarChart3 className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-purple-600 mb-2 uppercase tracking-wider">Модуль 2</div>
                    <h3 className="text-4xl text-slate-900 mb-4">Слой аналитики</h3>
                  </div>
                </div>

                <div className="space-y-6 pl-4 border-l-4 border-purple-300">
                  <p className="text-xl text-slate-700 leading-relaxed">
                    Журналы, тепловые карты, графики. Каждое зафиксированное событие превращается в понимание.
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Вы видите паттерны: в какое время дня челюсть напрягается чаще? Какие события предшествуют? 
                    Корреляция со стрессом, кофеином, качеством сна. Детальные представления по дням, неделям, месяцам.
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Веб-панель позволяет экспортировать отчеты для стоматолога или физиотерапевта. 
                    PDF с графиками, CSV с данными — профессиональный формат для медицинских консультаций.
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-4">
                  <div className="px-5 py-3 bg-purple-100 rounded-xl border border-purple-300">
                    <p className="text-sm text-purple-900">Графики</p>
                  </div>
                  <div className="px-5 py-3 bg-pink-100 rounded-xl border border-pink-300">
                    <p className="text-sm text-pink-900">Экспорт</p>
                  </div>
                  <div className="px-5 py-3 bg-slate-100 rounded-xl border border-slate-300">
                    <p className="text-sm text-slate-900">Веб-панель</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Module 3: Relief Guide */}
          <div>
            <div className="grid lg:grid-cols-5 gap-12 items-center">
              <div className="lg:col-span-2 space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0 shadow-2xl">
                    <Heart className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-green-600 mb-2 uppercase tracking-wider">Модуль 3</div>
                    <h3 className="text-4xl text-slate-900 mb-4">Гид по облегчению</h3>
                  </div>
                </div>

                <div className="space-y-6 pl-4 border-l-4 border-green-300">
                  <p className="text-xl text-slate-700 leading-relaxed">
                    Знание — это лишь начало. Система предлагает техники расслабления челюсти, 
                    проверенные стоматологами и физиотерапевтами.
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Микроупражнения: мягкое открытие рта, медленные движения, точечные массажи массетера. 
                    Дыхательные практики для снятия стресса. Рекомендации по использованию капп, 
                    изменению диеты, управлению триггерами.
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Образовательный контент: анатомия ВНЧС, причины бруксизма, варианты лечения. 
                    Когда стоит обратиться к специалисту — система подскажет, если данные указывают на серьезную проблему.
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-4">
                  <div className="px-5 py-3 bg-green-100 rounded-xl border border-green-300">
                    <p className="text-sm text-green-900">Упражнения</p>
                  </div>
                  <div className="px-5 py-3 bg-emerald-100 rounded-xl border border-emerald-300">
                    <p className="text-sm text-emerald-900">Образование</p>
                  </div>
                  <div className="px-5 py-3 bg-slate-100 rounded-xl border border-slate-300">
                    <p className="text-sm text-slate-900">Поддержка</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3">
                <div className="relative">
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1626681704752-d0cd82a86d24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlc3MlMjB0ZW5zaW9uJTIwcmVsaWVmfGVufDF8fHx8MTc2MTk5Mzg4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Техники расслабления"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-green-900/90 via-green-900/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6">
                        <h4 className="text-xl text-slate-900 mb-4">Упражнение: расслабление массетера</h4>
                        <div className="space-y-3 text-sm text-slate-700">
                          <p>1. Положите пальцы на жевательные мышцы (по бокам челюсти)</p>
                          <p>2. Мягко помассируйте круговыми движениями 30 секунд</p>
                          <p>3. Медленно откройте рот, считая до 5</p>
                          <p>4. Закройте без усилия. Повторите 3 раза</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
