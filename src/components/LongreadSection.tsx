import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const LongreadSection = () => {
  useEffect(() => {
    // JSON-LD structured data для SEO
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Профессиональная разработка бизнес-планов гостиниц и отелей",
      "description": "Комплексное руководство по разработке бизнес-планов гостиниц: от концепции до финансового моделирования. Экспертный подход к оценке стоимости строительства и действующих отелов.",
      "author": {
        "@type": "Organization",
        "name": "ООО \"ЭКСПЕРТЫ БИЗНЕС-ПЛАНИРОВАНИЯ\""
      },
      "publisher": {
        "@type": "Organization",
        "name": "ООО \"ЭКСПЕРТЫ БИЗНЕС-ПЛАНИРОВАНИЯ\""
      },
      "datePublished": "2025-01-01",
      "dateModified": new Date().toISOString().split('T')[0]
    });
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <article className="py-20 bg-secondary/30">
      <div className="container-premium">
        <div className="max-w-4xl mx-auto">
          <header className="mb-12 text-center">
            <h2 className="mb-4">Экспертная информация о бизнес-планировании гостиниц</h2>
            <p className="text-muted-foreground">
              Комплексное руководство по разработке бизнес-планов отелей и гостиничных комплексов
            </p>
          </header>

          <div className="prose prose-lg max-w-none space-y-8">
            {/* С чего начать */}
            <section id="start">
              <Card className="border-2">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4">
                    С чего начать бизнес-план отеля
                  </h2>
                  <p className="text-muted-foreground mb-3">
                    Стандартный алгоритм: концепция гостиницы → архитектурный проект → строительная смета → финансовое моделирование.
                  </p>
                  <p className="text-muted-foreground mb-3">
                    Проблема: все этапы требуют значительных инвестиций, но для привлечения финансирования банку или инвестору необходим готовый бизнес-план с финансовой моделью.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Разорвать порочный круг */}
            <section id="break-the-loop">
              <Card className="border-2">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4">
                    Как разорвать «порочный круг» финансирования
                  </h2>
                  <p className="text-muted-foreground mb-3">
                    Опыт реализованных проектов (30+) позволяет построить финансовую модель отеля без детальной проектной документации. База знаний включает:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                    <li>Статистику реализованных гостиничных проектов с 1996 года</li>
                    <li>Каталоги AECOM и аналитику международных операторов</li>
                    <li>Отраслевые справочники по капитальным затратам и операционным показателям</li>
                    <li>Проверенные допущения для расчёта стоимости строительства и прогноза выручки</li>
                  </ul>
                  <p className="text-muted-foreground">
                    Работа через обоснованные допущения и финансовую модель позволяет представить инвестору документ уровня технико-экономического обоснования (ТЭО) без затрат на полноценное проектирование.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* ТЗ на концепцию */}
            <section id="tz-concept">
              <Card className="border-2">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4">
                    ТЗ на разработку концепции гостиницы
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    Цель: анализ рыночного потенциала, оценка конкурентного предложения, прогноз спроса, разработка концепции. Результат — документ экономической целесообразности на основе исследований и расчётов независимых консультантов.
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-3 mt-6">Маркетинговый анализ гостиничного рынка</h3>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                    <li>Персональные интервью: службы продаж, маркетинга, представители индустрии</li>
                    <li>Кабинетный анализ: ценовые характеристики, программы, статистика</li>
                    <li>Анализ участка: транспортная доступность, характер застройки, перспективы развития территории</li>
                    <li>Месторасположение объекта: размер/конфигурация участка, текущие планировочные решения</li>
                    <li>Экономические и демографические предпосылки: оценка въездного и внутреннего потока, определение ЦА, прогноз спроса</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-3 mt-6">Концепция гостиницы</h3>
                  <p className="text-muted-foreground mb-2">Обязательные компоненты:</p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-1.5 mb-4">
                    <li>Идея и позиционирование</li>
                    <li>Номерной фонд: гостиничная/апарт-функции, форматы</li>
                    <li>F&B: услуги питания, форматы, количество и вместимость (если целесообразно)</li>
                    <li>Услуги комплекса: развлечения/SPA, спорт, конференц-зоны (если целесообразно)</li>
                    <li>Дополнительное коммерческое использование: торговые/офисные зоны (если целесообразно)</li>
                    <li>Прочие зоны: административные, хозяйственные, технические</li>
                    <li>Целевая аудитория</li>
                    <li>Предварительное зонирование/расположение зон в здании</li>
                    <li>Требования к парковке</li>
                  </ul>

                  <div className="bg-muted p-4 rounded-lg">
                    <p className="font-semibold mb-2">Финансовая модель (для утверждённого варианта концепции):</p>
                    <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                      <li>План доходов: загрузка, ADR, средние чеки, выручка от доп. сервисов</li>
                      <li>План операционных расходов: структура затрат по статьям</li>
                      <li>Затраты инвестиционного характера: прогнозируемый объём капитальных вложений</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* CAPEX */}
            <section id="capex">
              <Card className="border-2">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4">
                    Стоимость строительства и реконструкции гостиницы
                  </h2>
                  <p className="text-muted-foreground mb-3">
                    Оценка стоимости строительства «под ключ». Для формирования бюджета проекта используется сопоставление с отраслевыми бенчмарками и каталогами. Это позволяет принять реалистичные допущения и получить предварительную смету ещё до детальной проектной документации.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    Гостиничный бизнес — предмет изучения международных операторов и консалтинговых компаний. Их аналитика (каталоги AECOM, отраслевые справочники) даёт надёжную базу для допущений.
                  </p>

                  <h3 className="text-xl font-semibold mb-4">Пример CAPEX: отель на 152 номера (8 544 кв. м)</h3>
                  
                  <div className="overflow-x-auto -mx-2">
                    <div className="inline-block min-w-full align-middle">
                      <div className="overflow-hidden border border-border rounded-lg">
                        <table className="min-w-full divide-y divide-border">
                          <thead className="bg-muted sticky top-0 z-10">
                            <tr>
                              <th scope="col" className="px-4 py-3 text-left text-sm font-semibold">
                                Статья затрат
                              </th>
                              <th scope="col" className="px-4 py-3 text-right text-sm font-semibold whitespace-nowrap">
                                Всего, USD
                              </th>
                              <th scope="col" className="px-4 py-3 text-right text-sm font-semibold whitespace-nowrap">
                                USD/кв. м
                              </th>
                              <th scope="col" className="px-4 py-3 text-right text-sm font-semibold whitespace-nowrap">
                                USD/номер
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-border bg-background">
                            <tr>
                              <td className="px-4 py-3 text-sm text-muted-foreground">
                                Проектирование и согласования
                              </td>
                              <td className="px-4 py-3 text-sm text-right tabular-nums">
                                6 493 440
                              </td>
                              <td className="px-4 py-3 text-sm text-right tabular-nums">
                                760
                              </td>
                              <td className="px-4 py-3 text-sm text-right tabular-nums">
                                42 441
                              </td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3 text-sm text-muted-foreground">
                                Внутренняя отделка
                              </td>
                              <td className="px-4 py-3 text-sm text-right tabular-nums">
                                358 848
                              </td>
                              <td className="px-4 py-3 text-sm text-right tabular-nums">
                                42
                              </td>
                              <td className="px-4 py-3 text-sm text-right tabular-nums">
                                2 345
                              </td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3 text-sm text-muted-foreground">
                                СМР
                              </td>
                              <td className="px-4 py-3 text-sm text-right tabular-nums">
                                5 510 880
                              </td>
                              <td className="px-4 py-3 text-sm text-right tabular-nums">
                                645
                              </td>
                              <td className="px-4 py-3 text-sm text-right tabular-nums">
                                36 019
                              </td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3 text-sm text-muted-foreground">
                                Накладные расходы
                              </td>
                              <td className="px-4 py-3 text-sm text-right tabular-nums">
                                3 740 300
                              </td>
                              <td className="px-4 py-3 text-sm text-right tabular-nums">
                                438
                              </td>
                              <td className="px-4 py-3 text-sm text-right tabular-nums">
                                24 446
                              </td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3 text-sm text-muted-foreground">
                                FF&E
                              </td>
                              <td className="px-4 py-3 text-sm text-right tabular-nums">
                                5 615 579
                              </td>
                              <td className="px-4 py-3 text-sm text-right tabular-nums">
                                657
                              </td>
                              <td className="px-4 py-3 text-sm text-right tabular-nums">
                                36 703
                              </td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3 text-sm text-muted-foreground">
                                Благоустройство территории
                              </td>
                              <td className="px-4 py-3 text-sm text-right tabular-nums">
                                854 400
                              </td>
                              <td className="px-4 py-3 text-sm text-right tabular-nums">
                                100
                              </td>
                              <td className="px-4 py-3 text-sm text-right tabular-nums">
                                5 584
                              </td>
                            </tr>
                            <tr className="font-bold bg-muted">
                              <td className="px-4 py-3 text-sm">
                                ИТОГО
                              </td>
                              <td className="px-4 py-3 text-sm text-right tabular-nums">
                                22 573 447
                              </td>
                              <td className="px-4 py-3 text-sm text-right tabular-nums">
                                2 642
                              </td>
                              <td className="px-4 py-3 text-sm text-right tabular-nums">
                                147 539
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground mt-4 italic">
                    Источник: каталог AECOM (крупнейшая в мире архитектурно-проектировочная компания). Данные по отелю среднего уровня в России.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Оценка стоимости */}
            <section id="valuation">
              <Card className="border-2">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4">
                    Оценка действующей гостиницы
                  </h2>

                  <h3 className="text-xl font-semibold mb-3 mt-6">Правило 10 000</h3>
                  <p className="text-muted-foreground mb-3">
                    Стоимость банки кока-колы из мини-бара × 10 000 = стоимость номера.
                  </p>
                  <div className="bg-primary/5 p-4 rounded-lg border border-primary/20 mb-4">
                    <p className="text-sm mb-2">
                      <span className="font-semibold">Пример:</span> банка кока-колы стоит 4 доллара → номер стоит 40 000 долларов → умножаем на количество номеров.
                    </p>
                  </div>
                  <div className="bg-muted p-4 rounded-lg mb-6">
                    <p className="text-sm font-semibold mb-1">Ограничения метода:</p>
                    <ul className="text-xs text-muted-foreground space-y-1 list-disc pl-4">
                      <li>Стоимость кока-колы растёт медленнее Cash Flow при повышении звёздности</li>
                      <li>Не учитывает эффективность работы (прибыль/убытки)</li>
                      <li>Метод имеет юмористический характер</li>
                    </ul>
                  </div>

                  <h3 className="text-xl font-semibold mb-3">Мультипликатор EBITDA</h3>
                  <p className="text-muted-foreground mb-2">
                    EBITDA отеля × мультипликатор (зависит от сегмента, расположения, эффективности).
                  </p>
                  <div className="bg-primary/5 p-4 rounded-lg border border-primary/20 mb-6">
                    <p className="text-sm">
                      <span className="font-semibold">Пример:</span> EBITDA = 150 млн рублей, мультипликатор = ×8 → стоимость отеля 1,2 млрд рублей.
                    </p>
                  </div>

                  <h3 className="text-xl font-semibold mb-3">Доходный подход</h3>
                  <p className="text-muted-foreground mb-2">
                    EBITDA отеля / ставка доходности (целевая доходность инвестора).
                  </p>
                  <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                    <p className="text-sm">
                      <span className="font-semibold">Пример:</span> EBITDA = 150 млн рублей, доходность 20% годовых → 150 млн / 20% = 750 млн рублей.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Апарт-отели */}
            <section id="apart-fractional">
              <Card className="border-2">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4">
                    Апарт-отели и фракционная недвижимость
                  </h2>
                  <p className="text-muted-foreground mb-3">
                    <span className="font-semibold">Апарт-отель</span> — комбинация апартаментов с гостиничной инфраструктурой (ресепшн, горничные, охрана). На коммерческих площадях: кафе, фитнес-центры, социально-культурные объекты.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    <span className="font-semibold">Фракционная недвижимость</span> — технология долевого приобретения объекта группой частных инвесторов (часто номер в апарт-отеле). Управление, бронирование — на апарт-отеле; доход — у фракционных владельцев; комиссия управляющей компании — у апарт-отеля.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    Фракционная недвижимость облегчает финансирование строительства и даёт возможность инвестировать средства, недостаточные для покупки целого объекта.
                  </p>

                  <div className="bg-secondary/50 p-6 rounded-lg border-2 border-primary/30">
                    <h4 className="font-semibold mb-3">Кейс: Franz Klammer Lodge</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Сотрудничество с основоположником фракционных технологий — доктором Дэвидом Дизиком (The Fractional Consultant).
                    </p>
                    <p className="text-sm text-muted-foreground">
                      В 2013 году Дэвид Дизик получил награду ассоциации TheFractionalLife за организацию финансирования курортного отеля Franz Klammer Lodge по фракционной схеме — наиболее успешная среди нескольких десятков представленных проектов. Награду вручил президент TheFractionalLife Пирс Браун на конференции в Лондонском Палас-Отеле.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Алгоритм */}
            <section id="algorithm">
              <Card className="border-2">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4">
                    Алгоритм составления бизнес-плана гостиницы
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Объём умственной работы при запуске гостиничного проекта включает последовательность этапов:
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold">1</div>
                      <p className="text-muted-foreground">Использование свежего обзора рынка</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold">2</div>
                      <p className="text-muted-foreground">Проведение маркетинговых исследований</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold">3</div>
                      <p className="text-muted-foreground">Подготовка концепции гостиницы</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold">4</div>
                      <p className="text-muted-foreground">Построение финансовой модели нового гостиничного бизнеса</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold">5</div>
                      <p className="text-muted-foreground">Разработка инженерного проекта гостиницы/отеля</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Маркетинговые исследования */}
            <section id="research">
              <Card className="border-2">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4">
                    Маркетинговые исследования
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    Исследования дают возможность изучить текущее положение рынка и его перспективы. Являются обоснованием вывода на рынок нового объекта, изменения ценовой политики, добавления услуг. Снижают риски ошибок. Обязательный этап в соответствии с международными требованиями.
                  </p>

                  <h3 className="text-xl font-semibold mb-3">Состав работ</h3>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                    <li>Изучение территории, инфраструктуры района (рекреационный, деловой, экономический портрет региона)</li>
                    <li>Исследование гостиничного рынка региона (анализ спроса и предложения, сегментация, обзор конкурентной базы)</li>
                    <li>Периодические сопоставления, тематические исследования, отдельные исследования по заказу</li>
                  </ul>

                  <div className="bg-muted p-4 rounded-lg">
                    <p className="font-semibold mb-2 text-sm">Финансовая модель (бизнес-план) гостиницы включает:</p>
                    <ul className="text-sm text-muted-foreground space-y-1.5 list-disc pl-4">
                      <li>Производственный план (оценка объёма вложений, техническая эксплуатация)</li>
                      <li>Финансовый план (бюджет доходов/расходов, налоги, расчёт чувствительности)</li>
                      <li>Показатели эффективности и инвестиционной привлекательности</li>
                      <li>Оценка рисков и способы минимизации</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Проект, дизайн, ИТ */}
            <section id="design-it">
              <Card className="border-2">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4">
                    Проект, дизайн, оборудование, ИТ-системы
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    Первое впечатление от отеля клиент получает от экстерьера, интерьера, технического оснащения. Важно оправдать ожидания гостя и не понести лишних расходов на реализацию от неправильно рассчитанных технических решений.
                  </p>

                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="furniture">
                      <AccordionTrigger>Требования к гостиничной мебели</AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-1.5 text-sm">
                          <li>Безопасность (избегать острых углов)</li>
                          <li>Функциональность, трансформируемость</li>
                          <li>Ремонтопригодность (возможность замены повреждённых частей)</li>
                          <li>Негорючесть</li>
                          <li>Материалы, допускаемые органами санитарно-эпидемиологического контроля</li>
                          <li>Устойчивость к износу</li>
                          <li>Гарантия не менее десяти лет</li>
                          <li>Дизайн актуален несколько последующих лет (для замены вышедших из строя предметов)</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="scope">
                      <AccordionTrigger>Состав проектных работ</AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-1.5 text-sm">
                          <li>Технико-экономическая экспертиза гостиницы</li>
                          <li>Архитектурно-планировочное решение и дизайн-проект</li>
                          <li>Экспертиза архитектурного решения на соответствие технологическим нормам и требованиям</li>
                          <li>Руководство по техническому оснащению: спецификация отделочных материалов, мебели, оборудования, аксессуаров</li>
                          <li>Планирование бюджета закупок комплектации, согласование графиков</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="it">
                      <AccordionTrigger>ИТ-системы гостиницы</AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-1.5 text-sm">
                          <li>Разработка решения по автоматизации управления гостиничным объектом</li>
                          <li>Система управления отелем (PMS)</li>
                          <li>Система телефонного обслуживания</li>
                          <li>Система электронных ключ-карт</li>
                          <li>Система цифрового телевидения</li>
                          <li>Система web-бронирования</li>
                          <li>Бухгалтерская система, система складского учёта</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </section>

            {/* Правовые аспекты */}
            <section id="legal">
              <Card className="border-2">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4">
                    Правовые аспекты
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    Современная гостиница — комплекс услуг для проживающих и клиентов со стороны: питание, культурно-развлекательные мероприятия, транспорт. Организация предприятий питания, культурно-развлекательных центров, транспортных услуг требует знания нормативно-правовой базы ещё на стадии становления.
                  </p>

                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="main">
                      <AccordionTrigger>Основной нормативный документ</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-sm text-muted-foreground mb-2">
                          Постановление Правительства РФ от 25 апреля 1997 года №490 «Об утверждении правил предоставления гостиничных услуг в Российской Федерации».
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Исходя из требований этого документа хозяйствующие субъекты оказывают и организуют процесс оказания гостиничных услуг.
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="licensing">
                      <AccordionTrigger>Лицензирование деятельности</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-sm text-muted-foreground mb-2">
                          Федеральный закон от 8 августа 2001 года №128-ФЗ «О лицензировании отдельных видов деятельности» (статья 17).
                        </p>
                        <p className="text-sm text-muted-foreground mb-2">
                          Гостиничная деятельность не упоминается в перечне — следовательно, может осуществляться без лицензии.
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Если гостиница предоставляет услуги, требующие лицензии (например, медицинские, образовательные), на такую деятельность необходимо получить лицензию. Срок действия лицензии — не менее пяти лет (статья 8 ФЗ №128).
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="classification">
                      <AccordionTrigger>Система классификации гостиниц</AccordionTrigger>
                      <AccordionContent>
                        <div className="text-sm text-muted-foreground space-y-2">
                          <p>
                            Требования — от внешнего вида здания до дополнительных услуг. Подробно сформулированы требования к номерам (площадь, внешний вид, оснащение).
                          </p>
                          <p>
                            Недостатки: состояние сантехники, стен, напольных покрытий оценивается категориями «отлично», «хорошо», «удовлетворительно» без приведения критериев. Практически отсутствуют требования к персоналу.
                          </p>
                          <p>
                            Классификация проводится на добровольной основе. В будущем гостиницы вправе позиционировать себя как относящиеся к категории только по результатам государственной классификации.
                          </p>
                          <p className="font-semibold mt-3">Этапы оценки соответствия номеров категориям:</p>
                          <ol className="list-decimal pl-5 space-y-1">
                            <li>Предварительная оценка соответствия требованиям (протоколы соответствия номеров категориям)</li>
                            <li>Балльная оценка по критериям (протоколы с суммарным количеством баллов)</li>
                            <li>Окончательная оценка соответствия номеров категориям</li>
                          </ol>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </section>

            {/* Обзор рынка */}
            <section id="market">
              <Card className="border-2">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4">
                    Обзор рынка России и Москвы
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    В России — 4,5 тыс. гостиниц и специализированных средств размещения общим объёмом ~445 тыс. номеров. В европейской части РФ сконцентрировано {'>'}75% всего номерного фонда. Средняя загрузка — около 40% в год.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    Россия предлагает туристам два варианта размещения: отели класса «люкс» (от 250 долларов в сутки) или «базы размещения» советских времён (100–500 рублей, минимум удобств, почти полное отсутствие сервиса).
                  </p>

                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="trends">
                      <AccordionTrigger>Основные тенденции</AccordionTrigger>
                      <AccordionContent>
                        <div className="text-sm text-muted-foreground space-y-3">
                          <div>
                            <p className="font-semibold mb-1">Дефицит отелей экономического класса</p>
                            <p>Повышенный спрос на категорию «2–3 звезды» объясняется ценой, доступной для массового потребителя.</p>
                          </div>
                          <div>
                            <p className="font-semibold mb-1">Процесс децентрализации</p>
                            <p>Москва и Санкт-Петербург оказывают доминирующее влияние, но наблюдается сокращение доли столиц в общем балансе на фоне оживления рынков других регионов (например, город-курорт Сочи).</p>
                          </div>
                          <div>
                            <p className="font-semibold mb-1">Процесс реконструкции гостиниц</p>
                            <p>Активно ведётся реконструкция многокорпусных гостиниц в Москве, Санкт-Петербурге и регионах. Проблемы: отсутствие конференц-залов, обустроенных автостоянок, лечебно-оздоровительных центров; устаревшие инженерные коммуникации; нерациональное использование землеотводов.</p>
                            <p className="mt-1">Прогноз: комплексная реконструкция с оптимизацией землепользования (увеличение плотности застройки, этажности, освоение подземного пространства) позволит создать крупные современные комплексы с расширенной инфраструктурой.</p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="mini">
                      <AccordionTrigger>Мини-отели</AccordionTrigger>
                      <AccordionContent>
                        <div className="text-sm text-muted-foreground space-y-2">
                          <p>
                            Активное развитие на фоне новых отелей класса люкс и реконструкции крупных комплексов. Создаются в городах с недостаточно развитой инфраструктурой или в популярных местах отдыха (горнолыжные курорты Кавказа, Золотое кольцо).
                          </p>
                          <p>
                            <span className="font-semibold">Санкт-Петербург:</span> около 400 мини-отелей (включая хостелы, VIP-отели). <span className="font-semibold">Тула, Рязань:</span> 15–20% фонда — мини-гостиницы до 10 номеров, 30% — 10–50 номеров.
                          </p>
                          <p>
                            <span className="font-semibold">Москва:</span> значительно меньше мини-отелей. Компания «Стабильная линия» развивает сеть «Ассамблея» (первый отель на Никитской: 28 номеров, 2100 кв. м; $2 млн в строительство, $4,5 млн в отделку без мебели).
                          </p>
                          <p>
                            <span className="font-semibold">Порог вложений:</span> на юге России/граничащих регионах — 50–100 тыс. долларов без земли и продвижения.
                          </p>
                          <p className="font-semibold mt-2">Экономика:</p>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Рентабельность не менее 45% от текущих затрат при 60% заполняемости (20 номеров по 100 евро за сутки)</li>
                            <li>Срок окупаемости (1200 кв. м): 2000 год — 3–5 лет; сейчас — 5–7 лет. При реконструкции/ремонте — 1,5–3 года</li>
                            <li>Затраты на ремонт — 20–30% общего объёма инвестиций</li>
                          </ul>
                          <p className="mt-2">
                            <span className="font-semibold">Риски:</span> высокая зависимость от сезонности (100% заполняемость — лето/выходные); без стабильного управления многие не выходят на окупаемость; максимальная скидка — 15% (vs. крупные отели — до 40%).
                          </p>
                          <p>
                            <span className="font-semibold">Правовой статус:</span> отсутствие нормативных документов для мини-отелей; длительные согласования; юридически остаются жилой недвижимостью с правом краткосрочной аренды; в коммерческую собственность переведено {'<'}5%.
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="motels">
                      <AccordionTrigger>Мотели</AccordionTrigger>
                      <AccordionContent>
                        <div className="text-sm text-muted-foreground space-y-2">
                          <p>
                            На гостиничном рынке России наблюдается отсутствие мотелей. На трассах — единицы. Начинается строительство первой сети придорожных гостиниц.
                          </p>
                          <p>
                            <span className="font-semibold">Douglas Consulting:</span> планирует открыть {'>'}20 мотелей на дорогах Подмосковья и соседних областей. Все на территории заправок EPetrol (также принадлежат Douglas Consulting). Объём инвестиций {'>'} $30 млн. Первый оператор в России, специализирующийся на придорожных гостиницах.
                          </p>
                          <p>
                            <span className="font-semibold">Douglas Hotel</span> (Киевское шоссе, Наро-Фоминск, июль 2005): 3 звезды, 25 номеров; двухместный — $90, люкс — $210.
                          </p>
                          <p>
                            <span className="font-semibold">Планы:</span> мотель на 156-м км трассы Москва–Санкт-Петербург; под Клином, на Валдае, в Дмитровском районе. Площадь 1,5–3,5 тыс. кв. м на 25–59 номеров.
                          </p>
                          <p>
                            <span className="font-semibold">Мнение экспертов:</span> отсутствие придорожных гостиниц связано с отсутствием массового спроса. Интерес — у иностранцев (привычка к сервису) и международных перевозчиков.
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="moscow">
                      <AccordionTrigger>Гостиничный рынок Москвы</AccordionTrigger>
                      <AccordionContent>
                        <div className="text-sm text-muted-foreground space-y-2">
                          <p>
                            Москва и Санкт-Петербург — лидеры по количеству лучших отелей России. Иностранные операторы предпочитают присоединять объекты параллельно в обеих столицах. Наблюдается сокращение доли столиц в общем балансе на фоне оживления рынков регионов.
                          </p>
                          <p className="font-semibold mt-2">Спрос и предложение:</p>
                          <p>
                            По данным ФПС, Россию в первой половине 2005 года посетило 869,1 тыс. иностранцев с туристическими целями (на 12% ниже прошлого года). Причина — рост цен на путёвки из-за дефицита гостиниц туристического класса.
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </section>

            {/* Сезонность */}
            <section id="seasonality">
              <Card className="border-2">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4">
                    Сезонность и спрос
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    Понятие «сезон» возникло в курортном секторе, связано с временами года/климатическими особенностями. Определяет уровень спроса, цен (тарифов), численную потребность в персонале. Для деловых гостиниц сезонность также связана с уровнем спроса, но не влияет на базовые тарифы (не изменяются в течение года).
                  </p>

                  <h3 className="text-xl font-semibold mb-3">Типы сезонов</h3>
                  <div className="space-y-3 mb-6">
                    <div className="bg-muted p-3 rounded-lg">
                      <p className="font-semibold text-sm mb-1">Высокий сезон</p>
                      <p className="text-sm text-muted-foreground">Повышенный спрос, наивысший уровень загрузки.</p>
                    </div>
                    <div className="bg-muted p-3 rounded-lg">
                      <p className="font-semibold text-sm mb-1">Низкий (мёртвый) сезон</p>
                      <p className="text-sm text-muted-foreground">Низкий спрос, наименьший уровень загрузки.</p>
                    </div>
                    <div className="bg-muted p-3 rounded-lg">
                      <p className="font-semibold text-sm mb-1">Сезон</p>
                      <p className="text-sm text-muted-foreground">Стабильный спрос, уровень загрузки выше среднего.</p>
                    </div>
                    <div className="bg-muted p-3 rounded-lg">
                      <p className="font-semibold text-sm mb-1">Переходной сезон</p>
                      <p className="text-sm text-muted-foreground">Период между низким сезоном и сезоном.</p>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-3">Распределение загрузки</h3>
                  <div className="bg-primary/5 p-6 rounded-lg border border-primary/20 space-y-4">
                    <div>
                      <p className="font-semibold mb-2">Курортные гостиницы</p>
                      <p className="text-sm text-muted-foreground mb-1">
                        <span className="font-semibold">По месяцам:</span> наибольший процент загрузки — июнь–сентябрь.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold">По дням недели:</span> наибольшая загрузка — пятница, суббота.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold mb-2">Бизнес-гостиницы</p>
                      <p className="text-sm text-muted-foreground mb-1">
                        <span className="font-semibold">По месяцам:</span> низкая загрузка — май–август, декабрь–январь; активные месяцы — февраль–апрель, сентябрь–ноябрь.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold">По дням недели:</span> загрузка в пятницу и субботу заметно снижается.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* CTA к форме */}
            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">
                Получить персональную консультацию по разработке бизнес-плана гостиницы
              </p>
              <a 
                href="#contact-form" 
                className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-smooth"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Перейти к форме консультации
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default LongreadSection;
