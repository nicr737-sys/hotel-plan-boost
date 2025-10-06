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
    <section id="contact-form" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="mb-6">Свяжитесь с нами</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Заполните форму, и наш эксперт свяжется с вами для обсуждения вашего проекта. Мы ответим на все вопросы и подготовим индивидуальное коммерческое предложение.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Телефон</h3>
                    <a href="tel:+78003334729" className="text-lg text-primary hover:text-primary/80">
                      8-800-333-47-29
                    </a>
                    <p className="text-sm text-muted-foreground">Бесплатный звонок по России</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Email</h3>
                    <a href="mailto:info@expert-bp.ru" className="text-lg text-primary hover:text-primary/80">
                      info@expert-bp.ru
                    </a>
                  </div>
                </div>

                <div className="p-6 bg-primary/5 rounded-lg border border-primary/20 mt-8">
                  <p className="font-semibold text-lg mb-2">ООО "ЭКСПЕРТЫ БИЗНЕС-ПЛАНИРОВАНИЯ"</p>
                  <p className="text-muted-foreground">
                    Профессиональная разработка бизнес-планов с 2010 года
                  </p>
                </div>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-lg shadow-elevated border-2">
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

                <Button type="submit" size="lg" className="w-full text-lg py-6">
                  Отправить заявку
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
