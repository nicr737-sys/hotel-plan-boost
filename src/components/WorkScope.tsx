import { CheckCircle } from "lucide-react";

const WorkScope = () => {
  const items = [
    "Маркетинговые исследования гостиничного рынка региона",
    "Разработка концепции гостиницы: позиционирование, целевая аудитория, номерной фонд",
    "Анализ номерного фонда и прогноз загрузки по сегментам",
    "Расчет капитальных затрат (CAPEX): строительство, оборудование, FF&E",
    "Операционные расходы (OPEX): персонал, коммунальные услуги, маркетинг",
    "Финансовая модель: отчет о прибылях и убытках (P&L), движение денежных средств (Cash Flow), баланс (Balance Sheet)",
    "Анализ чувствительности и сценарное моделирование",
    "Оценка рисков проекта и способы их минимизации",
    "Расчет ключевых метрик: ADR (средний тариф), RevPAR (выручка на номер), загрузка"
  ];

  return (
    <section>
      <div className="container-premium">
        <div className="max-w-3xl mb-16">
          <h2 className="mb-4">Что входит в бизнес-план гостиницы</h2>
          <p className="text-xl text-muted-foreground">
            Наше участие в проекте позволит с одной стороны убедить инвестора, а с другой - реально повысить рентабельность отеля.
          </p>
        </div>

        <div className="bg-card border border-border p-12">
          <div className="space-y-6 mb-12">
            {items.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" strokeWidth={2} />
                <p className="text-lg">{item}</p>
              </div>
            ))}
          </div>

          <div className="border-t border-border pt-8">
            <h3 className="text-xl font-semibold mb-3">
              Финансовая модель и ключевые метрики
            </h3>
            <p className="text-muted-foreground">
              Для инвестора этот этап работы имеет особенно важное значение, так как позволяет принять решение о целесообразности осуществления планируемого проекта. Опыт нашей компании дает возможность использовать данные реального рынка, а формат предоставляемого бизнес-плана соответствует всем международным стандартам и может быть использован для привлечения инвестиций.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkScope;
