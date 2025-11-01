import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card } from "./ui/card";

export function BruxismExplanation() {
  return (
    <section className="py-32 bg-gradient-to-b from-white via-slate-50 to-blue-50/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl mb-8 text-slate-900 leading-tight">
              Что происходит с вашей челюстью
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Бруксизм — это непроизвольное сжатие челюстей и скрежетание зубами, которое разрушает эмаль, 
              перегружает суставы и создает хроническое мышечное напряжение
            </p>
          </div>

          {/* Layered anatomical visualization */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
            {/* Left: Anatomical imagery */}
            <div className="space-y-8">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1761979658580-5b275fc3eb95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXclMjBwYWluJTIwaGVhZGFjaGV8ZW58MXx8fHwxNzYxOTkzODg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Напряжение челюсти"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
                
                {/* Overlay annotations */}
                <div className="absolute top-6 left-6 right-6">
                  <div className="bg-red-500/90 backdrop-blur-sm px-4 py-3 rounded-xl border border-red-300 shadow-lg">
                    <p className="text-white text-sm">Зона напряжения</p>
                  </div>
                </div>
                
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl">
                    <p className="text-slate-900 text-lg mb-1">Давление на эмаль</p>
                    <p className="text-slate-600 text-sm">До 250 фунтов на квадратный дюйм при сжатии</p>
                  </div>
                </div>
              </div>

              {/* Dental close-up */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-blue-100">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1564420042700-a64e34a54c1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjB0ZWV0aCUyMHNtaWxlfGVufDF8fHx8MTc2MTkzNjUzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Структура эмали"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/40 to-purple-600/40"></div>
              </div>
            </div>

            {/* Right: Anatomical explanations */}
            <div className="space-y-6">
              <Card className="p-8 bg-white border-2 border-slate-200 shadow-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-2xl text-slate-900 mb-3">Стирание эмали</h3>
                    <p className="text-slate-700 leading-relaxed">
                      Эмаль — самая твердая ткань в организме, но постоянное трение при бруксизме медленно 
                      разрушает ее. Обнажается дентин — чувствительный слой под эмалью. Процесс необратим.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-white border-2 border-orange-200 shadow-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-3 h-3 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-2xl text-slate-900 mb-3">Перегрузка ВНЧС</h3>
                    <p className="text-slate-700 leading-relaxed">
                      Височно-нижнечелюстной сустав испытывает микротравмы от избыточного давления. 
                      Хрящевой диск смещается, возникает воспаление. Появляются щелчки, боль при открывании рта, 
                      ограничение подвижности.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-white border-2 border-purple-200 shadow-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-3 h-3 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-2xl text-slate-900 mb-3">Гипертрофия жевательных мышц</h3>
                    <p className="text-slate-700 leading-relaxed">
                      Массетер — одна из самых сильных мышц тела. При постоянном сжатии она увеличивается в размерах, 
                      меняет форму лица, вызывает лицевую боль и утреннюю скованность. Напряжение переходит 
                      на височные мышцы — источник головных болей.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 shadow-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-3 h-3 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-2xl text-slate-900 mb-3">День и ночь</h3>
                    <p className="text-slate-700 leading-relaxed">
                      Дневной бруксизм связан со стрессом — вы сжимаете челюсть во время концентрации. 
                      Ночной бруксизм происходит во сне и часто сопровождается скрежетом. 
                      Оба типа наносят ущерб, но осознанность помогает контролировать дневные эпизоды.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Bottom insight */}
          <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-3xl p-10 md:p-16 text-white text-center shadow-2xl">
            <p className="text-3xl md:text-4xl mb-6 leading-relaxed">
              Большинство людей не замечают бруксизм до появления серьезных симптомов
            </p>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
              Осознание — первый шаг к изменению. Исследования показывают, что регулярное отслеживание может 
              снизить количество эпизодов на 40–70%
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
