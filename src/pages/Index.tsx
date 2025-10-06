import { useEffect } from "react";
import Hero from "@/components/Hero";
import ForWhom from "@/components/ForWhom";
import WorkScope from "@/components/WorkScope";
import KPIBadges from "@/components/KPIBadges";
import CaseExamples from "@/components/CaseExamples";
import ProcessSteps from "@/components/ProcessSteps";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import LongreadSection from "@/components/LongreadSection";

const Index = () => {
  useEffect(() => {
    // Инициализация аналитики скролла
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      
      if (typeof window !== 'undefined' && (window as any).gtag) {
        if (scrollPercentage >= 25 && scrollPercentage < 50) {
          (window as any).gtag('event', 'scroll', { percent_scrolled: 25 });
        } else if (scrollPercentage >= 50 && scrollPercentage < 75) {
          (window as any).gtag('event', 'scroll', { percent_scrolled: 50 });
        } else if (scrollPercentage >= 75 && scrollPercentage < 100) {
          (window as any).gtag('event', 'scroll', { percent_scrolled: 75 });
        } else if (scrollPercentage >= 100) {
          (window as any).gtag('event', 'scroll', { percent_scrolled: 100 });
        }
      }
    };

    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', scrollListener);
    return () => window.removeEventListener('scroll', scrollListener);
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <ForWhom />
      <WorkScope />
      <KPIBadges />
      <CaseExamples />
      <ProcessSteps />
      <FAQ />
      <LongreadSection />
      <ContactForm />
      
      {/* Footer */}
      <footer className="bg-secondary/30 py-12 border-t border-border">
        <div className="container-premium">
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">
              © 2010-2025 ООО "ЭКСПЕРТЫ БИЗНЕС-ПЛАНИРОВАНИЯ". Все права защищены.
            </p>
            <p className="text-sm text-muted-foreground">
              Профессиональная разработка бизнес-планов гостиниц и отелей
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
