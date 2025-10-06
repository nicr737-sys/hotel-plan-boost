import { Card, CardContent } from "@/components/ui/card";
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
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-6">Процесс и сроки разработки</h2>
          <p className="text-lg text-muted-foreground">
            Объем умственной работы, которую приходится проделать при запуске гостиничного проекта достаточно большой и включает в себя несколько ключевых этапов.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <Card key={index} className="shadow-soft hover:shadow-elevated transition-shadow duration-300 border-2 relative">
              <CardContent className="p-6">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shadow-lg">
                  {index + 1}
                </div>
                
                <div className="p-3 rounded-lg bg-primary/10 inline-block mb-4 mt-2">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground mb-4">{step.description}</p>
                
                <div className="inline-block px-3 py-1 bg-secondary rounded-full">
                  <span className="text-sm font-medium text-primary">{step.duration}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <Card className="bg-primary/5 border-primary/20 border-2">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Итого: от 6 до 8 недель</h3>
              <p className="text-lg text-muted-foreground">
                Срок зависит от сложности проекта, объема номерного фонда и требований к детализации финансовой модели
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
