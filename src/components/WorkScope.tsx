import { Card, CardContent } from "@/components/ui/card";
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
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-6">Что входит в бизнес-план гостиницы</h2>
          <p className="text-lg text-muted-foreground">
            Наше участие в проекте позволит с одной стороны убедить инвестора, а с другой - реально повысить рентабельность отеля.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto shadow-elevated border-2">
          <CardContent className="p-8">
            <div className="space-y-4">
              {items.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-lg">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-primary/5 rounded-lg border border-primary/20">
              <p className="text-lg font-semibold text-primary mb-2">
                Финансовая модель и ключевые метрики
              </p>
              <p className="text-muted-foreground">
                Для инвестора этот этап работы имеет особенно важное значение, так как позволяет принять решение о целесообразности осуществления планируемого проекта. Опыт нашей компании дает возможность использовать данные реального рынка, а формат предоставляемого бизнес-плана соответствует всем международным стандартам и может быть использован для привлечения инвестиций.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default WorkScope;
