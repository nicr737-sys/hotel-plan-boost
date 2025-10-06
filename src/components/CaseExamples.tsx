import { MapPin, ArrowRight } from "lucide-react";

const CaseExamples = () => {
  const cases = [
    { title: "Реновация отеля \"Тарей\"", location: "Ханты-Мансийск" },
    { title: "Реконструкция гостиницы \"Высота 1170\" и создание спа-отеля Green Flow", location: "Роза Хутор, Сочи" },
    { title: "Бизнес-план и презентация отеля Corfu Senses", location: "остров Корфу, Греция" },
    { title: "Бизнес-план отеля Green Flow Байкал", location: "Особая экономическая зона \"Байкальская Гавань\"" },
    { title: "Бизнес-план отеля \"Кайзерхофф\"", location: "г. Калининград" },
    { title: "Бизнес-план загородной гостиницы \"Country Resort\"", location: "Московская область" },
    { title: "Перезапуск гостиницы \"Галерея\"", location: "Абрамцево, МО" },
    { title: "Реконструкции отелей Aquamare Beach Hotel & Spa и Aloe Hotel", location: "Кипр" },
    { title: "Гольф-курорт VENUS ROCK", location: "Кипр" },
    { title: "Отель Mercure Сахалин", location: "для получения статуса резидента ТОР \"Горный Воздух\"" },
    { title: "Курорт Morakot Island", location: "Камбоджа" },
    { title: "Апарт-отель \"Тригорье\"", location: "Спортивно‑туристический комплекс \"Шерегеш\"" },
    { title: "Мини-отель \"Дриада\"", location: "Красная Поляна" },
    { title: "Реконструкция санатория \"Кавказская Ривьера\"", location: "Сочи" },
    { title: "Гостиница PARK HOTEL UFA", location: "к саммиту БРИКС" },
    { title: "Бизнес-план санатория", location: "п. Грахово, Черногория" },
    { title: "Мини-гостиница \"Отель-Сухум\"", location: "Республика Абхазия" },
    { title: "Апарт-отель HARTZ", location: "Республика Абхазия" }
  ];

  return (
    <section id="examples" className="bg-secondary/30">
      <div className="container-premium">
        <div className="max-w-3xl mb-16">
          <h2 className="mb-4">Примеры наших проектов</h2>
          <p className="text-xl text-muted-foreground">
            Начиная с 2010 года мы подготовили целый ряд бизнес-планов гостиниц: курортные отели в России, Абхазии, Камбодже, на Кипре, мини-отели, бизнес-гостиницы, апарт-отели.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {cases.map((project, index) => (
            <div 
              key={index} 
              className="bg-card border border-border p-6 transition-smooth hover:shadow-card cursor-pointer group"
            >
              <h3 className="text-lg font-semibold mb-4 leading-tight group-hover:text-primary transition-smooth">
                {project.title}
              </h3>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0" strokeWidth={2} />
                <span>{project.location}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="#contact-form" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold text-lg transition-smooth group"
            onClick={() => {
              if (typeof window !== 'undefined' && (window as any).gtag) {
                (window as any).gtag('event', 'select_content', {
                  content_type: 'cta_scroll_to_cases',
                  item_id: 'view_more_cases'
                });
              }
            }}
          >
            Запросить подробные примеры
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseExamples;
