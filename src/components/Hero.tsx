import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Hero = () => {
  const handleCTAClick = (action: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'select_content', {
        content_type: action,
        item_id: action
      });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 gradient-hero opacity-95" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIuNSIgb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="mb-6 leading-tight">
            Бизнес-план гостиницы (отеля): разработка под банк и инвестора
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Начиная с 2010 года мы подготовили целый ряд бизнес-планов гостиниц: курортные отели в России, Абхазии, Камбодже, на Кипре, мини-отели, бизнес-гостиницы, апарт-отели.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-elevated text-lg px-8 py-6 h-auto"
              onClick={() => {
                handleCTAClick('cta_brief');
                document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Заполнить бриф
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm text-lg px-8 py-6 h-auto"
              onClick={() => {
                handleCTAClick('cta_example');
                document.getElementById('examples')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Получить пример бизнес-плана
            </Button>
          </div>

          <a 
            href="tel:+78003334729" 
            className="inline-flex items-center gap-2 text-white text-xl hover:text-white/80 transition-colors"
            onClick={() => handleCTAClick('cta_call')}
          >
            <Phone className="w-6 h-6" />
            <span className="font-semibold">8-800-333-47-29</span>
          </a>
          
          <p className="mt-4 text-white/80 text-sm">
            Бесплатный звонок по России
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
