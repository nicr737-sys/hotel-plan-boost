import { Card, CardContent } from "@/components/ui/card";
import { MapPin, ExternalLink } from "lucide-react";

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
    { title: "Курорт Morakot Island", location: "Камбоджа" },
    { title: "Мини-отель \"Дриада\"", location: "Красная Поляна" },
    { title: "Реконструкция санатория \"Кавказская Ривьера\"", location: "Сочи" },
    { title: "Гостиница PARK HOTEL UFA", location: "к саммиту БРИКС" },
    { title: "Бизнес-план санатория", location: "п. Грахово, Черногория" },
    { title: "Мини-гостиница \"Отель-Сухум\"", location: "Республика Абхазия" },
    { title: "Апарт-отель HARTZ", location: "Республика Абхазия" }
  ];

  return (
    <section id="examples" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-6">Примеры наших проектов</h2>
          <p className="text-lg text-muted-foreground">
            Начиная с 2010 года мы подготовили целый ряд бизнес-планов гостиниц: курортные отели в России, Абхазии, Камбодже, на Кипре, мини-отели, бизнес-гостиницы, апарт-отели.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {cases.map((project, index) => (
            <Card key={index} className="shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 leading-tight">{project.title}</h3>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">{project.location}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#contact-form" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold text-lg transition-colors"
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
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseExamples;
