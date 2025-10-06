import { Search, Lightbulb, Calculator, FileText, PresentationIcon, CheckCircle2 } from "lucide-react";

const ProcessSteps = () => {
  const steps = [
    {
      icon: Search,
      title: "Маркетинговые исследования",
      description: "Изучение территории, инфраструктуры района, исследование гостиничного рынка региона, анализ спроса и предложения, сегментация рынка, обзор конкурентной базы",
      duration: "5-7 дней"
    },
    {
      icon: Lightbulb,
      title: "Разработка концепции",
      description: "Идея и позиционирование, определение номерного фонда, ресторанов и услуг комплекса, целевая аудитория, зонирование, требования к архитектурным решениям",
      duration: "7-10 дней"
    },
    {
      icon: Calculator,
      title: "Финансовая модель",
      description: "Производственный план, прогноз загрузки и ADR, финансовый план (бюджет доходов и расходов), расчет чувствительности проекта, оценка инвестиционной привлекательности",
      duration: "10-14 дней"
    },
    {
      icon: FileText,
      title: "Проект и оборудование",
      description: "Технико-экономическая экспертиза, архитектурно-планировочное решение и дизайн-проект, руководство по техническому оснащению, планирование бюджета закупок",
      duration: "14-21 день"
    },
    {
      icon: PresentationIcon,
      title: "Подготовка презентации",
      description: "Оформление бизнес-плана в соответствии с требованиями банков и инвесторов, подготовка презентационных материалов",
      duration: "3-5 дней"
    },
    {
      icon: CheckCircle2,
      title: "Сопровождение",
      description: "Консультации при защите проекта, корректировки по замечаниям кредитного комитета или инвесторов",
      duration: "по запросу"
    }
  ];

  return (
    <section>
      <div className="container-premium">
        <div className="max-w-3xl mb-16">
          <h2 className="mb-4">Процесс и сроки разработки</h2>
          <p className="text-xl text-muted-foreground">
            Объем умственной работы, которую приходится проделать при запуске гостиничного проекта достаточно большой и включает в себя несколько ключевых этапов.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="bg-card border border-border p-8 transition-smooth hover:shadow-card relative">
                <div className="absolute top-0 right-0 w-10 h-10 bg-accent/10 flex items-center justify-center font-bold text-lg text-accent">
                  {index + 1}
                </div>
                
                <div className="p-3 bg-accent/10 inline-block mb-6 rounded">
                  <Icon className="w-6 h-6 text-accent" strokeWidth={2} />
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground mb-6 text-base">{step.description}</p>
                
                <div className="text-sm text-muted-foreground">
                  <span className="font-medium">{step.duration}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-card border border-border p-8 text-center">
          <h3 className="text-2xl font-bold mb-3">Итого: от 6 до 8 недель</h3>
          <p className="text-lg text-muted-foreground">
            Срок зависит от сложности проекта, объема номерного фонда и требований к детализации финансовой модели
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
