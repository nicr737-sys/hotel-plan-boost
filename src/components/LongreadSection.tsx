import { Card, CardContent } from "@/components/ui/card";

const LongreadSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-12 text-center">Экспертная информация о бизнес-планировании гостиниц</h2>

          <div className="prose prose-lg max-w-none space-y-8">
            {/* Начало бизнес-плана */}
            <Card className="border-2">
              <CardContent className="p-8">
                <h3 id="start" className="text-2xl font-bold mb-4">
                  С чего начать бизнес-план отеля?
                </h3>
                <p className="text-muted-foreground mb-4">
                  Если идти стандартным путем - то сначала надо заказать концепцию гостиницы, затем проект и строительную смету, а потом уже заниматься финансовым моделированием.
                </p>
                <p className="text-muted-foreground mb-4">
                  Проблема в том, что все это стоит значительных денег. А чтобы получить их - сначала надо представить инвестору бизнес-план гостиницы.
                </p>
                <p className="text-muted-foreground">
                  Разорвать этот круг можно с нашей помощью. Опыт предыдущих гостиничных проектов привел к тому, что у нас появились база знаний, статистика, доступ к каталогам, справочникам и аналитике. В результате, мы можем выстроить ряд логичных и обоснованных допущений и построить на их основе финансовую модель отеля.
                </p>
              </CardContent>
            </Card>

            {/* Концепция гостиницы */}
            <Card className="border-2">
              <CardContent className="p-8">
                <h3 id="concept" className="text-2xl font-bold mb-4">
                  Пример ТЗ на разработку концепции гостиницы
                </h3>
                <p className="text-muted-foreground mb-4">
                  Цель - анализ рыночного потенциала, оценка существующего конкурентного предложения и прогноза спроса в перспективе нескольких лет, разработка концепции проекта.
                </p>
                
                <h4 className="text-xl font-semibold mb-3 mt-6">1. Маркетинговый анализ гостиничного рынка</h4>
                <p className="text-muted-foreground mb-2">Данный анализ должен включать:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>проведение персональных интервью с представителями службы продаж, маркетинга предприятий гостиничного комплекса и частного сектора</li>
                  <li>проведение интервью с представителями индустрии</li>
                  <li>кабинетный анализ доступных данных, ценовых характеристик, программ и прочее</li>
                  <li>анализ участка и его возможностей, транспортная доступность, характер застройки и перспективы развития прилегающей территории</li>
                  <li>экономические и демографические предпосылки</li>
                </ul>

                <h4 className="text-xl font-semibold mb-3 mt-6">2. Концепция гостиницы</h4>
                <p className="text-muted-foreground mb-2">Концепция должна включать следующие компоненты:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Идея и позиционирование</li>
                  <li>Номерной фонд: гостиничная/апарт и иные функции и её форматы</li>
                  <li>Рестораны: услуги питания форматы (количество и вместимость)</li>
                  <li>Услуги комплекса: развлечения/SPA и спорт, конференц-зоны</li>
                  <li>Целевая аудитория</li>
                  <li>Предварительное зонирование/расположение зон в здании</li>
                  <li>Требования к парковке</li>
                </ul>
              </CardContent>
            </Card>

            {/* Стоимость строительства */}
            <Card className="border-2">
              <CardContent className="p-8">
                <h3 id="construction-cost" className="text-2xl font-bold mb-4">
                  Стоимость строительства гостиницы или ее реконструкции
                </h3>
                <p className="text-muted-foreground mb-4">
                  Важным вопросом при составлении бизнес-плана является прогноз стоимости строительства отеля под ключ. Как уже было отмечено выше, более-менее точно это можно сделать при наличии сметы. Однако и без нее можно предварительно определить цену строительства.
                </p>
                <p className="text-muted-foreground mb-4">
                  Дело в том, что гостиничный бизнес - это предмет постоянного изучения большого количества специализированных компаний - от международных гостиничных операторов до разнообразных консалтинговых компаний. Основываясь на их аналитике, можно сделать набор достаточно реалистичных допущений.
                </p>

                <h4 className="text-xl font-semibold mb-3 mt-6">
                  Пример: себестоимость строительства отеля на 152 номера в России
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-border">
                    <thead>
                      <tr className="bg-muted">
                        <th className="border border-border p-3 text-left">Параметры отеля</th>
                        <th className="border border-border p-3 text-right">Всего, USD</th>
                        <th className="border border-border p-3 text-right">Стоимость кв.м., USD</th>
                        <th className="border border-border p-3 text-right">На 1 номер, USD</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr>
                        <td className="border border-border p-3">Проектирование и согласования</td>
                        <td className="border border-border p-3 text-right">6,493,440</td>
                        <td className="border border-border p-3 text-right">760</td>
                        <td className="border border-border p-3 text-right">42,441</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3">Внутренняя отделка</td>
                        <td className="border border-border p-3 text-right">358,848</td>
                        <td className="border border-border p-3 text-right">42</td>
                        <td className="border border-border p-3 text-right">2,345</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3">СМР</td>
                        <td className="border border-border p-3 text-right">5,510,880</td>
                        <td className="border border-border p-3 text-right">645</td>
                        <td className="border border-border p-3 text-right">36,019</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3">Накладные расходы</td>
                        <td className="border border-border p-3 text-right">3,740,300</td>
                        <td className="border border-border p-3 text-right">438</td>
                        <td className="border border-border p-3 text-right">24,446</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3">FF&E</td>
                        <td className="border border-border p-3 text-right">5,615,579</td>
                        <td className="border border-border p-3 text-right">657</td>
                        <td className="border border-border p-3 text-right">36,703</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3">Благоустройство территории</td>
                        <td className="border border-border p-3 text-right">854,400</td>
                        <td className="border border-border p-3 text-right">100</td>
                        <td className="border border-border p-3 text-right">5,584</td>
                      </tr>
                      <tr className="font-bold bg-muted">
                        <td className="border border-border p-3">ИТОГО</td>
                        <td className="border border-border p-3 text-right">22,573,447</td>
                        <td className="border border-border p-3 text-right">2,642</td>
                        <td className="border border-border p-3 text-right">147,539</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Площадь - 8544 кв.м. | Количество номеров - 152
                </p>
              </CardContent>
            </Card>

            {/* Оценка стоимости */}
            <Card className="border-2">
              <CardContent className="p-8">
                <h3 id="valuation" className="text-2xl font-bold mb-4">
                  Как оценить стоимость действующей гостиницы?
                </h3>

                <h4 className="text-xl font-semibold mb-3 mt-6">Правило 10000</h4>
                <p className="text-muted-foreground mb-4">
                  Берем стоимость банки кока-колы из мини-бара отеля и умножив ее на 10.000 получаем стоимость одного номера.
                </p>
                <p className="text-muted-foreground mb-4">
                  <strong>Пример:</strong> Банка кока-колы в мини-баре стоит 4 доллара. Значит, номер стоит 40.000 долларов. Умножаем на количество номеров - получаем стоимость гостиницы.
                </p>
                <p className="text-muted-foreground mb-6 italic">
                  Ограничения метода: стоимость банки кока-колы растет по мере повышения звездности отеля значительно медленнее, чем Cash Flow. Этот метод не учитывает эффективность работы отеля. К методу нельзя относиться слишком серьезно.
                </p>

                <h4 className="text-xl font-semibold mb-3 mt-6">Базовые методы оценки</h4>
                
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold mb-2">Мультипликатор EBITDA</h5>
                    <p className="text-muted-foreground">
                      Берем показатель EBITDA гостиницы и умножаем его на коэффициент, соответствующий позиции отеля в своем сегменте, расположении, эффективности работы и т.д.
                    </p>
                    <p className="text-muted-foreground mt-2">
                      <strong>Пример:</strong> EBITDA отеля равен 150 миллионов рублей, мультипликатор принимаем равным 8. Стоимость отеля составляет 1,2 млрд. рублей.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-semibold mb-2">Уровень доходности</h5>
                    <p className="text-muted-foreground">
                      Берем показатель EBITDA гостиницы и делим его на ставку доходности, которую считаем привлекательной для себя.
                    </p>
                    <p className="text-muted-foreground mt-2">
                      <strong>Пример:</strong> EBITDA отеля равен 150 миллионов рублей, интересующая нас доходность - 20% годовых. Делим 150 млн./20%. Стоимость гостиницы составляет 750 млн. рублей.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Апарт-отели */}
            <Card className="border-2">
              <CardContent className="p-8">
                <h3 id="apart-hotels" className="text-2xl font-bold mb-4">
                  Апарт-отели и фракционная недвижимость
                </h3>
                <p className="text-muted-foreground mb-4">
                  Апарт-отель - относительно новое явление на российском гостиничном рынке. Он представляет собой комбинацию обычных апартаментов с гостиничной инфраструктурой – ресепшн, горничными, инфраструктурой и охраной.
                </p>
                <p className="text-muted-foreground mb-4">
                  <strong>Фракционная недвижимость</strong> – это технология долевого приобретения объекта недвижимости группой частных инвесторов. Часто это бывает номер в апарт-отеле. При этом апарт-отель обеспечивает управление этим номером, бронирование и заселение клиентов, в то время как доход получают фракционные владельцы.
                </p>
                <p className="text-muted-foreground mb-4">
                  Таким образом, фракционная недвижимость - это одновременно технология, облегчающая финансирование строительства отелей и при этом дающая возможность инвестиций в недвижимость денежных средств, недостаточных для самостоятельной покупки целого объекта.
                </p>
                <div className="bg-primary/5 p-6 rounded-lg border border-primary/20 mt-6">
                  <p className="font-semibold mb-2">Преимущества фракционной модели:</p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                    <li>Сокращение срока окупаемости проекта в 2 раза</li>
                    <li>Снижение финансовых рисков для инвестора</li>
                    <li>Сохранение доходов от гостиничного бизнеса</li>
                    <li>Привлечение дополнительного капитала на ранних стадиях</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Рынок гостиниц */}
            <Card className="border-2">
              <CardContent className="p-8">
                <h3 id="market-overview" className="text-2xl font-bold mb-4">
                  Обзор текущего состояния гостиничной отрасли в России
                </h3>
                <p className="text-muted-foreground mb-4">
                  В России насчитывается 4,5 тыс. гостиниц и еще столько же специализированных средств размещения общим объемом примерно на 445 тыс. номеров. При этом в европейской части РФ сконцентрировано более 75% всего номерного фонда страны.
                </p>
                <p className="text-muted-foreground mb-4">
                  Россия сейчас предлагает туристам фактически в основном только два варианта размещения: либо отели класса "люкс" (от 250 долларов США в сутки), либо "базы размещения" советских времен - по ценам 100-200 рублей в сутки в регионах или 200-500 рублей в Москве, но с минимумом удобств и почти полным отсутствием нормального сервиса.
                </p>

                <h4 className="text-xl font-semibold mb-3 mt-6">Основные тенденции рынка:</h4>
                <ul className="list-disc pl-6 text-muted-foreground space-y-3">
                  <li>
                    <strong>Дефицит отелей экономического класса:</strong> повышенный спрос на гостиницы категории "2-3 звезды" в значительной степени объясняется их ценой, более доступной для массового потребителя
                  </li>
                  <li>
                    <strong>Процесс децентрализации:</strong> наблюдается сокращение доли столиц в общем отраслевом балансе на фоне оживления гостиничных рынков других регионов
                  </li>
                  <li>
                    <strong>Реконструкция гостиниц:</strong> активно ведется модернизация существующего фонда с интеграцией современных технологий и услуг
                  </li>
                  <li>
                    <strong>Развитие мини-отелей:</strong> частные мини-отели создаются в городах с недостаточно развитой гостиничной инфраструктурой
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Экономические показатели */}
            <Card className="border-2">
              <CardContent className="p-8">
                <h3 id="economics" className="text-2xl font-bold mb-4">
                  Экономические основы функционирования гостиниц
                </h3>

                <h4 className="text-xl font-semibold mb-3">Показатели деятельности гостиничного предприятия</h4>
                <p className="text-muted-foreground mb-4">
                  Деятельность гостиничных предприятий измеряется экономическими показателями, которые можно подразделить на стоимостные и натуральные, количественные и качественные, объемные или удельные.
                </p>

                <div className="space-y-4">
                  <div className="bg-muted p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">RevPAR (Revenue Per Available Room)</h5>
                    <p className="text-muted-foreground">
                      Отношение общей выручки отеля к числу номеров - главный индикатор гостиничного бизнеса. Этот показатель позволяет оценить эффективность использования номерного фонда.
                    </p>
                  </div>

                  <div className="bg-muted p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">ADR (Average Daily Rate)</h5>
                    <p className="text-muted-foreground">
                      Средний тариф за номер в сутки. Ключевой показатель ценообразования, отражающий позиционирование отеля на рынке.
                    </p>
                  </div>

                  <div className="bg-muted p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Коэффициент загрузки</h5>
                    <p className="text-muted-foreground">
                      Важнейший показатель работы гостиницы, определяющий ее рентабельность. В России средняя загрузка составляет около 40% в год.
                    </p>
                  </div>
                </div>

                <h4 className="text-xl font-semibold mb-3 mt-8">Факторы, влияющие на показатели работы</h4>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Экономические - общее состояние экономики, обменный курс валюты, уровень налогообложения</li>
                  <li>Социально-экономические - распределение населения по уровню доходов, развитие туризма</li>
                  <li>Законодательство - налоговое и трудовое законодательство, правила лицензирования</li>
                  <li>Сезонность и спрос - распределение туристического потока в течение года</li>
                  <li>Конкуренция - количество и качество конкурирующих объектов размещения</li>
                </ul>
              </CardContent>
            </Card>

            {/* Сезонность */}
            <Card className="border-2">
              <CardContent className="p-8">
                <h3 id="seasonality" className="text-2xl font-bold mb-4">
                  Спрос и сезонность в управлении гостиничным предприятием
                </h3>
                <p className="text-muted-foreground mb-4">
                  Понятие "сезон" возникло в курортном секторе гостиничного бизнеса и было связано с временами года или климатическими особенностями местности, которые определяли спрос на гостиничные услуги.
                </p>

                <h4 className="text-xl font-semibold mb-3">Типы сезонов:</h4>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                  <li><strong>"Высокий сезон"</strong> - характеризуется повышенным спросом на гостиничные услуги и наивысшим уровнем загрузки</li>
                  <li><strong>"Низкий (мертвый) сезон"</strong> - низкий спрос на гостиничные услуги и наименьший уровень загрузки</li>
                  <li><strong>"Сезон"</strong> - стабильный спрос на гостиничные услуги и уровень загрузки выше среднего</li>
                  <li><strong>"Переходной сезон"</strong> - период времени между низким сезоном и сезоном</li>
                </ul>

                <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
                  <p className="font-semibold mb-3">Особенности сезонности:</p>
                  <p className="text-muted-foreground mb-3">
                    Для <strong>курортных гостиниц</strong> наибольший процент загрузки приходится на июнь - сентябрь, с пиковой загрузкой в пятницу и субботу.
                  </p>
                  <p className="text-muted-foreground">
                    Для <strong>бизнес-гостиниц</strong> процент загрузки низкий с мая по август и декабря по январь. Активные месяцы: февраль - апрель; сентябрь - ноябрь. Загрузка в выходные дни заметно снижается.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LongreadSection;
