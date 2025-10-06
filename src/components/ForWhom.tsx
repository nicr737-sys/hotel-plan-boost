import { Building2, TrendingUp, FileCheck, RefreshCw } from "lucide-react";

const ForWhom = () => {
  const audiences = [
    {
      icon: Building2,
      title: "Банки и инвесторы",
      description: "Нужен бизнес-план для получения финансирования или привлечения инвестиций в строительство или реконструкцию отеля"
    },
    {
      icon: TrendingUp,
      title: "Застройщики и девелоперы",
      description: "Требуется обоснование целесообразности проекта и прогноз его рентабельности для принятия решения о запуске"
    },
    {
      icon: FileCheck,
      title: "Получение субсидий",
      description: "Необходим бизнес-план для участия в программах государственной поддержки туристической отрасли"
    },
    {
      icon: RefreshCw,
      title: "Реновация отелей",
      description: "Планируется реконструкция или перепозиционирование действующей гостиницы с оценкой эффективности изменений"
    }
  ];

  return (
    <section className="bg-secondary/30">
      <div className="container-premium">
        <div className="max-w-3xl mb-16">
          <h2 className="mb-4">Для кого и когда нужен бизнес-план гостиницы</h2>
          <p className="text-xl text-muted-foreground">
            Профессионально разработанный бизнес-план отеля критически важен на всех этапах реализации гостиничного проекта
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {audiences.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="bg-card border border-border p-8 transition-smooth hover:shadow-card">
                <div className="p-3 bg-accent/10 inline-block mb-6 rounded">
                  <Icon className="w-6 h-6 text-accent" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ForWhom;
