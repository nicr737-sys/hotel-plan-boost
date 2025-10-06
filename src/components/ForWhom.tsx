import { Card, CardContent } from "@/components/ui/card";
import { Building2, TrendingUp, FileText, Hammer } from "lucide-react";

const ForWhom = () => {
  const audiences = [
    {
      icon: Building2,
      title: "Получение банковского кредита",
      description: "Бизнес-план отеля для предоставления в банк с полной финансовой моделью и обоснованием инвестиций"
    },
    {
      icon: TrendingUp,
      title: "Привлечение инвесторов",
      description: "Презентация проекта гостиницы для частных инвесторов и венчурных фондов с расчетом рентабельности"
    },
    {
      icon: FileText,
      title: "Получение субсидий",
      description: "Подготовка документации для участия в государственных программах поддержки гостиничного бизнеса"
    },
    {
      icon: Hammer,
      title: "Реновация и реконструкция",
      description: "Обоснование экономической целесообразности модернизации действующей гостиницы"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-6">Для кого и когда нужен бизнес-план гостиницы</h2>
          <p className="text-lg text-muted-foreground">
            Гостиничный бизнес в мире в последнее время отличается сложными бизнес-моделями. Просто вложить деньги и ждать, когда инвестиции окупятся - плохая идея. Для того, чтобы не возникало разочарований, вам в любом случае потребуется бизнес-план отеля.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {audiences.map((item, index) => (
            <Card key={index} className="shadow-soft hover:shadow-elevated transition-shadow duration-300 border-2">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForWhom;
