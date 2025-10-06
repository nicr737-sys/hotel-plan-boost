import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { Phone, Mail } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    consent: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consent) {
      toast.error("Необходимо согласие на обработку персональных данных");
      return;
    }

    // Отправка события в аналитику
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'generate_lead', {
        currency: 'RUB',
        value: 0
      });
      (window as any).gtag('event', 'select_content', {
        content_type: 'cta_contact_form_submit',
        item_id: 'contact_form'
      });
    }

    toast.success("Спасибо! Мы свяжемся с вами в ближайшее время.");
    
    // Очистка формы
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
      consent: false
    });
  };

  return (
    <section id="contact-form">
      <div className="container-premium">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground mb-12">
              Заполните форму, и наш эксперт свяжется с вами для обсуждения вашего проекта. Мы ответим на все вопросы и подготовим индивидуальное коммерческое предложение.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded">
                  <Phone className="w-5 h-5 text-accent" strokeWidth={2} />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Телефон</div>
                  <a href="tel:+78003334729" className="text-lg font-semibold text-foreground hover:text-primary transition-smooth">
                    8-800-333-47-29
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">Бесплатный звонок по России</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded">
                  <Mail className="w-5 h-5 text-accent" strokeWidth={2} />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Email</div>
                  <a href="mailto:info@expert-bp.ru" className="text-lg font-semibold text-foreground hover:text-primary transition-smooth">
                    info@expert-bp.ru
                  </a>
                </div>
              </div>

              <div className="pt-8 border-t border-border">
                <p className="font-semibold mb-1">ООО "ЭКСПЕРТЫ БИЗНЕС-ПЛАНИРОВАНИЯ"</p>
                <p className="text-muted-foreground text-sm">
                  Профессиональная разработка бизнес-планов с 2010 года
                </p>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6 bg-card border border-border p-8">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Имя *</Label>
                  <Input
                    id="firstName"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Фамилия</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Телефон *</Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Ваше сообщение *</Label>
                <Textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Расскажите о вашем проекте: тип гостиницы, количество номеров, локация..."
                />
              </div>

              <div className="flex items-start gap-2">
                <Checkbox
                  id="consent"
                  checked={formData.consent}
                  onCheckedChange={(checked) => 
                    setFormData({ ...formData, consent: checked as boolean })
                  }
                />
                <Label htmlFor="consent" className="text-sm leading-relaxed cursor-pointer">
                  Я даю согласие на обработку моих персональных данных
                </Label>
              </div>

              <Button type="submit" size="lg" className="w-full transition-smooth">
                Отправить заявку
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
