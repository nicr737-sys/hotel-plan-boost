const KPIBadges = () => {
  const metrics = [
    { label: "ADR", value: "Средний тариф", unit: "руб./сутки" },
    { label: "RevPAR", value: "Выручка на номер", unit: "руб./сутки" },
    { label: "Загрузка", value: "Процент занятости", unit: "%" }
  ];

  return (
    <section className="bg-secondary/30">
      <div className="container-premium">
        <div className="max-w-3xl mb-12">
          <h2 className="mb-4">Ключевые метрики гостиничного бизнеса</h2>
          <p className="text-xl text-muted-foreground">
            Мы рассчитываем и прогнозируем основные показатели эффективности, необходимые для принятия инвестиционных решений
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-card border border-border p-8 text-center">
              <div className="text-4xl font-bold text-foreground mb-2">{metric.label}</div>
              <div className="text-lg text-muted-foreground mb-1">{metric.value}</div>
              <div className="text-sm text-muted-foreground">{metric.unit}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KPIBadges;
