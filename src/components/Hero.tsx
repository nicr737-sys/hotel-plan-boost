import { Button } from "@/components/ui/button";
import { Phone, Award, Briefcase, FileText } from "lucide-react";

const Hero = () => {
  const handleCTAClick = (action: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'select_content', {
        content_type: action,
        item_id: action
      });
    }
  };

  const kpis = [
    { icon: Award, label: "Опыт с", value: "1996 года" },
    { icon: Briefcase, label: "Реализовано проектов", value: "30+" },
    { icon: FileText, label: "Кейсов финансирования через ЦФА", value: "3" }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container-premium">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="mb-6">
              Бизнес-план гостиницы (отеля): разработка под банк и инвестора
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Начиная с 2010 года мы подготовили целый ряд бизнес-планов гостиниц: курортные отели в России, Абхазии, Камбодже, на Кипре, мини-отели, бизнес-гостиницы, апарт-отели.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                className="text-base px-8 transition-smooth"
                onClick={() => {
                  handleCTAClick('cta_brief');
                  document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Получить консультацию
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="text-base px-8 transition-smooth"
                onClick={() => {
                  handleCTAClick('cta_example');
                  document.getElementById('examples')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Посмотреть пример
              </Button>
            </div>

            <a 
              href="tel:+78003334729" 
              className="inline-flex items-center gap-2 text-primary text-lg hover:text-primary/80 transition-smooth font-semibold"
              onClick={() => handleCTAClick('cta_call')}
            >
              <Phone className="w-5 h-5" />
              8-800-333-47-29
            </a>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {kpis.map((kpi, index) => {
              const Icon = kpi.icon;
              return (
                <div key={index} className="bg-card border border-border p-6 transition-smooth hover:shadow-card">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded">
                      <Icon className="w-6 h-6 text-accent" strokeWidth={2} />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">{kpi.label}</div>
                      <div className="text-2xl font-bold text-foreground">{kpi.value}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
